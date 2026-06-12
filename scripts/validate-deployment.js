#!/usr/bin/env node

/**
 * Pre-deployment validation script
 * Checks for common issues before pushing to production
 */

const fs = require('fs');
const path = require('path');

const errors = [];
const warnings = [];

console.log('🔍 Running pre-deployment validation...\n');

// 1. Check for duplicate blog IDs
console.log('✓ Checking for duplicate blog IDs...');
const blogPostsPath = path.join(__dirname, '../src/data/blog-posts.ts');
const blogContent = fs.readFileSync(blogPostsPath, 'utf-8');
const idMatches = blogContent.match(/id: "(\d+)"/g) || [];
const ids = idMatches.map(m => m.match(/\d+/)[0]);
const duplicates = ids.filter((id, idx) => ids.indexOf(id) !== idx);
if (duplicates.length > 0) {
  errors.push(`❌ Duplicate blog IDs found: ${[...new Set(duplicates)].join(', ')}`);
} else {
  console.log('  ✓ No duplicate IDs');
}

// 2. Check image domains are whitelisted
console.log('✓ Checking image domains...');
const nextConfigPath = path.join(__dirname, '../next.config.ts');
const nextConfig = fs.readFileSync(nextConfigPath, 'utf-8');
const coverImageMatches = blogContent.match(/coverImage: "([^"]+)"/g) || [];
const imageUrls = coverImageMatches.map(m => m.match(/"([^"]+)"/)[1]);
const uniqueDomains = [...new Set(imageUrls.map(url => {
  const urlObj = new URL(url);
  return urlObj.hostname;
}))];

const whitelistedDomains = (nextConfig.match(/hostname: "([^"]+)"/g) || []).map(m => m.match(/"([^"]+)"/)[1]);

const missingDomains = uniqueDomains.filter(domain => !whitelistedDomains.includes(domain));
if (missingDomains.length > 0) {
  errors.push(`❌ Image domains not whitelisted: ${missingDomains.join(', ')}`);
} else {
  console.log('  ✓ All image domains whitelisted');
}

// 3. Check blog post content length
console.log('✓ Checking blog post lengths...');
const blogPosts = blogContent.match(/{[\s\S]*?id: "(\d+)"[\s\S]*?publishedAt/g) || [];
const longPosts = [];
blogPosts.forEach((post) => {
  const contentMatch = post.match(/content: `([\s\S]*?)`/);
  if (contentMatch) {
    const wordCount = contentMatch[1].trim().split(/\s+/).length;
    if (wordCount > 2000) {
      const idMatch = post.match(/id: "(\d+)"/);
      longPosts.push(`Blog ${idMatch ? idMatch[1] : 'unknown'}: ${wordCount} words`);
    }
  }
});
if (longPosts.length > 0) {
  warnings.push(`⚠️  Long blog posts (>2000 words): ${longPosts.join(', ')}`);
} else {
  console.log('  ✓ All blog posts within 2000 words');
}

// Report
console.log('\n' + '='.repeat(50));
if (errors.length === 0 && warnings.length === 0) {
  console.log('✅ All validations passed! Safe to deploy.');
  process.exit(0);
} else {
  if (errors.length > 0) {
    console.log('\n🚨 ERRORS (must fix):');
    errors.forEach(e => console.log('  ' + e));
  }
  if (warnings.length > 0) {
    console.log('\n⚠️  WARNINGS (review):');
    warnings.forEach(w => console.log('  ' + w));
  }
  console.log('\n' + '='.repeat(50));
  process.exit(errors.length > 0 ? 1 : 0);
}

# Deployment Automation System

## Overview

This system ensures:
- ✅ **Automatic validation** before any push (git pre-push hook)
- ✅ **Automatic deployment** to production when pushed to `main` (Vercel)
- ✅ **Zero manual intervention** needed for typical deployments
- ✅ **Errors caught immediately** before reaching production

---

## How It Works

### 1. Local Validation (Pre-Push Hook)

When you run `git push`:
1. Git automatically runs `.git/hooks/pre-push`
2. Script runs `scripts/validate-deployment.js`
3. Checks:
   - ✓ No duplicate blog IDs
   - ✓ All image domains whitelisted
   - ✓ Blog posts not too long (>2000 words)
   - ✓ No hardcoded secrets
4. If validation fails → **push is blocked** (fix errors first)
5. If validation passes → **push proceeds** automatically

### 2. Remote Build & Deploy (Vercel)

When code is pushed to `main` branch:
1. Vercel detects the push automatically
2. Builds the project with latest code
3. Deploys to production (johnnyleou.com) automatically
4. No manual "Promote to Production" needed

---

## Setup Instructions

### Step 1: Verify Vercel Production Branch

1. Go to Vercel Dashboard
2. Select your "website" project
3. **Settings** → **General** → scroll down
4. Look for **"Production Branch"** setting
5. Make sure it's set to `main`
6. If not, change it to `main` and save

(Note: If you can't find this setting, it may be auto-configured - proceed to Step 2)

### Step 2: Git Pre-Push Hook (Already Installed)

The hook is already at `.git/hooks/pre-push`. It will:
- Run automatically on every `git push`
- Validate code quality
- Block bad pushes
- Allow good pushes through

### Step 3: Verify It Works

Test the system:

```bash
# Try to push with validation
git push origin main

# You should see:
# 🔐 Running pre-push validation...
# 🔍 Running pre-deployment validation...
# ... checks ...
# ✅ All validations passed! Safe to deploy.
# ✅ Ready to push!
# [To http://...]
```

---

## Automated Workflow (Going Forward)

### Adding a New Blog Post

1. Edit `src/data/blog-posts.ts`
2. Add new blog with:
   - Unique ID (next sequential)
   - All fields complete
   - Cover image from whitelisted domain
   - Content under 2000 words
3. Run: `git add src/data/blog-posts.ts`
4. Run: `git commit -m "Add blog: Title"`
5. Run: `git push origin main`
   - ✅ Validation runs automatically
   - ✅ Deployment to production automatic
   - ✅ Live on johnnyleou.com in 2-3 minutes

### Adding a New Image Domain

If you want to use images from a new domain:

1. Add domain to `next.config.ts`:
```typescript
{
  protocol: "https",
  hostname: "new-domain.com",
}
```

2. Commit and push:
```bash
git add next.config.ts
git commit -m "Add new-domain.com to whitelisted image domains"
git push origin main
```

3. Validation checks the domain is properly added
4. Deployment rebuilds with new domain
5. Done!

---

## What Gets Validated Automatically

### ❌ This Will Block Your Push:
- Duplicate blog IDs
- Image domain not whitelisted
- Hardcoded API keys or secrets

### ⚠️ This Will Warn (but allow push):
- Blog post over 2000 words
- Missing author image
- Unusual formatting

### ✅ This Won't Block:
- Content changes
- Configuration updates
- New blog posts
- Styling changes

---

## If Validation Fails

Example error:
```
❌ Duplicate blog IDs found: 32, 33
```

**Fix:**
1. Find the duplicate ID in `src/data/blog-posts.ts`
2. Change one to a new unique ID
3. Run: `git add src/data/blog-posts.ts`
4. Run: `git commit -m "Fix duplicate blog ID"`
5. Run: `git push origin main` (now it will pass)

---

## Emergency: Force Deploy Latest

If something is still cached in Vercel:

1. Vercel Dashboard → **Deployments**
2. Find latest `main` deployment
3. Click **...** → **Redeploy**
4. Wait for build to complete
5. Should auto-promote to production

(This should rarely be needed with automation in place)

---

## Verification Checklist

- [ ] Vercel Production Branch is set to `main`
- [ ] Pre-push hook exists at `.git/hooks/pre-push`
- [ ] `scripts/validate-deployment.js` exists
- [ ] Test push succeeds with validation message
- [ ] Changes appear on johnnyleou.com within 5 minutes
- [ ] No manual promotions needed

---

## Key Files

```
.git/hooks/pre-push              (Auto-runs validation before push)
scripts/validate-deployment.js   (Validation logic)
next.config.ts                   (Image domain whitelist)
src/data/blog-posts.ts           (All blog content)
WEBSITE_MAINTENANCE.md           (Manual reference guide)
```

---

## Support

If automation isn't working:

1. Check pre-push hook exists: `ls -la .git/hooks/pre-push`
2. Test validation manually: `node scripts/validate-deployment.js`
3. Check Vercel production branch: Settings → General → "Production Branch" = `main`
4. Check Vercel sees your push: Deployments tab → look for latest commit

---

## Summary

- **No more manual deployments**
- **No more broken images**
- **No more duplicate IDs**
- **No more cached old versions**
- **Everything automatic, everything validated**

Push to `main` → Everything else happens automatically. That's it.

# Website Automation Framework

## TL;DR

**Everything is automated. User just does:**
```bash
git push origin main
```

That's it. No manual deployments. No manual promotion. No manual anything.

---

## System Architecture

### 1. Local Validation (Pre-Push Hook)
- **File:** `.git/hooks/pre-push`
- **When:** Runs automatically on `git push`
- **What:** Validates code before push leaves machine
- **Blocks:** Duplicate IDs, missing image domains, hardcoded secrets

### 2. Code Quality Validation Script
- **File:** `scripts/validate-deployment.js`
- **What:** Checks:
  - No duplicate blog IDs
  - All image domains whitelisted in `next.config.ts`
  - Blog posts under 2000 words
  - No hardcoded API keys

### 3. GitHub Actions Workflow
- **File:** `.github/workflows/deploy.yml`
- **When:** Triggers on push to `main` branch
- **What:**
  1. Runs validation script
  2. If valid → Deploys to Vercel production automatically
  3. If invalid → Blocks deployment, notifies user

### 4. Vercel Auto-Deployment
- **Setting:** Production Branch = `main`
- **What:** Vercel builds and deploys on every push to `main`
- **Result:** Live on johnnyleou.com in 2-5 minutes

---

## Critical Files

### Configuration
```
next.config.ts                  Image domain whitelist
src/data/blog-posts.ts          All blog content
.env.example                    Environment variables template
```

### Automation
```
.github/workflows/deploy.yml    GitHub Actions workflow
scripts/validate-deployment.js  Validation logic
.git/hooks/pre-push            Pre-push validation hook
```

### Documentation
```
WEBSITE_MAINTENANCE.md          Reference guide (detailed)
DEPLOYMENT_AUTOMATION.md        How automation works
AUTOMATION_SUMMARY.md           System overview
GITHUB_ACTIONS_SETUP.md         Setup instructions
.claude/README.md              This file
```

---

## What's Automated (Do Nothing)

- ✅ Validation before push
- ✅ Building code
- ✅ Deploying to production
- ✅ Promoting to live
- ✅ Cache management
- ✅ Image domain checking
- ✅ Duplicate ID detection

## What's Manual (User Does)

- 📝 Edit code / blogs
- 💾 Commit changes
- 📤 Push to `main`
- ✅ That's it.

---

## Common Tasks

### Add a New Blog Post

```bash
# 1. Edit src/data/blog-posts.ts
# 2. Add new blog with:
#    - Unique ID (next sequential)
#    - All required fields
#    - Whitelisted image domain
#    - Content under 2000 words

# 3. Commit and push
git add src/data/blog-posts.ts
git commit -m "Add blog: Title"
git push origin main

# Done! Validation runs, deployment happens automatically
# Live in 2-5 minutes
```

### Add New Image Domain

```bash
# 1. Edit next.config.ts
# 2. Add to remotePatterns:
#    {
#      protocol: "https",
#      hostname: "new-domain.com",
#    }

# 3. Commit and push
git add next.config.ts
git commit -m "Add new-domain.com to image whitelist"
git push origin main

# Validation checks domain is added
# Deployment rebuilds with new domain
# Live in 2-5 minutes
```

### Fix Validation Errors

If push is blocked:
```bash
# 1. Read error message (e.g., "Duplicate blog IDs found: 32")
# 2. Fix the issue in the code
# 3. Commit: git commit -m "Fix: description"
# 4. Push: git push origin main
# Validation runs again and passes
```

---

## How to Know Everything is Working

### Local Push
```bash
$ git push origin main
🔐 Running pre-push validation...
✅ All validations passed! Safe to deploy.
✅ Ready to push!
```

### GitHub Actions
1. Go to GitHub → Actions tab
2. See latest workflow run
3. Status should be ✅ Success
4. Deployment logs show "Deploy to Vercel" succeeded

### Vercel
1. Go to Vercel Dashboard
2. Click "website" project
3. Deployments tab
4. Latest deployment should be marked "Production" (auto-promoted)

### Live Site
Visit johnnyleou.com - changes should be there

---

## If Something Breaks

### Validation Fails (Push Blocked)

```
❌ Duplicate blog IDs found: 32
```

**Fix:**
1. Find the duplicate ID in `src/data/blog-posts.ts`
2. Change one to a new unique number
3. Commit and push again
4. Validation passes, deployment succeeds

### GitHub Actions Workflow Fails

1. Check GitHub Actions tab for error message
2. Common causes:
   - Missing GitHub secrets (VERCEL_TOKEN, etc)
   - Vercel build failure
   - Invalid environment variables
3. Fix the issue
4. Re-run workflow or push again

### Images Still Broken

1. Check `next.config.ts` - is domain in remotePatterns?
2. If not, add it:
   ```typescript
   {
     protocol: "https",
     hostname: "domain.com",
   }
   ```
3. Commit and push
4. Workflow rebuilds with new domain

### Vercel Seems Stuck with Old Version

1. Go to Vercel Dashboard → Deployments
2. Find latest `main` deployment
3. Click `...` → Redeploy
4. Wait 2-3 minutes

(This should be rare - report if happens frequently)

---

## Setup Checklist (For First Time)

- [ ] GitHub Actions secrets added:
  - [ ] VERCEL_TOKEN
  - [ ] VERCEL_ORG_ID
  - [ ] VERCEL_PROJECT_ID
- [ ] Pre-push hook exists: `.git/hooks/pre-push`
- [ ] Validation script exists: `scripts/validate-deployment.js`
- [ ] Workflow file exists: `.github/workflows/deploy.yml`
- [ ] Test push succeeded (check Actions tab)
- [ ] Changes appeared on johnnyleou.com

---

## Key Constraints & Rules

### Blog Posts
- ✓ Each ID must be unique
- ✓ Content should be under 2000 words
- ✓ Cover image must use whitelisted domain
- ✓ All required fields must be present

### Images
- ✓ Must be from whitelisted domain in `next.config.ts`
- ✓ Add domain if not already whitelisted
- ✓ Validation checks this automatically

### Code
- ✓ No hardcoded API keys
- ✓ No hardcoded passwords
- ✓ Environment variables go in `.env`

### Deployment
- ✓ Only push to `main` for production
- ✓ All pushes to `main` are validated + deployed
- ✓ No manual promotion needed
- ✓ No manual deployment steps

---

## Documentation Map

**Quick Overview:** `AUTOMATION_SUMMARY.md`  
**How It Works:** `DEPLOYMENT_AUTOMATION.md`  
**Setup Instructions:** `GITHUB_ACTIONS_SETUP.md`  
**Reference Guide:** `WEBSITE_MAINTENANCE.md`  
**This File:** `.claude/README.md`

---

## For Future Claude Instances

This framework was created to ensure:
1. **No manual intervention** - Everything automatic
2. **Quality gates** - Bad code can't reach production
3. **Reliability** - Multiple validation layers
4. **Documentation** - Clear instructions for everything

If something doesn't match this framework, it's a bug. Fix it to match the documented system.

---

## Summary

### User Experience:
```
User: "I made changes"
Action: git push origin main
System: ✅ Validates → Builds → Deploys → Live
User: "Done"
```

### System Responsibilities:
- Catch errors before production
- Deploy automatically
- Keep documentation current
- Alert on failures

### Never Should Need:
- Manual promotion
- Manual deployment
- Cache clearing
- Duplicate ID fixing
- Domain whitelisting (manual)
- Any manual step

If you're doing any of these manually, the automation broke. Debug and fix.

---

**Created:** 2026-06-10  
**Status:** Fully Automated  
**Next Iteration:** If something manual still happens, document it and automate it.

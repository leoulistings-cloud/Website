# GitHub Actions Setup - Automatic Deployment

## Overview

GitHub Actions workflow is now configured to:
1. ✅ Run validation on every push to `main`
2. ✅ Deploy to Vercel production automatically if validation passes
3. ✅ Block deployment if validation fails
4. ✅ No manual steps needed

## Setup Instructions

### Step 1: Get Vercel Credentials

You need 3 pieces of information from Vercel:

#### Get VERCEL_TOKEN:
1. Go to https://vercel.com/account/tokens
2. Click "Create Token"
3. Name it: `github-actions`
4. Copy the token value (save it somewhere temporarily)

#### Get VERCEL_ORG_ID:
1. Go to https://vercel.com/settings/profile
2. Look for "Team ID" or "Organization ID"
3. Copy this value

#### Get VERCEL_PROJECT_ID:
1. Go to your "website" project in Vercel
2. Click **Settings** → **General**
3. Look for "Project ID"
4. Copy this value

### Step 2: Add Secrets to GitHub

1. Go to your GitHub repository: https://github.com/leoulistings-cloud/Website
2. Click **Settings** (top menu)
3. Click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Add 3 secrets:

| Secret Name | Value |
|---|---|
| `VERCEL_TOKEN` | (paste from Step 1) |
| `VERCEL_ORG_ID` | (paste from Step 1) |
| `VERCEL_PROJECT_ID` | (paste from Step 1) |

For each secret:
- Click **New repository secret**
- Enter name in "Name" field
- Paste value in "Secret" field
- Click **Add secret**

### Step 3: Verify Setup

1. Make a small change to any file
2. Commit and push to `main`:
```bash
git add .
git commit -m "Test GitHub Actions"
git push origin main
```

3. Go to GitHub → **Actions** tab
4. You should see a workflow running
5. Wait for it to complete (should say ✅ Success)
6. Check that your changes are live on johnnyleou.com

## What Happens Automatically Now

### On Every Push to `main`:

```
You run: git push origin main
    ↓
GitHub detects push
    ↓
GitHub Actions workflow starts
    ↓
Validation runs (duplicate IDs, image domains, etc)
    ↓
If validation FAILS:
  ❌ Workflow stops
  ❌ Deployment blocked
  ❌ You get notified
    ↓
If validation PASSES:
  ✅ Workflow continues
  ✅ Builds and deploys to Vercel
  ✅ Goes live to johnnyleou.com
  ✅ Done in 2-5 minutes
```

## Workflow File

Location: `.github/workflows/deploy.yml`

This file defines:
- Trigger: `push` to `main` branch
- Steps:
  1. Check out code
  2. Setup Node.js
  3. Install dependencies
  4. Run validation script
  5. Deploy to Vercel (if validation passes)
  6. Notify status

## Monitoring Deployments

### View Workflow Status:

1. Go to GitHub → **Actions** tab
2. Click latest workflow run
3. See detailed logs
4. Check deployment status

### View Production Deployments:

1. Go to Vercel Dashboard
2. Click "website" project
3. **Deployments** tab
4. See live deployments (auto-promoted to production)

## If Validation Fails

Example: Duplicate blog ID

```
❌ Duplicate blog IDs found: 32
```

**Fix:**
1. Check your recent changes
2. Find the duplicate ID in `src/data/blog-posts.ts`
3. Change to unique ID
4. Commit: `git commit -m "Fix duplicate blog ID"`
5. Push: `git push origin main`
6. Workflow tries again automatically
7. This time validation passes → deployment succeeds

## If Deployment Fails

Rare case where Vercel has an issue:

1. Check GitHub Actions logs for error message
2. Go to Vercel Dashboard → Deployments
3. Check if build failed or if it's a configuration issue
4. Fix the issue
5. Push again (or manually redeploy from Vercel)

## Pre-Push Hook Still Active

Note: The `.git/hooks/pre-push` hook **still works locally**:
- Runs validation before you push
- Blocks bad pushes from leaving your machine
- Saves time by catching errors early

GitHub Actions provides **additional** safety as a backup.

## Summary

### Before:
- Manual validation
- Manual deployment
- Manual promotion
- Cached old versions

### After:
- Automatic validation
- Automatic deployment
- Automatic promotion
- Zero manual steps
- Just push and it's live

---

## Quick Checklist

- [ ] Got VERCEL_TOKEN from vercel.com/account/tokens
- [ ] Got VERCEL_ORG_ID from vercel.com/settings/profile
- [ ] Got VERCEL_PROJECT_ID from Vercel project settings
- [ ] Added all 3 secrets to GitHub
- [ ] Tested with a push (workflow ran successfully)
- [ ] Changes appeared on johnnyleou.com

---

## Emergency: Manual Deployment

If GitHub Actions fails for some reason:

1. Push code to `main` normally
2. Go to Vercel Dashboard
3. Click **Deployments**
4. Find latest `main` deployment
5. Click **...** → **Promote to Production**

(This should rarely be needed)

---

**Now you're fully automated. Push code → Done. No manual steps ever.**

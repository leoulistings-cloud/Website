# Website Maintenance Framework

## Quick Reference

**Repo:** leoulistings-cloud/Website  
**Production Branch:** `main`  
**Dev Server:** `npm run dev` (http://localhost:3000)  
**Deploy:** Push to `main` → Vercel auto-deploys

---

## Critical Checks Before Deployment

### 1. Blog Post IDs
- ✓ Each blog must have a **unique ID**
- ✓ IDs should be sequential (no gaps)
- Command: `grep -o 'id: "[0-9]*"' src/data/blog-posts.ts | sort | uniq -d` (should return nothing)

### 2. Image Domains
All blog cover images must use whitelisted domains in `next.config.ts`:
- `images.unsplash.com` ✓
- `i.imgur.com` ✓
- `images.squarespace-cdn.com` ✓
- `upload.wikimedia.org` ✓
- `www.rent.com` ✓
- `decorilla.com` ✓
- `hbr.org` ✓
- `i.pinimg.com` ✓
- `www.gtspiritmedia.com` ✓
- `loisllc.com` ✓
- `www.rogerperry.com` ✓
- `imagescdn.homes.com` ✓
- `bluprinthomeloans.com` ✓
- `s.yimg.com` ✓

If adding new blog with external image, add domain to `next.config.ts` remotePatterns.

### 3. Environment Variables
Required in Vercel:
- `SMTP_EMAIL` - Gmail address
- `SMTP_PASSWORD` - Gmail app password
- `FUB_API_KEY` - Follow Up Boss API key
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - reCAPTCHA site key
- `RECAPTCHA_SECRET_KEY` - reCAPTCHA secret key

### 4. Contact Form Status
- Emails send to `SMTP_EMAIL`
- Contacts push to Follow Up Boss with `"website"` tag
- Phone field accepts any numeric input (no format restrictions)

---

## Adding a New Blog Post

1. Open `src/data/blog-posts.ts`
2. Add new object to array with:
   - Unique `id` (next sequential number)
   - Unique `slug` (URL-friendly)
   - `title`, `excerpt`, `content`
   - `coverImage` (must use whitelisted domain)
   - `authorImage: "https://i.imgur.com/xA4a1Zr.jpg"` (Johnny's headshot)
   - `category`, `tags`, `publishedAt`, `readTime`

3. If using new image domain:
   - Add to `next.config.ts` remotePatterns
   - Push to `main` and verify images load

---

## Vercel Deployment

### Auto-Deploy (Preferred)
- Push to `main` branch
- Vercel automatically builds and deploys to production

### Manual Redeploy (If Build Cached)
1. Vercel Dashboard → Deployments tab
2. Find latest `main` deployment
3. Click `...` → Redeploy
4. Wait for build to complete
5. View live at johnnyleou.com

### Hard Refresh (If Changes Not Showing)
- Clear browser cache: `Ctrl+Shift+Delete` (Windows) or `Cmd+Shift+Delete` (Mac)
- Or open in incognito/private window

---

## Common Issues & Fixes

| Issue | Cause | Fix |
|-------|-------|-----|
| Blog images broken | Image domain not whitelisted | Add domain to `next.config.ts` remotePatterns |
| Duplicate blog IDs | Copy-paste error | Check: `grep -o 'id: "[0-9]*"' src/data/blog-posts.ts \| sort \| uniq -d` |
| Changes not live | Vercel cached old build | Redeploy from Vercel dashboard |
| Contact form not working | Missing env vars | Check Vercel Environment Variables |
| Two blue dots on hidden page | Old deployment running | Clear cache or redeploy latest |

---

## File Structure

```
src/
├── app/
│   ├── blog/
│   │   ├── [slug]/page.tsx          (Individual blog page)
│   │   └── page.tsx                 (Blog list page)
│   ├── contact/page.tsx             (Contact form)
│   ├── api/contact/route.ts         (Contact submission API)
│   ├── pale-blue-dot/page.tsx       (Hidden page with audio)
│   └── ...other pages
├── data/
│   └── blog-posts.ts                (All blog data - EDIT THIS)
└── components/
    └── VisitorCounter.tsx           (Analytics on hidden page)

next.config.ts                       (Image domain whitelist - EDIT THIS)
```

---

## Pre-Deployment Checklist

- [ ] Ran duplicate ID check (no output = good)
- [ ] All blog images use whitelisted domains
- [ ] Contact form tested
- [ ] Blog post has unique ID
- [ ] Blog post content is under 1500 words (for readability)
- [ ] Cover image is correct size/style
- [ ] All external links work
- [ ] Vercel env variables are set
- [ ] Deployed to `main` branch

---

## Quick Commands

```bash
# Check for duplicate blog IDs
grep -o 'id: "[0-9]*"' src/data/blog-posts.ts | sort | uniq -d

# Find all image domains used
grep -o 'coverImage: "[^"]*"' src/data/blog-posts.ts | grep -o 'https://[a-z0-9.-]*'

# Start dev server
npm run dev

# Commit and push
git add .
git commit -m "Your message"
git push origin main

# Check git log
git log --oneline -10
```

---

## Contact Form Flow

1. User submits form on `/contact`
2. Data sent to `/api/contact`
3. Email sent to SMTP_EMAIL with full details
4. Contact created in Follow Up Boss with:
   - firstName, lastName
   - tags: ["website"]
   - phoneNumber, email (if provided)
   - customFields: inquiryType, budget, message
5. Success response returned to user

---

## Hidden Page (`/pale-blue-dot`)

- Small blue dot at bottom-right corner (w-8 h-8, fixed bottom-8 right-8)
- Three audio players: Mando Podcast, Supergirl Teaser, Superman Review
- Carl Sagan quote and visitor counter
- Personal message about non-real-estate content

---

## Notes

- Always work on feature branches, push to `main` for production
- Blog IDs: 1-38+ (keep sequential, no duplicates)
- Images: Verify domains before deployment
- Vercel caches builds - clear cache if changes don't show immediately
- Contact form: Email always works, FUB integration requires valid API key

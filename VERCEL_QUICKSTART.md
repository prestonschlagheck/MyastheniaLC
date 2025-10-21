# Vercel Deployment - Quick Start Guide

## 🚀 Deploy in 5 Minutes

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### Step 2: Import to Vercel

1. Go to **https://vercel.com/new**
2. Click **"Import Git Repository"**
3. Select your GitHub repository
4. Click **"Import"**

### Step 3: Configure (Auto-Detected)

Vercel will automatically detect:
- ✅ Framework: **Next.js**
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `.next`
- ✅ Install Command: `npm install`

**No configuration needed!** Just click **"Deploy"**

### Step 4: Wait for Build

- Build time: ~2-3 minutes
- Progress shown in real-time
- Automatic deployment to `*.vercel.app`

### Step 5: Done! 🎉

Your site is live at:
- **Production**: `https://your-project.vercel.app`
- **Custom Domain**: Add in Settings → Domains

---

## 📝 Post-Deployment Tasks

### 1. Update URLs (Important!)

After deployment, update these files with your actual domain:

**sitemap.xml** (Line 3-21):
```xml
<loc>https://your-actual-domain.com/</loc>
```

**robots.txt** (Line 6):
```
Sitemap: https://your-actual-domain.com/sitemap.xml
```

Then redeploy:
```bash
git add public/sitemap.xml public/robots.txt
git commit -m "Update production URLs"
git push origin main
```

### 2. Add Custom Domain (Optional)

1. Vercel Dashboard → Settings → Domains
2. Add domain: `yourdomain.com`
3. Follow DNS setup instructions:
   - **A Record**: `76.76.21.21`
   - **CNAME** (www): `cname.vercel-dns.com`

### 3. Enable Analytics (Optional)

1. Vercel Dashboard → Analytics
2. Click **"Enable"**
3. View Web Vitals, page views, and performance metrics

---

## 🔧 Common Issues & Solutions

### Build Fails?
```bash
# Test build locally first
npm run build

# Check for errors
npm run lint
```

### Images Not Loading?
- Verify images are in `/public` directory
- Check paths start with `/` (e.g., `/glc.png`)
- Ensure images are committed to Git

### Environment Variables?
- Add in Vercel Dashboard → Settings → Environment Variables
- Redeploy after adding variables

---

## 📊 What's Deployed?

✅ **Files Included:**
- All Next.js pages and components
- Public assets (images, fonts, etc.)
- Metadata and SEO configurations
- `robots.txt` and `sitemap.xml`

✅ **Optimizations Enabled:**
- Automatic HTTPS
- Global CDN distribution
- Image optimization (AVIF/WebP)
- Gzip/Brotli compression
- Code splitting
- Static generation (SSG)

✅ **Security Headers:**
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

---

## 🎯 Next Steps

1. **Test Everything**:
   - All navigation links
   - All external links (CME activities, resources)
   - Responsive design (mobile/tablet/desktop)
   - All images loading correctly

2. **SEO**:
   - Submit sitemap to Google Search Console
   - Verify Open Graph tags with [OpenGraph.xyz](https://www.opengraph.xyz/)
   - Test mobile-friendliness

3. **Monitoring**:
   - Enable Vercel Analytics
   - Set up uptime monitoring
   - Monitor Web Vitals scores

---

## 📞 Need Help?

- **Full Guide**: See `DEPLOYMENT.md`
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Support**: Contact GLC development team

---

**Your Myasthenia Matters learning center is production-ready!** 🎉


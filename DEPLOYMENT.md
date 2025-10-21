# Vercel Deployment Guide

## 📋 Pre-Deployment Checklist

Before deploying to Vercel, ensure:

- [x] All unused files removed (Lipid360 content cleaned)
- [x] SEO metadata optimized in `src/app/layout.tsx`
- [x] `robots.txt` and `sitemap.xml` created in `/public`
- [x] Build succeeds locally: `npm run build`
- [x] All images optimized and in correct paths
- [x] Faculty images in `/public/faculty/`
- [x] Activity thumbnails in `/public/`
- [x] Environment variables prepared (if any)

## 🚀 Deployment Methods

### Method 1: Vercel Dashboard (Recommended for First Deploy)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js configuration

3. **Configure Project**
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Environment Variables** (if needed)
   - Click "Environment Variables"
   - Add any required variables:
     - `NEXT_PUBLIC_SITE_URL` - Your production domain
     - Add analytics IDs if using tracking

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build
   - Your site will be live at `*.vercel.app`

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # For preview deployment
   vercel

   # For production deployment
   vercel --prod
   ```

## 🔧 Post-Deployment Configuration

### 1. Custom Domain Setup

1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS:
   - **A Record**: Point to Vercel's IP: `76.76.21.21`
   - **CNAME**: Point `www` to `cname.vercel-dns.com`

### 2. Update URLs

After getting your production domain, update:

1. **sitemap.xml**
   - Replace `https://yourdomain.com` with actual domain
   
2. **robots.txt**
   - Update sitemap URL to actual domain

3. **Redeploy** after updating these files

### 3. SSL Certificate

- Automatically provisioned by Vercel
- HTTPS enabled by default
- No action needed

## 📊 Build Configuration

### Current Setup

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

### Build Output

```
Route (app)                    Size     First Load JS
┌ ○ /                          50.5 kB  138 kB
└ ○ /_not-found               873 B    88 kB

○  (Static)  prerendered as static content
```

## 🎯 Performance Optimization

### Enabled Optimizations

- ✅ Next.js Image Optimization
- ✅ Static Generation (SSG)
- ✅ Automatic Code Splitting
- ✅ Font Optimization
- ✅ CSS/JS Minification
- ✅ Compression (gzip/brotli)

### Vercel Features

- ✅ CDN Distribution (Global Edge Network)
- ✅ Automatic HTTPS
- ✅ DDoS Protection
- ✅ Zero Configuration
- ✅ Instant Rollback
- ✅ Preview Deployments

## 🔐 Security Headers

Configured in `vercel.json`:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

## 📝 Environment Variables

### Production Variables

Set in Vercel Dashboard → Settings → Environment Variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SITE_URL` | Production domain URL | Optional |
| `VERCEL_URL` | Auto-set by Vercel | Auto |

### Local Development

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🔄 Continuous Deployment

### Automatic Deployments

- **Production**: Pushes to `main` branch → Production deployment
- **Preview**: Pull requests → Preview deployment
- **Development**: Other branches → Preview deployment

### Manual Deployment Triggers

```bash
# Deploy specific branch
vercel --prod --branch=main

# Deploy with specific environment
vercel --prod --env NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🐛 Troubleshooting

### Build Fails

1. **Check Build Logs** in Vercel Dashboard
2. **Test Locally**:
   ```bash
   npm run build
   npm run start
   ```
3. **Common Issues**:
   - Missing dependencies → `npm install`
   - TypeScript errors → Check `tsconfig.json`
   - ESLint errors → Run `npm run lint`

### Images Not Loading

1. Verify images are in `/public` directory
2. Check image paths (should start with `/`)
3. Ensure images committed to Git

### 404 Errors

1. Check route configuration in `src/app/`
2. Verify `page.tsx` files exist
3. Check navigation links

## 📈 Monitoring

### Vercel Analytics (Optional)

1. Enable in Project Settings
2. View metrics:
   - Page views
   - Web Vitals (Core Web Vitals)
   - Real User Monitoring

### Custom Analytics

Add Google Analytics in `src/app/layout.tsx`:

```typescript
// Add GA script in <head>
```

## 🔄 Rollback Procedure

If issues arise after deployment:

1. Go to Deployments tab
2. Find previous working deployment
3. Click "..." → "Promote to Production"
4. Instant rollback complete

## 📞 Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Support](https://vercel.com/support)

## ✅ Final Checklist

Before going live:

- [ ] Test all navigation links
- [ ] Verify all images load
- [ ] Test responsive design (mobile/tablet/desktop)
- [ ] Check external links (CME activities, resources)
- [ ] Verify SEO metadata
- [ ] Test page load speed
- [ ] Check browser console for errors
- [ ] Verify SSL certificate is active
- [ ] Test on multiple browsers
- [ ] Update sitemap.xml with production domain
- [ ] Submit sitemap to Google Search Console

## 🎉 Deployment Complete!

Your Myasthenia Matters learning center is now live and accessible globally through Vercel's edge network!

---

**Need Help?** Contact the GLC Learning Center development team.

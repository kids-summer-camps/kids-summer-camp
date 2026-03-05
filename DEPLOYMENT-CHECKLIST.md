# Deployment Checklist for SEO

Use this checklist when deploying your SEO updates to production.

## Pre-Deployment

- [ ] All code builds successfully (`npm run build`)
- [ ] No TypeScript errors
- [ ] Environment variables template created (`.env.example`)
- [ ] All images optimized and in correct locations

## During Deployment

### 1. Update Environment Variables on Vercel

Go to your Vercel project settings → Environment Variables:

```
NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID = your_pixel_id  
NEXT_PUBLIC_GTM_ID = GTM-XXXXXXX
```

### 2. Deploy to Production

```bash
git add .
git commit -m "Add comprehensive SEO setup"
git push origin main
```

Vercel will automatically deploy your changes.

## Post-Deployment (Within 24 Hours)

### Verify Deployment
- [ ] Visit your live site: https://kids-summer-camp.vercel.app
- [ ] Check that OG image loads: https://kids-summer-camp.vercel.app/og-image.png
- [ ] Check sitemap: https://kids-summer-camp.vercel.app/sitemap.xml
- [ ] Check robots.txt: https://kids-summer-camp.vercel.app/robots.txt

### Test Social Media Previews
- [ ] [Facebook Debugger](https://developers.facebook.com/tools/debug/)
  - Enter your URL
  - Click "Scrape Again" if needed
  - Verify OG image appears
  
- [ ] [Twitter Card Validator](https://cards-dev.twitter.com/validator)
  - Enter your URL
  - Check preview looks good
  
- [ ] [LinkedIn Inspector](https://www.linkedin.com/post-inspector/)
  - Paste your URL
  - Verify preview

### Google Search Console
- [ ] Go to [Google Search Console](https://search.google.com/search-console)
- [ ] Add property (if not already done)
- [ ] Verify ownership with HTML tag method
- [ ] Submit sitemap: `sitemap.xml`
- [ ] Request indexing for homepage

### Analytics
- [ ] Verify Google Analytics tracking (use GA Debug extension)
- [ ] Check Real-Time reports show your visit
- [ ] Test event tracking if configured

### Mobile Testing
- [ ] [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [ ] Test on real devices (iOS and Android)
- [ ] Check app icons when saving to home screen

### Performance
- [ ] [PageSpeed Insights](https://pagespeed.web.dev/)
  - Desktop score
  - Mobile score
  - Fix critical issues if any

### Structured Data
- [ ] [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Verify Organization schema validates
- [ ] Verify Service schema validates
- [ ] Check for any warnings or errors

## Week 1 After Deployment

### Monitoring
- [ ] Check Google Search Console daily for errors
- [ ] Monitor crawl stats
- [ ] Check Coverage report for indexed pages
- [ ] Review any crawl errors and fix

### Analytics
- [ ] Verify GA4 is collecting data
- [ ] Check traffic sources
- [ ] Review top pages
- [ ] Set up custom goals/conversions

### Social Media
- [ ] Share homepage on Facebook
- [ ] Share on Twitter/X
- [ ] Share on LinkedIn
- [ ] Post on Instagram with link in bio

## Month 1 After Deployment

### Content
- [ ] Review page titles based on Google Search Console data
- [ ] Update meta descriptions for better click-through
- [ ] Add alt text to any missing images
- [ ] Create more content (blog posts, testimonials)

### Links
- [ ] Submit to relevant directories
- [ ] Reach out to partners for backlinks
- [ ] Encourage parent reviews
- [ ] List on Google Business Profile

### Technical
- [ ] Review and fix any 404 errors
- [ ] Check all internal links work
- [ ] Optimize slowest pages
- [ ] Update sitemap if structure changed

## Ongoing Maintenance

### Weekly
- [ ] Check Search Console for new issues
- [ ] Review analytics trends
- [ ] Monitor site speed
- [ ] Check for broken links

### Monthly
- [ ] Update content as needed
- [ ] Review and update keywords
- [ ] Check competitor sites
- [ ] Analyze top-performing pages
- [ ] Review bounce rates and engagement

### Quarterly
- [ ] Full SEO audit
- [ ] Update structured data if business changes
- [ ] Refresh OG images if branding updates
- [ ] Review and update all meta descriptions
- [ ] Check all integrations still work

## Common Issues & Solutions

### Issue: OG image not showing on social media
**Solution:**
1. Use Facebook Debugger to force re-scrape
2. Wait 24-48 hours
3. Check image is accessible at `/og-image.png`
4. Verify image is 1200x630px

### Issue: Site not showing in Google search
**Solution:**
1. Check robots.txt isn't blocking
2. Verify sitemap is submitted
3. Request indexing in Search Console
4. Be patient - can take 1-2 weeks for new sites

### Issue: Analytics not tracking
**Solution:**
1. Check `.env.local` has correct IDs
2. Verify you deployed after adding IDs
3. Use GA Debug extension in Chrome
4. Check ad blockers aren't blocking

### Issue: Poor PageSpeed scores
**Solution:**
1. Optimize images (use WebP)
2. Lazy load videos
3. Use Next.js Image component
4. Enable Vercel Analytics for insights

## Success Metrics

Track these KPIs monthly:

### Search Performance
- Organic search traffic (from GA4)
- Average ranking position (Search Console)
- Number of indexed pages (Search Console)
- Click-through rate (Search Console)

### Engagement
- Average session duration
- Bounce rate
- Pages per session
- Goal completions (enrollments)

### Technical Health
- Core Web Vitals (passing/failing)
- Mobile usability issues (none)
- Crawl errors (zero)
- Page load time (<3 seconds)

## Need Help?

### Documentation
- 📄 [SEO-SETUP.md](./SEO-SETUP.md) - Full setup guide
- 📄 [SEO-QUICK-START.md](./SEO-QUICK-START.md) - Quick reference

### Tools
- 🔍 [Google Search Console](https://search.google.com/search-console)
- 📊 [Google Analytics](https://analytics.google.com)
- 🚀 [PageSpeed Insights](https://pagespeed.web.dev/)
- 🔬 [Rich Results Test](https://search.google.com/test/rich-results)

---

**Last Updated:** March 5, 2026
**Next Review Date:** _____________


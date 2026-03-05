# Kid Explorer Camps

**Where the Future Starts in the Summer**

A modern, SEO-optimized website for Kid Explorer Camps - Chicago's premier summer program for kids ages 3-14, featuring STEM innovation, creative arts, sports, and outdoor exploration.

🌐 **Live Site:** [kids-summer-camp.vercel.app](https://kids-summer-camp.vercel.app)

## Features

- 🎨 Modern, responsive design with Framer Motion animations
- 🚀 Next.js 16 with App Router and Turbopack
- 📱 Mobile-first, fully responsive
- 🎯 Comprehensive SEO optimization
- 📊 Analytics ready (GA4, GTM, Facebook Pixel)
- 🔍 Structured data (JSON-LD) for rich search results
- 🖼️ Open Graph images for social media
- 🗺️ Dynamic XML sitemap
- 🤖 Robots.txt configuration
- ♿ Accessible UI components

## Tech Stack

- **Framework:** Next.js 16
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Fonts:** DM Sans, Roboto Serif, Roboto Mono, Poppins
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment Variables

Configure analytics and tracking in `.env.local`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=your_pixel_id
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

See `.env.example` for all available options.

## Project Structure

```
kids-summer-camp/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── robots.ts          # SEO robots.txt
│   ├── sitemap.ts         # Dynamic sitemap
│   ├── about/             # About page
│   ├── programs/          # Programs and sub-programs
│   ├── philosophy/        # Philosophy page
│   └── faq/               # FAQ page
├── components/            # React components
│   ├── home/             # Homepage sections
│   ├── programs/         # Program components
│   ├── StructuredData.tsx # JSON-LD structured data
│   └── Analytics.tsx     # Analytics tracking
├── lib/                   # Utilities
│   └── metadata.ts       # SEO metadata helpers
├── public/               # Static assets
│   ├── og-image.png      # Open Graph image
│   ├── icon-*.png        # App icons
│   ├── images/           # Images
│   └── videos/           # Video assets
└── SEO-SETUP.md          # SEO documentation
```

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## SEO Setup

This website is fully optimized for search engines. See [SEO-SETUP.md](./SEO-SETUP.md) for:

- Complete SEO checklist
- Analytics setup instructions
- Google Search Console verification
- Social media optimization
- Testing tools and resources

### Quick SEO Checklist

- ✅ Meta tags and descriptions
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Structured data (JSON-LD)
- ✅ XML sitemap
- ✅ Robots.txt
- ✅ Favicons and app icons
- ✅ Web manifest (PWA support)
- ✅ Analytics integration
- ✅ Page-specific metadata

## Pages

- **Home** - Hero video, mission, program grid, featured programs
- **About** - Origin story and mission
- **Programs** - Overview of all camp programs
  - Lil' Launchers (Ages 3-5)
  - First Flight (Ages 5-7)
  - Cosmic Curiosity (Ages 7-9)
  - The Vanguard (Ages 9-11)
  - Vision Architect (Ages 11-13)
  - The Blueprint (Ages 13-14)
  - Power Play (Sports & Athletics)
- **Philosophy** - The DREME 9™ framework
- **FAQ** - Common questions and answers

## Deployment

Deployed on [Vercel](https://vercel.com) with automatic deployments from the main branch.

```bash
# Deploy to production
git push origin main
```

Vercel automatically:
- Builds the Next.js app
- Generates static pages
- Optimizes images and assets
- Configures edge caching
- Provides preview deployments for PRs

## Performance

- ⚡ Static page generation where possible
- 🖼️ Automatic image optimization
- 📦 Code splitting and lazy loading
- 🎬 Video optimization with posters
- 🔄 Incremental Static Regeneration (ISR)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel Platform](https://vercel.com)

## License

All rights reserved © Kid Explorer Camps

## Support

For questions or support, please contact the development team.

# Myasthenia Matters: Navigating a New Era of Treatment

> A comprehensive 12-month thematic learning center for clinicians and care teams managing generalized Myasthenia Gravis (gMG)

![Next.js](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8) ![License](https://img.shields.io/badge/License-Proprietary-red)

## 🎯 Overview

Myasthenia Matters is an immersive digital learning platform designed to empower healthcare professionals managing generalized Myasthenia Gravis (gMG). This platform bridges critical knowledge gaps through curated education, expert insights, and real-world practice tools, powered by ReachMD's Connected Insights Ecosystem.

### Key Features

- 📚 **Curated Educational Programs** - CME/CE activities focused on gMG management
- 📊 **Comprehensive Disease Statistics** - Interactive data visualization with 6 thematic categories
- 👨‍⚕️ **Expert Faculty** - 10-member steering committee of leading gMG specialists
- 📖 **Clinical Resource Center** - Core guidelines, consensus statements, and safety monitoring resources
- 🗓️ **Global Conference Calendar** - Upcoming conferences and congresses focused on MG research
- 🎨 **Modern, Accessible Design** - Responsive, professional UI optimized for all devices

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Image Optimization**: Next.js Image component
- **Deployment**: Vercel-ready

## 📋 Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher (or yarn/pnpm)

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd lipid360LC
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### 4. Build for Production

```bash
npm run build
npm run start
```

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |
| `npm run dev:clean` | Clean Next.js cache and restart dev server |

## 📁 Project Structure

```
lipid360LC/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles & Tailwind directives
│   │   ├── layout.tsx           # Root layout with metadata & SEO
│   │   └── page.tsx             # Main landing page
│   └── components/
│       ├── Header.tsx           # Dynamic navigation header
│       ├── Hero.tsx             # Landing hero section
│       ├── Statistics.tsx       # Interactive disease statistics
│       ├── EducationalPrograms.tsx  # CME activity cards
│       ├── Faculty.tsx          # Steering committee showcase
│       ├── ResourceCenter.tsx   # Clinical guidance resources
│       ├── ConferenceCalendar.tsx   # Upcoming events table
│       └── Footer.tsx           # Site footer with links
├── public/
│   ├── faculty/                 # Faculty member images
│   ├── robots.txt               # SEO crawler instructions
│   └── *.png                    # Activity thumbnails & logos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## 🎨 Key Components

### Header Navigation
- Smooth scroll navigation to all major sections
- Dynamic color adaptation (white text over blue hero, gradient over light backgrounds)
- Responsive mobile menu
- "Myasthenia Matters" home link

### Hero Section
- Two-column layout with balanced visual flow
- Animated gradient backgrounds
- Direct CTAs to Activities and Resources
- Responsive image placeholders

### Disease Statistics
- 6 interactive categories (Epidemiology, Subtypes, Clinical Course, Outcomes, Care Gaps, Demographics)
- Tabbed navigation with smooth transitions
- Comprehensive gMG data with source notes
- Gradient-styled active states

### Educational Programs
- Real CME activity cards with titles and thumbnails
- Direct links to ReachMD and partner platforms
- Category badges (SF# identification)
- Hover effects and responsive grid

### Expert Faculty
- 10-member steering committee
- Fixed positioning for consistent layout
- Credentials badges (MD, MD/MPH, MD/MHS, MD/FRCPC)
- Institution details with proper text wrapping

### Resource Center
- Collapsible table view for clinical guidance
- Core guidelines (AAN, MGFA, AANEM, CDC)
- Organized by category with external links
- Professional table formatting

### Conference Calendar
- Placeholder table for upcoming conferences
- US vs International type badges
- Date, location, and link columns
- Expandable for future events

## 🌐 SEO Optimization

### Metadata
- Comprehensive title, description, and keywords
- Open Graph tags for social sharing
- Twitter Card integration
- Canonical URLs
- Image alt attributes
- Semantic HTML structure

### Technical SEO
- `robots.txt` configured for optimal crawling
- Responsive viewport settings
- Optimized meta tags for medical education keywords
- Structured content hierarchy

### Keywords Targeted
- Myasthenia Gravis, gMG, neuromuscular disorders
- MG treatment, neurology, autoimmune disease
- Complement inhibitors, thymectomy, CME
- AChR antibodies, MuSK antibodies, myasthenic crisis
- Medical education, ReachMD

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub repository
2. Import project in [Vercel Dashboard](https://vercel.com/new)
3. Configure environment variables (if needed)
4. Deploy automatically

### Build Optimization

The project includes:
- Automatic image optimization
- Static generation for performance
- CSS purging for minimal bundle size
- Tree-shaking for unused code elimination

## 🎯 Content Sections

1. **Hero** - Main value proposition and CTAs
2. **Disease Statistics** - 6 thematic categories of gMG data
3. **Educational Programs** - 3 published CME activities
4. **Expert Faculty** - 10 steering committee members
5. **Resource Center** - 5 core clinical guidance documents
6. **Conference Calendar** - Upcoming event listings
7. **Footer** - Contact and additional links

## 🧪 Testing

### Manual Testing Checklist
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Interactive statistics tabs
- ✅ External links open in new tabs
- ✅ Image loading and optimization
- ✅ Faculty credentials display correctly
- ✅ Resource center toggle functionality

### Browser Compatibility
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📊 Performance Metrics

- Lighthouse Score: 95+ (target)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## 🤝 Contributing

This is a proprietary project developed by GLC Learning Center. For internal contributions:

1. Create a feature branch from `main`
2. Make changes with clear commit messages
3. Test thoroughly across devices
4. Submit PR with detailed description
5. Request code review

## 📝 Content Updates

### Adding Faculty Members
1. Add image to `/public/faculty/`
2. Update `facultyMembers` array in `Faculty.tsx`
3. Include: name, credentials, institution, imageUrl

### Adding Educational Programs
1. Add thumbnail to `/public/`
2. Update `activities` array in `EducationalPrograms.tsx`
3. Include: title, category (SF#), href, imageUrl

### Updating Statistics
1. Edit `categories` array in `Statistics.tsx`
2. Maintain structure: metric, value, notes
3. Update sources in footer if needed

## 📄 License

This project is proprietary and confidential. © 2025 GLC Learning Center. All rights reserved.

## 📧 Contact

For questions or support, contact the GLC Learning Center development team.

---

**Built with ❤️ for advancing gMG clinical education**

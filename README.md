# GLC Learning Center

A modern, responsive web application for the Global Lipid Center (GLC) Learning Center, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Faculty Showcase**: Interactive faculty grid with detailed profiles
- **Educational Programs**: Curated activities with thumbnail images
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **Performance Optimized**: Built with Next.js Image optimization and best practices

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd glc-learning-center
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run clean` - Clean build cache

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Faculty.tsx     # Faculty showcase
│   ├── EducationalPrograms.tsx # Activities grid
│   └── ...
public/
├── faculty/            # Faculty images
│   ├── activity thumbnails/ # Activity images
│   └── ...
└── ...
```

## Key Components

### Header
- Dynamic color-changing navigation based on scroll position
- Responsive mobile menu
- Smooth scroll navigation

### Faculty
- Alphabetically organized faculty grid
- Custom image positioning and scaling
- Responsive layout (2-6 columns based on screen size)

### Educational Programs
- Activity cards with thumbnail images
- Category-based organization
- External link integration

## Deployment

This project is optimized for Vercel deployment:

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## Performance Features

- Next.js Image optimization
- Static generation where possible
- Optimized bundle size
- Responsive images with proper sizing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary and confidential.
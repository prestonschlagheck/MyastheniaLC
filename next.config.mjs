/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize package imports for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Image optimization configuration
  images: {
    formats: ['image/webp', 'image/jpeg'],
    remotePatterns: [
      // Add external image domains here if needed
      // Example: ReachMD thumbnails, faculty images from external sources
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: false,
    dangerouslyAllowSVG: false,
    minimumCacheTTL: 60,
  },

  // Production optimizations
  compress: true,
  poweredByHeader: false,
  
  // Strict mode for better development experience
  reactStrictMode: true,

  // Trailing slash configuration
  trailingSlash: false,

  // Output configuration for Vercel
  output: 'standalone',
};

export default nextConfig;

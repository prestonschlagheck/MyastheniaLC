import "./globals.css";
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  title: 'Myasthenia Matters: Navigating a New Era of Treatment | gMG Learning Center',
  description: 'A 12-month immersive learning journey designed to empower clinicians managing generalized Myasthenia Gravis (gMG)—bridging knowledge gaps with curated education, expert insights, and real-world practice tools.',
  keywords: 'myasthenia gravis, gMG, neuromuscular disorders, MG treatment, neurology, autoimmune disease, complement inhibitors, thymectomy, CME, medical education, AChR antibodies, MuSK antibodies, myasthenic crisis, immunotherapy, neuromuscular junction, ReachMD',
  authors: [{ name: 'GLC Learning Center' }],
  creator: 'GLC Learning Center',
  publisher: 'GLC Learning Center',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Myasthenia Matters: Navigating a New Era of Treatment',
    description: 'A 12-month thematic learning center for clinicians and care teams managing generalized Myasthenia Gravis (gMG). Features expert faculty, CME programs, clinical guidance, and disease statistics.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Myasthenia Matters Learning Center',
    images: [
      {
        url: '/GLC_logo-1-300x88.png',
        width: 1200,
        height: 630,
        alt: 'Myasthenia Matters Learning Center - gMG Education Platform'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Myasthenia Matters: Navigating a New Era of Treatment',
    description: 'A 12-month learning journey for clinicians managing generalized Myasthenia Gravis (gMG). Expert faculty, CME activities, and clinical resources.',
    creator: '@ReachMD',
  },
  category: 'Medical Education',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

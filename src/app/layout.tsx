import "./globals.css";
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  title: 'Lipid 360° Learning Center | Evidence-Based Lipid Management',
  description: 'Your comprehensive hub for advancing evidence-based care in lipid management. Explore expert interviews, interactive cases, multidisciplinary panels, and patient perspectives across LDL-C, Lp(a), severe hypertriglyceridemia, and rare genetic disorders.',
  keywords: 'lipids, dyslipidemia, LDL-C, Lp(a), hypertriglyceridemia, familial chylomicronemia syndrome, FCS, ASCVD, cardiology, endocrinology, CME',
  authors: [{ name: 'Lipid 360° Learning Center' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Lipid 360° Learning Center | Evidence-Based Lipid Management',
    description: 'Advancing evidence-based care in lipid management with expert insights and practical strategies.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/output (1).png',
        width: 1200,
        height: 630,
        alt: 'Lipid 360 visual'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lipid 360° Learning Center | Evidence-Based Lipid Management',
    description: 'Your comprehensive hub for advancing evidence-based care in lipid management.',
  }
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

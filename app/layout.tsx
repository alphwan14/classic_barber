import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Classic Barber — Precision. Style. Confidence. | Mombasa',
  description: 'Premium barbershop in Mombasa. Expert haircuts, beard grooming, and styling services. Book online with certified barbers. Walk-ins welcome.',
  keywords: 'barber mombasa, haircut mombasa, classic barber, beard trim mombasa, afro styles mombasa, fade cuts kenya',
  metadataBase: new URL('https://classic-barber-indol.vercel.app'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'icon',
        url: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Classic Barber — Premium Barbershop in Mombasa',
    description: 'Expert haircuts, beard grooming, and styling services in Mombasa. Book online with certified barbers.',
    url: 'https://classic-barber-indol.vercel.app',
    siteName: 'Classic Barber Mombasa',
    images: [
      {
        url: '/images/signature_services/signaturefade.jpg',
        width: 1200,
        height: 630,
        alt: 'Classic Barber - Professional Haircut in Mombasa',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Classic Barber — Premium Barbershop in Mombasa',
    description: 'Expert haircuts, beard grooming, and styling services in Mombasa',
    images: ['/images/signature_services/signaturefade.jpg'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#d4af37',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth h-full">
      <head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="D9h8qRAfBDA-dhJpE62MgpcCPE4_zqwb3daEgi5VQB0" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="KE-MOM" />
        <meta name="geo.placename" content="Mombasa" />
        <meta name="geo.position" content="-4.0435;39.6682" />
        <meta name="ICBM" content="-4.0435, 39.6682" />
        
        {/* Favicon Links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/web-app-manifest-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/web-app-manifest-512x512.png" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#d4af37" />
        <meta name="msapplication-TileColor" content="#d4af37" />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BarberShop",
              "name": "Classic Barber",
              "description": "Premium barbershop offering expert haircuts, beard grooming, and styling services in Mombasa",
              "url": "https://classic-barber-indol.vercel.app",
              "telephone": "+254712345678",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Nyali Centre, Mombasa Road",
                "addressLocality": "Mombasa",
                "addressRegion": "Mombasa County",
                "addressCountry": "KE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -4.0435,
                "longitude": 39.6682
              },
              "openingHours": [
                "Mo-Sa 09:00-22:00",
                "Su 10:00-20:00"
              ],
              "priceRange": "KSh 400 - KSh 2500",
              "image": [
                "https://classic-barber-indol.vercel.app/images/signature_services/signaturefade.jpg",
                "https://classic-barber-indol.vercel.app/images/barbers/jamesmwangi.jpg"
              ],
              "service": [
                {
                  "@type": "Service",
                  "name": "Haircut",
                  "description": "Professional haircut and styling",
                  "price": "400-1200"
                },
                {
                  "@type": "Service",
                  "name": "Beard Trim",
                  "description": "Beard shaping and grooming",
                  "price": "300-500"
                },
                {
                  "@type": "Service",
                  "name": "Afro Styles",
                  "description": "Afro hair styling and maintenance",
                  "price": "500-2500"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-hero-gradient antialiased`}>
        <Header />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
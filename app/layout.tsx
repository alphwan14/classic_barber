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
  title: 'Classic Barber — Precision. Style. Confidence.',
  description: 'Your trusted barbershop in Mombasa. Premium grooming services with expert barbers.',
  metadataBase: new URL('https://classicbarber.co.ke'),
  openGraph: {
    title: 'Classic Barber',
    description: 'Premium barbershop in Mombasa, Kenya',
    url: 'https://classicbarber.co.ke',
    siteName: 'Classic Barber',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop',
        width: 1200,
        height: 630
      }
    ],
    locale: 'en_KE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Classic Barber',
    description: 'Premium barbershop in Mombasa, Kenya'
  },
};

// Add this separate viewport export
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth h-full">
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
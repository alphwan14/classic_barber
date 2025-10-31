"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Scissors, Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/barbers', label: 'Our Barbers' },
  { href: '/gallery', label: 'Gallery' }, // Added Gallery link
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-amber-400/20 bg-[#1a120b]/95 backdrop-blur-xl">
      <div className="container-responsive flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="p-2 rounded-full barber-gradient text-[#1a120b] transform group-hover:scale-110 transition duration-300 barber-shadow">
            <Scissors size={20} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold tracking-tight text-white">CLASSIC BARBER</span>
            <span className="text-xs text-amber-400/90 tracking-wider">MOMBASA</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className="relative group">
                <span className={`font-medium tracking-wide transition-all duration-300 text-shadow ${
                  active ? 'text-amber-400' : 'text-amber-100/90 hover:text-amber-400'
                }`}>
                  {item.label}
                </span>
                {active && (
                  <motion.span 
                    layoutId="nav-underline" 
                    className="absolute -bottom-2 left-0 h-0.5 w-full barber-gradient rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+254712345678" className="flex items-center gap-2 text-amber-100/90 hover:text-amber-400 transition-colors">
            <Phone size={16} />
            <span className="text-sm font-medium text-white">+254 712 345 678</span>
          </a>
          <Link 
            href="/booking" 
            className="px-6 py-3 rounded-full barber-gradient text-[#1a120b] font-bold tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300 barber-shadow"
          >
            BOOK NOW
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-3 rounded-full border border-amber-400/20 bg-amber-400/10 hover:bg-amber-400/20 transition-colors" 
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={20} className="text-amber-400" /> : <Menu size={20} className="text-amber-400" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden border-t border-amber-400/20 bg-[#1a120b] leather-bg"
        >
          <div className="container-responsive py-6 space-y-4">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all text-shadow ${
                  pathname === item.href 
                    ? 'barber-gradient text-[#1a120b] barber-shadow' 
                    : 'text-amber-100/90 hover:text-amber-400 hover:bg-amber-400/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-amber-400/20">
              <a href="tel:+254712345678" className="flex items-center gap-3 px-4 py-3 text-amber-400 font-medium">
                <Phone size={20} />
                <span className="text-white">+254 712 345 678</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}

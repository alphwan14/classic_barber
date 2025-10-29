import Link from 'next/link';
import { Instagram, Phone, MessageCircle, Scissors, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="leather-bg border-t border-amber-400/20 mt-auto">
      <div className="container-responsive py-8 sm:py-12 grid gap-6 sm:gap-8 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-full barber-gradient text-[#1a120b]">
              <Scissors size={20} />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">CLASSIC BARBER</span>
              <div className="text-amber-400/80 text-sm tracking-wide">MOMBASA, KENYA</div>
            </div>
          </div>
          <p className="text-amber-100/90 text-base sm:text-lg mb-4 max-w-md">
            Transforming men's grooming in Mombasa with precision cuts, premium service, and unmatched expertise.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-amber-100/70">
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span className="text-sm">Open Until 10 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span className="text-sm">+254 712 345 678</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-amber-100 mb-3 sm:mb-4 text-lg">QUICK LINKS</h4>
          <ul className="space-y-2 sm:space-y-3 text-amber-100/80">
            <li><Link href="/services" className="hover:text-amber-400 transition-colors text-sm sm:text-base">Services & Prices</Link></li>
            <li><Link href="/barbers" className="hover:text-amber-400 transition-colors text-sm sm:text-base">Meet Our Barbers</Link></li>
            <li><Link href="/gallery" className="hover:text-amber-400 transition-colors text-sm sm:text-base">Style Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-amber-400 transition-colors text-sm sm:text-base">Visit Us</Link></li>
          </ul>
        </div>

        {/* Contact & Hours */}
        <div>
          <h4 className="font-bold text-amber-100 mb-3 sm:mb-4 text-lg">VISIT US</h4>
          <div className="space-y-2 sm:space-y-3 text-amber-100/70">
            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-amber-400 mt-1 flex-shrink-0" />
              <span className="text-sm">Nyali Centre, Mombasa Road<br />Mombasa, Kenya</span>
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Mon - Fri:</span>
                <span className="text-amber-400">9 AM - 10 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-amber-400">8 AM - 11 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-amber-400">10 AM - 8 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-400/20">
        <div className="container-responsive py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-amber-100/60 text-xs sm:text-sm text-center sm:text-left">
            © 2024 Classic Barber Mombasa. All rights reserved.
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="#" className="text-amber-100/60 hover:text-amber-400 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://wa.me/254712345678" className="text-amber-100/60 hover:text-amber-400 transition-colors">
              <MessageCircle size={18} />
            </a>
            <a href="tel:+254712345678" className="text-amber-100/60 hover:text-amber-400 transition-colors">
              <Phone size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
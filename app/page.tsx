"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { Clock, Star, Scissors, Shield, Zap, Users, Calendar, MessageCircle } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Quick Service",
      description: "In and out in 30 minutes or less. We value your time."
    },
    {
      icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Expert Barbers",
      description: "Certified professionals with 5+ years experience each."
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Hygiene First",
      description: "Sterilized tools and fresh equipment for every client."
    },
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Easy Booking",
      description: "Book online in 60 seconds. No phone calls needed."
    }
  ];

  const services = [
  {
    name: "Signature Fade",
    price: "KSh 700",
    duration: "45 min",
    description: "Precision fade with sharp lines and perfect blending for a clean, modern look.",
    image: "/images/signature_services/signaturefade.jpg"
  },
  {
    name: "Classic Cut", 
    price: "KSh 600",
    duration: "30 min",
    description: "Traditional haircut with clipper work and styling for timeless elegance.",
    image: "/images/signature_services/classiccut.jpg"
  },
  {
    name: "Beard Trim",
    price: "KSh 400",
    duration: "20 min",
    description: "Professional beard shaping and styling with hot towel treatment.",
    image: "/images/signature_services/beardtrim.jpg"
  },
  {
    name: "Royal Treatment",
    price: "KSh 1,200",
    duration: "60 min",
    description: "Full haircut, beard trim, and relaxing facial massage for ultimate luxury.",
    image: "/images/signature_services/royaltreatment.jpg"
  }
];
  return (
    <div className="overflow-hidden">
      {/* Hero Section - FIXED MOBILE RESPONSIVENESS */}
      <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center leather-bg overflow-hidden">
        {/* Background with better positioning */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop"
            alt="Professional barber at work"
            fill
            className="object-cover object-center opacity-15 sm:opacity-20"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          {/* Stronger gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a120b] via-[#1a120b]/95 to-[#1a120b]/80 sm:bg-gradient-to-r sm:from-[#1a120b] sm:via-[#1a120b]/90 sm:to-transparent"></div>
        </div>
        
        {/* Main Content Container */}
        <div className="container-responsive relative z-10 py-12 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0"
          >
            {/* Rating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6 mx-auto sm:mx-0"
            >
              <Star className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">MOMBASA'S #1 RATED BARBER</span>
            </motion.div>

            {/* MAIN HEADLINE - IMPROVED MOBILE TYPOGRAPHY */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 text-center sm:text-left">
              <span className="block text-white text-shadow-lg leading-tight sm:leading-normal">LOOK SHARP.</span>
              <span className="block text-barber-gradient text-shadow-lg leading-tight sm:leading-normal">FEEL CONFIDENT.</span>
            </h1>
            
            {/* Subtitle with better mobile spacing */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl text-amber-100/90 mb-6 sm:mb-8 leading-relaxed text-center sm:text-left text-shadow"
            >
              Premium grooming experiences that transform your style and boost your confidence. 
              <span className="block text-amber-400 font-semibold mt-2 sm:mt-3 text-base sm:text-lg md:text-xl text-shadow">
                Walk-ins welcome • M-Pesa accepted • Open late
              </span>
            </motion.p>

            {/* CTA Buttons - MOBILE FRIENDLY */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <Link 
                href="/booking" 
                className="group px-6 sm:px-8 py-3 sm:py-4 rounded-full barber-gradient text-[#1a120b] font-bold text-base sm:text-lg tracking-wide hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 barber-shadow"
              >
                <Scissors className="w-4 h-4 sm:w-5 sm:h-5" />
                BOOK YOUR CHAIR
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="hidden sm:inline"
                >
                  →
                </motion.span>
              </Link>
              
              <Link 
                href="/services"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-amber-400 text-amber-400 font-bold text-base sm:text-lg tracking-wide hover:bg-amber-400 hover:text-[#1a120b] transition-all duration-300 text-center barber-shadow"
              >
                VIEW SERVICES
              </Link>
            </motion.div>

            {/* Social Proof - MOBILE OPTIMIZED */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-amber-100/80 justify-center sm:justify-start"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium text-white">4.9/5</span>
              </div>
              <div className="w-px h-4 bg-amber-400/30 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                <span className="text-sm font-medium text-white">500+ Happy Clients</span>
              </div>
              <div className="w-px h-4 bg-amber-400/30 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                <span className="text-sm font-medium text-white">Open Until 10PM</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements with Better Positioning */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#1a120b] to-transparent"></div>
      </section>

      {/* Features Section - FIXED CONTRAST & MOBILE */}
      <Section>
        <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
          <div className="text-amber-400 text-sm uppercase tracking-wider font-semibold mb-2 text-shadow">WHY CHOOSE US</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-shadow-lg mb-3 sm:mb-4">
            The Classic Barber <span className="text-barber-gradient">Experience</span>
          </h2>
          <p className="text-lg sm:text-xl text-amber-100/90 max-w-2xl mx-auto text-shadow px-4 sm:px-0">
            Premium service meets traditional craftsmanship in the heart of Mombasa
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-center group"
            >
              <div className="relative">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-amber-400/10 rounded-2xl blur-xl group-hover:bg-amber-400/20 transition-all duration-300"></div>
                
                {/* Feature Card */}
                <div className="relative glass-barber rounded-2xl p-6 sm:p-8 border border-amber-400/20 group-hover:border-amber-400/40 transition-all duration-300 hover-lift">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl barber-gradient text-[#1a120b] mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 barber-shadow">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 text-shadow group-hover:text-amber-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-amber-100/90 leading-relaxed text-sm sm:text-base text-shadow">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Popular Services - FIXED IMAGES & PRICE VISIBILITY */}
      <Section>
        <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
          <div className="text-amber-400 text-sm uppercase tracking-wider font-semibold mb-2 text-shadow">PREMIUM GROOMING</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-shadow-lg mb-3 sm:mb-4">
            Our <span className="text-barber-gradient">Signature</span> Services
          </h2>
          <p className="text-lg sm:text-xl text-amber-100/90 max-w-2xl mx-auto text-shadow px-4 sm:px-0">
            Expertly crafted services designed for the modern gentleman
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-amber-400/5 rounded-2xl blur-lg group-hover:bg-amber-400/10 transition-all duration-300"></div>
                
                {/* Service Card */}
                <div className="relative glass-barber rounded-2xl overflow-hidden border border-amber-400/20 group-hover:border-amber-400/40 transition-all duration-300 hover-lift h-full flex flex-col">
                  
                  {/* Service Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Price Badge - FIXED VISIBILITY */}
                    <div className="absolute top-4 right-4 px-3 py-2 rounded-full barber-gradient text-[#1a120b] font-bold text-lg barber-shadow">
                      {service.price}
                    </div>
                    
                    {/* Service Name Overlay */}
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-white text-shadow">
                        {service.name}
                      </h3>
                    </div>
                  </div>

                  {/* Service Info */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Duration */}
                    <div className="flex items-center justify-center gap-2 text-amber-400 font-semibold text-sm uppercase tracking-wide mb-4">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </div>

                    {/* Description */}
                    <p className="text-amber-100/90 text-center mb-6 flex-grow text-shadow">
                      {service.description}
                    </p>

                    {/* Book Button */}
                    <Link 
                      href="/booking"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-amber-400 text-amber-400 font-bold text-sm hover:bg-amber-400 hover:text-[#1a120b] transition-all duration-300 group-hover:scale-105 barber-shadow text-center"
                    >
                      <Scissors className="w-4 h-4" />
                      BOOK NOW
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services Link */}
        <div className="text-center mt-8 sm:mt-12 px-4 sm:px-0">
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full glass-barber border border-amber-400/20 text-amber-400 font-bold text-sm sm:text-lg hover:bg-amber-400 hover:text-[#1a120b] transition-all duration-300 barber-shadow"
          >
            VIEW ALL 50+ STYLES
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
        </div>
      </Section>

      {/* CTA Section - ENHANCED MOBILE */}
      <Section>
        <div className="relative glass-barber rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center border border-amber-400/20 overflow-hidden mx-4 sm:mx-0">
          {/* Background Pattern */}
          <div className="absolute inset-0 stripes-bg opacity-30"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-amber-400/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-amber-400/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 text-shadow-lg">
              READY FOR YOUR <span className="text-barber-gradient">NEW LOOK</span>?
            </h2>
            <p className="text-lg sm:text-xl text-amber-100/90 mb-6 sm:mb-8 max-w-2xl mx-auto text-shadow px-2 sm:px-0">
              Join hundreds of confident men in Mombasa who trust Classic Barber with their style. 
              <span className="block text-amber-400 font-semibold mt-2 sm:mt-3 text-base sm:text-lg">
                Walk-ins welcome • Same-day appointments • Satisfaction guaranteed
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                href="/booking"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full barber-gradient text-[#1a120b] font-bold text-sm sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 barber-shadow flex items-center justify-center gap-2 sm:gap-3"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                BOOK APPOINTMENT
              </Link>
              <a 
                href="https://wa.me/254712345678"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-[#25D366] text-[#25D366] font-bold text-sm sm:text-lg hover:bg-[#25D366] hover:text-white transition-all duration-300 barber-shadow flex items-center justify-center gap-2 sm:gap-3"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                CHAT ON WHATSAPP
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-amber-100/80 text-xs sm:text-sm">
              <div className="flex items-center gap-1 sm:gap-2">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                <span>Hygiene Certified</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                <span>Open Until 10 PM</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
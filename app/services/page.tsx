"use client";
import { Section } from '@/components/Section';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Scissors, Clock, Star, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Fixed difficulty colors with proper typing
const difficultyColors: { [key: string]: string } = {
  easy: 'text-green-400',
  medium: 'text-amber-400',
  hard: 'text-orange-400',
  expert: 'text-red-400'
};

// 30 Professional Hairstyles with your images
const hairstyles = [
  // Signature Services (4)
  {
    id: 1, name: "Signature Fade", price: 700, duration: "45 min", category: "fade", 
    difficulty: "hard", image: "/images/signature_services/signaturefade.jpg",
    description: "Precision fade with sharp lines and perfect blending"
  },
  {
    id: 2, name: "Classic Cut", price: 600, duration: "30 min", category: "traditional", 
    difficulty: "easy", image: "/images/signature_services/classiccut.jpg",
    description: "Traditional haircut with timeless elegance"
  },
  {
    id: 3, name: "Beard Sculpt", price: 400, duration: "20 min", category: "beard", 
    difficulty: "medium", image: "/images/signature_services/beardtrim.jpg",
    description: "Professional beard shaping and styling"
  },
  {
    id: 4, name: "Royal Treatment", price: 1200, duration: "60 min", category: "premium", 
    difficulty: "expert", image: "/images/signature_services/royaltreatment.jpg",
    description: "Complete grooming with facial massage"
  },

  // Fade Styles (8)
  {
    id: 5, name: "Low Taper Fade", price: 650, duration: "35 min", category: "fade", 
    difficulty: "medium", image: "/images/gallery/barber1.jpeg",
    description: "Subtle taper starting low for clean look"
  },
  {
    id: 6, name: "High Skin Fade", price: 800, duration: "50 min", category: "fade", 
    difficulty: "hard", image: "/images/gallery/barber2.jpeg",
    description: "Dramatic skin fade for bold statement"
  },
  {
    id: 7, name: "Mid Fade", price: 700, duration: "40 min", category: "fade", 
    difficulty: "medium", image: "/images/gallery/barber3.jpeg",
    description: "Balanced fade with perfect blending"
  },
  {
    id: 8, name: "Temple Fade", price: 600, duration: "30 min", category: "fade", 
    difficulty: "medium", image: "/images/gallery/barber4.jpeg",
    description: "Sharp temple fade with clean lines"
  },
  {
    id: 9, name: "Burst Fade", price: 750, duration: "45 min", category: "fade", 
    difficulty: "hard", image: "/images/gallery/barber5.jpeg",
    description: "Circular fade pattern for unique style"
  },
  {
    id: 10, name: "Drop Fade", price: 700, duration: "40 min", category: "fade", 
    difficulty: "hard", image: "/images/gallery/barber6.jpeg",
    description: "Fade that drops behind the ear"
  },
  {
    id: 11, name: "Design Fade", price: 900, duration: "60 min", category: "fade", 
    difficulty: "expert", image: "/images/gallery/barber7.jpeg",
    description: "Creative designs and patterns in fade"
  },
  {
    id: 12, name: "Curly Fade", price: 750, duration: "45 min", category: "fade", 
    difficulty: "hard", image: "/images/gallery/barber8.jpeg",
    description: "Fade tailored for curly hair texture"
  },

  // Modern Styles (6)
  {
    id: 13, name: "Textured Crop", price: 650, duration: "35 min", category: "modern", 
    difficulty: "medium", image: "/images/gallery/barber9.jpeg",
    description: "Modern crop with textured top"
  },
  {
    id: 14, name: "French Crop", price: 600, duration: "30 min", category: "modern", 
    difficulty: "medium", image: "/images/gallery/barber10.jpeg",
    description: "Clean French crop with fringe"
  },
  {
    id: 15, name: "Slick Back", price: 700, duration: "40 min", category: "modern", 
    difficulty: "hard", image: "/images/gallery/barber11.jpeg",
    description: "Sleek slick back with strong hold"
  },
  {
    id: 16, name: "Side Part", price: 550, duration: "25 min", category: "modern", 
    difficulty: "easy", image: "/images/gallery/barber12.jpeg",
    description: "Classic side part with precision"
  },
  {
    id: 17, name: "Undercut", price: 750, duration: "45 min", category: "modern", 
    difficulty: "hard", image: "/images/gallery/barber13.jpeg",
    description: "Sharp undercut with contrast"
  },
  {
    id: 18, name: "Modern Mullet", price: 800, duration: "50 min", category: "modern", 
    difficulty: "expert", image: "/images/gallery/barber14.jpeg",
    description: "Contemporary take on classic mullet"
  },

  // Afro & Textured Styles (6)
  {
    id: 19, name: "Afro Shape", price: 500, duration: "25 min", category: "afro", 
    difficulty: "easy", image: "/images/gallery/barber15.jpeg",
    description: "Professional afro shaping and trim"
  },
  {
    id: 20, name: "Twist Out", price: 1200, duration: "60 min", category: "afro", 
    difficulty: "expert", image: "/images/gallery/barber16.jpeg",
    description: "Beautiful twist out style"
  },
  {
    id: 21, name: "Box Braids", price: 2500, duration: "120 min", category: "afro", 
    difficulty: "expert", image: "/images/gallery/barber17.jpeg",
    description: "Professional box braids installation"
  },
  {
    id: 22, name: "Cornrows", price: 1500, duration: "90 min", category: "afro", 
    difficulty: "expert", image: "/images/gallery/barber18.jpeg",
    description: "Traditional cornrow styling"
  },
  {
    id: 23, name: "Dread Maintenance", price: 800, duration: "45 min", category: "afro", 
    difficulty: "medium", image: "/images/gallery/barber19.jpeg",
    description: "Dreadlock maintenance and care"
  },
  {
    id: 24, name: "Fro Hawk", price: 700, duration: "40 min", category: "afro", 
    difficulty: "hard", image: "/images/gallery/barber20.jpeg",
    description: "Mohawk style with afro texture"
  },

  // Beard & Premium (6)
  {
    id: 25, name: "Full Beard Shape", price: 500, duration: "25 min", category: "beard", 
    difficulty: "medium", image: "/images/gallery/barber21.jpeg",
    description: "Complete beard shaping and styling"
  },
  {
    id: 26, name: "Goatee Style", price: 350, duration: "20 min", category: "beard", 
    difficulty: "medium", image: "/images/gallery/barber22.jpeg",
    description: "Precision goatee shaping"
  },
  {
    id: 27, name: "Mustache Design", price: 300, duration: "15 min", category: "beard", 
    difficulty: "easy", image: "/images/gallery/barber23.jpeg",
    description: "Creative mustache styling"
  },
  {
    id: 28, name: "Hot Towel Shave", price: 600, duration: "30 min", category: "premium", 
    difficulty: "medium", image: "/images/gallery/barber24.jpeg",
    description: "Traditional straight razor shave"
  },
  {
    id: 29, name: "Executive Package", price: 2000, duration: "90 min", category: "premium", 
    difficulty: "expert", image: "/images/gallery/barber25.jpeg",
    description: "VIP treatment with private room"
  },
  {
    id: 30, name: "Wedding Prep", price: 2500, duration: "120 min", category: "premium", 
    difficulty: "expert", image: "/images/gallery/barber26.jpeg",
    description: "Complete grooming for special occasions"
  }
];

const categories = [
  { id: 'all', name: 'All Styles', count: hairstyles.length },
  { id: 'fade', name: 'Fade Cuts', count: hairstyles.filter(s => s.category === 'fade').length },
  { id: 'modern', name: 'Modern Cuts', count: hairstyles.filter(s => s.category === 'modern').length },
  { id: 'afro', name: 'Afro Styles', count: hairstyles.filter(s => s.category === 'afro').length },
  { id: 'beard', name: 'Beard Work', count: hairstyles.filter(s => s.category === 'beard').length },
  { id: 'premium', name: 'Premium', count: hairstyles.filter(s => s.category === 'premium').length },
  { id: 'traditional', name: 'Traditional', count: hairstyles.filter(s => s.category === 'traditional').length },
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<any>(null);

  const filteredStyles = useMemo(() => {
    return hairstyles.filter(style => {
      const matchesCategory = selectedCategory === 'all' || style.category === selectedCategory;
      const matchesSearch = style.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen leather-bg">
      {/* Hero Section */}
      <section className="relative py-20 leather-bg border-b border-amber-400/20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop"
            alt="Barber tools"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white text-shadow-lg">
              Style <span className="text-barber-gradient">Gallery</span>
            </h1>
            <p className="text-xl text-amber-100/80 mb-8 text-shadow">
              Browse 30+ professional styles. Find your perfect look and book instantly.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search styles... (e.g., 'fade', 'beard', 'afro')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl glass-barber border border-amber-400/20 text-white placeholder-amber-100/50 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Section>
        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'barber-gradient text-[#1a120b] barber-shadow'
                  : 'glass-barber text-amber-100/80 hover:text-amber-400 hover:border-amber-400/30'
              } border border-amber-400/20`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Styles Grid */}
        <AnimatePresence>
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredStyles.map((style, index) => (
              <motion.div
                key={style.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                layout
                className="glass-barber rounded-2xl overflow-hidden hover-lift group cursor-pointer border border-amber-400/20"
                onClick={() => setSelectedStyle(style)}
              >
                {/* Style Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={style.image}
                    alt={style.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full barber-gradient text-[#1a120b] font-bold text-sm barber-shadow">
                    KSh {style.price}
                  </div>

                  {/* Difficulty Badge */}
                  <div className={`absolute top-4 left-4 px-2 py-1 rounded-full bg-black/80 text-xs font-medium ${difficultyColors[style.difficulty] || 'text-amber-400'}`}>
                    {style.difficulty}
                  </div>
                </div>

                {/* Style Info */}
                <div className="p-4">
                  <h3 className="font-bold text-white text-lg mb-2 group-hover:text-amber-400 transition-colors">
                    {style.name}
                  </h3>
                  <p className="text-amber-100/70 text-sm mb-3">{style.description}</p>
                  <div className="flex items-center justify-between text-sm text-amber-100/70">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {style.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Scissors className="w-4 h-4" />
                      {style.category}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredStyles.length === 0 && (
          <div className="text-center py-16">
            <Filter className="w-16 h-16 text-amber-400/50 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No styles found</h3>
            <p className="text-amber-100/70">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </Section>
    </div>
  );
}

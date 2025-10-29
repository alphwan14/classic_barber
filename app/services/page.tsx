"use client";
import { Section } from '@/components/Section';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Scissors, Clock, Star, Zap } from 'lucide-react';
import Image from 'next/image';

// Signature Services
const signatureServices = [
  {
    id: 100,
    name: "Signature Fade",
    price: 700,
    duration: "45 min",
    description: "Precision fade with sharp lines and perfect blending for a clean, modern look.",
    image: "/images/signature_services/signaturefade.jpg",
    category: "signature",
    difficulty: "expert",
    featured: true
  },
  {
    id: 101,
    name: "Classic Cut", 
    price: 600,
    duration: "30 min",
    description: "Traditional haircut with clipper work and styling for timeless elegance.",
    image: "/images/signature_services/classiccut.jpg",
    category: "signature",
    difficulty: "medium",
    featured: true
  },
  {
    id: 102,
    name: "Beard Trim",
    price: 400,
    duration: "20 min",
    description: "Professional beard shaping and styling with hot towel treatment.",
    image: "/images/signature_services/beardtrim.jpg",
    category: "signature",
    difficulty: "medium",
    featured: true
  },
  {
    id: 103,
    name: "Royal Treatment",
    price: 1200,
    duration: "60 min",
    description: "Full haircut, beard trim, and relaxing facial massage for ultimate luxury.",
    image: "/images/signature_services/royaltreatment.jpg",
    category: "signature",
    difficulty: "expert",
    featured: true
  }
];

// Extended hairstyle data with realistic pricing and details
const hairstyles = [
  // Signature Services First
  ...signatureServices,
  
  // Fade Styles
  { id: 1, name: "Low Fade", price: 600, duration: "30 min", category: "fade", difficulty: "medium", image: "https://images.unsplash.com/photo-1593702272658-9f3c9b1f98c6?q=80&w=500&auto=format&fit=crop" },
  { id: 2, name: "Mid Fade", price: 650, duration: "35 min", category: "fade", difficulty: "medium", image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447a?q=80&w=500&auto=format&fit=crop" },
  { id: 3, name: "High Fade", price: 700, duration: "40 min", category: "fade", difficulty: "hard", image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=500&auto=format&fit=crop" },
  { id: 4, name: "Taper Fade", price: 550, duration: "25 min", category: "fade", difficulty: "easy", image: "https://images.unsplash.com/photo-1567894340315-735d35d7d364?q=80&w=500&auto=format&fit=crop" },
  { id: 5, name: "Skin Fade", price: 750, duration: "45 min", category: "fade", difficulty: "hard", image: "https://images.unsplash.com/photo-1592155931587-2fad89f816b1?q=80&w=500&auto=format&fit=crop" },

  // Afro Styles
  { id: 6, name: "Afro Trim", price: 500, duration: "20 min", category: "afro", difficulty: "easy", image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=500&auto=format&fit=crop" },
  { id: 7, name: "Twist Out", price: 1200, duration: "60 min", category: "afro", difficulty: "hard", image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=500&auto=format&fit=crop" },
  { id: 8, name: "Box Braids", price: 2500, duration: "120 min", category: "afro", difficulty: "expert", image: "https://images.unsplash.com/photo-1517433670267-08e4a6e5b049?q=80&w=500&auto=format&fit=crop" },
  { id: 9, name: "Cornrows", price: 1500, duration: "90 min", category: "afro", difficulty: "expert", image: "https://images.unsplash.com/photo-1589362292111-38db64ae5c54?q=80&w=500&auto=format&fit=crop" },
  { id: 10, name: "Dread Maintenance", price: 800, duration: "45 min", category: "afro", difficulty: "medium", image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=500&auto=format&fit=crop" },

  // Modern Cuts
  { id: 11, name: "Textured Crop", price: 650, duration: "35 min", category: "modern", difficulty: "medium", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop" },
  { id: 12, name: "French Crop", price: 600, duration: "30 min", category: "modern", difficulty: "medium", image: "https://images.unsplash.com/photo-1521146764732-6e4fa2f95215?q=80&w=500&auto=format&fit=crop" },
  { id: 13, name: "Slick Back", price: 700, duration: "40 min", category: "modern", difficulty: "hard", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=500&auto=format&fit=crop" },
  { id: 14, name: "Side Part", price: 550, duration: "25 min", category: "modern", difficulty: "easy", image: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=500&auto=format&fit=crop" },
  { id: 15, name: "Undercut", price: 750, duration: "45 min", category: "modern", difficulty: "hard", image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=500&auto=format&fit=crop" },

  // Beard Styles
  { id: 16, name: "Beard Trim", price: 300, duration: "15 min", category: "beard", difficulty: "easy", image: "https://images.unsplash.com/photo-1544126591-1b5dd175a0f6?q=80&w=500&auto=format&fit=crop" },
  { id: 17, name: "Full Beard Shape", price: 500, duration: "25 min", category: "beard", difficulty: "medium", image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=500&auto=format&fit=crop" },
  { id: 18, name: "Line Up", price: 200, duration: "10 min", category: "beard", difficulty: "easy", image: "https://images.unsplash.com/photo-1544126591-1b5dd175a0f6?q=80&w=500&auto=format&fit=crop" },
  { id: 19, name: "Goatee Style", price: 350, duration: "20 min", category: "beard", difficulty: "medium", image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=500&auto=format&fit=crop" },
  { id: 20, name: "Beard & Mustache", price: 450, duration: "30 min", category: "beard", difficulty: "medium", image: "https://images.unsplash.com/photo-1544126591-1b5dd175a0f6?q=80&w=500&auto=format&fit=crop" },

  // Traditional Styles
  { id: 21, name: "Classic Cut", price: 400, duration: "20 min", category: "traditional", difficulty: "easy", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=500&auto=format&fit=crop" },
  { id: 22, name: "Buzz Cut", price: 350, duration: "15 min", category: "traditional", difficulty: "easy", image: "https://images.unsplash.com/photo-1592155931587-2fad89f816b1?q=80&w=500&auto=format&fit=crop" },
  { id: 23, name: "Pompadour", price: 800, duration: "50 min", category: "traditional", difficulty: "hard", image: "https://images.unsplash.com/photo-1567894340315-735d35d7d364?q=80&w=500&auto=format&fit=crop" },
  { id: 24, name: "Quiff", price: 700, duration: "40 min", category: "traditional", difficulty: "medium", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop" },
  { id: 25, name: "Business Cut", price: 500, duration: "25 min", category: "traditional", difficulty: "easy", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=500&auto=format&fit=crop" },

  // Additional styles to reach 50+
  { id: 26, name: "Curly Fade", price: 850, duration: "55 min", category: "fade", difficulty: "expert", image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=500&auto=format&fit=crop" },
  { id: 27, name: "Design Fade", price: 900, duration: "60 min", category: "fade", difficulty: "expert", image: "https://images.unsplash.com/photo-1589362292111-38db64ae5c54?q=80&w=500&auto=format&fit=crop" },
  { id: 28, name: "Temple Fade", price: 600, duration: "30 min", category: "fade", difficulty: "medium", image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447a?q=80&w=500&auto=format&fit=crop" },
  { id: 29, name: "Burst Fade", price: 750, duration: "45 min", category: "fade", difficulty: "hard", image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=500&auto=format&fit=crop" },
  { id: 30, name: "Drop Fade", price: 700, duration: "40 min", category: "fade", difficulty: "hard", image: "https://images.unsplash.com/photo-1593702272658-9f3c9b1f98c6?q=80&w=500&auto=format&fit=crop" },
];

const categories = [
  { id: 'all', name: 'All Styles', count: hairstyles.length },
  { id: 'signature', name: 'Signature Services', count: hairstyles.filter(s => s.category === 'signature').length },
  { id: 'fade', name: 'Fade Cuts', count: hairstyles.filter(s => s.category === 'fade').length },
  { id: 'afro', name: 'Afro Styles', count: hairstyles.filter(s => s.category === 'afro').length },
  { id: 'modern', name: 'Modern Cuts', count: hairstyles.filter(s => s.category === 'modern').length },
  { id: 'beard', name: 'Beard Work', count: hairstyles.filter(s => s.category === 'beard').length },
  { id: 'traditional', name: 'Traditional', count: hairstyles.filter(s => s.category === 'traditional').length },
];

const difficultyColors: { [key: string]: string } = {
  easy: 'text-green-400',
  medium: 'text-amber-400',
  hard: 'text-orange-400',
  expert: 'text-red-400'
};

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
              Browse 50+ professional styles. Find your perfect look and book instantly.
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
                className={`glass-barber rounded-2xl overflow-hidden hover-lift group cursor-pointer border ${
                  style.category === 'signature' 
                    ? 'border-amber-400/40 shadow-lg shadow-amber-400/20' 
                    : 'border-amber-400/20'
                } relative`}
                onClick={() => setSelectedStyle(style)}
              >
                {/* Featured Badge for Signature Services */}
                {style.category === 'signature' && (
                  <div className="absolute top-2 left-2 z-20 px-2 py-1 bg-amber-400 text-[#1a120b] text-xs font-bold rounded-full barber-shadow">
                    SIGNATURE
                  </div>
                )}

                {/* Style Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={style.image}
                    alt={style.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full barber-gradient text-[#1a120b] font-bold text-sm barber-shadow">
                    KSh {style.price}
                  </div>

                  {/* Difficulty Badge */}
                  <div className={`absolute top-4 left-4 px-2 py-1 rounded-full bg-black/80 text-xs font-medium ${difficultyColors[style.difficulty]}`}>
                    {style.difficulty}
                  </div>
                </div>

                {/* Style Info */}
                <div className="p-4">
                  <h3 className="font-bold text-white text-lg mb-2 group-hover:text-amber-400 transition-colors">
                    {style.name}
                  </h3>
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

      {/* Style Modal */}
      {selectedStyle && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedStyle(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-barber rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedStyle(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-amber-400 hover:text-[#1a120b] transition-colors"
              >
                ×
              </button>
              
              {/* Signature Badge in Modal */}
              {selectedStyle.category === 'signature' && (
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-amber-400 text-[#1a120b] text-sm font-bold rounded-full barber-shadow">
                  SIGNATURE SERVICE
                </div>
              )}
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Image */}
                <div className="relative aspect-square">
                  <Image
                    src={selectedStyle.image}
                    alt={selectedStyle.name}
                    fill
                    className="object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
                  />
                </div>

                {/* Details */}
                <div className="p-6">
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedStyle.name}</h2>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-bold text-barber-gradient">
                      KSh {selectedStyle.price}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[selectedStyle.difficulty]} bg-amber-400/10`}>
                      {selectedStyle.difficulty} level
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-amber-100/80">
                      <Clock className="w-5 h-5 text-amber-400" />
                      <span>Duration: {selectedStyle.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-amber-100/80">
                      <Scissors className="w-5 h-5 text-amber-400" />
                      <span>Category: {selectedStyle.category}</span>
                    </div>
                    <div className="flex items-center gap-2 text-amber-100/80">
                      <Zap className="w-5 h-5 text-amber-400" />
                      <span>Skill: Professional grade</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-amber-100/80 mb-6 leading-relaxed">
                    {selectedStyle.description}
                  </p>

                  <div className="space-y-3">
                    <button className="w-full py-4 rounded-full barber-gradient text-[#1a120b] font-bold text-lg hover:shadow-2xl transition-all duration-300">
                      BOOK THIS STYLE
                    </button>
                    <button className="w-full py-4 rounded-full border-2 border-amber-400 text-amber-400 font-bold text-lg hover:bg-amber-400 hover:text-[#1a120b] transition-all duration-300">
                      SAVE FOR LATER
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <Section>
        <div className="glass-barber rounded-3xl p-12 text-center border border-amber-400/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-shadow">
            Can't Find Your Style?
          </h2>
          <p className="text-xl text-amber-100/80 mb-8 max-w-2xl mx-auto">
            Bring any reference photo and our expert barbers will recreate it perfectly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-full barber-gradient text-[#1a120b] font-bold text-lg hover:shadow-2xl transition-all duration-300">
              CONSULT OUR BARBERS
            </button>
            <a 
              href="https://wa.me/254712345678"
              className="px-8 py-4 rounded-full border-2 border-[#25D366] text-[#25D366] font-bold text-lg hover:bg-[#25D366] hover:text-white transition-all duration-300"
            >
              SEND PHOTO ON WHATSAPP
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
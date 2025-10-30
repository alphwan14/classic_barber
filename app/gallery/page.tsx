"use client";
import { Section } from '@/components/Section';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // 50 gallery images with professional style names - FIXED: using .jpeg extension
  const galleryImages = [
    // First 4 from signature services (.jpg)
    { id: 1, name: "Signature Fade", style: "Fade Cut", image: "/images/signature_services/signaturefade.jpg" },
    { id: 2, name: "Classic Cut", style: "Traditional", image: "/images/signature_services/classiccut.jpg" },
    { id: 3, name: "Beard Sculpt", style: "Beard Work", image: "/images/signature_services/beardtrim.jpg" },
    { id: 4, name: "Royal Treatment", style: "Premium", image: "/images/signature_services/royaltreatment.jpg" },
    
    // Gallery images - FIXED: using .jpeg extension
    { id: 5, name: "Low Taper Fade", style: "Fade Cut", image: "/images/gallery/barber1.jpeg" },
    { id: 6, name: "High Skin Fade", style: "Fade Cut", image: "/images/gallery/barber2.jpeg" },
    { id: 7, name: "Mid Fade", style: "Fade Cut", image: "/images/gallery/barber3.jpeg" },
    { id: 8, name: "Temple Fade", style: "Fade Cut", image: "/images/gallery/barber4.jpeg" },
    { id: 9, name: "Burst Fade", style: "Fade Cut", image: "/images/gallery/barber5.jpeg" },
    { id: 10, name: "Drop Fade", style: "Fade Cut", image: "/images/gallery/barber6.jpeg" },
    { id: 11, name: "Design Fade", style: "Artistic", image: "/images/gallery/barber7.jpeg" },
    { id: 12, name: "Curly Fade", style: "Fade Cut", image: "/images/gallery/barber8.jpeg" },
    { id: 13, name: "Textured Crop", style: "Modern", image: "/images/gallery/barber9.jpeg" },
    { id: 14, name: "French Crop", style: "Modern", image: "/images/gallery/barber10.jpeg" },
    { id: 15, name: "Slick Back", style: "Modern", image: "/images/gallery/barber11.jpeg" },
    { id: 16, name: "Side Part", style: "Classic", image: "/images/gallery/barber12.jpeg" },
    { id: 17, name: "Undercut", style: "Modern", image: "/images/gallery/barber13.jpeg" },
    { id: 18, name: "Modern Mullet", style: "Modern", image: "/images/gallery/barber14.jpeg" },
    { id: 19, name: "Afro Shape", style: "Afro", image: "/images/gallery/barber15.jpeg" },
    { id: 20, name: "Twist Out", style: "Afro", image: "/images/gallery/barber16.jpeg" },
    { id: 21, name: "Box Braids", style: "Protective", image: "/images/gallery/barber17.jpeg" },
    { id: 22, name: "Cornrows", style: "Traditional", image: "/images/gallery/barber18.jpeg" },
    { id: 23, name: "Dread Maintenance", style: "Maintenance", image: "/images/gallery/barber19.jpeg" },
    { id: 24, name: "Fro Hawk", style: "Afro", image: "/images/gallery/barber20.jpeg" },
    { id: 25, name: "Full Beard Shape", style: "Beard Work", image: "/images/gallery/barber21.jpeg" },
    { id: 26, name: "Goatee Style", style: "Beard Work", image: "/images/gallery/barber22.jpeg" },
    { id: 27, name: "Mustache Design", style: "Beard Work", image: "/images/gallery/barber23.jpeg" },
    { id: 28, name: "Hot Towel Shave", style: "Premium", image: "/images/gallery/barber24.jpeg" },
    { id: 29, name: "Executive Package", style: "VIP", image: "/images/gallery/barber25.jpeg" },
    { id: 30, name: "Wedding Prep", style: "Premium", image: "/images/gallery/barber26.jpeg" },
    { id: 31, name: "Business Cut", style: "Professional", image: "/images/gallery/barber27.jpeg" },
    { id: 32, name: "Buzz Cut", style: "Classic", image: "/images/gallery/barber28.jpeg" },
    { id: 33, name: "Pompadour", style: "Vintage", image: "/images/gallery/barber29.jpeg" },
    { id: 34, name: "Quiff Style", style: "Modern", image: "/images/gallery/barber30.jpeg" },
    { id: 35, name: "Line Up", style: "Precision", image: "/images/gallery/barber31.jpeg" },
    { id: 36, name: "Design Work", style: "Artistic", image: "/images/gallery/barber32.jpeg" },
    { id: 37, name: "Kids Fade", style: "Children", image: "/images/gallery/barber33.jpeg" },
    { id: 38, name: "Teen Cut", style: "Youth", image: "/images/gallery/barber34.jpeg" },
    { id: 39, name: "Executive Fade", style: "Professional", image: "/images/gallery/barber35.jpeg" },
    { id: 40, name: "Textured Fringe", style: "Modern", image: "/images/gallery/barber36.jpeg" },
    { id: 41, name: "Hard Part", style: "Precision", image: "/images/gallery/barber37.jpeg" },
    { id: 42, name: "Disconnected Cut", style: "Modern", image: "/images/gallery/barber38.jpeg" },
    { id: 43, name: "Scissor Cut", style: "Traditional", image: "/images/gallery/barber39.jpeg" },
    { id: 44, name: "Razor Cut", style: "Precision", image: "/images/gallery/barber40.jpeg" },
    { id: 45, name: "Layered Cut", style: "Textured", image: "/images/gallery/barber41.jpeg" },
    { id: 46, name: "Taper Cut", style: "Classic", image: "/images/gallery/barber42.jpeg" },
    { id: 47, name: "Fade with Design", style: "Artistic", image: "/images/gallery/barber43.jpeg" },
    { id: 48, name: "Modern Comb Over", style: "Professional", image: "/images/gallery/barber44.jpeg" },
    { id: 49, name: "Textured Pomp", style: "Modern", image: "/images/gallery/barber45.jpeg" },
    { id: 50, name: "Executive Style", style: "Business", image: "/images/gallery/barber46.jpeg" },
    { id: 51, name: "Premium Cut", style: "Luxury", image: "/images/gallery/barber47.jpeg" },
    { id: 52, name: "Sharp Lines", style: "Precision", image: "/images/gallery/barber48.jpeg" },
    { id: 53, name: "Modern Fade", style: "Contemporary", image: "/images/gallery/barber49.jpeg" },
    { id: 54, name: "Classic Style", style: "Traditional", image: "/images/gallery/barber50.jpeg" },
    { id: 55, name: "Creative Design", style: "Artistic", image: "/images/gallery/barber51.jpeg" }
  ];

  return (
    <div className="min-h-screen leather-bg py-12">
      <Section>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white text-shadow-lg">
            Style <span className="text-barber-gradient">Gallery</span>
          </h1>
          <p className="text-xl text-amber-100/80 max-w-2xl mx-auto text-shadow">
            Explore {galleryImages.length}+ professional hairstyles from our expert barbers in Mombasa
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer glass-barber border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300"
              onClick={() => setSelectedImage(image.id)}
            >
              <Image
                src={image.image}
                alt={image.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <div>
                  <h3 className="text-white font-semibold text-sm">{image.name}</h3>
                  <p className="text-amber-400 text-xs">{image.style}</p>
                </div>
              </div>
              
              {/* Zoom Icon */}
              <div className="absolute top-2 right-2 p-1 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 z-10 w-10 h-10 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-amber-400 hover:text-[#1a120b] transition-colors"
                >
                  <X size={20} />
                </button>
                
                <div className="relative aspect-[4/5] max-h-[80vh] overflow-hidden rounded-2xl">
                  <Image
                    src={galleryImages.find(img => img.id === selectedImage)!.image}
                    alt={galleryImages.find(img => img.id === selectedImage)!.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                  />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold">
                    {galleryImages.find(img => img.id === selectedImage)!.name}
                  </h3>
                  <p className="text-amber-400">
                    {galleryImages.find(img => img.id === selectedImage)!.style}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Section>
    </div>
  );
}
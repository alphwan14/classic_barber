"use client";
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/254712345678"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 px-6 py-4 rounded-full bg-[#25D366] text-white font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 group"
    >
      <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
      <motion.div
        animate={{ 
          boxShadow: [
            "0 0 0 0 rgba(37, 211, 102, 0.7)",
            "0 0 0 10px rgba(37, 211, 102, 0)",
            "0 0 0 0 rgba(37, 211, 102, 0)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full"
      />
    </motion.a>
  );
}

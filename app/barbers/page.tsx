"use client";
import { Section } from '@/components/Section';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Scissors, Award, Clock, Calendar } from 'lucide-react';

const barbers = [
  {
    id: 1,
    name: "James Mwangi",
    specialty: "Fade Master",
    experience: "8 years",
    rating: 4.9,
    cuts: 2500,
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=500&auto=format&fit=crop",
    skills: ["Skin Fades", "Design Work", "Beard Sculpting"],
    bio: "Specializes in precision fades and creative designs. Trained in London barbering academies.",
    availability: "Mon-Sat",
    price: "KSh 700+"
  },
  {
    id: 2,
    name: "David Ochieng",
    specialty: "Afro Specialist",
    experience: "6 years",
    rating: 4.8,
    cuts: 1800,
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=500&auto=format&fit=crop",
    skills: ["Braids", "Twist Outs", "Dread Maintenance"],
    bio: "Expert in all afro-textured hair styles and maintenance. Gentle with sensitive scalps.",
    availability: "Tue-Sun",
    price: "KSh 600+"
  },
  {
    id: 3,
    name: "Mike Kamau",
    specialty: "Traditional Cuts",
    experience: "10 years",
    rating: 4.7,
    cuts: 3200,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=500&auto=format&fit=crop",
    skills: ["Classic Cuts", "Beard Work", "Hot Towel Shave"],
    bio: "Master of traditional barbering with modern techniques. Your grandfather's barber with today's style.",
    availability: "Mon-Fri",
    price: "KSh 500+"
  },
  {
    id: 4,
    name: "Brian Maina",
    specialty: "Modern Styles",
    experience: "5 years",
    rating: 4.9,
    cuts: 1500,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
    skills: ["Textured Cuts", "Styling", "Hair Care"],
    bio: "Young, energetic barber with fresh perspectives on modern men's grooming.",
    availability: "Wed-Sun",
    price: "KSh 650+"
  },
  {
    id: 5,
    name: "Robert Odhiambo",
    specialty: "Beard Expert",
    experience: "7 years",
    rating: 4.8,
    cuts: 2200,
    image: "https://images.unsplash.com/photo-1544126591-1b5dd175a0f6?q=80&w=500&auto=format&fit=crop",
    skills: ["Beard Sculpting", "Line Ups", "Mustache Design"],
    bio: "Transforms beards into works of art. Specializes in shaping and maintenance.",
    availability: "Mon-Sat",
    price: "KSh 550+"
  },
  {
    id: 6,
    name: "Paul Njoroge",
    specialty: "All-Round Master",
    experience: "12 years",
    rating: 5.0,
    cuts: 4500,
    image: "https://images.unsplash.com/photo-1567894340315-735d35d7d364?q=80&w=500&auto=format&fit=crop",
    skills: ["All Styles", "Consultation", "Hair Health"],
    bio: "The shop's most experienced barber. Can execute any style with perfection.",
    availability: "Tue-Sat",
    price: "KSh 800+"
  }
];

export default function BarbersPage() {
  return (
    <div className="min-h-screen leather-bg">
      {/* Hero Section */}
      <section className="relative py-20 leather-bg border-b border-amber-400/20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop"
            alt="Barber team"
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
              Meet Our <span className="text-barber-gradient">Experts</span>
            </h1>
            <p className="text-xl text-amber-100/80 mb-8 text-shadow">
              Certified professionals with years of experience. Each barber brings unique skills to perfect your style.
            </p>
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full glass-barber border border-amber-400/20">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span className="text-white font-semibold">6 Certified Barbers</span>
              </div>
              <div className="w-px h-6 bg-amber-400/30"></div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-400" />
                <span className="text-white font-semibold">4.9/5 Average Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {barbers.map((barber, index) => (
            <motion.div
              key={barber.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-barber rounded-2xl overflow-hidden hover-lift group border border-amber-400/20"
            >
              {/* Barber Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={barber.image}
                  alt={barber.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 text-white font-bold text-sm flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  {barber.rating}
                </div>

                {/* Specialty Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="px-3 py-1 rounded-full barber-gradient text-[#1a120b] font-bold text-sm">
                    {barber.specialty}
                  </div>
                </div>
              </div>

              {/* Barber Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{barber.name}</h3>
                    <p className="text-amber-400 text-sm">{barber.experience} Experience</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-barber-gradient">{barber.price}</div>
                    <div className="text-xs text-amber-100/70">Starting price</div>
                  </div>
                </div>

                <p className="text-amber-100/80 text-sm mb-4 leading-relaxed">{barber.bio}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {barber.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs border border-amber-400/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-amber-100/70 border-t border-amber-400/20 pt-4">
                  <div className="flex items-center gap-1">
                    <Scissors className="w-4 h-4" />
                    {barber.cuts.toLocaleString()}+ cuts
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {barber.availability}
                  </div>
                </div>

                {/* Book Button */}
                <button className="w-full mt-4 py-3 rounded-full border-2 border-amber-400 text-amber-400 font-semibold hover:bg-amber-400 hover:text-[#1a120b] transition-all duration-300">
                  BOOK WITH {barber.name.split(' ')[0].toUpperCase()}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="glass-barber rounded-3xl p-12 text-center border border-amber-400/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-shadow">
            Not Sure Which Barber?
          </h2>
          <p className="text-xl text-amber-100/80 mb-8 max-w-2xl mx-auto">
            Our reception team will match you with the perfect barber based on your style preferences and hair type.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-full barber-gradient text-[#1a120b] font-bold text-lg hover:shadow-2xl transition-all duration-300">
              GET BARBER RECOMMENDATION
            </button>
            <a 
              href="tel:+254712345678"
              className="px-8 py-4 rounded-full border-2 border-amber-400 text-amber-400 font-bold text-lg hover:bg-amber-400 hover:text-[#1a120b] transition-all duration-300"
            >
              CALL TO CONSULT
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
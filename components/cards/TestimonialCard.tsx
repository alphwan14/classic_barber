import Image from 'next/image';
import { Star } from 'lucide-react';

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  style: string;
}

interface TestimonialCardProps {
  t: Testimonial;
}

export function TestimonialCard({ t }: TestimonialCardProps) {
  return (
    <div className="glass-barber rounded-2xl p-6 border border-amber-400/20">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={t.avatar}
            alt={t.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <h4 className="font-semibold text-white">{t.name}</h4>
          <p className="text-amber-400 text-sm">{t.style}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < t.rating ? "text-amber-400 fill-amber-400" : "text-gray-400"} 
          />
        ))}
      </div>
      <p className="text-amber-100/70 text-sm leading-relaxed">"{t.text}"</p>
    </div>
  );
}
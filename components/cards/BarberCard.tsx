import Image from 'next/image';
import { Star } from 'lucide-react';

export interface Barber {
  id: string;
  name: string;
  photo: string;
  specialty: string;
  experienceYears: number;
  rating: number;
}

interface BarberCardProps {
  barber: Barber;
}

export function BarberCard({ barber }: BarberCardProps) {
  return (
    <div className="glass-barber rounded-2xl overflow-hidden border border-amber-400/20">
      <div className="relative h-64">
        <Image
          src={barber.photo}
          alt={barber.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{barber.name}</h3>
        <p className="text-amber-400 mb-2">{barber.specialty}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < barber.rating ? "text-amber-400 fill-amber-400" : "text-gray-400"} 
              />
            ))}
          </div>
          <span className="text-amber-100/70 text-sm">{barber.experienceYears} years</span>
        </div>
      </div>
    </div>
  );
}
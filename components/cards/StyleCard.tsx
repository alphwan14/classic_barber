import Image from 'next/image';
import { Clock } from 'lucide-react';

export interface StyleItem {
  id: string;
  name: string;
  image: string;
  price: number;
  durationMins: number;
  description: string;
  category: string;
}

interface StyleCardProps {
  item: StyleItem;
}

export function StyleCard({ item }: StyleCardProps) {
  return (
    <div className="glass-barber rounded-2xl overflow-hidden border border-amber-400/20 group hover-lift">
      <div className="relative h-48">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full barber-gradient text-[#1a120b] font-bold text-sm">
          KSh {item.price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
        <p className="text-amber-100/70 text-sm mb-4">{item.description}</p>
        <div className="flex items-center justify-between text-sm text-amber-100/70">
          <span className="capitalize">{item.category}</span>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{item.durationMins} min</span>
          </div>
        </div>
      </div>
    </div>
  );
}

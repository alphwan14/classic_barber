import { Star } from 'lucide-react';

export function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill={i < rating ? '#D4AF37' : 'transparent'} />
      ))}
    </div>
  );
}





import Image from 'next/image';

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onAdd: (id: string) => void;
}

export function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <div className="glass-barber rounded-2xl overflow-hidden border border-amber-400/20 group hover-lift">
      <div className="relative h-48">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-amber-100/70 text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-amber-400 font-bold">KSh {product.price}</span>
          <button 
            onClick={() => onAdd(product.id)}
            className="px-4 py-2 rounded-full barber-gradient text-[#1a120b] font-semibold text-sm hover:shadow-glow transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

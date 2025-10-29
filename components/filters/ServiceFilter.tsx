"use client";

export type ServiceCategory = 'all' | 'haircuts' | 'beards' | 'kids' | 'vip';

interface ServiceFilterProps {
  onChange: (category: ServiceCategory) => void;
}

export function ServiceFilter({ onChange }: ServiceFilterProps) {
  const categories = [
    { id: 'all' as ServiceCategory, name: 'All Services' },
    { id: 'haircuts' as ServiceCategory, name: 'Haircuts' },
    { id: 'beards' as ServiceCategory, name: 'Beard Work' },
    { id: 'kids' as ServiceCategory, name: 'Kids Cuts' },
    { id: 'vip' as ServiceCategory, name: 'VIP Services' }
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onChange(category.id)}
          className="px-4 py-2 rounded-full glass-barber border border-amber-400/20 text-amber-100/80 hover:text-amber-400 transition-colors"
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
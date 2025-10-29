"use client";
import { Section } from '@/components/Section';
import { products } from '@/data/products';
import { ProductCard } from '@/components/cards/ProductCard';
import { useState } from 'react';

export default function ShopPage() {
  const [cart, setCart] = useState<string[]>([]);
  function add(id: string) { setCart((c) => [...c, id]); }

  return (
    <Section title="Grooming Products" subtitle="Shop">
      <div className="grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={add} />
          ))}
        </div>
        <div className="lg:col-span-1 glass rounded-xl p-5 h-fit sticky top-24">
          <h3 className="font-semibold mb-3">Cart (mock)</h3>
          <ul className="space-y-2 text-sm">
            {cart.length === 0 && <li className="text-silver/70">No items added.</li>}
            {cart.map((id, idx) => {
              const item = products.find((p) => p.id === id)!;
              return (
                <li key={`${id}-${idx}`} className="flex items-center justify-between">
                  <span>{item.name}</span>
                  <span className="text-gold">Ksh {item.price}</span>
                </li>
              );
            })}
          </ul>
          <div className="mt-3 text-sm">Total: <span className="text-gold font-semibold">Ksh {cart.reduce((s, id) => s + (products.find((p) => p.id === id)?.price ?? 0), 0)}</span></div>
          <div className="mt-3 text-xs text-silver/70">Add to booking at checkout.</div>
        </div>
      </div>
    </Section>
  );
}




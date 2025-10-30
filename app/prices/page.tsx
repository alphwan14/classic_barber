import { Section } from '@/components/Section';
import { priceList, vipList } from '@/data/prices';

export default function PricesPage() {
  return (
    <div className="min-h-screen leather-bg py-12">
      <Section title="Price List" subtitle="Transparent">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-barber rounded-2xl p-6 border border-amber-400/20">
            <h3 className="font-semibold text-white text-xl mb-4">Services</h3>
            <ul className="divide-y divide-amber-400/20">
              {priceList.map((p) => (
                <li key={p.id} className="py-3 flex items-center justify-between">
                  <span className="text-amber-100/90">{p.name}</span>
                  <span className="text-barber-gradient font-bold">Ksh {p.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-barber rounded-2xl p-6 border border-amber-400/20">
            <h3 className="font-semibold text-white text-xl mb-4">VIP Service</h3>
            <ul className="divide-y divide-amber-400/20">
              {vipList.map((v) => (
                <li key={v.id} className="py-3">
                  <div className="flex items-center justify-between">
                    <span className="text-amber-100/90">{v.name}</span>
                    <span className="text-barber-gradient font-bold">Ksh {v.price}</span>
                  </div>
                  {/* FIX: Use 'description' instead of 'desc' */}
                  <p className="text-sm text-amber-100/70 mt-2">{v.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
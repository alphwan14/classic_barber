import { Section } from '@/components/Section';
import { priceList, vipList } from '@/data/prices';

export default function PricesPage() {
  return (
    <Section title="Price List" subtitle="Transparent">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass rounded-xl p-5">
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="divide-y divide-white/10">
            {priceList.map((p) => (
              <li key={p.id} className="py-3 flex items-center justify-between">
                <span>{p.name}</span>
                <span className="text-gold font-semibold">Ksh {p.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="glass rounded-xl p-5">
          <h3 className="font-semibold mb-3">VIP Service</h3>
          <ul className="divide-y divide-white/10">
            {vipList.map((v) => (
              <li key={v.id} className="py-3">
                <div className="flex items-center justify-between">
                  <span>{v.name}</span>
                  <span className="text-gold font-semibold">Ksh {v.price}</span>
                </div>
                <p className="text-sm text-silver/70">{v.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}




import { Section } from '@/components/Section';
import { promotions } from '@/data/promotions';

export default function PromotionsPage() {
  return (
    <Section title="Promotions & Loyalty" subtitle="Save More">
      <div className="grid md:grid-cols-3 gap-6">
        {promotions.map((p) => (
          <div key={p.id} className="glass rounded-xl p-5 border border-transparent hover:border-gold/40 transition">
            {p.badge && <div className="inline-block text-xs px-2 py-1 rounded-md bg-gold/10 text-gold border border-gold/40 mb-2">{p.badge}</div>}
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-silver/80 mt-1">{p.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}





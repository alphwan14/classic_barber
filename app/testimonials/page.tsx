import { Section } from '@/components/Section';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen leather-bg py-12">
      <Section title="Client Reviews" subtitle="Testimonials">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} t={testimonial} />
          ))}
        </div>
      </Section>
    </div>
  );
}

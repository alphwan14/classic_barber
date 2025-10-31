"use client";
import { Section } from '@/components/Section';
import { useState } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  function submit(e: React.FormEvent) { e.preventDefault(); setSent(true); }

  return (
    <Section title="Location & Contact" subtitle="Find Us">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass rounded-xl overflow-hidden">
          <iframe
            title="Map"
            className="w-full h-[360px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63829.11186409596!2d39.627!3d-4.0435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1840134d0d2a8a0d%3A0x8d5c2a64d5d9f!2sMombasa!5e0!3m2!1sen!2ske!4v1687799999999"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="glass rounded-xl p-5">
          <h3 className="font-semibold mb-3">Contact Info</h3>
          <ul className="text-sm text-silver/80 space-y-1">
            <li>Address: Moi Avenue, Mombasa</li>
            <li>Phone: +254 712 345 678</li>
            <li>Email: hello@classicbarber.ke</li>
            <li>WhatsApp: wa.me/254712345678</li>
            <li>Hours: Mon–Sun: 9:00 AM – 8:00 PM</li>
          </ul>
          <form onSubmit={submit} className="mt-5 space-y-3">
            <div>
              <label className="text-sm">Name</label>
              <input className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border border-white/15" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm">Message</label>
              <textarea className="w-full mt-1 px-3 py-2 rounded-md bg-transparent border border-white/15" rows={4} placeholder="How can we help?" />
            </div>
            <button className="px-4 py-2 rounded-md bg-gold text-gray-900 font-medium">Send</button>
            {sent && <div className="text-sm text-green-400">Thanks! We will get back to you.</div>}
          </form>
        </div>
      </div>
    </Section>
  );
}





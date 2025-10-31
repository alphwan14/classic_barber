"use client";
import { Section } from '@/components/Section';
import { useState } from 'react';
import { services } from '@/data/services';
import { barbers } from '@/data/barbers';
import { products } from '@/data/products';

type Tab = 'bookings' | 'styles' | 'barbers' | 'products' | 'revenue';

export default function AdminPage() {
  const [tab, setTab] = useState<Tab>('bookings');
  const tabs: { key: Tab; label: string }[] = [
    { key: 'bookings', label: 'Manage Bookings' },
    { key: 'styles', label: 'Manage Styles' },
    { key: 'barbers', label: 'Manage Barbers' },
    { key: 'products', label: 'Manage Products' },
    { key: 'revenue', label: 'Daily Revenue' }
  ];

  return (
    <Section title="Admin Dashboard (Demo)" subtitle="/admin">
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((t) => (
          <button key={t.key} onClick={() => setTab(t.key)} className={`px-3 py-2 rounded-md text-sm border ${tab === t.key ? 'bg-gold text-gray-900 border-gold' : 'glass border-white/10'}`}>{t.label}</button>
        ))}
      </div>
      {tab === 'bookings' && <BookingsTable />}
      {tab === 'styles' && <StylesTable />}
      {tab === 'barbers' && <BarbersTable />}
      {tab === 'products' && <ProductsTable />}
      {tab === 'revenue' && <RevenueChart />}
    </Section>
  );
}

function Table({ columns, rows }: { columns: string[]; rows: (string | number)[][] }) {
  return (
    <div className="glass rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-white/5">
          <tr>
            {columns.map((c) => (
              <th key={c} className="text-left px-4 py-3 font-medium">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-white/10">
              {r.map((cell, j) => (
                <td key={j} className="px-4 py-3">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BookingsTable() {
  const columns = ['Ref', 'Client', 'Service', 'Barber', 'Date', 'Time', 'Total'];
  const rows = [
    ['AB12CD', 'John Doe', 'Signature Fade', 'Brian', '2025-11-01', '14:00', 'Ksh 600'],
    ['EF34GH', 'Mary Jane', 'Beard Line & Trim', 'Salim', '2025-11-02', '10:30', 'Ksh 300']
  ];
  return <Table columns={columns} rows={rows} />;
}

function StylesTable() {
  const columns = ['Style', 'Category', 'Duration', 'Price'];
  const rows = services.map((s) => [s.name, s.category, `${s.durationMins} mins`, `Ksh ${s.price}`]);
  return <Table columns={columns} rows={rows} />;
}

function BarbersTable() {
  const columns = ['Name', 'Specialty', 'Experience', 'Rating'];
  const rows = barbers.map((b) => [b.name, b.specialty, `${b.experienceYears} years`, `${b.rating}/5`]);
  return <Table columns={columns} rows={rows} />;
}

function ProductsTable() {
  const columns = ['Product', 'Price'];
  const rows = products.map((p) => [p.name, `Ksh ${p.price}`]);
  return <Table columns={columns} rows={rows} />;
}

function RevenueChart() {
  const data = [
    { day: 'Mon', amount: 12000 },
    { day: 'Tue', amount: 9800 },
    { day: 'Wed', amount: 15000 },
    { day: 'Thu', amount: 13400 },
    { day: 'Fri', amount: 16800 },
    { day: 'Sat', amount: 22000 },
    { day: 'Sun', amount: 14000 }
  ];
  const max = Math.max(...data.map((d) => d.amount));
  return (
    <div className="glass rounded-xl p-5">
      <h3 className="font-semibold mb-3">Daily Revenue (Mock)</h3>
      <div className="grid grid-cols-7 gap-3 items-end h-48">
        {data.map((d) => (
          <div key={d.day} className="text-center">
            <div className="mx-auto w-full bg-gold/20 rounded-t-md" style={{ height: `${(d.amount / max) * 100}%` }} />
            <div className="text-xs text-silver/70 mt-1">{d.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
}





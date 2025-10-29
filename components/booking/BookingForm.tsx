"use client";

export function BookingForm() {
  return (
    <div className="glass-barber rounded-2xl p-6 border border-amber-400/20">
      <h3 className="text-2xl font-bold text-white mb-6">Book Your Appointment</h3>
      <form className="space-y-4">
        <div>
          <label className="block text-amber-100/80 mb-2">Your Name</label>
          <input 
            type="text" 
            className="w-full p-3 rounded-lg bg-white/5 border border-amber-400/20 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-amber-100/80 mb-2">Phone Number</label>
          <input 
            type="tel" 
            className="w-full p-3 rounded-lg bg-white/5 border border-amber-400/20 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="+254 XXX XXX XXX"
          />
        </div>
        <div>
          <label className="block text-amber-100/80 mb-2">Service</label>
          <select className="w-full p-3 rounded-lg bg-white/5 border border-amber-400/20 text-white focus:outline-none focus:ring-2 focus:ring-amber-400">
            <option>Signature Fade - KSh 700</option>
            <option>Classic Cut - KSh 600</option>
            <option>Beard Trim - KSh 400</option>
            <option>Royal Treatment - KSh 1200</option>
          </select>
        </div>
        <button 
          type="submit"
          className="w-full py-3 rounded-full barber-gradient text-[#1a120b] font-bold text-lg hover:shadow-glow transition-all"
        >
          BOOK APPOINTMENT
        </button>
      </form>
    </div>
  );
}
"use client";
import { Section } from '@/components/Section';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Scissors, MapPin, Phone } from 'lucide-react';

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedBarber, setSelectedBarber] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const services = [
    { id: 'fade', name: 'Fade Cut', price: 700, duration: '45 min' },
    { id: 'afro', name: 'Afro Style', price: 600, duration: '60 min' },
    { id: 'beard', name: 'Beard Trim', price: 300, duration: '20 min' },
    { id: 'traditional', name: 'Traditional Cut', price: 500, duration: '30 min' },
    { id: 'full', name: 'Full Service', price: 1200, duration: '75 min' }
  ];

  const barbers = [
    { id: 'james', name: 'James Mwangi', specialty: 'Fade Master' },
    { id: 'david', name: 'David Ochieng', specialty: 'Afro Specialist' },
    { id: 'mike', name: 'Mike Kamau', specialty: 'Traditional Cuts' },
    { id: 'any', name: 'Any Available Barber', specialty: 'Fastest Service' }
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
    '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM'
  ];

  return (
    <div className="min-h-screen leather-bg py-12">
      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-shadow-lg">
              Book Your <span className="text-barber-gradient">Appointment</span>
            </h1>
            <p className="text-xl text-amber-100/80 text-shadow">
              4 simple steps to your perfect haircut
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center">
              {[1, 2, 3, 4].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-2 transition-all duration-300 ${
                    step === stepNumber
                      ? 'barber-gradient text-[#1a120b] border-amber-400'
                      : step > stepNumber
                      ? 'bg-amber-400 text-[#1a120b] border-amber-400'
                      : 'glass-barber text-amber-100/70 border-amber-400/30'
                  }`}>
                    {stepNumber}
                  </div>
                  {stepNumber < 4 && (
                    <div className={`w-16 h-1 mx-2 transition-all duration-300 ${
                      step > stepNumber ? 'barber-gradient' : 'bg-amber-400/20'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="glass-barber rounded-3xl p-8 border border-amber-400/20">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Scissors className="w-6 h-6 text-amber-400" />
                  Choose Your Service
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                        selectedService === service.id
                          ? 'border-amber-400 bg-amber-400/10'
                          : 'border-amber-400/20 glass-barber hover:border-amber-400/50'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-white text-lg">{service.name}</h3>
                        <div className="text-barber-gradient font-bold">KSh {service.price}</div>
                      </div>
                      <div className="flex items-center gap-2 text-amber-100/70 text-sm">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setStep(2)}
                  disabled={!selectedService}
                  className="w-full py-4 rounded-full barber-gradient text-[#1a120b] font-bold text-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  CONTINUE TO BARBER SELECTION
                </button>
              </motion.div>
            )}

            {/* Step 2: Barber Selection */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <User className="w-6 h-6 text-amber-400" />
                  Choose Your Barber
                </h2>
                
                <div className="grid gap-4">
                  {barbers.map((barber) => (
                    <div
                      key={barber.id}
                      onClick={() => setSelectedBarber(barber.id)}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                        selectedBarber === barber.id
                          ? 'border-amber-400 bg-amber-400/10'
                          : 'border-amber-400/20 glass-barber hover:border-amber-400/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-bold text-white text-lg">{barber.name}</h3>
                          <p className="text-amber-400 text-sm">{barber.specialty}</p>
                        </div>
                        {barber.id === 'any' && (
                          <div className="text-green-400 text-sm font-semibold">
                            Fastest Available
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 py-4 rounded-full border-2 border-amber-400 text-amber-400 font-bold text-lg hover:bg-amber-400 hover:text-[#1a120b] transition-all duration-300"
                  >
                    BACK
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!selectedBarber}
                    className="flex-1 py-4 rounded-full barber-gradient text-[#1a120b] font-bold text-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    CONTINUE TO DATE & TIME
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Date & Time */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-amber-400" />
                  Select Date & Time
                </h2>
                
                {/* Date Selection */}
                <div className="mb-6">
                  <label className="block text-white font-semibold mb-3">Choose Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-4 rounded-2xl glass-barber border border-amber-400/20 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                {/* Time Slots */}
                <div>
                  <label className="block text-white font-semibold mb-3">Available Time Slots</label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                          selectedTime === time
                            ? 'barber-gradient text-[#1a120b]'
                            : 'glass-barber text-amber-100/80 hover:text-amber-400 hover:border-amber-400/50'
                        } border border-amber-400/20`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 py-4 rounded-full border-2 border-amber-400 text-amber-400 font-bold text-lg hover:bg-amber-400 hover:text-[#1a120b] transition-all duration-300"
                  >
                    BACK
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    disabled={!selectedDate || !selectedTime}
                    className="flex-1 py-4 rounded-full barber-gradient text-[#1a120b] font-bold text-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    CONTINUE TO CONFIRM
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                  Confirm Your Appointment
                </h2>
                
                <div className="glass-barber rounded-2xl p-6 border border-amber-400/20">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-amber-100/80">Service:</span>
                      <span className="text-white font-semibold">
                        {services.find(s => s.id === selectedService)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-amber-100/80">Barber:</span>
                      <span className="text-white font-semibold">
                        {barbers.find(b => b.id === selectedBarber)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-amber-100/80">Date & Time:</span>
                      <span className="text-white font-semibold">
                        {selectedDate} at {selectedTime}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-amber-400/20">
                      <span className="text-amber-100/80">Total:</span>
                      <span className="text-barber-gradient text-xl font-bold">
                        KSh {services.find(s => s.id === selectedService)?.price}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-center text-amber-100/70 text-sm">
                  <p>📍 Moi Avenue, Mombasa</p>
                  <p>📞 We'll send confirmation via SMS & WhatsApp</p>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 py-4 rounded-full border-2 border-amber-400 text-amber-400 font-bold text-lg hover:bg-amber-400 hover:text-[#1a120b] transition-all duration-300"
                  >
                    BACK
                  </button>
                  <button
                    onClick={() => alert('Booking confirmed! We will send you a confirmation message.')}
                    className="flex-1 py-4 rounded-full barber-gradient text-[#1a120b] font-bold text-lg hover:shadow-2xl transition-all duration-300"
                  >
                    CONFIRM BOOKING
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Quick Contact */}
          <div className="text-center mt-8 text-amber-100/70">
            <p>Need help? Call us at <a href="tel:+254712345678" className="text-amber-400 font-semibold">+254 712 345 678</a></p>
          </div>
        </div>
      </Section>
    </div>
  );
}

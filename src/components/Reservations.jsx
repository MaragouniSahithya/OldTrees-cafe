import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Reservations = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="reservations" className="py-24 bg-gradient-to-br from-forest-dark to-dark border-t border-gold/10 relative overflow-hidden">
      {/* Decorative Leaves Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-40 w-96 h-96 bg-forest rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 left-20 w-96 h-96 bg-wood-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase mb-4"
          >
            Table Booking
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4"
          >
            Reserve Your <span className="italic text-gold font-normal">Perfect Spot</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-cream/60 max-w-2xl mx-auto"
          >
            Secure your table under our old trees — we'll make sure your visit is unforgettable.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-stretch">
          
          {/* Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
              <span className="text-3xl">⏰</span>
              <div>
                <h4 className="text-gold font-bold mb-1 text-sm uppercase tracking-wider">Opening Hours</h4>
                <p className="text-cream/70 text-sm leading-relaxed">Every day: 10:00 AM – 11:00 PM</p>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
              <span className="text-3xl">📞</span>
              <div>
                <h4 className="text-gold font-bold mb-1 text-sm uppercase tracking-wider">Call Us Directly</h4>
                <a href="tel:+918790046493" className="text-cream/90 hover:text-gold transition-colors font-medium">
                  +91 8790046493
                </a>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
              <span className="text-3xl">💰</span>
              <div>
                <h4 className="text-gold font-bold mb-1 text-sm uppercase tracking-wider">Average Cost</h4>
                <p className="text-cream/70 text-sm leading-relaxed">~₹1,500 – ₹1,600 for two people (approx.)</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
              <span className="text-3xl">🎉</span>
              <div>
                <h4 className="text-gold font-bold mb-1 text-sm uppercase tracking-wider">Events & Parties</h4>
                <p className="text-cream/70 text-sm leading-relaxed">We host private events & live music nights.</p>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 rounded-3xl relative"
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-4xl mb-6 shadow-lg shadow-green-500/20">
                  ✓
                </div>
                <h3 className="text-3xl font-serif text-cream mb-4">Request sent!</h3>
                <p className="text-cream/70 max-w-md">
                  Thank you for choosing Old Trees Cafe. We have received your reservation request and will call you shortly on the provided number to confirm your table.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-gold hover:text-gold-light border-b border-gold/30 hover:border-gold pb-1 transition-colors"
                >
                  Make another booking
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-cream/60">Your Name</label>
                    <input 
                      type="text" id="name" required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all placeholder:text-cream/20"
                      placeholder="e.g. Rahul Sharma"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-cream/60">Phone Number</label>
                    <input 
                      type="tel" id="phone" required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all placeholder:text-cream/20"
                      placeholder="+91 9XXXXXXXXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-xs font-semibold uppercase tracking-wider text-cream/60">Date</label>
                    <input 
                      type="date" id="date" required 
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="time" className="text-xs font-semibold uppercase tracking-wider text-cream/60">Time</label>
                    <input 
                      type="time" id="time" required min="10:00" max="22:30"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="guests" className="text-xs font-semibold uppercase tracking-wider text-cream/60">Number of Guests</label>
                  <select 
                    id="guests" required
                    className="w-full bg-[#1e2a1e] border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all appearance-none"
                  >
                    <option value="" disabled selected>Select guests</option>
                    {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                    <option value="7+">7+ Guests (Large Party)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="requests" className="text-xs font-semibold uppercase tracking-wider text-cream/60">Special Requests (Optional)</label>
                  <textarea 
                    id="requests" rows="3"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all placeholder:text-cream/20 resize-y min-h-[100px]"
                    placeholder="Birthday celebration, dietary needs, pet-friendly table..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="glass-button w-full mt-2 flex justify-center items-center py-4"
                >
                  {status === 'loading' ? 'Processing...' : 'Confirm Reservation'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;

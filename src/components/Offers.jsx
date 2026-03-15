import React from 'react';
import { motion } from 'framer-motion';

const offersData = [
  {
    provider: "EazyDiner",
    discount: "25% OFF",
    desc: "Get flat 25% off on your total food / drinks bill via EazyDiner bookings.",
    code: "ED25 OTC",
    color: "from-orange-500/20 to-orange-600/10",
    border: "border-orange-500/30",
    text: "text-orange-400"
  },
  {
    provider: "PayEazy",
    discount: "Up to ₹1000 OFF",
    desc: "Extra savings when you pay via the PayEazy app at the restaurant.",
    code: "PAY1000",
    color: "from-blue-500/20 to-blue-600/10",
    border: "border-blue-500/30",
    text: "text-blue-400"
  },
  {
    provider: "Zomato Pro",
    discount: "15% OFF",
    desc: "Exclusive discount for Zomato Pro members on dining in.",
    code: "PRO15",
    color: "from-red-500/20 to-red-600/10",
    border: "border-red-500/30",
    text: "text-red-400"
  }
];

const Offers = () => {
  return (
    <section id="offers" className="py-24 bg-gradient-to-b from-[#1a2e1a] to-dark border-t border-gold/10 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-forest-light/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase mb-4"
          >
            Special Deals
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4"
          >
            Exclusive <span className="italic text-gold font-normal">Offers</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offersData.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden glass-card rounded-2xl p-8 border ${offer.border} group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <span className={`text-sm font-bold uppercase tracking-wider ${offer.text} bg-dark/40 px-3 py-1 rounded-md backdrop-blur-md`}>
                    {offer.provider}
                  </span>
                  <span className="text-2xl">🎟️</span>
                </div>
                
                <h3 className="text-3xl font-serif font-bold text-cream mb-3">
                  {offer.discount}
                </h3>
                <p className="text-cream/70 text-sm mb-8 flex-grow leading-relaxed">
                  {offer.desc}
                </p>
                
                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs text-cream/50 uppercase tracking-widest">Apply Code</span>
                  <span className="font-mono font-bold text-cream bg-white/5 py-1 px-3 rounded text-sm border border-white/10 group-hover:border-gold/50 transition-colors">
                    {offer.code}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;

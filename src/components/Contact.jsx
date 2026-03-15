import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-dark border-t border-gold/10 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase mb-4"
          >
            Find Us
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4"
          >
            Visit us in <span className="italic text-gold font-normal">Kompally</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
          
          {/* Map Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl overflow-hidden p-2 shadow-2xl h-full min-h-[400px]"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15217.433434608307!2d78.47355755!3d17.5380598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f0037a1a473%3A0x633d026bd6c62c95!2sOld%20Trees%20Cafe!5e0!3m2!1sen!2sin!4v1709403310000!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full border-0 filter brightness-90 contrast-125 grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location for Old Trees Cafe"
              />
            </div>
          </motion.div>

          {/* Details Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-dark-light rounded-2xl flex items-center justify-center text-gold text-2xl flex-shrink-0 border border-white/5 shadow-inner shadow-white/5">
                📍
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-cream mb-2">Address</h4>
                <p className="text-cream/60 leading-relaxed text-sm">
                  H 2-66/1, Kandlakoya, <br/>
                  Opposite KSR Convention, NH-44, Medchal,<br/>
                  Kompally, Hyderabad – 500014
                </p>
                <a 
                  href="https://goo.gl/maps/xyz" 
                  target="_blank" rel="noopener noreferrer"
                  className="inline-block mt-3 text-gold text-sm font-semibold hover:text-gold-light transition-colors"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 bg-dark-light rounded-2xl flex items-center justify-center text-gold text-2xl flex-shrink-0 border border-white/5 shadow-inner shadow-white/5">
                📞
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-cream mb-2">Contact</h4>
                <a href="tel:+918790046493" className="block text-cream/80 hover:text-gold transition-colors text-lg mb-1">
                  +91 87900 46493
                </a>
                <a href="mailto:hello@oldtreescafe.com" className="block text-cream/60 hover:text-gold transition-colors text-sm">
                  hello@oldtreescafe.com
                </a>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 bg-dark-light rounded-2xl flex items-center justify-center text-gold text-2xl flex-shrink-0 border border-white/5 shadow-inner shadow-white/5">
                🌿
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-cream mb-2">Follow Us</h4>
                <p className="text-cream/60 text-sm mb-3">
                  Join our community of 3,200+ nature lovers.
                </p>
                <a 
                  href="https://www.instagram.com/otc.kompally" 
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:shadow-pink-500/30 hover:-translate-y-0.5 transition-all"
                >
                  Instagram @otc.kompally
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

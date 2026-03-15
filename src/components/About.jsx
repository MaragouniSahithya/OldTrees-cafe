import React from 'react';
import { motion } from 'framer-motion';

const featurePills = [
  { icon: '🐾', text: 'Pet-Friendly' },
  { icon: '🎵', text: 'Live Music' },
  { icon: '📶', text: 'Free Wi-Fi' },
  { icon: '🌿', text: 'Outdoor Garden Seating' },
  { icon: '💳', text: 'Cards Accepted' },
  { icon: '☕', text: 'No Alcohol' },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-dark via-[#1a2e1a] to-dark relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 10% 20%, #2D4A2D 0%, transparent 40%), radial-gradient(circle at 90% 80%, #5C3A1E 0%, transparent 40%)'
        }}
      />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image & Badges */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2 shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/7aa3sC-UeztUV81tzN63vMngxJ0uwmFdpA6FfoOrT8CArj_Csv3EbQhUqYj1RY57TJAg1b2C5fD1wub_vx2eugqAac3SD-uAxMYH2ZdH=w1200-rw" 
                alt="Old Trees Cafe serene garden ambiance"
                className="w-full h-full object-cover rounded-[1.25rem] transition-transform duration-700 hover:scale-105"
                loading="lazy"
                onError={(e) => { 
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800';
                }}
              />
              
              {/* Rating Badges Floating Overlay */}
              <div className="absolute top-6 -right-6 md:-right-8 flex flex-col gap-4 drop-shadow-2xl z-20">
                <div className="bg-cream text-dark p-4 rounded-xl flex items-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
                  <div className="w-10 h-10 bg-[#4285F4] text-white rounded-full flex items-center justify-center font-bold font-sans">G</div>
                  <div>
                    <div className="flex text-[#FFC107] text-sm">★★★★★</div>
                    <div className="font-bold whitespace-nowrap">4.6<span className="text-dark/50 text-xs font-normal ml-1">/ 5</span></div>
                  </div>
                </div>
                
                <div className="bg-cream text-dark p-4 rounded-xl flex items-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.4)] transform translate-x-4">
                  <div className="w-10 h-10 bg-[#E23744] text-white rounded-full flex items-center justify-center font-bold font-sans">Z</div>
                  <div>
                    <div className="flex text-[#FFC107] text-sm">★★★★½</div>
                    <div className="font-bold whitespace-nowrap">4.5<span className="text-dark/50 text-xs font-normal ml-1">/ 5</span></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-gold text-dark p-6 rounded-2xl glass-card hidden md:block">
              <span className="font-serif italic text-xl font-bold">~ 1,500</span>
              <p className="text-sm font-medium mt-1 uppercase tracking-wider text-dark/70">For Two</p>
            </div>
          </motion.div>
          
          {/* Right Column: Story & Pills */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase mb-6 w-max">
              Our Story
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
              A cafe born from <br/>
              <span className="italic text-gold font-normal">nature's embrace</span>
            </h2>
            
            <div className="prose prose-invert prose-lg text-cream/70 mb-8 max-w-none">
              <p className="mb-4 text-lg">
                Nestled beneath the majestic canopy of ancient trees in Kandlakoya, Kompally, Old Trees Cafe is more than a restaurant — it's a sanctuary from the city's hustle.
              </p>
              <p>
                We believe the best meals are shared under open skies, surrounded by the rustling of leaves, the warmth of good company, and music that touches the soul. From our signature peri peri chicken to our rustic vegetable pizzas, every dish is crafted with passion and served in an atmosphere that feels remarkably like home.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {featurePills.map((pill, index) => (
                <div 
                  key={index} 
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-cream/90 flex items-center gap-2 transition-colors hover:bg-gold/20 hover:border-gold/30 hover:text-gold cursor-default"
                >
                  <span className="text-base">{pill.icon}</span>
                  {pill.text}
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xl">
                  ⏰
                </div>
                <div>
                  <h4 className="font-bold text-cream text-sm">Open All Days</h4>
                  <p className="text-cream/60 text-xs">10:00 AM – 11:00 PM</p>
                </div>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

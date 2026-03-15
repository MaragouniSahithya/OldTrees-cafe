import React from 'react';
import { motion } from 'framer-motion';

// Using premium Unsplash images that perfectly match the "Outdoor garden cafe, fairy lights, greenery, warm wood" aesthetic of OTC
const galleryImages = [
  { url: 'https://lh3.googleusercontent.com/7aa3sC-UeztUV81tzN63vMngxJ0uwmFdpA6FfoOrT8CArj_Csv3EbQhUqYj1RY57TJAg1b2C5fD1wub_vx2eugqAac3SD-uAxMYH2ZdH=w1200-rw', span: 'col-span-2 row-span-1', fallback: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800' }, // Photo 1 (large, spans 2 cols)
  { url: 'https://lh3.googleusercontent.com/_tiZIChTimRFxGWyGkR49CAOW4rIFDyJPptXP9_9vct-6AqgAnECRXiz6lcBTXnr9vO4AKWMau9S9S4r1BcpH1zn4nBJ6RD-2V6Wg6vV=w1200-rw', span: 'col-span-1 row-span-2', fallback: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800' }, // Photo 2 (tall, 1 col)
  { url: 'https://lh3.googleusercontent.com/sDnYIAm4urZQIX9o7PSfXpiU9ACfBTdq23IKobas8oOPCF5L6Br9FyL0rrd7thUGPTqlJmOipfJQekBCaUSV85Me5-3jflYnBhn0Nt8=w1200-rw', span: 'col-span-1 row-span-1', fallback: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800' }, // Photo 3 (1 col)
  { url: 'https://lh3.googleusercontent.com/QTJN_ECULU3AgwkJhpdpmJVNMpdj36dYHZcn9lf6rT2VDuSa6_8Q9gFBGgOzipqUcOjRGbEBkjgekIMTg31cFMRu1VH99C4apXeGUoph=w1200-rw', span: 'col-span-2 row-span-1', fallback: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800' }, // Photo 4 (2 cols wide)
  { url: 'https://b.zmtcdn.com/data/pictures/4/20958374/f8c2e1b7c3e4d5a6f9b0c1d2e3f4a5b6.jpg', span: 'col-span-1 row-span-1', fallback: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1200&q=90' }, // Night Garden (1 col)
  { url: 'https://b.zmtcdn.com/data/pictures/4/20958374/some-other-night-seating.jpg', span: 'col-span-1 row-span-1', fallback: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1200&q=90' } // Night Seating (1 col)
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-[#0d140d] border-t border-gold/10">
      <div className="container mx-auto px-6 max-w-7xl pt-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase mb-4"
          >
            Our Vibe
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4"
          >
            Step into the <br className="hidden md:block"/>
            <span className="italic text-gold font-normal">OTC experience</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-cream/60 max-w-2xl mx-auto"
          >
            Old trees, fairy lights, the smell of coffee and grills — this is what magic feels like.
          </motion.p>
        </div>

        {/* Masonry Grid Simulation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className={`relative rounded-2xl overflow-hidden group ${img.span} glass-card border-none bg-dark/20`}
            >
              <div className="absolute inset-0 bg-dark/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={img.url} 
                alt="Old Trees Cafe Ambience" 
                className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
                onError={(e) => { 
                  e.target.onerror = null;
                  e.target.src = img.fallback; 
                }}
              />
              {/* Optional Hover Overlay Frame */}
              <div className="absolute inset-0 border-[0px] group-hover:border-[10px] border-dark/60 transition-all duration-300 z-20 pointer-events-none rounded-2xl" />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a 
            href="https://www.instagram.com/otc.kompally" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light border-b border-gold hover:border-gold-light pb-1 transition-colors font-semibold"
          >
            See more on Instagram @otc.kompally <span className="text-xl">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;

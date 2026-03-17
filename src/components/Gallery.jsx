import React from 'react';
import { motion } from 'framer-motion';

// 6 unique high-quality Unsplash images — each different, all matching OTC's
// warm, dark, garden cafe, natural greenery aesthetic
const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&q=90&auto=format&fit=crop',
    alt: 'Warm cafe interior with plants',
  },
  {
    url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=90&auto=format&fit=crop',
    alt: 'Outdoor cafe seating',
  },
  {
    url: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=90&auto=format&fit=crop',
    alt: 'Cafe ambience with warm lights',
  },
  {
    url: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=90&auto=format&fit=crop',
    alt: 'Garden restaurant at night',
  },
  {
    url: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=90&auto=format&fit=crop',
    alt: 'Cafe table with greenery',
  },
  {
    url: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=90&auto=format&fit=crop',
    alt: 'Restaurant food and ambience',
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-[#0d140d] border-t border-gold/10">
      <div className="container mx-auto px-6 max-w-7xl pt-10">

        {/* Header — unchanged */}
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
            Step into the <br className="hidden md:block" />
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

        {/* Grid — 2 cols mobile, 3 cols desktop, fixed height cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -50px 0px' }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
              className="relative rounded-xl sm:rounded-2xl overflow-hidden group bg-dark/20"
              style={{ height: 'clamp(130px, 26vw, 260px)' }}
            >
              <div className="absolute inset-0 bg-dark/30 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 border-[0px] group-hover:border-[8px] border-dark/60 transition-all duration-300 z-20 pointer-events-none rounded-xl sm:rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA — unchanged */}
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

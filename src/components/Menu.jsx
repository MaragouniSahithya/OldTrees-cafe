import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuCategories = {
  drinks: [
    {
      name: "Lemongrass Ginger Black Tea", price: "₹180", tag: "BESTSELLER",
      img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80"
    },
    {
      name: "Lemon & Honey Tea", price: "₹160",
      img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&q=80"
    },
    {
      name: "Immunity Booster Herbal Tea", price: "₹190", tag: "HEALTHY",
      img: "https://images.unsplash.com/photo-1523920290228-4f321a939b4c?w=400&q=80"
    },
    {
      name: "Ginger Mint Lemon Tea", price: "₹170",
      img: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=400&q=80"
    },
    // ✅ FIXED: Egyptian Hibiscus Tea — actual hibiscus/red tea image
    {
      name: "Egyptian Hibiscus Tea", price: "₹200",
      img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&q=80"
    },
    // ✅ FIXED: Masala Tea — actual masala chai cup image
    {
      name: "Masala Tea (Herbal Style)", price: "₹150", tag: "MUST TRY",
      img: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&q=80"
    },
    {
      name: "English Breakfast Black Tea", price: "₹160",
      img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80"
    },
    {
      name: "Tropical Green Tea", price: "₹175", tag: "NEW",
      img: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=400&q=80"
    },
    {
      name: "Cold Brew Coffee", price: "₹210", tag: "MUST TRY",
      img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80"
    },
  ],
  mains: [
    {
      name: "Peri Peri Chicken", price: "₹380", tag: "MUST TRY",
      img: "https://images.unsplash.com/photo-1598514982901-3c3c3b5d7456?w=400&q=80"
    },
    {
      name: "Grilled Chicken", price: "₹360",
      img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&q=80"
    },
    {
      name: "Vegetable Pizza", price: "₹320", tag: "BESTSELLER",
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80"
    },
    {
      name: "Pasta Arrabbiata", price: "₹290",
      img: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&q=80"
    },
    {
      name: "Margherita Pizza", price: "₹299",
      img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80"
    },
    {
      name: "Chicken Alfredo Pasta", price: "₹320", tag: "BESTSELLER",
      img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80"
    },
    {
      name: "BBQ Chicken Wrap", price: "₹280",
      img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80"
    },
    {
      name: "Paneer Tikka Pizza", price: "₹340", tag: "NEW",
      img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80"
    },
  ],
  snacks: [
    {
      name: "Crunchy Paneer Burger", price: "₹240", tag: "BESTSELLER",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80"
    },
    {
      name: "Chicken Patty Burger", price: "₹260",
      img: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&q=80"
    },
    {
      name: "Classic Club Sandwich", price: "₹200",
      img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80"
    },
    {
      name: "Fresh Garden Salad", price: "₹180", tag: "HEALTHY",
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80"
    },
    {
      name: "Loaded Nachos", price: "₹220", tag: "BESTSELLER",
      img: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&q=80"
    },
    {
      name: "Crispy Chicken Wings", price: "₹280", tag: "MUST TRY",
      img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80"
    },
    {
      name: "Veg Spring Rolls", price: "₹160",
      img: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?w=400&q=80"
    },
    {
      name: "Masala Fries", price: "₹140",
      img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80"
    },
  ],
  desserts: [
    // ✅ FIXED: Churros — actual churros image, not meat
    {
      name: "Churros with Chocolate Dip", price: "₹220", tag: "MUST TRY",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,e_grayscale,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/8/f845c7c9-0d61-4d4d-a21e-780f8a53b535_e26a57d3-3bfb-40c0-a058-62446add7ee1.jpg?w=400&q=80"
    },
    // ✅ FIXED: Chocolate Lava Cake — actual molten lava cake
    {
      name: "Chocolate Lava Cake", price: "₹250",
      img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80"
    },
    {
      name: "Biscoff Cheesecake", price: "₹280",
      img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80"
    },
    {
      name: "Nutella Waffle", price: "₹240", tag: "MUST TRY",
      img: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400&q=80"
    },
    {
      name: "Gulab Jamun Ice Cream", price: "₹180", tag: "NEW",
      img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80"
    },
    {
      name: "Mango Panna Cotta", price: "₹220",
      img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80"
    },
  ],
  specials: [
    // ✅ FIXED: Sunday Brunch — brunch spread image
    {
      name: "Sunday Brunch Set", price: "₹480", tag: "WEEKEND",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80"
    },
    // ✅ FIXED: OTC Special Combo — different combo/spread image
    {
      name: "OTC Special Combo", price: "₹550", tag: "NEW",
      img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80"
    },
    // ✅ FIXED: Date Night Set — romantic dinner setting (different from combo)
    {
      name: "Date Night Set for 2", price: "₹899", tag: "POPULAR",
      img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80"
    },
    {
      name: "Kids Meal Box", price: "₹280", tag: "NEW",
      img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80"
    },
    {
      name: "OTC High Tea Set", price: "₹650", tag: "WEEKEND",
      img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80"
    },
  ]
};

const tabs = [
  { id: 'drinks', label: '☕ Drinks' },
  { id: 'mains', label: '🍕 Mains' },
  { id: 'snacks', label: '🥗 Snacks' },
  { id: 'desserts', label: '🍮 Desserts' },
  { id: 'specials', label: '🎉 Specials' },
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState('drinks');
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: 260 + 24, behavior: 'smooth' });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, activeTab]);

  return (
    <section id="menu" className="py-24 bg-dark relative border-t border-gold/10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header — unchanged */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase mb-4"
          >
            What We Serve
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4"
          >
            Crafted with passion,<br />
            <span className="italic text-gold font-normal">served with love.</span>
          </motion.h2>
        </div>

        {/* Category Tabs — unchanged */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 whitespace-nowrap border ${activeTab === tab.id
                ? 'bg-gold text-dark border-gold shadow-[0_4px_20px_rgba(200,135,42,0.4)]'
                : 'text-cream/70 bg-white/5 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Carousel — unchanged */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              ref={carouselRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {menuCategories[activeTab].map((item, index) => (
                <div
                  key={index}
                  className="shrink-0 snap-center md:snap-start bg-[#2A1A0E] rounded-2xl overflow-hidden flex flex-col relative w-[260px] h-[340px] shadow-xl border border-white/5"
                >
                  <div className="h-[65%] w-full relative">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400';
                      }}
                    />
                    {item.tag && (
                      <div className="absolute top-3 right-3 bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                        {item.tag}
                      </div>
                    )}
                  </div>
                  <div className="h-[35%] w-full flex flex-col justify-center items-center px-4 text-center">
                    <h3 className="font-serif text-[17px] font-bold text-cream mb-1">{item.name}</h3>
                    <span className="font-serif text-[19px] font-bold text-[#C8872A]">{item.price}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Menu;

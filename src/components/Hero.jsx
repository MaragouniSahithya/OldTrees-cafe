import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// 3D Leaf Particle Component — 100% unchanged
const Leaves = ({ count = 50 }) => {
  const mesh = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <planeGeometry args={[0.5, 0.5]} />
      <meshBasicMaterial color="#3d6b3d" transparent opacity={0.6} depthWrite={false} side={THREE.DoubleSide} />
    </instancedMesh>
  );
};

const Hero = () => {
  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-dark flex items-center justify-center">
      {/* Background — unchanged */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop")' }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/90" />

      {/* 3D Leaves — unchanged */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
          <ambientLight intensity={1} />
          <Leaves count={150} />
        </Canvas>
      </div>

      {/* Hero Content — unchanged except button + scroll section */}
      <div className="relative z-30 container mx-auto px-6 text-center max-w-4xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-dark/40 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full mb-8"
        >
          <span className="text-sm font-medium text-cream/90">🌿 Est. in Kompally, Hyderabad</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center gap-2 mb-6"
        >
          <span className="font-sans text-lg md:text-xl tracking-[0.3em] text-gold uppercase">OTC</span>
          <span className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cream via-gold-light to-cream leading-tight pb-2">
            Old Trees Cafe
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif italic text-xl md:text-2xl text-gold mb-8"
        >
          "The Ambience of a Childhood Home"
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-cream/80 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Dine under ancient trees, savor world flavors, and let time slow down in Kompally's most beloved garden oasis.
        </motion.p>

        {/* ✅ FIX: Buttons are now in their own block, scroll indicator is AFTER — not between */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-sm mx-auto sm:max-w-none"
        >
          <button
            onClick={() => handleScrollTo('#reservations')}
            className="w-full sm:w-auto glass-button flex items-center justify-center gap-2 min-h-[44px] rounded-full"
          >
            <span>🍽️</span> Reserve a Table
          </button>
          <button
            onClick={() => handleScrollTo('#menu')}
            className="w-full sm:w-auto glass-button-outline flex items-center justify-center gap-2 min-h-[44px] rounded-full"
          >
            <span>📋</span> View Menu
          </button>
        </motion.div>

        {/* ✅ FIX: Scroll indicator now sits BELOW both buttons in DOM order */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mx-auto mt-10 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest text-cream/50 uppercase">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

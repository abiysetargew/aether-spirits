'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const SpiritHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.15)_0%,transparent_50%)]" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-500/30 rounded-full"
              initial={{ 
                x: Math.random() * 100 + '%', 
                y: Math.random() * 100 + '%' 
              }}
              animate={{ 
                y: [null, `${Math.random() * -100 - 50}%`],
                opacity: [0.3, 0]
              }}
              transition={{ 
                duration: Math.random() * 10 + 10, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 h-full flex items-center"
      >
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-px bg-amber-600" />
                <span className="text-amber-500 text-xs tracking-[0.4em] uppercase">Est. 2021 • Addis Ababa</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="text-6xl lg:text-8xl font-bold leading-none"
              >
                <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                  ETHO
                </span>
                <br />
                <span className="text-white font-light tracking-wider">BEVERAGES</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-gray-400 text-lg leading-relaxed max-w-md"
              >
                Ethiopia&apos;s premier luxury spirits manufacturer. Crafting exceptional 
                <span className="text-amber-500"> gin</span>, 
                <span className="text-amber-500"> cognac</span>, and 
                <span className="text-amber-500"> signature blends</span> with heritage and innovation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="flex gap-4 pt-4"
              >
                <Link href="/spirits" className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 text-black font-semibold tracking-wider uppercase text-sm rounded overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Collection
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
                <Link href="/heritage" className="px-8 py-4 border border-amber-600/50 text-amber-500 font-medium tracking-wider uppercase text-sm rounded hover:bg-amber-600/10 transition-all">
                  Our Heritage
                </Link>
              </motion.div>
            </motion.div>

            {/* Bottle Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 via-transparent to-transparent blur-3xl" />
                
                {/* Bottle Silhouette */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <svg viewBox="0 0 200 400" className="w-64 h-auto mx-auto" style={{ filter: 'drop-shadow(0 0 40px rgba(201,169,98,0.3))' }}>
                    {/* Bottle Body */}
                    <defs>
                      <linearGradient id="bottleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1a1a1a" />
                        <stop offset="50%" stopColor="#2a2a2a" />
                        <stop offset="100%" stopColor="#1a1a1a" />
                      </linearGradient>
                      <linearGradient id="liquidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#c9a962" />
                        <stop offset="100%" stopColor="#8b6914" />
                      </linearGradient>
                      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#e8d5a3" />
                        <stop offset="50%" stopColor="#c9a962" />
                        <stop offset="100%" stopColor="#8b7355" />
                      </linearGradient>
                    </defs>
                    
                    {/* Neck */}
                    <rect x="80" y="0" width="40" height="60" fill="url(#bottleGrad)" rx="4" />
                    <rect x="85" y="50" width="30" height="10" fill="url(#goldGrad)" opacity="0.8" />
                    
                    {/* Shoulder */}
                    <path d="M80 60 Q60 80 60 100 L60 340 Q60 360 80 360 L120 360 Q140 360 140 340 L140 100 Q140 80 120 60 Z" fill="url(#bottleGrad)" />
                    
                    {/* Liquid */}
                    <path d="M70 120 Q65 120 65 130 L65 330 Q65 345 80 350 L120 350 Q135 345 135 330 L135 130 Q135 120 130 120 Z" fill="url(#liquidGrad)" opacity="0.7" />
                    
                    {/* Glass Reflection */}
                    <path d="M75 100 L75 340 Q75 350 80 355" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
                    <path d="M125 100 L125 340" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
                    
                    {/* Label */}
                    <rect x="70" y="200" width="60" height="80" fill="#111" rx="4" stroke="url(#goldGrad)" strokeWidth="1" />
                    <text x="100" y="230" textAnchor="middle" fill="url(#goldGrad)" fontSize="8" fontWeight="bold">ETHO</text>
                    <text x="100" y="245" textAnchor="middle" fill="#666" fontSize="5">SPIRITS</text>
                    <line x1="80" y1="255" x2="120" y2="255" stroke="url(#goldGrad)" strokeWidth="0.5" />
                    <text x="100" y="270" textAnchor="middle" fill="#888" fontSize="4">PREMIUM GIN</text>
                  </svg>
                </motion.div>

                {/* Reflection */}
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-t from-amber-500/10 to-transparent blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-amber-500/50 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-amber-500 to-transparent" />
        </motion.div>
      </motion.div>
    </div>
  );
};

const FeaturedSpirits = () => {
  const spirits = [
    { name: 'ETHO Signature Gin', type: 'London Dry Gin', abv: '47%', note: 'Juniper & Ethiopian Botanicals', price: 'ETB 2,500' },
    { name: 'ETHO XO Cognac', type: 'Extra Old', abv: '40%', note: '25 Years Aged', price: 'ETB 8,500' },
    { name: 'ETHO Reserve Blend', type: 'Signature Blend', abv: '45%', note: 'Master Distiller\'s Selection', price: 'ETB 4,200' },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-900 via-gray-950 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,169,98,0.08)_0%,transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-amber-500 text-xs tracking-[0.4em] uppercase">The Collection</span>
          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
              Exceptional
            </span>{' '}
            <span className="text-white font-light">Spirits</span>
          </h2>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
            Each expression is a testament to our commitment to excellence, 
            blending Ethiopian heritage with world-class craftsmanship.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {spirits.map((spirit, i) => (
            <motion.div
              key={spirit.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8 rounded-3xl bg-gradient-to-b from-gray-900/50 to-transparent border border-gray-800/50 backdrop-blur-sm overflow-hidden">
                {/* Glass Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
                
                <div className="relative">
                  {/* Bottle Placeholder */}
                  <div className="h-64 flex items-center justify-center mb-8">
                    <motion.div
                      whileHover={{ rotate: 5 }}
                      className="relative"
                    >
                      <div className="w-24 h-48 border-2 border-amber-600/30 rounded-lg bg-gradient-to-b from-gray-900 to-black relative">
                        <div className="absolute inset-2 border border-amber-600/20 rounded" />
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-b from-amber-600 to-amber-800 rounded-t-lg" />
                      </div>
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-32 bg-amber-500/10 blur-2xl rounded-full" />
                    </motion.div>
                  </div>

                  <div className="text-center">
                    <span className="text-amber-500 text-xs tracking-widest uppercase">{spirit.type}</span>
                    <h3 className="text-2xl font-bold text-white mt-2 mb-2">{spirit.name}</h3>
                    <p className="text-gray-500 text-sm mb-4">{spirit.note}</p>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                      <div>
                        <span className="text-amber-500 text-xl font-bold">{spirit.price}</span>
                      </div>
                      <Link href="/spirits" className="text-gray-400 text-sm flex items-center gap-1 hover:text-amber-500 transition-colors">
                        View
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/spirits" className="inline-flex items-center gap-2 px-8 py-4 border border-amber-600/30 text-amber-500 hover:bg-amber-600/10 transition-all rounded">
            View All Spirits
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const Heritage = () => {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber-500 text-xs tracking-[0.4em] uppercase">Heritage</span>
            <h2 className="text-5xl font-bold mt-4 mb-8">
              <span className="text-white">Born in </span>
              <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">Ethiopia</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Founded in <strong className="text-white">October 2021</strong> by visionary entrepreneurs 
              <strong className="text-white"> Sisay H.W</strong> and <strong className="text-white">Alula Setarge</strong>, 
              Etho Beverages emerged from the heart of Addis Ababa with an ambitious vision.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our state-of-the-art facility in the Industrial Zone, Akaki Kality, combines 
              traditional Ethiopian craftsmanship with cutting-edge distillation technology 
              to create spirits of unparalleled quality.
            </p>
            <Link href="/heritage" className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors">
              Discover Our Story
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-3xl" />
              <div className="absolute inset-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-amber-600/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-amber-500/50 flex items-center justify-center">
                    <span className="text-5xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">EB</span>
                  </div>
                  <p className="text-amber-500 tracking-[0.3em] text-sm">ETHO BEVERAGES</p>
                  <p className="text-gray-500 text-sm mt-2">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-amber-600/20 rounded-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Craftsmanship = () => {
  const steps = [
    { num: '01', title: 'Ethiopian Botanicals', desc: 'Hand-selected ingredients from the highlands' },
    { num: '02', title: 'Copper Distillation', desc: 'Traditional pot stills, modern precision' },
    { num: '03', title: 'Patient Aging', desc: 'Years of maturation in French oak' },
    { num: '04', title: 'Master Blending', desc: 'Artistry passed through generations' },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-amber-500 text-xs tracking-[0.4em] uppercase">The Process</span>
          <h2 className="text-5xl font-bold mt-4">
            <span className="text-white">The Art of </span>
            <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">Distillation</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-full border border-amber-600/30 flex items-center justify-center group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-all">
                  <span className="text-amber-500 text-xl font-bold">{step.num}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-amber-600/30 to-transparent" />
                )}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="relative py-32 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/[0.02] to-transparent" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-2xl mx-auto px-8 text-center"
      >
        <span className="text-amber-500 text-xs tracking-[0.4em] uppercase">Stay Connected</span>
        <h2 className="text-4xl font-bold mt-4 mb-6">
          <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
            Join the Circle
          </span>
        </h2>
        <p className="text-gray-500 mb-8">
          Be the first to know about limited releases, exclusive events, and the world of luxury spirits.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 bg-gray-900/50 border border-gray-800 rounded text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
          />
          <button type="submit" className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-black font-semibold tracking-wider uppercase text-sm rounded hover:shadow-lg hover:shadow-amber-500/20 transition-all">
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <SpiritHero />
      <FeaturedSpirits />
      <Heritage />
      <Craftsmanship />
      <Newsletter />
    </div>
  );
}

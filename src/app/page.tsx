'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import BottleSVG from '@/components/BottleSVG';

const AdeySpirits = [
  { id: 'ouzo', name: 'Adey Ouzo', desc: 'Traditional Greek spirit with Ethiopian essence', abv: '6.1%' },
  { id: 'gin', name: 'Adey Gin', desc: 'Crystal clear gin with botanical notes', abv: '6.5%' },
  { id: 'lemon', name: 'Adey Lemon', desc: 'Zesty citrus refreshment', abv: '6.5%' },
  { id: 'mint', name: 'Adey Super Mint', desc: 'Cooling mint sensation', abv: '6.1%' },
];

export default function Home() {
  const [activeBottle, setActiveBottle] = useState('gin');
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <div ref={containerRef} className="bg-black min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
          <motion.div 
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px]"
            style={{ 
              background: 'radial-gradient(circle, rgba(201,169,98,0.08) 0%, transparent 60%)',
              y
            }}
          />
        </div>

        {/* Navigation Overlay */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute top-0 left-0 right-0 z-50 p-8"
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-amber-500/50 flex items-center justify-center">
                <span className="text-amber-500 font-bold text-lg">A</span>
              </div>
              <div>
                <span className="text-white text-xl tracking-[0.3em] font-light">ADEY</span>
                <p className="text-amber-500/70 text-[9px] tracking-[0.4em] -mt-1">SPIRITS</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-12">
              {['Collection', 'Heritage', 'About', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-amber-500 text-xs tracking-[0.2em] uppercase transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </motion.nav>

        {/* Hero Content */}
        <motion.div 
          style={{ opacity }}
          className="relative z-10 h-full flex items-center"
        >
          <div className="max-w-7xl mx-auto px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
              {/* Left - Text */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="space-y-8"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-500" />
                  <span className="text-amber-500/80 text-[10px] tracking-[0.5em] uppercase">Est. 2021 • Addis Ababa</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="space-y-2"
                >
                  <p className="text-7xl lg:text-8xl font-extralight tracking-tight text-white">
                    ADEY
                  </p>
                  <p className="text-3xl lg:text-4xl font-extralight tracking-[0.3em] text-amber-500/90">
                    SPIRITS
                  </p>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-gray-400 text-lg leading-relaxed max-w-md font-light"
                >
                  Proudly Ethiopian. Crafted in the heart of Addis Ababa with passion and excellence. 
                  Experience the taste that makes you feel awesome.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="flex gap-6 pt-4"
                >
                  <Link href="/collection" className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-black font-medium tracking-wider uppercase text-xs rounded-sm overflow-hidden">
                    <span className="relative z-10">Explore Collection</span>
                  </Link>
                  <Link href="/about" className="px-8 py-4 border border-amber-500/30 text-amber-500/80 hover:text-amber-500 hover:border-amber-500 tracking-wider uppercase text-xs rounded-sm transition-all">
                    Our Story
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right - Bottles */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative h-[500px] hidden lg:block"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Glow Effect */}
                  <div className="absolute w-64 h-64 bg-amber-500/10 rounded-full blur-[100px]" />
                  
                  {/* Bottles */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeBottle}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <BottleSVG type={activeBottle as any} size="large" animate />
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-16 bg-gradient-to-t from-black to-transparent" />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Bottle Selector */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4">
                  {AdeySpirits.map((spirit) => (
                    <button
                      key={spirit.id}
                      onClick={() => setActiveBottle(spirit.id)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        activeBottle === spirit.id 
                          ? 'bg-amber-500 scale-150' 
                          : 'bg-gray-600 hover:bg-gray-400'
                      }`}
                    />
                  ))}
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
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-amber-500/40 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-amber-500/40 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Products Section */}
      <section className="relative py-32 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080808] to-black" />
        
        <div className="relative max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-amber-500/60 text-[10px] tracking-[0.5em] uppercase">Our Collection</span>
            <h2 className="text-5xl lg:text-6xl font-extralight text-white mt-6 tracking-tight">
              The Adey <span className="text-amber-500/90">Lineup</span>
            </h2>
            <p className="text-gray-500 mt-6 max-w-xl mx-auto font-light">
              Four distinct expressions, each crafted to deliver an unforgettable experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {AdeySpirits.map((spirit, i) => (
              <motion.div
                key={spirit.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="relative p-8 rounded-sm bg-gradient-to-b from-gray-900/50 to-transparent border border-gray-800/30 hover:border-amber-500/30 transition-all duration-500">
                  {/* Bottle */}
                  <div className="h-48 flex items-center justify-center mb-8">
                    <div className="opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                      <BottleSVG type={spirit.id as any} size="medium" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center space-y-3">
                    <div className="text-amber-500/50 text-[10px] tracking-[0.3em] uppercase">{spirit.abv} ABV</div>
                    <h3 className="text-white text-lg font-light tracking-wide">{spirit.name}</h3>
                    <p className="text-gray-500 text-sm font-light">{spirit.desc}</p>
                  </div>

                  {/* Hover Line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-amber-500 group-hover:w-full transition-all duration-500" />
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
            <Link href="/collection" className="inline-flex items-center gap-3 text-amber-500/80 hover:text-amber-500 text-xs tracking-[0.2em] uppercase transition-colors group">
              View Full Collection
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-amber-500/[0.02] to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="text-amber-500/60 text-[10px] tracking-[0.5em] uppercase">Our Story</span>
              <h2 className="text-5xl font-extralight text-white tracking-tight">
                Crafted with <span className="text-amber-500/90">Passion</span>
              </h2>
              <div className="space-y-6 text-gray-400 font-light leading-relaxed">
                <p>
                  Founded in <strong className="text-white font-normal">October 2021</strong> in the heart of 
                  <strong className="text-white font-normal"> Addis Ababa</strong>, Ethio Beverages is a proudly 
                  Ethiopian manufacturer of premium alcoholic beverages.
                </p>
                <p>
                  Our passion is to craft distinctive, high-quality spirits that capture the vibrant 
                  flavors and spirit of Ethiopia while meeting global standards of excellence.
                </p>
                <p>
                  At Ethio Beverages, we blend <strong className="text-white font-normal">tradition</strong>, 
                  <strong className="text-white font-normal"> innovation</strong>, and 
                  <strong className="text-white font-normal"> authenticity</strong> — creating a range of 
                  beverages that delight the senses and elevate every occasion.
                </p>
              </div>
              <Link href="/heritage" className="inline-flex items-center gap-3 text-amber-500/80 hover:text-amber-500 text-xs tracking-[0.2em] uppercase transition-colors group">
                Discover Our Heritage
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-sm" />
                <div className="absolute inset-8 bg-gradient-to-br from-gray-900 to-black rounded-sm border border-gray-800/50 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto rounded-full border border-amber-500/30 flex items-center justify-center">
                      <span className="text-4xl font-light text-amber-500">A</span>
                    </div>
                    <div>
                      <p className="text-amber-500 tracking-[0.3em] text-sm">ADEY</p>
                      <p className="text-gray-500 text-xs mt-1">by Ethio Beverages</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-32 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/[0.02] to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-amber-500/60 text-[10px] tracking-[0.5em] uppercase">Our Mission</span>
            <h2 className="text-4xl lg:text-5xl font-extralight text-white tracking-tight leading-relaxed">
              "To craft superior-quality alcoholic beverages that combine Ethiopian character 
              with international appeal, while empowering local talent and supporting 
              sustainable business growth."
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-black">
        <div className="relative max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-16 rounded-sm bg-gradient-to-b from-gray-900/80 to-transparent border border-gray-800/30 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.05] to-transparent" />
            <div className="relative">
              <h2 className="text-4xl font-extralight text-white mb-6 tracking-tight">
                Ready to Experience <span className="text-amber-500/90">Adey</span>?
              </h2>
              <p className="text-gray-400 mb-10 max-w-md mx-auto font-light">
                Discover the taste that makes you feel awesome. Order now or find a retailer near you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/collection" className="px-10 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-black font-medium tracking-wider uppercase text-xs rounded-sm hover:shadow-lg hover:shadow-amber-500/20 transition-all">
                  Order Now
                </Link>
                <Link href="/contact" className="px-10 py-4 border border-amber-500/30 text-amber-500/80 hover:text-amber-500 hover:border-amber-500 tracking-wider uppercase text-xs rounded-sm transition-all">
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-amber-500/50 flex items-center justify-center">
                <span className="text-amber-500 font-bold">A</span>
              </div>
              <div>
                <span className="text-white text-lg tracking-[0.3em] font-light">ADEY</span>
                <p className="text-amber-500/50 text-[8px] tracking-[0.4em] -mt-1">SPIRITS</p>
              </div>
            </div>
            <div className="flex gap-8">
              {['Collection', 'Heritage', 'About', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-500 hover:text-amber-500 text-xs tracking-[0.2em] uppercase transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
            <p className="text-gray-600 text-xs">
              © 2025 Ethio Beverages. All rights reserved.
            </p>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-700 text-[10px] tracking-wider">
              Please drink responsibly. Must be 18+ to purchase.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

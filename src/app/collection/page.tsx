'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import BottleSVG from '@/components/BottleSVG';
import Link from 'next/link';

const products = [
  { id: 'ouzo', name: 'Adey Ouzo', type: 'Traditional Spirit', abv: '6.1%', desc: 'Traditional Greek spirit with Ethiopian essence', ibu: '60', og: '1.102' },
  { id: 'gin', name: 'Adey Gin', type: 'Premium Gin', abv: '6.5%', desc: 'Crystal clear gin with botanical notes', ibu: '60', og: '1.104' },
  { id: 'lemon', name: 'Adey Lemon', type: 'Citrus Spirit', abv: '6.5%', desc: 'Zesty citrus refreshment', ibu: '60', og: '1.104' },
  { id: 'mint', name: 'Adey Super Mint', type: 'Mint Spirit', abv: '6.1%', desc: 'Cooling mint sensation', ibu: '60', og: '1.102' },
];

const categories = ['All', 'Ouzo', 'Gin', 'Flavored'];

export default function CollectionPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered = products.filter(p => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Ouzo') return p.type.includes('Traditional');
    if (activeCategory === 'Gin') return p.type.includes('Gin') || p.type.includes('Premium');
    if (activeCategory === 'Flavored') return p.type.includes('Citrus') || p.type.includes('Mint');
    return true;
  });

  return (
    <div className="bg-black min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,98,0.08)_0%,transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-amber-500/60 text-[10px] tracking-[0.5em] uppercase">Our Collection</span>
            <h1 className="text-6xl lg:text-7xl font-extralight text-white mt-6 tracking-tight">
              The Adey <span className="text-amber-500/90">Lineup</span>
            </h1>
            <p className="text-gray-500 mt-6 max-w-xl mx-auto font-light">
              Four distinct expressions, each crafted to deliver an unforgettable experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-16 z-40 bg-black/95 backdrop-blur-xl border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-8 py-5">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-sm text-xs tracking-wider uppercase transition-all ${
                  activeCategory === cat 
                    ? 'bg-amber-600 text-black' 
                    : 'border border-gray-800 text-gray-400 hover:border-amber-500/50 hover:text-amber-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent rounded-sm transition-opacity duration-500 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`} />
                
                <div className="relative p-10 rounded-sm bg-gradient-to-b from-gray-900/30 to-transparent border border-gray-800/30 hover:border-amber-500/30 transition-all duration-500">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Bottle */}
                    <div className="h-64 flex items-center justify-center">
                      <div className={`transition-all duration-500 ${hoveredId === product.id ? 'scale-110' : 'scale-100'}`}>
                        <BottleSVG type={product.id as any} size="large" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="space-y-4">
                      <div>
                        <span className="text-amber-500/50 text-[10px] tracking-[0.3em] uppercase">{product.type}</span>
                        <h3 className="text-white text-2xl font-light mt-2 tracking-wide">{product.name}</h3>
                        <p className="text-gray-500 text-sm mt-2 font-light">{product.desc}</p>
                      </div>

                      {/* Stats */}
                      <div className="flex gap-6 pt-4">
                        <div>
                          <span className="text-amber-500/70 text-[10px] tracking-wider uppercase block">ABV</span>
                          <span className="text-white text-lg">{product.abv}</span>
                        </div>
                        <div>
                          <span className="text-amber-500/70 text-[10px] tracking-wider uppercase block">IBU</span>
                          <span className="text-white text-lg">{product.ibu}</span>
                        </div>
                        <div>
                          <span className="text-amber-500/70 text-[10px] tracking-wider uppercase block">OG</span>
                          <span className="text-white text-lg">{product.og}</span>
                        </div>
                      </div>

                      <div className="pt-4">
                        <Link href="/contact" className="inline-flex items-center gap-2 text-amber-500/70 hover:text-amber-500 text-xs tracking-wider uppercase transition-colors group">
                          Find Retailer
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-amber-500 group-hover:w-full transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black border-t border-gray-900">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h3 className="text-2xl font-extralight text-white mb-4">Want to carry Adey spirits?</h3>
          <p className="text-gray-500 mb-8 font-light">Contact us for wholesale and distribution inquiries.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-amber-600 text-black text-xs tracking-wider uppercase rounded-sm hover:bg-amber-500 transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

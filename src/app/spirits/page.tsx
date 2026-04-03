'use client';

import { useState } from 'react';
import Link from 'next/link';

const spirits = [
  { id: 1, name: 'ETHO Signature Gin', type: 'Gin', subType: 'London Dry', abv: '47%', description: 'Our flagship gin distilled with Ethiopian juniper and 12 rare botanicals.', price: 2500, badge: 'Bestseller' },
  { id: 2, name: 'ETHO Gin Reserve', type: 'Gin', subType: 'Old Tom', abv: '45%', description: 'A sweeter, oak-aged gin with unprecedented depth.', price: 3200 },
  { id: 3, name: 'ETHO XO Cognac', type: 'Cognac', subType: 'Extra Old', abv: '40%', description: '25 years in Limousin oak. Pure elegance.', price: 8500, badge: 'Limited' },
  { id: 4, name: 'ETHO VSOP', type: 'Cognac', subType: 'Very Superior', abv: '40%', description: '12 years aged. Perfect balance of fruit and oak.', price: 4200 },
  { id: 5, name: 'ETHO Signature Blend', type: 'Blend', subType: 'Signature', abv: '45%', description: "Master distiller's personal creation.", price: 4800, badge: 'Exclusive' },
  { id: 6, name: 'ETHO Midnight', type: 'Blend', subType: 'Dark', abv: '50%', description: 'Bold notes of espresso and dark chocolate.', price: 3600 },
];

const categories = ['All', 'Gin', 'Cognac', 'Blend'];

export default function SpiritsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = spirits.filter(s => activeCategory === 'All' || s.type === activeCategory);

  return (
    <div className="bg-black min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,98,0.1)_0%,transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-amber-500 text-xs tracking-[0.4em] uppercase">The Collection</span>
            <h1 className="text-6xl lg:text-7xl font-bold mt-4">
              <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">Spirits</span>
              <span className="text-white font-light"> of Distinction</span>
            </h1>
            <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
              Each expression represents the pinnacle of Ethiopian craftsmanship, 
              blending tradition with innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-16 z-40 bg-black/90 backdrop-blur-xl border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs tracking-wider uppercase transition-all ${
                  activeCategory === cat 
                    ? 'bg-amber-600 text-black' 
                    : 'border border-gray-700 text-gray-400 hover:border-amber-600 hover:text-amber-500'
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((spirit, i) => (
              <motion.div
                key={spirit.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setHoveredId(spirit.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent rounded-3xl transition-opacity duration-500 ${hoveredId === spirit.id ? 'opacity-100' : 'opacity-0'}`} />
                
                <div className="relative p-8 rounded-3xl bg-gradient-to-b from-gray-900/80 to-transparent border border-gray-800/50 backdrop-blur-sm overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />
                  
                  {spirit.badge && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-amber-600 text-black text-xs font-bold uppercase rounded">
                      {spirit.badge}
                    </div>
                  )}

                  <div className="h-64 flex items-center justify-center mb-6">
                    <motion.div
                      animate={{ y: hoveredId === spirit.id ? -8 : 0 }}
                      className="relative"
                    >
                      <div className="w-28 h-56 border-2 border-amber-600/30 rounded-xl bg-gradient-to-b from-gray-900 to-black relative">
                        <div className="absolute inset-3 border border-amber-600/20 rounded-lg" />
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-10 h-8 bg-gradient-to-b from-amber-600 to-amber-800 rounded-t-lg" />
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                          <span className="text-amber-500 text-[8px] font-bold">ETHO</span>
                        </div>
                      </div>
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-40 bg-amber-500/10 blur-3xl rounded-full" />
                    </motion.div>
                  </div>

                  <div className="text-center">
                    <span className="text-amber-500 text-[10px] tracking-[0.3em] uppercase">{spirit.type} • {spirit.subType}</span>
                    <h3 className="text-xl font-bold text-white mt-2 mb-2">{spirit.name}</h3>
                    <p className="text-gray-500 text-sm mb-4">{spirit.description}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <div>
                        <span className="text-2xl font-bold text-white">ETB {spirit.price.toLocaleString()}</span>
                      </div>
                      <Link href="/shop" className="flex items-center gap-1 text-amber-500 text-sm hover:text-amber-400 transition-colors">
                        Add to Cart
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

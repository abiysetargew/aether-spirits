'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import BottleSVG from '@/components/BottleSVG';

const stats = [
  { value: '2021', label: 'Founded' },
  { value: '4+', label: 'Products' },
  { value: 'Addis Ababa', label: 'Headquarters' },
];

export default function AboutPage() {
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
            <span className="text-amber-500/60 text-[10px] tracking-[0.5em] uppercase">About Us</span>
            <h1 className="text-5xl lg:text-6xl font-extralight text-white mt-6 tracking-tight">
              The Adey <span className="text-amber-500/90">Story</span>
            </h1>
            <p className="text-gray-500 mt-6 max-w-2xl mx-auto font-light">
              A proudly Ethiopian journey from vision to reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-black border-y border-gray-900">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl text-amber-500 font-light">{stat.value}</div>
                <div className="text-gray-500 text-xs tracking-wider uppercase mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-extralight text-white tracking-tight">
                Crafting <span className="text-amber-500/90">Excellence</span>
              </h2>
              <div className="space-y-6 text-gray-400 font-light leading-relaxed">
                <p>
                  At Ethio Beverages, we believe that great spirits tell a story. 
                  Our story begins in the vibrant heart of Addis Ababa, where we set out 
                  to create something truly special — beverages that capture the essence 
                  of Ethiopian excellence.
                </p>
                <p>
                  Every bottle of Adey is a testament to our commitment to quality. 
                  From carefully selected ingredients to meticulous production processes, 
                  we ensure that each sip delivers an experience worthy of celebration.
                </p>
                <p>
                  Our mission extends beyond creating exceptional spirits. We are dedicated 
                  to empowering local talent, supporting sustainable business growth, and 
                  putting Ethiopia on the map as a source of world-class beverages.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative flex justify-center py-16">
                <BottleSVG type="ouzo" size="large" animate />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20 bg-black border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-500/60 text-[10px] tracking-[0.5em] uppercase">The Lineup</span>
            <h2 className="text-4xl font-extralight text-white mt-6 tracking-tight">
              Our <span className="text-amber-500/90">Products</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 'ouzo', name: 'Adey Ouzo', abv: '6.1%' },
              { id: 'gin', name: 'Adey Gin', abv: '6.5%' },
              { id: 'lemon', name: 'Adey Lemon', abv: '6.5%' },
              { id: 'mint', name: 'Adey Super Mint', abv: '6.1%' },
            ].map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-sm bg-gradient-to-b from-gray-900/30 to-transparent border border-gray-800/30"
              >
                <div className="h-40 flex items-center justify-center mb-4">
                  <BottleSVG type={product.id as any} size="small" />
                </div>
                <h3 className="text-white text-lg font-light">{product.name}</h3>
                <span className="text-amber-500/60 text-sm">{product.abv} ABV</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black border-t border-gray-900">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h3 className="text-2xl font-extralight text-white mb-4">Ready to experience Adey?</h3>
          <p className="text-gray-500 mb-8 font-light">Explore our collection or get in touch.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/collection" className="px-8 py-3 bg-amber-600 text-black text-xs tracking-wider uppercase rounded-sm hover:bg-amber-500 transition-colors">
              View Collection
            </Link>
            <Link href="/contact" className="px-8 py-3 border border-amber-500/30 text-amber-500/80 hover:text-amber-500 tracking-wider uppercase text-xs rounded-sm transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

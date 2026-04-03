'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import BottleSVG from '@/components/BottleSVG';

const timeline = [
  { year: '2021', title: 'Foundation', desc: 'Ethio Beverages founded in Addis Ababa' },
  { year: '2022', title: 'Launch', desc: 'Adey product line officially launched' },
  { year: '2023', title: 'Growth', desc: 'Expanded distribution across Ethiopia' },
  { year: '2024', title: 'Excellence', desc: 'Recognized for premium quality' },
];

export default function HeritagePage() {
  return (
    <div className="bg-black min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,98,0.08)_0%,transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <span className="text-amber-500/60 text-[10px] tracking-[0.5em] uppercase">Our Heritage</span>
              <h1 className="text-5xl lg:text-6xl font-extralight text-white tracking-tight">
                Born in <span className="text-amber-500/90">Ethiopia</span>
              </h1>
              <p className="text-gray-400 font-light leading-relaxed">
                Founded in October 2021 in the heart of Addis Ababa, Ethio Beverages is a proudly 
                Ethiopian manufacturer of premium alcoholic beverages. Our passion is to craft 
                distinctive, high-quality spirits that capture the vibrant flavors and spirit 
                of Ethiopia while meeting global standards of excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="relative flex justify-center py-16">
                <BottleSVG type="gin" size="large" animate />
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-32 bg-gradient-to-t from-black to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-500/60 text-[10px] tracking-[0.5em] uppercase">Our Values</span>
            <h2 className="text-4xl font-extralight text-white mt-6 tracking-tight">
              What We <span className="text-amber-500/90">Stand For</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Tradition', desc: 'Honoring Ethiopian heritage in every bottle' },
              { title: 'Innovation', desc: 'Modern techniques meet classic craftsmanship' },
              { title: 'Authenticity', desc: 'Genuine flavors, genuine quality' },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center p-8 rounded-sm bg-gradient-to-b from-gray-900/30 to-transparent border border-gray-800/30"
              >
                <h3 className="text-xl text-white font-light mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm font-light">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-black border-t border-gray-900">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-500/60 text-[10px] tracking-[0.5em] uppercase">Our Journey</span>
            <h2 className="text-4xl font-extralight text-white mt-6 tracking-tight">
              The Road to <span className="text-amber-500/90">Excellence</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-800 transform -translate-x-1/2" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative flex items-center gap-8 mb-12 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1" />
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 border-4 border-black" />
                <div className="flex-1 p-6 rounded-sm bg-gradient-to-b from-gray-900/30 to-transparent border border-gray-800/30">
                  <span className="text-amber-500 text-2xl font-light">{item.year}</span>
                  <h3 className="text-white text-lg mt-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-2 font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-black border-t border-gray-900">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber-500/60 text-[10px] tracking-[0.5em] uppercase">Our Mission</span>
            <p className="text-3xl font-extralight text-white mt-6 leading-relaxed tracking-tight">
              "To craft superior-quality alcoholic beverages that combine Ethiopian character 
              with international appeal, while empowering local talent and supporting 
              sustainable business growth."
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black border-t border-gray-900">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h3 className="text-2xl font-extralight text-white mb-4">Experience Adey Spirits</h3>
          <p className="text-gray-500 mb-8 font-light">Discover the taste that makes you feel awesome.</p>
          <Link href="/collection" className="inline-flex items-center gap-2 px-8 py-3 bg-amber-600 text-black text-xs tracking-wider uppercase rounded-sm hover:bg-amber-500 transition-colors">
            View Collection
          </Link>
        </div>
      </section>
    </div>
  );
}

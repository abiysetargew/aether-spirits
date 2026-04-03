'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeritagePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const timeline = [
    { year: 'Oct 2021', title: 'The Beginning', desc: 'Sisay H.W and Alula Setarge found Etho Beverages in Addis Ababa with a vision to create world-class spirits.' },
    { year: '2022', title: 'First Release', desc: 'Launch of our signature gin collection, introducing Ethiopian botanicals to the global spirits stage.' },
    { year: '2023', title: 'Cognac Line', desc: 'Introduction of our aged cognac expressions, earning recognition at international competitions.' },
    { year: '2024', title: 'Global Expansion', desc: 'Distribution expands to 15+ countries across Africa, Europe, and Asia.' },
    { year: '2025', title: 'Award Recognition', desc: 'Multiple gold medals at the African Spirits Awards and International Wine & Spirit Competition.' },
  ];

  const values = [
    { title: 'Pride in Origin', desc: 'Honoring Ethiopian heritage in every drop.' },
    { title: 'Uncompromising Quality', desc: 'Excellence in every bottle, every batch.' },
    { title: 'Innovation', desc: 'Pushing boundaries while respecting tradition.' },
  ];

  return (
    <div ref={containerRef} className="bg-black min-h-screen pt-24">
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.15)_0%,transparent_60%)]" />
        </motion.div>
        
        <div className="relative max-w-7xl mx-auto px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-amber-500 text-xs tracking-[0.4em] uppercase">Since October 2021</span>
            <h1 className="text-6xl lg:text-7xl font-bold mt-4">
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">Heritage</span>
            </h1>
            <p className="text-gray-400 text-lg mt-6 max-w-2xl">
              A story of vision, passion, and the relentless pursuit of excellence. 
              Born in the heart of Ethiopia, crafted for the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-500 text-xs tracking-[0.4em] uppercase">The Visionaries</span>
            <h2 className="text-4xl font-bold mt-4">
              <span className="text-white">Meet the </span>
              <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">Founders</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Sisay H.W', role: 'Co-Founder & CEO', desc: 'Visionary leader driving innovation in Ethiopian beverage industry. Sisay brings a unique perspective shaped by deep understanding of both local traditions and global markets.' },
              { name: 'Alula Setarge', role: 'Co-Founder & Master Distiller', desc: 'Strategic mind behind brand development and technical excellence. Alula\'s expertise in distillation ensures every bottle meets the highest standards.' },
            ].map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-gradient-to-b from-gray-900/50 to-transparent border border-gray-800/50"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                  <span className="text-3xl font-bold text-black">{founder.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-2xl font-bold text-white text-center">{founder.name}</h3>
                <p className="text-amber-500 text-sm text-center mb-4">{founder.role}</p>
                <p className="text-gray-400 text-center text-sm leading-relaxed">{founder.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-500 text-xs tracking-[0.4em] uppercase">Our Journey</span>
            <h2 className="text-4xl font-bold mt-4">
              <span className="text-white">Building a </span>
              <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">Legacy</span>
            </h2>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-600/50 via-amber-600/20 to-transparent" />
            
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center gap-8 mb-12 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1" />
                <div className="w-4 h-4 rounded-full bg-amber-600 border-4 border-black relative z-10" />
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex-1 p-6 rounded-2xl bg-gray-900/50 border border-gray-800/50"
                >
                  <span className="text-amber-500 text-sm font-bold">{item.year}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-500 text-xs tracking-[0.4em] uppercase">What Drives Us</span>
            <h2 className="text-4xl font-bold mt-4">
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center p-8 rounded-3xl bg-gradient-to-b from-gray-900/30 to-transparent border border-gray-800/30"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-amber-600/30 flex items-center justify-center">
                  <span className="text-amber-500 text-2xl">✦</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-16 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800/50"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">Experience </span>
              <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">ETHO</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Discover the taste of Ethiopian excellence. Explore our collection of luxury spirits.
            </p>
            <Link href="/spirits" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-black font-semibold tracking-wider uppercase text-sm rounded hover:shadow-lg hover:shadow-amber-500/20 transition-all">
              Explore Collection
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

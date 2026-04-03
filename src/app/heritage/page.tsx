'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Quote, Users, Award, Globe, Heart } from 'lucide-react';

const timeline = [
  {
    year: 'October 2021',
    title: 'The Beginning',
    description: 'Sisay H.W and Alula Setarge found Ethio Beverages in Addis Ababa with a vision to create world-class beverages.',
  },
  {
    year: '2022',
    title: 'Heisberg Launch',
    description: 'Launch of the Heisberg beer line, featuring four distinct premium varieties.',
  },
  {
    year: '2023',
    title: 'Small Bottle Line',
    description: 'Introduction of the convenient small bottle format for on-the-go enjoyment.',
  },
  {
    year: '2024',
    title: 'Award Recognition',
    description: 'Heisberg beers win multiple accolades at African beverage competitions.',
  },
  {
    year: '2025',
    title: 'Global Expansion',
    description: 'Heisberg begins exporting to neighboring East African countries.',
  },
  {
    year: 'Today',
    title: 'Growing Strong',
    description: 'Ethio Beverages continues to grow, bringing Ethiopian craft beer to the world.',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Pride in Origin (Adey)',
    description: 'Honoring Ethiopian heritage in every product we create.',
  },
  {
    icon: Award,
    title: 'Quality First',
    description: 'Uncompromising excellence in every bottle we produce.',
  },
  {
    icon: Globe,
    title: 'Ethiopian to the World',
    description: 'Sharing Ethiopian craftsmanship with global audiences.',
  },
];

const founders = [
  {
    name: 'Sisay H.W',
    initials: 'SH',
    role: 'Co-Founder',
    description: 'Visionary leader driving innovation in the Ethiopian beverage industry.',
  },
  {
    name: 'Alula Setarge',
    initials: 'AS',
    role: 'Co-Founder',
    description: 'Strategic mind behind brand development and market expansion.',
  },
];

export default function HeritagePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div ref={containerRef} className="pt-24">
      <section className="relative h-[80vh] overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#0a0a0a] to-[#050505]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,98,0.15)_0%,transparent_70%)]" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">
                Since October 2021
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl mb-6">
                Our <span className="gold-gradient">Heritage</span>
              </h1>
              <p className="text-gray-400 text-xl leading-relaxed">
                Born in the heart of Addis Ababa, Ethio Beverages represents the fusion of 
                Ethiopian entrepreneurial spirit and world-class brewing craftsmanship.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] via-[#111] to-[#0a0a0a] flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full border-2 border-[rgba(201,169,98,0.5)] flex items-center justify-center">
                      <span className="font-[family-name:var(--font-playfair)] text-5xl gold-gradient">EB</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-[rgba(201,169,98,0.2)] rounded-xl flex items-center justify-center">
                  <span className="text-[#c9a962] text-sm font-bold">2021</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Quote className="w-12 h-12 text-[#c9a962] mb-6" />
              <p className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl text-white mb-6 leading-relaxed italic">
                &quot;We set out to create something extraordinary — beverages that capture 
                the essence of Ethiopia and share it with the world.&quot;
              </p>
              <p className="text-[#c9a962] mb-1">— Founders&apos; Vision</p>
              <p className="text-gray-500 text-sm">Ethio Beverages</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Meet the Visionaries</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl">
              The <span className="gold-gradient">Founders</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass rounded-2xl p-8 text-center border border-[rgba(201,169,98,0.1)]"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#c9a962] to-[#8b7355] flex items-center justify-center">
                  <span className="text-3xl font-bold text-black">{founder.initials}</span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-2">
                  {founder.name}
                </h3>
                <p className="text-[#c9a962] font-medium mb-4">{founder.role}</p>
                <p className="text-gray-400 text-sm">{founder.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Our Journey</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl">
              From Vision to <span className="gold-gradient">Reality</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-[rgba(201,169,98,0.5)] via-[rgba(201,169,98,0.2)] to-transparent hidden md:block" />

            <div className="space-y-16">
              {timeline.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-[#c9a962] text-2xl font-[family-name:var(--font-playfair)]">{event.year}</span>
                    <h3 className="text-xl text-white mt-2 mb-2">{event.title}</h3>
                    <p className="text-gray-400">{event.description}</p>
                  </div>

                  <div className="w-4 h-4 rounded-full bg-[#c9a962] border-4 border-[#050505] relative z-10 flex-shrink-0" />

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Our Values</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl">
              The Principles That <span className="gold-gradient">Guide Us</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 glass rounded-2xl"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-[rgba(201,169,98,0.3)] flex items-center justify-center">
                  <value.icon size={28} className="text-[#c9a962]" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 md:p-16 border border-[rgba(201,169,98,0.1)] text-center"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl mb-6">
              Experience <span className="gold-gradient">Heisberg</span> Today
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Discover the taste that makes you feel awesome. Find Heisberg beers at retailers across Ethiopia.
            </p>
            <Link
              href="/spirits"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c9a962] to-[#e8d5a3] text-black font-semibold tracking-wider uppercase rounded hover:shadow-[0_0_40px_rgba(201,169,98,0.4)] transition-all duration-300"
            >
              Explore Our Beers <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

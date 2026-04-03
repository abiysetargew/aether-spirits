'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Quote, Users, Award, Globe } from 'lucide-react';

const timeline = [
  {
    year: '1892',
    title: 'The Beginning',
    description: 'Emperor Menelik II grants permission to the Assefa family to establish Ethiopia\'s first modern distillery.',
  },
  {
    year: '1923',
    title: 'Royal Recognition',
    description: 'AETHER becomes the official supplier to the Imperial Court of Ethiopia.',
  },
  {
    year: '1974',
    title: 'A New Era',
    description: 'Despite political upheaval, the distillery preserves its traditional methods and equipment.',
  },
  {
    year: '1991',
    title: 'Global Expansion',
    description: 'Following economic reforms, AETHER begins exporting to Europe and America.',
  },
  {
    year: '2010',
    title: 'Modern Renaissance',
    description: 'A new generation of the Assefa family introduces innovative techniques while honoring tradition.',
  },
  {
    year: 'Today',
    title: 'World-Class Excellence',
    description: 'AETHER spirits are now enjoyed in over 30 countries, winning 50+ international awards.',
  },
];

const values = [
  {
    icon: Users,
    title: 'Family Legacy',
    description: 'Four generations of distillers, each adding their chapter to our story.',
  },
  {
    icon: Award,
    title: 'Uncompromising Quality',
    description: 'Every batch meets our exacting standards before earning the AETHER name.',
  },
  {
    icon: Globe,
    title: 'Ethiopian Soul',
    description: 'Our highland heritage infuses every spirit with a taste of Ethiopia.',
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
                Since 1892
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl mb-6">
                Our <span className="gold-gradient">Heritage</span>
              </h1>
              <p className="text-gray-400 text-xl leading-relaxed">
                A story of resilience, tradition, and the relentless pursuit of perfection. 
                Four generations of the Assefa family have crafted spirits that capture the soul of Ethiopia.
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
                    <div className="w-32 h-32 border-2 border-[rgba(201,169,98,0.5)] rounded-full flex items-center justify-center">
                      <span className="font-[family-name:var(--font-playfair)] text-5xl gold-gradient">1892</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-[rgba(201,169,98,0.2)] rounded-xl" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Quote className="w-12 h-12 text-[#c9a962] mb-6" />
              <p className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl text-white mb-6 leading-relaxed italic">
                "The art of distillation is not merely about creating spirits. 
                It is about capturing the essence of a land, a people, and a tradition."
              </p>
              <p className="text-[#c9a962] mb-1">—Kebede Assefa, Founder</p>
              <p className="text-gray-500 text-sm">Founder, AETHER Spirits</p>
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
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Our Journey</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl">
              A Century of <span className="gold-gradient">Excellence</span>
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
                    <span className="text-[#c9a962] text-4xl font-[family-name:var(--font-playfair)]">{event.year}</span>
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

      <section className="py-24 bg-[#050505]">
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

      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 md:p-16 border border-[rgba(201,169,98,0.1)] text-center"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl mb-6">
              Become Part of Our <span className="gold-gradient">Story</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Explore our spirits and discover why AETHER has been synonymous with excellence for over a century.
            </p>
            <Link
              href="/spirits"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c9a962] to-[#e8d5a3] text-black font-semibold tracking-wider uppercase rounded hover:shadow-[0_0_40px_rgba(201,169,98,0.4)] transition-all duration-300"
            >
              Explore Our Spirits <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

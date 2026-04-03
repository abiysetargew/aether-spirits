'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Droplets, Flame, Wind, Calendar, MapPin } from 'lucide-react';

const processSteps = [
  {
    number: '01',
    title: 'Water Source',
    icon: Droplets,
    description: 'Pure Ethiopian highland water, filtered through volcanic rock.',
    detail: 'Our water originates from Ethiopian highland springs, naturally filtered through ancient volcanic rock formations, giving our beers their unique mineral profile.',
  },
  {
    number: '02',
    title: 'Ingredient Selection',
    icon: Wind,
    description: 'Hand-selected Ethiopian barley and premium hops.',
    detail: 'From Ethiopian barley fields to premium imported hops, each ingredient is sourced at peak quality and processed within 24 hours of delivery.',
  },
  {
    number: '03',
    title: 'Brewing Process',
    icon: Flame,
    description: 'State-of-the-art brewing equipment operated by expert brewers.',
    detail: 'Our modern facility in Akaki Kality uses the latest brewing technology, guided by master brewers with decades of combined experience.',
  },
  {
    number: '04',
    title: 'Quality Control',
    icon: Calendar,
    description: 'Rigorous testing at every stage of production.',
    detail: 'From raw materials to final packaging, every batch undergoes comprehensive quality testing to ensure consistent excellence.',
  },
];

const features = [
  {
    title: 'Headquarters',
    location: 'Addis Ababa',
    description: 'Bole Road, Addis Ababa',
    icon: MapPin,
  },
  {
    title: 'Production Facility',
    location: 'Akaki Kality',
    description: 'Industrial Zone, Addis Ababa',
    icon: Droplets,
  },
  {
    title: 'Quality Lab',
    location: 'Addis Ababa',
    description: 'State-of-the-art testing',
    icon: Flame,
  },
];

export default function DistilleryPage() {
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.15)_0%,transparent_70%)]" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">
                Made in Ethiopia
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl mb-6">
                Our <span className="gold-gradient">Facility</span>
              </h1>
              <p className="text-gray-400 text-xl leading-relaxed">
                State-of-the-art brewing facilities in the heart of Addis Ababa. 
                Where Ethiopian tradition meets modern brewing excellence.
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
              <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">The Process</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl mb-6">
                From <span className="gold-gradient">Ingredient</span> to <span className="gold-gradient">Bottle</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Our meticulous brewing process combines time-honored techniques with modern precision. 
                Each step is carefully monitored to ensure consistent quality in every batch.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#c9a962] hover:text-[#e8d5a3] transition-colors"
              >
                Schedule a Visit <ArrowRight size={18} />
              </Link>
            </motion.div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full border border-[rgba(201,169,98,0.3)] flex items-center justify-center group-hover:border-[#c9a962] group-hover:bg-[rgba(201,169,98,0.1)] transition-all duration-300">
                      <step.icon size={24} className="text-[#c9a962]" />
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-[rgba(201,169,98,0.3)] to-transparent" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <span className="text-[#c9a962] text-xs font-semibold">{step.number}</span>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">{step.description}</p>
                    <p className="text-gray-500 text-sm">{step.detail}</p>
                  </div>
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
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Our Locations</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl">
              Proudly <span className="gold-gradient">Ethiopian</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="glass rounded-2xl p-8 border border-[rgba(201,169,98,0.1)] hover:border-[rgba(201,169,98,0.3)] transition-all duration-300">
                  <feature.icon size={48} className="text-[#c9a962] mb-6" />
                  <div className="flex items-center gap-2 text-[#c9a962] text-sm mb-2">
                    <MapPin size={14} />
                    {feature.location}
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
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
              Visit <span className="gold-gradient">Us</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Experience our facilities firsthand. Contact us to schedule a tour of our brewing facility 
              in Addis Ababa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c9a962] to-[#e8d5a3] text-black font-semibold tracking-wider uppercase rounded hover:shadow-[0_0_40px_rgba(201,169,98,0.4)] transition-all duration-300"
              >
                Contact Us <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

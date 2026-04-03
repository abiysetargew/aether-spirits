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
    description: 'Pure highland spring water, filtered through volcanic rock for over 200 years.',
    detail: 'Our water originates from the Ethiopian highlands at 3,000 meters elevation, naturally filtered through ancient volcanic rock formations.',
  },
  {
    number: '02',
    title: 'Botanical Selection',
    icon: Wind,
    description: 'Hand-picked botanicals from our highland estates and around the world.',
    detail: 'From Ethiopian juniper berries to Mediterranean herbs, each botanical is sourced at peak ripeness and processed within 24 hours.',
  },
  {
    number: '03',
    title: 'Copper Distillation',
    icon: Flame,
    description: 'Traditional copper pot stills operated by master distillers.',
    detail: 'Our century-old copper stills are charged with carefully selected ingredients and slowly distilled to capture every nuance of flavor.',
  },
  {
    number: '04',
    title: 'Patient Aging',
    icon: Calendar,
    description: 'Years of maturation in hand-selected oak barrels.',
    detail: 'From 3 years for our gin to 25 years for our XO cognac, each spirit is aged until our master taster deems it perfect.',
  },
];

const features = [
  {
    title: 'Highland Estate',
    location: 'Ethiopia',
    description: '3,000 meters above sea level',
    image: '/placeholder.jpg',
  },
  {
    title: 'Aging Cellars',
    location: 'France',
    description: 'Limousin oak barrels',
    image: '/placeholder.jpg',
  },
  {
    title: 'Bottling Facility',
    location: 'California',
    description: 'Small-batch perfection',
    image: '/placeholder.jpg',
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
                The Art of Distillation
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl mb-6">
                Our <span className="gold-gradient">Distillery</span>
              </h1>
              <p className="text-gray-400 text-xl leading-relaxed">
                A pilgrimage site for spirits enthusiasts. Where tradition meets innovation, 
                and every drop tells a story of craftsmanship passed down through generations.
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
                Our meticulous process combines time-honored techniques with modern precision. 
                Each step is carefully monitored by our master distillers to ensure 
                uncompromising quality in every batch.
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
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Our Facilities</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl">
              Three <span className="gold-gradient">Continents</span>, One Vision
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
                <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,169,98,0.1),transparent_70%)]" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center gap-2 text-[#c9a962] text-sm mb-2">
                      <MapPin size={14} />
                      {feature.location}
                    </div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
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
              Experience the <span className="gold-gradient">Distillery</span> in Person
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Join us for an exclusive guided tour of our facilities. Sample our spirits, 
              meet our master distillers, and discover the secrets behind our award-winning spirits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/visit"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c9a962] to-[#e8d5a3] text-black font-semibold tracking-wider uppercase rounded hover:shadow-[0_0_40px_rgba(201,169,98,0.4)] transition-all duration-300"
              >
                Book a Tour <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[rgba(201,169,98,0.5)] text-[#c9a962] font-medium tracking-wider uppercase rounded hover:bg-[rgba(201,169,98,0.1)] transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

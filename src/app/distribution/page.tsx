'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MapPin, Globe, Truck, Building2, Star, Phone, Mail, CheckCircle } from 'lucide-react';

const regions = [
  {
    name: 'Addis Ababa',
    coverage: '100%',
    description: 'Complete city coverage with same-day delivery',
    partners: 45,
  },
  {
    name: 'Oromia Region',
    coverage: '85%',
    description: 'Major towns and cities with 2-3 day delivery',
    partners: 28,
  },
  {
    name: 'Afar & Djibouti',
    coverage: '70%',
    description: 'Key cities including Dire Dawa',
    partners: 15,
  },
  {
    name: 'Other Regions',
    coverage: '50%',
    description: 'Expanding network across Ethiopia',
    partners: 12,
  },
];

const benefits = [
  {
    icon: Truck,
    title: 'Reliable Logistics',
    description: 'Temperature-controlled transportation ensuring product quality',
  },
  {
    icon: Building2,
    title: 'Competitive Margins',
    description: 'Attractive wholesale pricing for our distribution partners',
  },
  {
    icon: Globe,
    title: 'Marketing Support',
    description: 'Co-marketing opportunities and promotional materials',
  },
  {
    icon: Star,
    title: 'Priority Access',
    description: 'First access to limited releases and new products',
  },
];

const requirements = [
  'Valid business license',
  'Liquor license or permit',
  'Established retail or hospitality presence',
  'Commitment to brand standards',
  'Minimum initial order value',
];

export default function DistributionPage() {
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
          className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"
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
              <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-4">
                Partnership
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl mb-6">
                <span className="gold-gradient">Distribution</span>
                <br />
                <span className="text-white font-light">Network</span>
              </h1>
              <p className="text-gray-400 text-xl leading-relaxed">
                Join Ethiopia&apos;s premier luxury spirits distribution network. 
                We&apos;re expanding our presence across the country and seeking 
                dedicated partners who share our commitment to excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-4">Coverage</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl">
              Nationwide <span className="gold-gradient">Presence</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-8 border border-amber-600/10 hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <MapPin className="text-amber-500" size={24} />
                  <span className="text-amber-500 font-bold text-2xl">{region.coverage}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{region.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{region.description}</p>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Building2 size={14} />
                  <span>{region.partners} partners</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-4">Become a Partner</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl mb-6">
                Partner <span className="gold-gradient">Benefits</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                We value our distribution partners and offer comprehensive support to ensure mutual success. 
                Join the ETHO family and experience the benefits of representing Ethiopia&apos;s finest spirits.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-400 text-black font-semibold tracking-wider uppercase rounded hover:shadow-[0_0_40px_rgba(201,169,98,0.4)] transition-all duration-300"
              >
                Apply Now <ArrowRight size={18} />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl p-6 border border-amber-600/10"
                >
                  <benefit.icon className="text-amber-500 mb-4" size={32} />
                  <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 border border-amber-600/10"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-6">
                Partnership Requirements
              </h3>
              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-amber-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{req}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 border border-amber-600/10"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-6">
                Contact Distribution Team
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <Mail className="text-amber-500" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">distribution@ethiobeverages.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <Phone className="text-amber-500" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">+251 11 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <MapPin className="text-amber-500" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Office</p>
                    <p className="text-white">Bole Road, Addis Ababa</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 md:p-16 border border-amber-600/10 text-center"
          >
            <Truck className="w-16 h-16 text-amber-500 mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl mb-6">
              International <span className="gold-gradient">Expansion</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              While we focus on building our presence in Ethiopia, we&apos;re also exploring 
              opportunities for international distribution. Contact us to discuss potential 
              partnerships beyond Ethiopian borders.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-400 text-black font-semibold tracking-wider uppercase rounded hover:shadow-[0_0_40px_rgba(201,169,98,0.4)] transition-all duration-300"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

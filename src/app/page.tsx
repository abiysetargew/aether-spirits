'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Play, Star, Award, Wine, Globe, ArrowUpRight } from 'lucide-react';
import dynamic from 'next/dynamic';

const Scene3D = dynamic(() => import('@/components/Scene3D'), { ssr: false });

const featuredProducts = [
  {
    name: 'AETHER Gin No. 1',
    type: 'London Dry Gin',
    abv: '47%',
    description: 'Infused with rare Ethiopian botanicals',
    price: '$89',
    image: '/placeholder-gin.jpg',
  },
  {
    name: 'AETHER XO Cognac',
    type: 'Extra Old',
    abv: '40%',
    description: 'Aged 25 years in French oak',
    price: '$349',
    image: '/placeholder-cognac.jpg',
  },
  {
    name: 'AETHER Reserve',
    type: 'Signature Blend',
    abv: '45%',
    description: 'Our master distiller\'s masterpiece',
    price: '$199',
    image: '/placeholder-reserve.jpg',
  },
];

const stats = [
  { value: '1892', label: 'Year Founded' },
  { value: '50+', label: 'Awards Won' },
  { value: '30+', label: 'Countries' },
  { value: '100%', label: 'Handcrafted' },
];

export default function HomePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative">
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#0a0a0a]" />
        
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.1)_0%,transparent_70%)]" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 px-6 lg:px-20 pt-32 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-xl"
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="text-[#c9a962] text-sm tracking-[0.4em] uppercase mb-4"
              >
                Est. 1892
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl mb-6 leading-none"
              >
                <span className="gold-gradient">AETHER</span>
                <br />
                <span className="text-white text-4xl md:text-5xl lg:text-6xl">Spirits</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="text-gray-400 text-lg mb-8 leading-relaxed"
              >
                Where ancient Ethiopian traditions meet modern distilling excellence. 
                Experience spirits crafted with passion, precision, and centuries of heritage.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/spirits"
                  className="group px-8 py-4 bg-gradient-to-r from-[#c9a962] via-[#e8d5a3] to-[#c9a962] text-black font-semibold tracking-wider uppercase rounded flex items-center gap-2 hover:shadow-[0_0_40px_rgba(201,169,98,0.4)] transition-all duration-500"
                >
                  Explore Collection
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/distillery"
                  className="group px-8 py-4 border border-[rgba(201,169,98,0.5)] text-[#c9a962] font-medium tracking-wider uppercase rounded flex items-center gap-2 hover:bg-[rgba(201,169,98,0.1)] transition-all duration-300"
                >
                  <Play size={16} />
                  Virtual Tour
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="w-full lg:w-1/2 h-[50vh] lg:h-full"
          >
            <Scene3D />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={32} className="text-[#c9a962]" />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl gold-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
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
            className="text-center mb-16"
          >
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">The Collection</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl mb-6">
              Our <span className="gold-gradient">Finest</span> Spirits
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Each bottle tells a story of heritage, craftsmanship, and the relentless pursuit of perfection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(201,169,98,0.1)] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="glass rounded-2xl p-8 relative overflow-hidden">
                  <div className="h-64 bg-gradient-to-b from-[rgba(201,169,98,0.05)] to-transparent rounded-xl mb-6 flex items-center justify-center">
                    <div className="w-24 h-48 border border-[rgba(201,169,98,0.3)] rounded-lg bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]" />
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <Star size={14} className="text-[#c9a962]" fill="#c9a962" />
                    <span className="text-[#c9a962] text-sm">{product.type}</span>
                  </div>

                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-500 text-sm mb-4">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-[#c9a962] text-xl font-semibold">{product.price}</span>
                    <Link
                      href={`/shop/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#c9a962] transition-colors"
                    >
                      View Details <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/spirits"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[rgba(201,169,98,0.3)] text-[#c9a962] font-medium tracking-wider uppercase rounded hover:bg-[rgba(201,169,98,0.1)] transition-all duration-300"
            >
              View All Spirits <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(201,169,98,0.05)] via-transparent to-[rgba(201,169,98,0.05)]" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Heritage</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl mb-6 leading-tight">
                A Legacy of <span className="gold-gradient">Excellence</span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Founded in the highlands of Ethiopia in 1892, AETHER Spirits has been perfecting 
                the art of distillation for over a century. Our unique approach combines 
                traditional Ethiopian techniques with modern innovation.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                From the selection of botanicals grown in our highland estates to the careful 
                aging in hand-selected oak barrels, every step of our process reflects our 
                commitment to creating spirits of uncompromising quality.
              </p>
              <Link
                href="/heritage"
                className="inline-flex items-center gap-2 text-[#c9a962] hover:text-[#e8d5a3] transition-colors"
              >
                Discover Our Story <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] via-[#111] to-[#0a0a0a] flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(201,169,98,0.2),transparent_60%)]" />
                  <div className="w-40 h-64 border-2 border-[rgba(201,169,98,0.5)] rounded-xl relative">
                    <div className="absolute inset-4 border border-[rgba(201,169,98,0.3)] rounded-lg" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[rgba(201,169,98,0.2)] rounded-xl" />
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
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Craftsmanship</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl mb-6">
              The Distillery <span className="gold-gradient">Experience</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Wine,
                title: 'Select Botanicals',
                description: 'Hand-picked ingredients from our highland estates and around the world.',
              },
              {
                icon: Award,
                title: 'Artisan Distillation',
                description: 'Small-batch copper pot stills operated by master distillers.',
              },
              {
                icon: Globe,
                title: 'Patient Aging',
                description: 'Years of maturation in French oak barrels for ultimate complexity.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border border-[rgba(201,169,98,0.3)] flex items-center justify-center">
                  <feature.icon size={32} className="text-[#c9a962]" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-500">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#050505] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(201,169,98,0.02)] to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Newsletter</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl mb-6">
              Join the <span className="gold-gradient">AETHER</span> Circle
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Be the first to know about limited releases, exclusive events, and the art of fine spirits.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-[#111] border border-[rgba(255,255,255,0.1)] rounded text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a962] transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-[#c9a962] to-[#e8d5a3] text-black font-semibold tracking-wider uppercase rounded hover:shadow-[0_0_30px_rgba(201,169,98,0.3)] transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

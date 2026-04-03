'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Play, Star, Award, Wine, Globe, ArrowUpRight } from 'lucide-react';

const featuredProducts = [
  {
    name: 'Heisberg BR',
    type: 'Premium Lager',
    abv: '6.1%',
    description: 'Rich brown ale with caramel notes from Ethiopian highlands',
    price: 'ETB 450',
    image: 'https://ethiobeverages.com/wp-content/uploads/2025/09/ber-brown.png',
  },
  {
    name: 'Heisberg RD',
    type: 'Red Lager',
    abv: '6.1%',
    description: 'Smooth red lager with malty Ethiopian flavor',
    price: 'ETB 450',
    image: 'https://ethiobeverages.com/wp-content/uploads/2025/09/ber-red.png',
  },
  {
    name: 'Heisberg BL',
    type: 'Blonde Ale',
    abv: '6.1%',
    description: 'Crisp golden blonde ale, our flagship brew',
    price: 'ETB 450',
    image: 'https://ethiobeverages.com/wp-content/uploads/2025/09/beeer-blue-X2PSV6.png',
  },
];

const stats = [
  { value: '2021', label: 'Year Founded' },
  { value: '10+', label: 'Awards Won' },
  { value: '15+', label: 'Countries' },
  { value: '100%', label: 'Handcrafted' },
];

export default function HomePage() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: '#030303', color: '#fafafa', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #050505, #0a0a0a, #0a0a0a)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(201,169,98,0.1) 0%, transparent 70%)' }} />
        
        <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '48px', paddingTop: '120px' }}>
          {/* Text Content */}
          <div style={{ textAlign: 'center', maxWidth: '800px' }}>
            <p style={{ color: '#c9a962', fontSize: '14px', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Est. 2021 • Addis Ababa
            </p>
            <h1 style={{ fontSize: 'clamp(48px, 10vw, 96px)', fontWeight: 'bold', marginBottom: '24px', lineHeight: 1.1 }}>
              <span style={{ background: 'linear-gradient(135deg, #e8d5a3 0%, #c9a962 50%, #8b7355 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                HEISBERG
              </span>
              <br />
              <span style={{ fontSize: 'clamp(32px, 6vw, 64px)', color: 'white' }}>Beer</span>
            </h1>
            <p style={{ color: '#9ca3af', fontSize: '18px', lineHeight: 1.7, marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
              Ethiopia&apos;s premium craft beer, brewed with passion in Addis Ababa. 
              Born from Ethiopian highlands, crafted for the world.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/spirits" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', background: 'linear-gradient(to right, #c9a962, #e8d5a3, #c9a962)', color: '#000', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: '8px', textDecoration: 'none' }}>
                Explore Beers <ArrowRight size={18} />
              </Link>
              <Link href="/heritage" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', border: '1px solid rgba(201,169,98,0.5)', color: '#c9a962', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: '8px', textDecoration: 'none' }}>
                <Play size={16} /> Our Story
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: 'relative' }}
          >
            <img 
              src="https://ethiobeverages.com/wp-content/uploads/2025/09/ber-brown.png"
              alt="Heisberg Beer"
              style={{ height: '400px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 0 40px rgba(201,169,98,0.3))' }}
            />
            <div style={{ position: 'absolute', bottom: '-40px', left: '50%', transform: 'translateX(-50%)', width: '200px', height: '200px', background: 'rgba(201,169,98,0.1)', borderRadius: '50%', filter: 'blur(60px)' }} />
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} style={{ position: 'absolute', bottom: '40px' }}>
            <ChevronDown size={32} color="#c9a962" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '96px 24px', backgroundColor: '#050505' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', textAlign: 'center' }}>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div style={{ fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 'bold', background: 'linear-gradient(135deg, #e8d5a3, #c9a962, #8b7355)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '8px' }}>
                {stat.value}
              </div>
              <div style={{ color: '#6b7280', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section style={{ padding: '96px 24px', backgroundColor: '#080808' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '64px' }}
          >
            <p style={{ color: '#c9a962', fontSize: '14px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px' }}>The Collection</p>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', marginBottom: '24px' }}>
              Our <span style={{ background: 'linear-gradient(135deg, #e8d5a3, #c9a962)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Premium</span> Beers
            </h2>
            <p style={{ color: '#9ca3af', maxWidth: '640px', margin: '0 auto' }}>
              Crafted with the finest ingredients from Ethiopian highlands.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                onMouseEnter={() => setHoveredProduct(index)}
                onMouseLeave={() => setHoveredProduct(null)}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  padding: '32px',
                  transition: 'all 0.3s',
                  transform: hoveredProduct === index ? 'translateY(-8px)' : 'none',
                  boxShadow: hoveredProduct === index ? '0 20px 40px rgba(201,169,98,0.1)' : 'none'
                }}
              >
                <div style={{ height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    style={{ height: '100%', width: 'auto', objectFit: 'contain', transition: 'transform 0.3s', transform: hoveredProduct === index ? 'scale(1.05)' : 'none' }}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Star size={14} color="#c9a962" fill="#c9a962" />
                  <span style={{ color: '#c9a962', fontSize: '12px' }}>{product.type}</span>
                </div>
                <h3 style={{ fontSize: '24px', color: 'white', marginBottom: '8px' }}>{product.name}</h3>
                <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>{product.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <span style={{ color: '#c9a962', fontSize: '20px', fontWeight: 600 }}>{product.price}</span>
                  <Link href="/spirits" style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    View <ArrowUpRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/spirits" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', border: '1px solid rgba(201,169,98,0.3)', color: '#c9a962', textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: '8px', textDecoration: 'none' }}>
              View All Beers <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section style={{ padding: '96px 24px', backgroundColor: '#050505', position: 'relative' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p style={{ color: '#c9a962', fontSize: '14px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px' }}>Heritage</p>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '24px', lineHeight: 1.2 }}>
              Born in <span style={{ background: 'linear-gradient(135deg, #e8d5a3, #c9a962)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Ethiopia</span>
            </h2>
            <p style={{ color: '#9ca3af', marginBottom: '16px', lineHeight: 1.7 }}>
              Founded in October 2021 by visionary entrepreneurs <strong style={{ color: 'white' }}>Sisay H.W</strong> and <strong style={{ color: 'white' }}>Alula Setarge</strong>, Ethio Beverages was born in the heart of Addis Ababa.
            </p>
            <p style={{ color: '#9ca3af', marginBottom: '32px', lineHeight: 1.7 }}>
              From our state-of-the-art facility in the Industrial Zone, Akaki Kality, we craft premium beers that honor Ethiopian heritage.
            </p>
            <Link href="/heritage" style={{ color: '#c9a962', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Discover Our Story <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', padding: '48px', background: 'linear-gradient(135deg, #1a1a1a, #111)', borderRadius: '16px' }}
          >
            <div style={{ width: '120px', height: '120px', margin: '0 auto 24px', borderRadius: '50%', border: '2px solid rgba(201,169,98,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '48px', background: 'linear-gradient(135deg, #e8d5a3, #c9a962)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 'bold' }}>EB</span>
            </div>
            <p style={{ color: '#c9a962', letterSpacing: '0.2em', marginBottom: '8px' }}>ETHIO BEVERAGES</p>
            <p style={{ color: '#6b7280', fontSize: '14px' }}>Addis Ababa, Ethiopia</p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '96px 24px', backgroundColor: '#080808' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '64px' }}
          >
            <p style={{ color: '#c9a962', fontSize: '14px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px' }}>Craftsmanship</p>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
              The Heisberg <span style={{ background: 'linear-gradient(135deg, #e8d5a3, #c9a962)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Difference</span>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', textAlign: 'center' }}>
            {[
              { icon: Wine, title: 'Premium Ingredients', desc: 'Hand-selected Ethiopian barley and hops from the highlands.' },
              { icon: Award, title: 'Artisan Brewing', desc: 'Small-batch brewing by master brewers.' },
              { icon: Globe, title: 'International Quality', desc: 'Meeting global standards while celebrating Ethiopian character.' },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                style={{ padding: '32px' }}
              >
                <div style={{ width: '80px', height: '80px', margin: '0 auto 24px', borderRadius: '50%', border: '1px solid rgba(201,169,98,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <feature.icon size={32} color="#c9a962" />
                </div>
                <h3 style={{ fontSize: '20px', color: 'white', marginBottom: '16px' }}>{feature.title}</h3>
                <p style={{ color: '#6b7280' }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{ padding: '96px 24px', backgroundColor: '#050505' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p style={{ color: '#c9a962', fontSize: '14px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px' }}>Newsletter</p>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '24px' }}>
              Join the <span style={{ background: 'linear-gradient(135deg, #e8d5a3, #c9a962)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Heisberg</span> Family
            </h2>
            <p style={{ color: '#9ca3af', marginBottom: '32px' }}>
              Be the first to know about new releases and exclusive offers.
            </p>
            <form style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{ flex: '1 1 250px', padding: '16px 24px', background: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', outline: 'none', minWidth: '200px' }}
              />
              <button
                type="submit"
                style={{ padding: '16px 32px', background: 'linear-gradient(to right, #c9a962, #e8d5a3)', color: '#000', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
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

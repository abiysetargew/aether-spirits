'use client';

import Link from 'next/link';
import { Instagram, Twitter, Youtube, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#050505', borderTop: '1px solid rgba(201,169,98,0.1)', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(201,169,98,0.02))' }} />
      
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px 32px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '64px' }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #c9a962', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#c9a962', fontWeight: 'bold', fontSize: '16px' }}>EB</span>
              </div>
              <span style={{ background: 'linear-gradient(135deg, #e8d5a3, #c9a962)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontSize: '24px', fontWeight: 'bold', letterSpacing: '0.1em' }}>
                HEISBERG
              </span>
            </Link>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>
              Premium Ethiopian craft beer brewed in Addis Ababa. The taste that makes you feel awesome.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
                <a key={i} href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #374151', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280', transition: 'all 0.3s' }}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 style={{ color: '#c9a962', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px' }}>Explore</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Our Beers', 'Distillery', 'Heritage', 'Shop', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Our Beers' ? '/spirits' : `/${item.toLowerCase()}`} style={{ color: '#6b7280', fontSize: '14px', textDecoration: 'none', transition: 'color 0.3s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#c9a962', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#6b7280', fontSize: '14px' }}>
                <MapPin size={18} color="#c9a962" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Bole Road, Addis Ababa, Ethiopia</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#6b7280', fontSize: '14px' }}>
                <Phone size={18} color="#c9a962" />
                <span>+251 11 123 4567</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#6b7280', fontSize: '14px' }}>
                <Mail size={18} color="#c9a962" />
                <span>info@ethiobeverages.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ paddingTop: '32px', borderTop: '1px solid #1f2937', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '16px', alignItems: 'center' }}>
          <p style={{ color: '#6b7280', fontSize: '14px' }}>
            © {currentYear} Ethio Beverages. All rights reserved.
          </p>
          <p style={{ color: '#4b5563', fontSize: '12px' }}>
            Please drink responsibly. Must be 21+ to purchase.
          </p>
        </div>
      </div>
    </footer>
  );
}

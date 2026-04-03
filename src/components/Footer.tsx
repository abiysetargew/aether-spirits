'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      background: '#050505',
      borderTop: '1px solid rgba(201,169,98,0.1)',
      padding: '80px 48px 40px',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '64px',
          marginBottom: '64px',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                border: '2px solid #c9a962',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                fontWeight: '600',
                color: '#c9a962',
              }}>EB</div>
              <div>
                <div style={{ fontSize: '18px', fontWeight: '600', letterSpacing: '0.3em', color: '#c9a962' }}>ETHO</div>
                <div style={{ fontSize: '9px', letterSpacing: '0.4em', color: '#c9a962', opacity: 0.7 }}>BEVERAGES</div>
              </div>
            </div>
            <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.8, maxWidth: '300px' }}>
              Ethiopia's premier luxury spirits manufacturer. Crafting exceptional gin, cognac, and signature blends since 2021.
            </p>
          </div>

          <div>
            <h4 style={{ color: '#c9a962', fontSize: '11px', letterSpacing: '0.2em', marginBottom: '24px', textTransform: 'uppercase' }}>Explore</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { title: 'Collection', href: '/spirits' },
                { title: 'Distillery', href: '/distillery' },
                { title: 'Heritage', href: '/heritage' },
                { title: 'Gallery', href: '/gallery' },
                { title: 'Cocktails', href: '/cocktails' },
              ].map((item) => (
                <li key={item.title}>
                  <Link href={item.href} style={{
                    color: '#666',
                    fontSize: '14px',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#c9a962', fontSize: '11px', letterSpacing: '0.2em', marginBottom: '24px', textTransform: 'uppercase' }}>Business</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { title: 'Shop', href: '/shop' },
                { title: 'Distribution', href: '/distribution' },
                { title: 'Visit Us', href: '/visit' },
                { title: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.title}>
                  <Link href={item.href} style={{
                    color: '#666',
                    fontSize: '14px',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#c9a962', fontSize: '11px', letterSpacing: '0.2em', marginBottom: '24px', textTransform: 'uppercase' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ color: '#666', fontSize: '14px' }}>
                <span style={{ color: '#c9a962', marginRight: '12px' }}>📍</span>
                Bole Road, Addis Ababa
              </li>
              <li style={{ color: '#666', fontSize: '14px' }}>
                <span style={{ color: '#c9a962', marginRight: '12px' }}>📞</span>
                +251 11 123 4567
              </li>
              <li style={{ color: '#666', fontSize: '14px' }}>
                <span style={{ color: '#c9a962', marginRight: '12px' }}>✉️</span>
                info@ethobeverages.com
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#c9a962', fontSize: '11px', letterSpacing: '0.2em', marginBottom: '24px', textTransform: 'uppercase' }}>Follow Us</h4>
            <div style={{ display: 'flex', gap: '12px' }}>
              {['📷', '🐦', '📺', '📘'].map((icon, i) => (
                <a key={i} href="#" style={{
                  width: '44px',
                  height: '44px',
                  border: '1px solid #333',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#666',
                  fontSize: '18px',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#c9a962';
                  e.currentTarget.style.color = '#c9a962';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#333';
                  e.currentTarget.style.color = '#666';
                }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          paddingTop: '32px',
          borderTop: '1px solid #1a1a1a',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{ color: '#444', fontSize: '13px' }}>
            © 2025 Etho Beverages. All rights reserved.
          </p>
          <p style={{ color: '#333', fontSize: '11px' }}>
            Please drink responsibly. Must be 21+ to purchase.
          </p>
        </div>
      </div>
    </footer>
  );
}

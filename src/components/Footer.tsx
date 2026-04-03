'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      background: '#000',
      borderTop: '1px solid #111',
      padding: '60px 48px 40px',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
          marginBottom: '48px',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                border: '1px solid rgba(201,169,98,0.5)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#c9a962',
              }}>A</div>
              <div>
                <div style={{ fontSize: '16px', fontWeight: '300', letterSpacing: '0.4em', color: '#fff' }}>ADEY</div>
                <div style={{ fontSize: '8px', letterSpacing: '0.5em', color: '#c9a962', marginTop: '-2px' }}>SPIRITS</div>
              </div>
            </div>
            <p style={{ color: '#555', fontSize: '13px', lineHeight: 1.8, maxWidth: '280px' }}>
              Proudly Ethiopian premium spirits. Crafted with passion in Addis Ababa since 2021.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#c9a962', fontSize: '10px', letterSpacing: '0.2em', marginBottom: '20px', textTransform: 'uppercase' }}>Explore</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { title: 'Collection', href: '/collection' },
                { title: 'Heritage', href: '/heritage' },
                { title: 'About', href: '/about' },
                { title: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.title}>
                  <Link href={item.href} style={{
                    color: '#555',
                    fontSize: '13px',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#555'}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ color: '#c9a962', fontSize: '10px', letterSpacing: '0.2em', marginBottom: '20px', textTransform: 'uppercase' }}>Products</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Adey Ouzo', 'Adey Gin', 'Adey Lemon', 'Adey Super Mint'].map((item) => (
                <li key={item} style={{ color: '#555', fontSize: '13px' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#c9a962', fontSize: '10px', letterSpacing: '0.2em', marginBottom: '20px', textTransform: 'uppercase' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ color: '#555', fontSize: '13px' }}>
                <span style={{ color: '#c9a962', marginRight: '10px' }}>📍</span>
                Addis Ababa, Ethiopia
              </li>
              <li style={{ color: '#555', fontSize: '13px' }}>
                <span style={{ color: '#c9a962', marginRight: '10px' }}>✉️</span>
                info@ethiobeverages.com
              </li>
            </ul>
          </div>
        </div>

        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid #111',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ color: '#444', fontSize: '12px' }}>
            © 2025 Ethio Beverages. All rights reserved.
          </p>
        </div>
        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <p style={{ color: '#333', fontSize: '10px', letterSpacing: '0.1em' }}>
            Please drink responsibly. Must be 18+ to purchase.
          </p>
        </div>
      </div>
    </footer>
  );
}

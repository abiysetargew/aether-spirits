'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { title: 'Collection', href: '/collection' },
  { title: 'Heritage', href: '/heritage' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '12px 48px' : '20px 48px',
        background: scrolled ? 'rgba(0,0,0,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.4s ease',
        borderBottom: scrolled ? '1px solid rgba(201,169,98,0.1)' : 'none',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
                letterSpacing: '0.1em',
              }}>A</div>
              <div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: '300',
                  letterSpacing: '0.4em',
                  color: '#fff',
                }}>ADEY</div>
                <div style={{ fontSize: '8px', letterSpacing: '0.5em', color: '#c9a962', marginTop: '-2px' }}>SPIRITS</div>
              </div>
            </div>
          </Link>

          <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }} className="nav-links">
            {navLinks.map((link) => (
              <Link key={link.title} href={link.href} style={{
                color: '#888',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#c9a962')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            padding: '8px',
          }} className="menu-toggle">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          background: '#000',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px',
        }}>
          {navLinks.map((link) => (
            <Link key={link.title} href={link.href} onClick={() => setMenuOpen(false)} style={{
              color: '#fff',
              fontSize: '24px',
              fontWeight: '300',
              letterSpacing: '0.2em',
              textDecoration: 'none',
            }}>
              {link.title}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .menu-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
}

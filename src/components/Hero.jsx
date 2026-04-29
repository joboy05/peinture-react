import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Clock, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Prestations', href: '#services' },
  { label: 'Méthode', href: '#methode' },
  { label: 'Avis', href: '#avis' },
  { label: 'FAQ', href: '#faq' },
];

const marqueeItems = [
  'Peinture intérieure', 'Boiseries & menuiseries', 'Papier peint', 'Finitions haut de gamme',
  'Peinture intérieure', 'Boiseries & menuiseries', 'Papier peint', 'Finitions haut de gamme',
];

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen);
  }, [menuOpen]);

  return (
    <>
      {/* Header */}
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="container header-inner">
          <a href="#" className="brand">
            <img src="/images/logo.png" alt="Logo Peintre Marseille" width="48" height="48" />
            <div className="brand-text">
              <span className="brand-label">Artisan</span>
              <span className="brand-name">Peintre <span style={{ color: scrolled ? 'var(--accent)' : 'var(--accent)' }}>Marseille</span></span>
            </div>
          </a>

          <nav className="nav">
            {navLinks.map(l => (
              <a key={l.label} href={l.href}>{l.label}</a>
            ))}
          </nav>

          <a href="#contact" className="btn-devis">Devis gratuit</a>

          <button className="menu-btn" onClick={() => setMenuOpen(true)} aria-label="Menu">
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div 
              className="menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="mobile-menu-top">
                <div className="brand">
                  <span className="brand-name">Peintre <span style={{ color: 'var(--accent)' }}>Marseille</span></span>
                </div>
                <button onClick={() => setMenuOpen(false)} className="close-menu-btn">
                  <X size={28} />
                </button>
              </div>
              <motion.nav 
                initial="closed"
                animate="open"
                variants={{
                  open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
              >
                {[...navLinks, { label: 'Contact', href: '#contact' }].map(l => (
                  <motion.a 
                    key={l.label} 
                    href={l.href} 
                    onClick={() => setMenuOpen(false)}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: 20 }
                    }}
                  >
                    {l.label}
                  </motion.a>
                ))}
              </motion.nav>
              <div className="mobile-menu-foot">
                <a href="tel:+33400000000" className="mobile-cta-btn">
                  <Phone size={18} /> 04 00 00 00 00
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Split Layout */}
      <section className="hero">
        {/* Background Animation Blobs */}
        <div className="hero-background-blobs">
          <motion.div 
            className="blob blob-1"
            animate={{ 
              x: [0, 150, -100, 0], 
              y: [0, -150, 100, 0],
              scale: [1, 1.3, 0.8, 1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="blob blob-2"
            animate={{ 
              x: [0, -150, 150, 0], 
              y: [0, 100, -150, 0],
              scale: [1, 0.8, 1.2, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="blob blob-3"
            animate={{ 
              x: [0, 100, -150, 0], 
              y: [0, 150, -50, 0],
              scale: [1, 1.2, 0.9, 1]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="blob blob-4"
            animate={{ 
              x: [0, -200, 100, 0], 
              y: [0, -100, 150, 0],
              scale: [1, 0.9, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container hero-container-split">
          <motion.div 
            className="hero-image-box"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <img src="/images/hero-side.jpg" alt="Artisan peintre" loading="eager" fetchPriority="high" />
          </motion.div>
          
          <div className="hero-text-box">
            <div className="hero-content">
              <motion.p className="hero-eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                Artisan peintre spécialiste intérieur
              </motion.p>
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.9 }}>
                Peintre intérieur<br /><span className="city-accent">Marseille</span>
              </motion.h1>
              <motion.p className="hero-sub" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                Murs, plafonds, boiseries, papiers peints et revêtements muraux : votre intérieur mérite des finitions impeccables. Artisan local à Marseille, nous transformons vos pièces avec rigueur et précision — devis gratuit sous 24 h.
              </motion.p>
              <motion.div className="hero-actions" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
                <a href="#contact" className="btn-primary">Obtenir un devis gratuit</a>
                <a href="tel:+33400000000" className="btn-ghost"><Phone size={18} /> 04 00 00 00 00</a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span key={i} className="marquee-item">{item}</span>
          ))}
        </div>
      </div>
    </>
  );
}

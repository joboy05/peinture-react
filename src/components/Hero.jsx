import { useState, useEffect } from 'react';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* ============================================================
           TOP BAR (infos de contact)
      ============================================================ */}
      <div className="topbar" aria-label="Informations de contact">
        <div className="container topbar-inner">
          <span className="topbar-item">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true" width="14" height="14">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <a href="tel:+33400000000">04 00 00 00 00</a>
          </span>
          <span className="topbar-item topbar-item--hide-mobile">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true" width="14" height="14">
              <rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>
            </svg>
            contact@peintre-interieur-marseille.fr
          </span>
          <span className="topbar-item topbar-item--hide-mobile">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true" width="14" height="14">
              <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>
            </svg>
            Lun - Sam · 8 h - 19 h
          </span>
          <span className="topbar-badge">Intervention sous 48 h</span>
        </div>
      </div>

      {/* ============================================================
           HEADER
      ============================================================ */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="#" className="brand" aria-label="Peintre intérieur Marseille — accueil">
            <img src="/images/favicon.webp" alt="" width="40" height="40" className="brand-logo" />
            <span className="brand-text">
              <span className="brand-name">Peintre intérieur</span>
              <span className="brand-city">Marseille</span>
            </span>
          </a>

          <nav className="nav nav-desktop" aria-label="Navigation principale">
            <a href="#services">Prestations</a>
            <a href="#methode">Notre méthode</a>
            <a href="#avis">Avis clients</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a href="#contact" className="btn btn-primary btn-header">Devis gratuit</a>

          <button type="button" className="menu-toggle" onClick={toggleMenu}
                  aria-expanded={isMenuOpen} aria-controls="mobile-menu" aria-label="Ouvrir le menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* Menu mobile */}
      <div className="mobile-menu" id="mobile-menu" hidden={!isMenuOpen}>
        <div className="mobile-menu-backdrop" tabIndex="-1" onClick={closeMenu}></div>
        <div className="mobile-menu-panel" role="dialog" aria-modal="true" aria-label="Menu de navigation">
          <button type="button" className="mobile-menu-close" onClick={closeMenu} aria-label="Fermer le menu">
            <svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
          <nav className="nav nav-mobile" aria-label="Navigation principale">
            <a href="#services" onClick={closeMenu}>Prestations</a>
            <a href="#methode" onClick={closeMenu}>Notre méthode</a>
            <a href="#avis" onClick={closeMenu}>Avis clients</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <a href="#contact" onClick={closeMenu}>Devis gratuit</a>
          </nav>
          <a href="tel:+33400000000" className="btn btn-primary btn-block">04 00 00 00 00</a>
        </div>
      </div>

      {/* ============================================================
           HERO
      ============================================================ */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          <img src="/images/hero.webp" width="1600" height="900"
               alt="" loading="eager" fetchpriority="high" decoding="async" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <p className="eyebrow eyebrow--light">Artisan peintre spécialiste intérieur</p>
          <h1 id="hero-title">
            Peintre intérieur <span className="hero-city">Marseille</span>
          </h1>
          <p className="hero-lead">
            Murs, plafonds, boiseries, papiers peints et revêtements muraux : votre intérieur mérite des finitions impeccables.
            Artisan local à Marseille, nous transformons vos pièces avec rigueur et précision — devis gratuit sous 24 h.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary btn-lg">Obtenir un devis gratuit</a>
            <a href="tel:+33400000000" className="btn btn-ghost btn-lg">
              <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              04 00 00 00 00
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

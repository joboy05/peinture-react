export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand" style={{ marginBottom: '1.5rem', pointerEvents: 'none' }}>
              <img src="/images/logo.png" alt="Logo Peintre Marseille" width="48" height="48" style={{ borderRadius: '8px' }} />
              <div className="brand-text">
                <span className="brand-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Artisan</span>
                <span className="brand-name" style={{ color: 'white' }}>Peintre <span style={{ color: 'var(--accent-light)' }}>Marseille</span></span>
              </div>
            </div>
            <p>Artisan peintre spécialiste de la peinture intérieure à <span style={{ color: 'var(--accent-light)' }}>Marseille</span> et communes limitrophes. Rigueur, finitions soignées et transparence à chaque chantier.</p>
          </div>
          <div className="footer-col">
            <h4>Prestations</h4>
            <ul>
              <li><a href="#services">Peinture murs & plafonds</a></li>
              <li><a href="#services">Boiseries & menuiseries</a></li>
              <li><a href="#services">Papier peint & revêtements</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#methode">Notre méthode</a></li>
              <li><a href="#avis">Avis clients</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Devis gratuit</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+33400000000">04 00 00 00 00</a></li>
              <li>contact@peintre-interieur-marseille.fr</li>
              <li>13000 <span style={{ color: 'var(--accent-light)' }}>Marseille</span></li>
              <li>Lun - Sam · 8 h - 19 h</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {year} Peintre intérieur <span style={{ color: 'var(--accent-light)' }}>Marseille</span> — Artisan peintre. Tous droits réservés.</p>
          <p style={{ color: 'var(--muted)', fontSize: '0.72rem', letterSpacing: '0.05em' }}><span style={{ color: 'var(--accent-light)' }}>Marseille</span> · 13000</p>
        </div>
      </div>
    </footer>
  );
}

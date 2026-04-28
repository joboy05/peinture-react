export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <strong>Peintre intérieur Marseille</strong>
          <p>
            Artisan peintre spécialiste de la peinture intérieure à Marseille et communes limitrophes.
            Rigueur, finitions soignées et transparence à chaque chantier.
          </p>
        </div>

        <div className="footer-col">
          <h3>Prestations</h3>
          <ul>
            <li><a href="#services">Peinture murs &amp; plafonds</a></li>
            <li><a href="#services">Boiseries &amp; menuiseries</a></li>
            <li><a href="#services">Papier peint &amp; revêtements</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Liens utiles</h3>
          <ul>
            <li><a href="#methode">Notre méthode</a></li>
            <li><a href="#avis">Avis clients</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Devis gratuit</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <ul className="footer-contact">
            <li><a href="tel:+33400000000">04 00 00 00 00</a></li>
            <li>contact@peintre-interieur-marseille.fr</li>
            <li>13000 Marseille</li>
            <li>Lun - Sam · 8 h - 19 h</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {year} Peintre intérieur Marseille — Artisan peintre. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

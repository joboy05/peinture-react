export default function CTAFinal() {
  return (
    <section className="section-cta-final" aria-labelledby="cta-final-title">
      <div className="container cta-final-inner">
        <h2 id="cta-final-title">Prêt à redonner vie à votre intérieur ?</h2>
        <p>Contactez-nous aujourd'hui : votre devis personnalisé est prêt sous 24 h.</p>
        <div className="cta-final-actions">
          <a href="#contact" className="btn btn-primary btn-lg">Demander mon devis gratuit</a>
          <a href="tel:+33400000000" className="btn btn-ghost-dark btn-lg">
            <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            04 00 00 00 00
          </a>
        </div>
      </div>
    </section>
  );
}

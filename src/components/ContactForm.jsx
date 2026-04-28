import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('success');
  };

  return (
    <section className="section section-primary" id="contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-intro">
          <p className="eyebrow eyebrow--light">Demande de devis</p>
          <h2 id="contact-title" className="section-heading section-heading--light">
            Votre devis peinture intérieure<br />en 24 h, sans engagement
          </h2>
          <p className="contact-lead">
            Remplissez le formulaire : nous revenons vers vous dans la journée pour fixer une visite gratuite à
            Marseille. Précisez la pièce concernée et vos contraintes de planning, nous ferons le maximum pour
            nous adapter.
          </p>

          <ul className="contact-info-list">
            <li>
              <svg className="ic" viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <a href="tel:+33400000000">04 00 00 00 00</a>
            </li>
            <li>
              <svg className="ic" viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
                <rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>
              </svg>
              contact@peintre-interieur-marseille.fr
            </li>
            <li>
              <svg className="ic" viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
                <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>
              </svg>
              Lundi - Samedi · 8 h - 19 h
            </li>
            <li>
              <svg className="ic" viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Marseille et communes limitrophes
            </li>
          </ul>
        </div>

        <div className="contact-form-wrap">
          {status === 'success' ? (
            <div className="contact-form-feedback contact-form-feedback--success">
              Merci ! Votre demande a été envoyée avec succès. Nous vous recontacterons sous 24 h.
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="hp-field" aria-hidden="true">
                <label htmlFor="field-hp">Ne pas remplir ce champ</label>
                <input type="text" id="field-hp" name="field_hp" tabIndex="-1" autoComplete="off" />
              </div>

              <div className="contact-row">
                <div className="contact-field">
                  <label htmlFor="name">Nom &amp; Prénom</label>
                  <input type="text" id="name" name="name" required autoComplete="name" placeholder="Votre nom complet" />
                </div>
                <div className="contact-field">
                  <label htmlFor="phone">Téléphone</label>
                  <input type="tel" id="phone" name="phone" required autoComplete="tel" placeholder="06 XX XX XX XX" />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="email">Adresse e-mail</label>
                <input type="email" id="email" name="email" required autoComplete="email" placeholder="vous@exemple.fr" />
              </div>

              <div className="contact-row">
                <div className="contact-field">
                  <label htmlFor="postal">Code postal</label>
                  <input type="text" id="postal" name="postal" required maxLength="5" placeholder="13001" />
                </div>
                <div className="contact-field">
                  <label htmlFor="city">Ville</label>
                  <input type="text" id="city" name="city" required placeholder="Marseille" />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="message">Décrivez votre projet</label>
                <textarea id="message" name="message" rows="4" required
                          placeholder="Ex : peinture complète de mon salon 35 m² à Marseille, murs et plafond, teinte blanche cassée, idéalement en mars…"></textarea>
              </div>

              <button type="submit" className="btn btn-dark btn-block">Envoyer ma demande de devis</button>
              <p className="contact-disclaimer">
                En soumettant ce formulaire, vous acceptez d'être recontacté concernant votre demande de devis.
                Vos données ne sont jamais revendues.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

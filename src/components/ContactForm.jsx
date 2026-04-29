import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

const info = [
  { icon: <Phone size={16} />, label: '04 00 00 00 00', href: 'tel:+33400000000' },
  { icon: <Mail size={16} />, label: 'contact@peintre-interieur-marseille.fr' },
  { icon: <Clock size={16} />, label: 'Lundi - Samedi · 8 h - 19 h' },
  { icon: <MapPin size={16} />, label: 'Marseille et communes limitrophes' },
];

export default function ContactForm() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id_placeholder',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id_placeholder',
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_placeholder'
      );
      setStatus('success');
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      {/* Chic Background Animation: Outlined Circles & Glowing Dots */}
      <div className="contact-bg-elements">
        <motion.div className="outline-circle circle-1" 
          animate={{ y: [0, -40, 0], x: [0, 20, 0] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="outline-circle circle-2" 
          animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }} 
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
        <div className="glow-dot dot-1"></div>
        <div className="glow-dot dot-2"></div>
        <div className="glow-dot dot-3"></div>
      </div>

      <div className="container">
        <div className="contact-grid">
          <motion.div className="contact-intro"
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            <p className="section-label">Demande de devis</p>
            <h2>Votre devis <em>gratuit</em><br />en 24 h</h2>
            <p>Remplissez le formulaire : nous revenons vers vous dans la journée pour fixer une visite gratuite à Marseille.</p>
            <ul className="contact-info">
              {info.map((item, i) => (
                <li key={i}>
                  {item.icon}
                  {item.href ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="contact-form"
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            {status === 'success' ? (
              <div className="contact-success">
                <div className="success-mark">✓</div>
                <h3>Message envoyé</h3>
                <p>Nous vous recontactons sous 24 h.</p>
              </div>
            ) : status === 'error' ? (
              <div className="contact-error">
                <div className="error-mark">!</div>
                <h3>Erreur d'envoi</h3>
                <p>Désolé, un problème est survenu. Veuillez réessayer ou nous appeler directement.</p>
                <button onClick={() => setStatus(null)} className="btn-retry">Réessayer</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Nom & Prénom</label>
                    <input type="text" id="name" name="name" required placeholder="Votre nom complet" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">Téléphone</label>
                    <input type="tel" id="phone" name="phone" required placeholder="06 XX XX XX XX" />
                  </div>
                </div>
                <div className="form-field" style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="email">Adresse e-mail</label>
                  <input type="email" id="email" name="email" required placeholder="vous@exemple.fr" />
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="postal">Code postal</label>
                    <input type="text" id="postal" name="postal" required maxLength="5" placeholder="13001" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="city">Ville</label>
                    <input type="text" id="city" name="city" required placeholder="Marseille" />
                  </div>
                </div>
                <div className="form-field" style={{ marginBottom: '0.5rem' }}>
                  <label htmlFor="message">Décrivez votre projet</label>
                  <textarea id="message" name="message" rows="4" required
                    placeholder="Ex : peinture complète de mon salon 35 m², murs et plafond, teinte blanche cassée…" />
                </div>
                <button type="submit" className="btn-submit" disabled={loading}>
                  {loading ? 'Envoi…' : <><span>Envoyer ma demande</span><ArrowRight size={18} /></>}
                </button>
                <p className="form-note">Vos données ne sont jamais revendues. Réponse garantie sous 24 h.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

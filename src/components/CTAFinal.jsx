import { motion } from 'framer-motion';
import { Phone, Zap, Check } from 'lucide-react';

export default function CTAFinal() {
  return (
    <section className="cta-final">
      <div className="container">
        <motion.div 
          className="cta-card"
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Prêt à redonner vie<br />à votre <em>INTÉRIEUR</em> ?</h2>
          <p>Rejoignez le cercle des clients satisfaits à <span style={{ color: 'var(--accent)' }}>Marseille</span>. Recevez votre devis personnalisé en moins de 24 heures.</p>
          
          <div className="cta-pill">
            <a href="#contact" className="btn-main">Demander mon devis gratuit</a>
            <a href="tel:+33400000000" className="btn-tel">
              <Phone size={18} />
              04 00 00 00 00
            </a>
          </div>

          <div className="cta-foot">
            <span><Zap size={14} fill="currentColor" style={{ color: '#F59E0B' }} /> SANS ENGAGEMENT</span>
            <span><Check size={16} strokeWidth={3} style={{ color: '#10B981' }} /> VISITE GRATUITE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

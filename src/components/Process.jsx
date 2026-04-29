import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Prise de contact & visite', desc: 'Vous nous décrivez votre projet par téléphone ou via le formulaire. Sous 24 h, nous fixons une visite gratuite à votre domicile pour mesurer, diagnostiquer les supports et comprendre vos attentes esthétiques.' },
  { num: '02', title: 'Devis détaillé et transparent', desc: 'Sous 48 h après la visite, vous recevez un devis clair, poste par poste : préparation, peintures, main d\'œuvre, délais. Aucun frais caché, aucune rallonge non prévue. Vous décidez en toute confiance.' },
  { num: '03', title: 'Préparation & protection', desc: 'Le jour J, nous protégeons intégralement sols et mobilier (bâches, films, adhésifs). Nous préparons les supports : rebouchage, ponçage, primaire. Une base saine est la condition d\'une finition durable.' },
  { num: '04', title: 'Application & réception', desc: 'Nous appliquons les peintures en couches régulières, dans le respect des temps de séchage. Chantier rendu propre, nettoyé. Nous validons ensemble chaque pièce avant la réception définitive des travaux.' },
];

export default function Process() {
  return (
    <section className="process" id="methode">
      <div className="container">
        <div className="process-header">
          <p className="section-label">Notre méthode</p>
          <h2 className="section-title">4 étapes claires,<br />zéro surprise</h2>
        </div>
        
        <div className="process-bento-grid">
          {steps.map((s, i) => (
            <motion.div key={i} className="process-card"
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ delay: i * 0.1, duration: 0.5 }}>
              <div className="process-card-num-bg">{s.num}</div>
              <div className="process-card-content">
                <div className="process-card-header">
                  <span className="process-card-n">{s.num}</span>
                  <div className="process-card-line"></div>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, Paintbrush, FileCheck, Clock, HeartHandshake, ArrowRight, Leaf, Shield, Euro, Timer, Award } from 'lucide-react';

const reasons = [
  { 
    icon: <MapPin size={24} />, 
    title: 'Artisan local à Marseille', 
    desc: 'Déplacements rapides et connaissance parfaite des bâtis marseillais.', 
    highlightIcon: <MapPin size={14} />,
    highlightText: '100% Local',
    cta: 'Notre zone d\'intervention'
  },
  { 
    icon: <Paintbrush size={24} />, 
    title: 'Peintures certifiées A+', 
    desc: 'Utilisation exclusive de marques professionnelles respectueuses de votre santé.', 
    highlightIcon: <Leaf size={14} />,
    highlightText: 'Éco-responsable',
    cta: 'Voir nos engagements'
  },
  { 
    icon: <ShieldCheck size={24} />, 
    title: 'Protection totale', 
    desc: 'Votre mobilier et vos sols sont protégés avec une rigueur absolue.', 
    highlightIcon: <Shield size={14} />,
    highlightText: 'Chantier Propre',
    cta: 'Notre protocole'
  },
  { 
    icon: <FileCheck size={24} />, 
    title: 'Devis fixe et précis', 
    desc: 'Aucune surprise : le prix annoncé est le prix payé, sans frais cachés.', 
    highlightIcon: <Euro size={14} />,
    highlightText: 'Transparence Totale',
    cta: 'Demander mon devis'
  },
  { 
    icon: <Clock size={24} />, 
    title: 'Respect des délais', 
    desc: 'Nous commençons et terminons nos chantiers aux dates convenues.', 
    highlightIcon: <Timer size={14} />,
    highlightText: 'Ponctualité',
    cta: 'Consulter nos dispos'
  },
  { 
    icon: <HeartHandshake size={24} />, 
    title: 'Garantie décennale', 
    desc: 'Tous nos travaux sont couverts par une assurance professionnelle complète.', 
    highlightIcon: <Award size={14} />,
    highlightText: 'Sérénité 10 ans',
    cta: 'Détails de l\'assurance'
  },
];

export default function WhyUs() {
  return (
    <section className="whyus" id="pourquoi">
      {/* Background Animations */}
      <div className="whyus-bg">
        <motion.div className="whyus-blob blob-1" 
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }} 
          transition={{ duration: 15, repeat: Infinity }} />
        <motion.div className="whyus-blob blob-2" 
          animate={{ scale: [1, 1.1, 1], y: [0, -40, 0] }} 
          transition={{ duration: 12, repeat: Infinity, delay: 2 }} />
        <motion.div className="whyus-blob blob-3" 
          animate={{ scale: [1, 1.3, 1], x: [0, -20, 0] }} 
          transition={{ duration: 18, repeat: Infinity, delay: 1 }} />
      </div>

      <div className="container">
        <div className="whyus-header">
          <p className="section-label">Pourquoi nous choisir</p>
          <h2 className="section-title">Un artisan de confiance,<br />pas un généraliste</h2>
          <p className="section-sub">Choisir un spécialiste de la peinture intérieure, c'est l'assurance d'un rendu impeccable et d'une durabilité maximale.</p>
        </div>

        <div className="whyus-cards">
          {reasons.map((r, i) => (
            <motion.div key={i} className="why-card"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="why-card-icon">
                {r.icon}
              </div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
              
              <div className="why-highlight">
                {r.highlightIcon}
                <span>{r.highlightText}</span>
              </div>

              <a href="#contact" className="why-cta">
                {r.cta} <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

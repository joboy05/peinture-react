import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const services = [
  {
    num: '01', title: 'Peinture murs & plafonds',
    img: '/images/peinture-interieur.webp',
    desc: 'Rafraîchissement complet ou rénovation : préparation minutieuse des supports, application en deux couches minimum. Finition mate, satinée ou velours selon la pièce.',
    list: ['Diagnostic et préparation des supports', 'Peintures acryliques haut de gamme', 'Protection totale du mobilier'],
    link: 'Devis pour mes murs',
  },
  {
    num: '02', title: 'Boiseries & menuiseries',
    img: '/images/pose-papier-peint.webp',
    desc: 'Portes, plinthes, encadrements, escaliers, radiateurs : traitement adapté avec les primaires d\'accrochage professionnels. Résultat lisse, sans traces, durable.',
    list: ['Peintures laquées et glycéro pro', 'Ponçage et dépoussiérage intégral', 'Adapté au bois neuf ou rénové'],
    link: 'Devis pour mes boiseries',
  },
  {
    num: '03', title: 'Papier peint & revêtements',
    img: '/images/peinture-exterieur.webp',
    desc: 'Pose de papier peint intissé, vinyle, panoramique ou toile de verre. Raccords au millimètre et préparation soignée pour un rendu sans décollement ni bulles.',
    list: ['Tous formats, y compris panoramiques', 'Colles adaptées à chaque support', 'Conseils sur le choix du modèle'],
    link: 'Devis pour mon revêtement',
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="section-label">Nos prestations</p>
            <h2 className="section-title">Peinture intérieure<br />à <span style={{ color: 'var(--accent)' }}>Marseille</span></h2>
          </div>
          <p className="section-sub">Nous intervenons exclusivement sur la peinture intérieure — cette spécialisation garantit un niveau de finition que peu de généralistes atteignent.</p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.article key={i} className="service-card"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
              <div className="service-num">{s.num}</div>
              <div className="service-img">
                <img src={s.img} alt={s.title} loading="lazy" width="400" height="250" />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="service-list">
                {s.list.map((item, j) => (
                  <li key={j}>
                    <Check size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="service-link">{s.link}</a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

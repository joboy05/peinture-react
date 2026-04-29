import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  { q: "Combien de temps dure un chantier de peinture intérieure ?", a: "Tout dépend de la surface et de l'état des supports. Pour un appartement de 60 m² sans gros travaux préparatoires, comptez en général 4 à 6 jours ouvrés. Nous vous donnons un planning précis dès le devis, après la visite technique à votre domicile." },
  { q: "Quelles peintures utilisez-vous pour les pièces humides ?", a: "Nous utilisons des peintures acryliques spéciales hygrométrie, avec agents anti-moisissures et résistance aux projections d'eau. Ces produits professionnels (Tollens, Zolpan) sont testés pour résister durablement à la vapeur et au ruissellement." },
  { q: "Faut-il vider la pièce avant votre intervention ?", a: "Pas nécessairement. Nous déplaçons le mobilier léger au centre de la pièce et le protégeons intégralement avec bâches et films. Pour les meubles lourds ou fragiles, nous convenons ensemble de la meilleure solution lors de la visite technique." },
  { q: "Quelles finitions proposez-vous (mate, satinée, brillante) ?", a: "Nous proposons toutes les finitions : mate (chambres, plafonds), velours / satinée (séjour, couloirs, pièces humides) et brillante (boiseries, radiateurs). Lors de la visite, nous vous conseillons la finition la plus adaptée à chaque pièce et à son usage." },
  { q: "Proposez-vous un devis gratuit et détaillé ?", a: "Oui, toujours. La visite technique et le devis sont entièrement gratuits et sans engagement. Le devis détaille chaque poste (préparation, peinture, main d'œuvre) pour que vous compreniez précisément ce que vous payez. Aucun frais caché." },
  { q: "Quelle est votre zone d'intervention autour de Marseille ?", a: "Nous intervenons sur l'ensemble des arrondissements de Marseille (13001 à 13016) et dans les communes limitrophes : Aubagne, Allauch, Plan-de-Cuques, La Penne-sur-Huveaune, Cassis, Gémenos et Septèmes-les-Vallons. Aucun frais de déplacement n'est facturé dans cette zone." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq" id="faq">
      <div className="container faq-container">
        <div className="faq-header-alt">
          <p className="section-label">Questions fréquentes</p>
          <h2 className="section-title">Tout ce que vous<br />voulez savoir</h2>
          <p className="section-sub">Une autre question ? <a href="#contact">Posez-la-nous directement.</a></p>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <div 
              key={i} 
              className={`faq-item${open === i ? ' open' : ''}`}
              onMouseEnter={() => setOpen(i)}
            >
              <button 
                className="faq-trigger" 
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(open === i ? null : i);
                }}
                aria-expanded={open === i}
              >
                <span>{f.q}</span>
                <div className="faq-icon" style={{ transform: open === i ? 'rotate(45deg)' : 'none' }}>
                  <Plus size={20} />
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div className="faq-body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}>
                    <p>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const reviews = [
  { initials: 'CM', name: 'Caroline M.', role: 'Appartement 3 pièces · 13002 Marseille', text: "J'ai fait repeindre tout mon appartement à la Joliette. Travail très soigné, aucune trace sur les plafonds, finition nickel au niveau des plinthes. L'équipe est arrivée à l'heure chaque jour et le chantier a été rendu parfaitement propre." },
  { initials: 'JP', name: 'Julien P.', role: 'Maison · 13008 Marseille', text: "Devis très clair, respecté au centime près. Ils ont peint mes 4 chambres et le couloir en 3 jours, comme annoncé. Le conseil sur les teintes a vraiment fait la différence — je ne pensais pas qu'un blanc pouvait autant changer une pièce." },
  { initials: 'NL', name: 'Nadia L.', role: 'Appartement · 13006 Marseille', text: "Pose de papier peint panoramique dans mon salon : travail minutieux, raccords parfaits, aucune bulle. Ils ont pris le temps de bien préparer le mur avant la pose. Je recommande sans aucune hésitation, vraiment un travail d'artisan." },
  { initials: 'AR', name: 'Antoine R.', role: 'Studio · 13001 Marseille', text: "Excellent rapport qualité/prix. Réactif pour le devis et début des travaux rapide. Le résultat dépasse mes attentes, les murs sont parfaitement lisses. Je referai appel à eux pour ma prochaine rénovation sans hésiter." },
  { initials: 'SB', name: 'Sophie B.', role: 'Bureaux · Aubagne', text: "Une équipe professionnelle et discrète pour la peinture de nos locaux commerciaux. Chantier propre et délais respectés. La finition satinée est superbe." },
];

export default function Reviews() {
  const [isPaused, setIsPaused] = useState(false);
  const doubledReviews = [...reviews, ...reviews];

  return (
    <section className="reviews" id="avis">
      <div className="container">
        <div className="reviews-header">
          <p className="section-label">Témoignages</p>
          <h2 className="section-title">Ce que disent nos clients</h2>
        </div>

        <div className="reviews-container">
          <div 
            className="reviews-viewport"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div 
              className="reviews-track"
              animate={isPaused ? "paused" : "animate"}
              variants={{
                animate: {
                  x: [0, -2260], // 2260 is approx (420+32) * 5
                  transition: {
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 40,
                      ease: "linear",
                    },
                  },
                },
                paused: {
                  x: undefined, // Keep current position
                }
              }}
            >
              {doubledReviews.map((r, i) => (
                <div key={i} className="review-item">
                  <div className="review-content">
                    <div className="review-stars">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                      ))}
                    </div>
                    <blockquote className="review-quote">{r.text}</blockquote>
                  </div>
                  
                  <div className="review-meta">
                    <div className="review-avatar">{r.initials}</div>
                    <div className="review-author-info">
                      <strong>{r.name}</strong>
                      <span>{r.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

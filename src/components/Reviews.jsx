export default function Reviews() {
  const reviews = [
    {
      name: "Caroline M.",
      role: "Appartement 3 pièces · 13002 Marseille",
      text: "J'ai fait repeindre tout mon appartement à la Joliette. Travail très soigné, aucune trace sur les plafonds, finition nickel au niveau des plinthes. L'équipe est arrivée à l'heure chaque jour et le chantier a été rendu parfaitement propre."
    },
    {
      name: "Julien P.",
      role: "Maison · 13008 Marseille",
      text: "Devis très clair, respecté au centime près. Ils ont peint mes 4 chambres et le couloir en 3 jours, comme annoncé. Le conseil sur les teintes a vraiment fait la différence — je ne pensais pas qu'un blanc pouvait autant changer une pièce."
    },
    {
      name: "Nadia L.",
      role: "Appartement · 13006 Marseille",
      text: "Pose de papier peint panoramique dans mon salon : travail minutieux, raccords parfaits, aucune bulle. Ils ont pris le temps de bien préparer le mur avant la pose. Je recommande sans aucune hésitation, vraiment un travail d'artisan."
    }
  ];

  return (
    <section className="section" id="avis" aria-labelledby="avis-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Témoignages</p>
          <h2 id="avis-title" className="section-heading">Ce que nos clients disent à Marseille</h2>
          <p className="section-sub">
            Des particuliers et syndics nous font confiance pour leurs travaux de peinture intérieure.
            Voici quelques retours récents, sans filtre.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <blockquote key={i} className="review">
              <div className="review-stars" aria-label="Note : 5 sur 5">★★★★★</div>
              <p>{r.text}</p>
              <footer>
                <strong>{r.name}</strong>
                <span>{r.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

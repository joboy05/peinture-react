export default function FAQ() {
  const faqs = [
    { q: "Combien de temps dure un chantier de peinture intérieure ?", a: "Tout dépend de la surface et de l'état des supports. Pour un appartement de 60 m² sans gros travaux préparatoires, comptez en général 4 à 6 jours ouvrés. Nous vous donnons un planning précis dès le devis, après la visite technique à votre domicile." },
    { q: "Quelles peintures utilisez-vous pour les pièces humides (salle de bain, cuisine) ?", a: "Nous utilisons des peintures acryliques spéciales hygrométrie, avec agents anti-moisissures et résistance aux projections d'eau. Ces produits professionnels (Tollens, Zolpan) sont testés pour résister durablement à la vapeur et au ruissellement." },
    { q: "Faut-il vider la pièce avant votre intervention ?", a: "Pas nécessairement. Nous déplaçons le mobilier léger au centre de la pièce et le protégeons intégralement avec bâches et films. Pour les meubles lourds ou fragiles, nous convenons ensemble de la meilleure solution lors de la visite technique. L'objectif : minimiser vos contraintes." },
    { q: "Quelles finitions proposez-vous (mate, satinée, brillante) ?", a: "Nous proposons toutes les finitions : mate (chambres, plafonds), velours / satinée (séjour, couloirs, pièces humides) et brillante (boiseries, radiateurs). Lors de la visite, nous vous conseillons la finition la plus adaptée à chaque pièce et à son usage." },
    { q: "Intervenez-vous aussi sur la peinture des radiateurs et portes ?", a: "Oui, c'est une spécialité. Nous utilisons des peintures glycéro ou laquées hydro adaptées au métal et au bois, avec primaire d'accrochage pour garantir la tenue dans le temps. Nous traitons les portes intérieures, cadres, plinthes, radiateurs et même les escaliers." },
    { q: "Proposez-vous un devis gratuit et détaillé ?", a: "Oui, toujours. La visite technique et le devis sont entièrement gratuits et sans engagement. Le devis détaille chaque poste (préparation, peinture, main d'œuvre) pour que vous compreniez précisément ce que vous payez. Aucun frais caché, aucune relance commerciale agressive." },
    { q: "Quelle est votre zone d'intervention autour de Marseille ?", a: "Nous intervenons sur l'ensemble des arrondissements de Marseille (13001 à 13016) et dans les communes limitrophes : Aubagne, Allauch, Plan-de-Cuques, La Penne-sur-Huveaune, Cassis, Gémenos et Septèmes-les-Vallons. Aucun frais de déplacement n'est facturé dans cette zone." }
  ];

  return (
    <section className="section section-alt" id="faq" aria-labelledby="faq-title">
      <div className="container faq-wrap">
        <div className="section-head">
          <p className="eyebrow">Questions fréquentes</p>
          <h2 id="faq-title" className="section-heading">Tout ce que vous voulez savoir</h2>
          <p className="section-sub">
            Les réponses aux questions que nous recevons le plus souvent. Une autre question ?
            <a href="#contact"> Posez-la-nous directement.</a>
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <details key={i} className="faq-item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

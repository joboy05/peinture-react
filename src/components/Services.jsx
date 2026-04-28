export default function Services() {
  const services = [
    {
      tag: "01",
      title: "Peinture murs & plafonds",
      img: "/images/peinture-interieur.webp",
      desc: "Rafraîchissement complet ou rénovation : nous préparons chaque surface (rebouchage, ponçage, sous-couche) avant application en deux couches minimum. Finition mate, satinée ou velours selon la pièce et l'usage.",
      list: ["Diagnostic et préparation des supports", "Peintures acryliques haut de gamme", "Protection totale du mobilier"],
      linkText: "Devis gratuit pour mes murs →"
    },
    {
      tag: "02",
      title: "Boiseries & menuiseries",
      img: "/images/pose-papier-peint.webp",
      desc: "Portes, plinthes, encadrements, escaliers, radiateurs : nous traitons chaque élément en bois ou métal avec les primaires d'accrochage adaptés. Résultat lisse, sans traces, durable dans le temps.",
      list: ["Peintures laquées et glycéro pro", "Ponçage et dépoussiérage intégral", "Adapté au bois neuf ou rénové"],
      linkText: "Devis pour mes boiseries →"
    },
    {
      tag: "03",
      title: "Papier peint & revêtements",
      img: "/images/peinture-exterieur.webp",
      desc: "Pose de papier peint intissé, vinyle expansé, panoramique ou toile de verre. Nous réalisons les raccords au millimètre et préparons les supports pour un rendu sans décollement ni bulles.",
      list: ["Tous formats, y compris panoramiques", "Colles adaptées à chaque support", "Conseils sur le choix du modèle"],
      linkText: "Devis pour mon revêtement →"
    }
  ];

  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Nos prestations</p>
          <h2 id="services-title" className="section-heading">Peinture intérieure à Marseille : nos spécialités</h2>
          <p className="section-sub">
            Nous intervenons exclusivement sur la peinture intérieure. Cette spécialisation nous permet de garantir un
            niveau de finition que peu de généralistes atteignent : préparation minutieuse des supports, produits
            professionnels sélectionnés et application réalisée dans les règles de l'art.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <article key={i} className="service-card">
              <div className="service-card-media">
                <img src={s.img} width="400" height="285" alt={s.title} loading="lazy" decoding="async" />
              </div>
              <div className="service-card-body">
                <span className="service-tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="service-list">
                  {s.list.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
                <a href="#contact" className="service-link">{s.linkText}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

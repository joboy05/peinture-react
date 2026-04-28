export default function Process() {
  const steps = [
    { num: "01", title: "Prise de contact & visite", desc: "Vous nous décrivez votre projet par téléphone ou via le formulaire. Sous 24 h, nous fixons une visite gratuite à votre domicile pour mesurer, diagnostiquer les supports et comprendre vos attentes esthétiques." },
    { num: "02", title: "Devis détaillé et transparent", desc: "Sous 48 h après la visite, vous recevez un devis clair, poste par poste : préparation, peintures, main d'œuvre, délais. Aucun frais caché, aucune rallonge non prévue. Vous décidez en toute confiance." },
    { num: "03", title: "Préparation & protection", desc: "Le jour J, nous protégeons intégralement sols et mobilier (bâches, films, adhésifs). Nous préparons les supports : rebouchage, ponçage, primaire. Une base saine est la condition d'une finition durable." },
    { num: "04", title: "Application & réception", desc: "Nous appliquons les peintures en couches régulières, dans le respect des temps de séchage. Chantier rendu propre, nettoyé. Nous validons ensemble chaque pièce avant la réception définitive des travaux." }
  ];

  return (
    <section className="section section-alt" id="methode" aria-labelledby="methode-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Comment on travaille</p>
          <h2 id="methode-title" className="section-heading">Notre méthode en 4 étapes claires</h2>
          <p className="section-sub">
            Un chantier de peinture intérieure réussi repose autant sur la préparation que sur la pose. Voici comment
            nous organisons chaque intervention à Marseille, de la première prise de contact à la réception finale.
          </p>
        </div>

        <ol className="process-list">
          {steps.map((s, i) => (
            <li key={i} className="process-step">
              <span className="process-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

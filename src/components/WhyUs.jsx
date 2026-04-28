export default function WhyUs() {
  const checks = [
    { title: "Artisan local basé à Marseille", desc: "Déplacements rapides, connaissance des bâtis locaux, aucun frais de route." },
    { title: "Peintures professionnelles certifiées", desc: "Marques pro (Tollens, Zolpan, Guittet, Seigneurie). Émissions A+ pour la qualité de l'air intérieur." },
    { title: "Protection totale de votre intérieur", desc: "Bâches renforcées, films adhésifs, nettoyage quotidien. Votre mobilier n'est jamais exposé." },
    { title: "Devis fixe, respecté au centime", desc: "Pas de mauvaises surprises : ce qui est écrit est ce que vous payez, délais inclus." },
    { title: "Assurance décennale complète", desc: "Tous nos chantiers sont couverts dix ans. Vous êtes protégé sur la durée, sans démarche." },
    { title: "Respect strict des délais annoncés", desc: "Un calendrier est défini dès le devis. Nous le tenons — sauf imprévu technique signalé en amont." }
  ];

  return (
    <section className="section" id="pourquoi" aria-labelledby="pourquoi-title">
      <div className="container pourquoi-grid">
        <div className="pourquoi-intro">
          <p className="eyebrow">Pourquoi nous choisir</p>
          <h2 id="pourquoi-title" className="section-heading">Un artisan peintre intérieur de confiance à Marseille</h2>
          <p>
            Choisir un spécialiste de la peinture intérieure, c'est faire appel à un professionnel dont c'est le
            cœur de métier — pas un généraliste qui peint entre deux autres chantiers. À Marseille, nous mettons
            notre expertise au service de votre intérieur, avec une exigence constante sur la qualité du rendu.
          </p>
          <a href="#contact" className="btn btn-primary btn-lg">Parlons de votre projet</a>
        </div>

        <ul className="check-list">
          {checks.map((c, i) => (
            <li key={i}>
              <span className="check-ic" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg>
              </span>
              <div>
                <strong>{c.title}</strong>
                <p>{c.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

const stats = [
  { num: '+15', label: "ans d'expérience" },
  { num: '100%', label: 'Devis gratuit, sans engagement' },
  { num: '24h', label: 'Réponse garantie' },
  { num: '10', label: 'ans de garantie décennale' },
];

export default function TrustBar() {
  return (
    <section className="stats">
      {/* Background Animation Halos */}
      <div className="stats-bg-blobs">
        <motion.div 
          className="s-blob s-blob-1"
          animate={{ x: [-20, 20], y: [-10, 10], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.div 
          className="s-blob s-blob-2"
          animate={{ x: [20, -20], y: [10, -10], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="stats-grid">
          {stats.map((s, i) => (
            <motion.div key={i} className="stat-item"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

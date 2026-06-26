import styles from './ProductHero.module.css'

/**
 * ProductHero — panel izquierdo con color + título, panel derecho con foto + tagline
 * Props:
 *   leftColor  — color de fondo del panel izquierdo (ej: 'var(--gold)')
 *   title      — título grande en el panel izquierdo
 *   tagline    — subtítulo en el panel derecho
 *   photo      — URL de la imagen del panel derecho
 */
export default function ProductHero({ leftColor = 'var(--gold)', title, tagline, photo }) {
  return (
    <section className={styles.hero}>
      <div className={styles.left} style={{ background: leftColor }}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.right} style={{ backgroundImage: photo ? `url(${photo})` : 'none' }}>
        {tagline && <p className={styles.tagline}>{tagline}</p>}
      </div>
    </section>
  )
}

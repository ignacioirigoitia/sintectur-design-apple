import styles from './CTADual.module.css'

const PANELS = [
  {
    variant: 'light',
    label: 'Contacto',
    title: 'Un pequeño clic, un gran paso hacia tus objetivos.',
    cta: 'Escribinos',
    href: '#contacto',
  },
  {
    variant: 'color',
    label: 'Sobre nosotros',
    title: 'No empezamos ayer. Sumergite en nuestra historia.',
    cta: 'Conocenos',
    href: '#nosotros',
  },
]

export default function CTADual() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {PANELS.map((p) => (
          <div key={p.label} className={`${styles.panel} ${styles[p.variant]}`}>
            <div className={styles.textGroup}>
              <span className={styles.label}>{p.label}</span>
              <h2 className={styles.title}>{p.title}</h2>
              <a href={p.href} className={styles.cta}>{p.cta}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

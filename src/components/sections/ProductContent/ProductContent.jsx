import styles from './ProductContent.module.css'

const TimerIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="18" r="11" stroke="white" strokeWidth="1.5"/>
    <path d="M16 7V4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M13 4H19" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 12V18L20 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function renderParagraph(p, i) {
  if (p.emphasis === 'grid') {
    return (
      <div key={i} className={styles.grid}>
        {p.items.map((item, j) => (
          <div key={j} className={styles.gridItem}>
            <div className={styles.gridIcon}><TimerIcon /></div>
            <p className={styles.gridText}>{item.text}</p>
          </div>
        ))}
      </div>
    )
  }
  if (p.emphasis === 'subheading') {
    return <p key={i} className={styles.subheading}>{p.text}</p>
  }
  return (
    <p key={i} className={p.emphasis === 'secondary' ? styles.secondary : styles.primary}>
      {p.text}
    </p>
  )
}

export default function ProductContent({ chapters }) {
  return (
    <section className={styles.content}>
      {chapters.map((c) => (
        <article key={c.id} id={c.id} className={styles.chapter}>
          <div className={styles.label}>{c.label}</div>
          <div className={styles.body}>
            {c.paragraphs.map((p, i) => renderParagraph(p, i))}
          </div>
        </article>
      ))}
    </section>
  )
}

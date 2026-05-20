import styles from './ServiceCard.module.css'

export default function ServiceCard({ title, description, bg, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className={styles.card}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Fondo: reemplazar bg con url('ruta/foto.jpg') cuando el cliente provea las imágenes */}
      <div className={styles.bg} style={{ background: bg }} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <a className={styles.btn} href="#">Explorar</a>
      </div>
    </div>
  )
}

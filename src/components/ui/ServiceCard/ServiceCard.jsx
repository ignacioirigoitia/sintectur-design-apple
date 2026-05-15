import styles from './ServiceCard.module.css'

const COLOR_MAP = {
  'ic-blue':   styles.icBlue,
  'ic-purple': styles.icPurple,
  'ic-green':  styles.icGreen,
  'ic-amber':  styles.icAmber,
  'ic-rose':   styles.icRose,
  'ic-sky':    styles.icSky,
}

export default function ServiceCard({ icon, iconColor, title, description }) {
  return (
    <div className={styles.card}>
      <div className={`${styles.icon} ${COLOR_MAP[iconColor] || ''}`}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a className={styles.link} href="#">Ver más</a>
    </div>
  )
}

import styles from './StatItem.module.css'

export default function StatItem({ value, label }) {
  return (
    <div className={styles.item}>
      <h4>{value}</h4>
      <p>{label}</p>
    </div>
  )
}

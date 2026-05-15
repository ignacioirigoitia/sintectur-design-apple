import { useState, useEffect } from 'react'
import styles from './Loader.module.css'

export default function Loader({ visible }) {
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    if (!visible) {
      const t = setTimeout(() => setMounted(false), 500)
      return () => clearTimeout(t)
    }
  }, [visible])

  if (!mounted) return null

  return (
    <div className={`${styles.loader} ${!visible ? styles.hidden : ''}`}>
      <div className={styles.logo}>Sintectur</div>
      <div className={styles.tagline}>Travel &amp; Events — Buenos Aires</div>
      <div className={styles.barTrack}>
        <div className={styles.bar} />
      </div>
    </div>
  )
}

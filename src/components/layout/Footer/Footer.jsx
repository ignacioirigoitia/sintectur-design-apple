import styles from './Footer.module.css'
import { FOOTER_COLS } from '../../../data/footer'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>Sintectur</div>
          <p>
            Buenos Aires, Argentina
            <br />
            info@sintectur.com.ar
          </p>
        </div>
        <div className={styles.links}>
          {FOOTER_COLS.map((col) => (
            <div key={col.title} className={styles.col}>
              <h5>{col.title}</h5>
              {col.links.map((link) => (
                <a key={link} href="#">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <span>Copyright © 2025 Sintectur. Todos los derechos reservados.</span>
        <span>Política de privacidad · Sustentabilidad</span>
      </div>
    </footer>
  )
}

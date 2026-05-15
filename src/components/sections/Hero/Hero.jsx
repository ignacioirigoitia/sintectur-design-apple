import styles from './Hero.module.css'
import Button from '../../ui/Button/Button'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video className={styles.video} autoPlay muted loop playsInline>
        <source src="/Freeman.com-Website-Header-11_2025-v3-1.mp4" type="video/mp4" />
      </video>

      <div className={styles.eyebrow}>Travel &amp; Events — Buenos Aires</div>

      <h1 className={styles.title}>
        Viajes que <em>transforman</em> empresas.
      </h1>

      <p className={styles.sub}>
        Diseñamos experiencias de viaje corporativo, MICE e incentivos que conectan personas y
        potencian resultados.
      </p>

      <div className={styles.btns}>
        <Button variant="primary" href="#">Conocé nuestros servicios</Button>
        <Button variant="ghost" href="#">Hablar con un especialista</Button>
      </div>
    </section>
  )
}

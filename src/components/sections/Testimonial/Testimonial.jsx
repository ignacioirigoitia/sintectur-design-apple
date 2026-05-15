import styles from './Testimonial.module.css'

export default function Testimonial() {
  return (
    <section className={styles.section}>
      <div className={styles.label}>Clientes</div>
      <blockquote className={styles.quote}>
        Sintectur transformó nuestra forma de gestionar los viajes corporativos. Profesionalismo y
        atención al detalle en cada evento.
      </blockquote>
      <p className={styles.author}>— Gerente de Recursos Humanos, empresa multinacional</p>
    </section>
  )
}

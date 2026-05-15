import styles from './CTA.module.css'
import SectionHeader from '../../ui/SectionHeader/SectionHeader'
import Button from '../../ui/Button/Button'

export default function CTA() {
  return (
    <section className={styles.section}>
      <SectionHeader
        centered
        label="Contacto"
        title="¿Listo para llevar tu empresa al mundo?"
        titleStyle={{ maxWidth: '600px', margin: '0 auto' }}
        sub="Hablemos. Nuestro equipo está disponible para diseñar la solución ideal para tu organización."
        subStyle={{ margin: '14px auto 40px' }}
      />
      <div className={styles.pair}>
        <Button variant="big" href="#">Solicitar propuesta</Button>
        <Button variant="big-outline" href="#">Conocer el equipo</Button>
      </div>
    </section>
  )
}

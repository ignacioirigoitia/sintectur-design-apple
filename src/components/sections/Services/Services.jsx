import styles from './Services.module.css'
import SectionHeader from '../../ui/SectionHeader/SectionHeader'
import ServiceCard from '../../ui/ServiceCard/ServiceCard'
import { SERVICES } from '../../../data/services'

export default function Services() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <SectionHeader
            label="Servicios"
            title="Todo lo que tu empresa necesita para viajar."
            sub="Desde reuniones internacionales hasta viajes de estudio. Cada detalle, coordinado."
            centered
          />
        </div>
        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

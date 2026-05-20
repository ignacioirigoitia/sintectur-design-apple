import { useState } from 'react'
import styles from './Services.module.css'
import SectionHeader from '../../ui/SectionHeader/SectionHeader'
import ServiceCard from '../../ui/ServiceCard/ServiceCard'
import { SERVICES } from '../../../data/services'

export default function Services() {
  const [anyHovered, setAnyHovered] = useState(false)

  return (
    <section className={styles.section}>
      {/* Overlay que oscurece el resto de la página al hacer hover en una card */}
      <div className={`${styles.pageOverlay} ${anyHovered ? styles.pageOverlayVisible : ''}`} />

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
            <ServiceCard
              key={s.id}
              {...s}
              onMouseEnter={() => setAnyHovered(true)}
              onMouseLeave={() => setAnyHovered(false)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

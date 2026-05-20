import styles from './WhoWeAre.module.css'
import SectionHeader from '../../ui/SectionHeader/SectionHeader'
import { STATS } from '../../../data/stats'

// Placeholder — reemplazar con el contenido definitivo que provea el cliente
const PROBLEMS = [
  {
    number: '01',
    problem: 'Gestión fragmentada',
    detail:
      'Coordinar múltiples proveedores, aprobaciones y reportes de gastos consume tiempo y recursos que tu equipo no tiene.',
    solution: 'Centralizamos todo en un único punto de contacto, simplificando cada etapa del proceso.',
  },
  {
    number: '02',
    problem: 'Falta de visibilidad',
    detail:
      'Sin datos consolidados es imposible optimizar el presupuesto de viajes ni anticipar problemas operativos.',
    solution: 'Reportes en tiempo real, control de gastos y alertas automáticas para que siempre estés un paso adelante.',
  },
  {
    number: '03',
    problem: 'Experiencia inconsistente',
    detail:
      'Cada viajero vive una experiencia diferente. La falta de estándares impacta en productividad y bienestar.',
    solution: 'Procesos y herramientas que garantizan una experiencia premium y consistente en cada viaje.',
  },
]

export default function WhoWeAre() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <SectionHeader
            dark
            label="Quiénes somos"
            title="Resolvemos los desafíos del viaje corporativo."
            sub="Más de dos décadas al lado de empresas que necesitan que cada viaje funcione. Sin excusas, sin sorpresas."
            centered
          />
        </div>

        <div className={styles.cards}>
          {PROBLEMS.map((p) => (
            <div key={p.number} className={styles.card}>
              <span className={styles.number}>{p.number}</span>
              <h3 className={styles.cardTitle}>{p.problem}</h3>
              <p className={styles.cardDetail}>{p.detail}</p>
              <div className={styles.divider} />
              <p className={styles.cardSolution}>{p.solution}</p>
            </div>
          ))}
        </div>

        <div className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

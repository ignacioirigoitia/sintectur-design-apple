import styles from './MICE.module.css'
import SectionHeader from '../../ui/SectionHeader/SectionHeader'
import Chip from '../../ui/Chip/Chip'
import { MICE_CHIPS } from '../../../data/mice'

export default function MICE() {
  return (
    <section className={styles.section}>
      <SectionHeader
        dark
        centered
        label="MICE"
        title="Eventos que dejan huella."
        titleStyle={{ maxWidth: '700px', margin: '0 auto' }}
        sub="Meetings, incentivos, congresos y exposiciones diseñados para superar expectativas y generar resultados medibles."
      />
      <div className={styles.chips}>
        {MICE_CHIPS.map((chip) => (
          <Chip key={chip}>{chip}</Chip>
        ))}
      </div>
    </section>
  )
}

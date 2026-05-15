import styles from './SectionHeader.module.css'

export default function SectionHeader({
  label,
  title,
  sub,
  dark = false,
  centered = false,
  titleStyle,
  subStyle,
}) {
  return (
    <div>
      {label && (
        <div className={`${styles.label} ${dark ? styles.labelDark : ''}`}>
          {label}
        </div>
      )}
      {title && (
        <h2
          className={`${styles.title} ${dark ? styles.titleDark : ''}`}
          style={titleStyle}
        >
          {title}
        </h2>
      )}
      {sub && (
        <p
          className={`${styles.sub} ${dark ? styles.subDark : ''} ${centered ? styles.subCentered : ''}`}
          style={subStyle}
        >
          {sub}
        </p>
      )}
    </div>
  )
}

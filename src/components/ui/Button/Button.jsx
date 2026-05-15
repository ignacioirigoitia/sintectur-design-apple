import styles from './Button.module.css'

const VARIANT_CLASS = {
  primary: 'primary',
  ghost: 'ghost',
  big: 'big',
  'big-outline': 'bigOutline',
}

export default function Button({ variant = 'primary', href = '#', children }) {
  return (
    <a href={href} className={styles[VARIANT_CLASS[variant]]}>
      {children}
    </a>
  )
}

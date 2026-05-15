import { useState } from 'react'
import styles from './Nav.module.css'
import { NAV_LINKS } from '../../../data/nav'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(false)

  const handleToggle = () => {
    const next = !menuOpen
    setMenuOpen(next)
    if (!next) setSubmenuOpen(false)
  }

  const handleServiceClick = (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault()
      setSubmenuOpen((v) => !v)
    }
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Sintectur</div>

      <ul className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
        {NAV_LINKS.map((link) =>
          link.submenu ? (
            <li
              key={link.label}
              className={`${styles.hasSubmenu} ${submenuOpen ? styles.submenuOpen : ''}`}
            >
              <a href={link.href} className={styles.navParent} onClick={handleServiceClick}>
                {link.label} <span className={styles.arrow}>▾</span>
              </a>
              <ul className={styles.submenu}>
                {link.submenu.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          )
        )}
      </ul>

      <a className={styles.ctaNav} href="#">
        Contacto →
      </a>

      <button
        className={`${styles.toggle} ${menuOpen ? styles.toggleOpen : ''}`}
        onClick={handleToggle}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}

import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.section} id="contacto">
      <div className={styles.container}>

        <div className={styles.left}>
          <p className={styles.label}>Contacto</p>
          <h2 className={styles.title}>Hablemos.</h2>
          <p className={styles.sub}>
            Contanos sobre tu empresa y te armamos una propuesta a medida.
            Respondemos en menos de 24 horas.
          </p>
          <ul className={styles.bullets}>
            <li>
              <span className={styles.dot} />
              Consulta sin compromiso
            </li>
            <li>
              <span className={styles.dot} />
              Especialistas disponibles 24/7
            </li>
            <li>
              <span className={styles.dot} />
              Propuesta personalizada en 48 h
            </li>
          </ul>
        </div>

        <div className={styles.right}>
          <form className={styles.form} onSubmit={e => e.preventDefault()}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>Nombre</label>
                <input type="text" placeholder="Tu nombre" required />
              </div>
              <div className={styles.field}>
                <label>Empresa</label>
                <input type="text" placeholder="Tu empresa" />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>Email</label>
                <input type="email" placeholder="correo@empresa.com" required />
              </div>
              <div className={styles.field}>
                <label>Teléfono</label>
                <input type="tel" placeholder="+54 11 ..." />
              </div>
            </div>
            <div className={styles.field}>
              <label>Mensaje</label>
              <textarea rows={4} placeholder="¿En qué podemos ayudarte?" />
            </div>
            <button type="submit" className={styles.submit}>Enviar mensaje</button>
          </form>
        </div>

      </div>
    </section>
  )
}

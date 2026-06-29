import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './ContactoModal.module.css'

const ASUNTOS = [
  'Corporate Travel',
  'Incentive & Travel',
  'Sports & Travel',
  'Meetings & Events',
  'Travel Experience',
  'Experience Argentina',
  'Cruise Logistics (Hapag Lloyd)',
  'Orchestra Travel',
  'Study & Travel',
  'Becciu',
  'RRHH',
]

const ROUTING = {
  'Corporate Travel':               { to: 'ganona@sintectur.com.ar',     cc: 'manumambretti@sintectur.com.ar' },
  'Incentive & Travel':             { to: 'ganona@sintectur.com.ar',     cc: 'manumambretti@sintectur.com.ar' },
  'Sports & Travel':                { to: 'renatad@sintectur.com.ar',    cc: 'manumambretti@sintectur.com.ar' },
  'Meetings & Events':              { to: 'ganona@sintectur.com.ar',     cc: 'manumambretti@sintectur.com.ar' },
  'Travel Experience':              { to: 'paulak@sintectur.com.ar',     cc: 'manumambretti@sintectur.com.ar' },
  'Experience Argentina':           { to: 'antonellab@sintectur.com.ar', cc: 'manumambretti@sintectur.com.ar' },
  'Cruise Logistics (Hapag Lloyd)': { to: 'antonellab@sintectur.com.ar', cc: 'manumambretti@sintectur.com.ar' },
  'Orchestra Travel':               { to: 'renatad@sintectur.com.ar',    cc: 'manumambretti@sintectur.com.ar' },
  'Study & Travel':                 { to: 'renatad@sintectur.com.ar',    cc: 'manumambretti@sintectur.com.ar' },
  'Becciu':                         { to: 'becciu@sintectur.com.ar',     cc: 'manumambretti@sintectur.com.ar' },
  'RRHH':                           { to: 'rrhh@sintectur.com.ar',       cc: 'manumambretti@sintectur.com.ar' },
}

const EMPTY = { from_name: '', company: '', subject: '', reply_to: '', message: '' }

export default function ContactoModal({ onClose }) {
  const [fields, setFields] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handler)
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const set = (key) => (e) => setFields(f => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const route = ROUTING[fields.subject] ?? { to: 'manumambretti@sintectur.com.ar', cc: '' }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: fields.from_name,
          company:   fields.company,
          subject:   fields.subject,
          reply_to:  fields.reply_to,
          message:   fields.message,
          to_email:  route.to,
          cc_email:  route.cc,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
      setFields(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.panel} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Cerrar">✕</button>

        <h2 className={styles.title}>Contacto.</h2>
        <p className={styles.sub}>
          Contanos sobre tu empresa y te armamos una propuesta a medida.
          Respondemos en menos de 24 horas.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>

          <div className={styles.field}>
            <label htmlFor="cm-nombre">Nombre</label>
            <input
              id="cm-nombre"
              type="text"
              placeholder="Tu nombre"
              value={fields.from_name}
              onChange={set('from_name')}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="cm-empresa">Empresa</label>
            <input
              id="cm-empresa"
              type="text"
              placeholder="Tu empresa"
              value={fields.company}
              onChange={set('company')}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="cm-asunto">Asunto</label>
            <div className={styles.selectWrap}>
              <select
                id="cm-asunto"
                value={fields.subject}
                onChange={set('subject')}
                required
              >
                <option value="" disabled>Seleccioná un asunto</option>
                {ASUNTOS.map(a => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="cm-email">Email</label>
            <input
              id="cm-email"
              type="email"
              placeholder="correo@empresa.com"
              value={fields.reply_to}
              onChange={set('reply_to')}
              required
            />
          </div>

          <div className={styles.textareaField}>
            <label htmlFor="cm-mensaje">Mensaje</label>
            <textarea
              id="cm-mensaje"
              className={styles.textarea}
              rows={5}
              placeholder="¿En qué podemos ayudarte?"
              value={fields.message}
              onChange={set('message')}
            />
          </div>

          {status === 'success' && (
            <p className={styles.feedbackSuccess}>
              ¡Mensaje enviado! Te respondemos en menos de 24 horas.
            </p>
          )}
          {status === 'error' && (
            <p className={styles.feedbackError}>
              Ocurrió un error al enviar. Por favor intentá de nuevo.
            </p>
          )}

          <button
            type="submit"
            className={styles.submit}
            disabled={status === 'sending' || status === 'success'}
          >
            {status === 'sending' ? 'Enviando...' : status === 'success' ? 'Enviado' : 'Enviar Mensaje'}
          </button>

        </form>
      </div>
    </div>
  )
}

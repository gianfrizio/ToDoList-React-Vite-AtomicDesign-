import React, { useState, useEffect } from 'react'

function ContactForm({ onSubmit }) {
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [status, setStatus] = useState(null) // stato: null | 'ok' | 'error'

  // quando cambia `status` impostiamo un timer che lo resetta automaticamente
  useEffect(() => {
    if (status === null) return undefined
    const timeout = setTimeout(() => setStatus(null), status === 'ok' ? 2200 : 3000)
    return () => clearTimeout(timeout)
  }, [status])

  // Funzione helper per aggiornare un campo specifico
  const updateField = (field, value) => {
    setFormData(prev => ({
      ...prev, // Mantieni tutti i campi esistenti
      [field]: value // Aggiorna solo questo campo
    }))
  }

  const resetForm = () => {
    setFormData({ name: '', email: '' })
    setStatus(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // validazione di base
    if (!formData.name.trim() || !formData.email.trim()) {
      setStatus('error')
      return
    }

    try {
  if (onSubmit) await onSubmit(formData)
      setStatus('ok')
      // svuota i campi immediatamente dopo l'invio
      setFormData({ name: '', email: '' })
      // lo useEffect su `status` si occuperà di resettare lo stato
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} aria-label="contact-form">
      <div>
        <label>Name
          <input name="name" value={formData.name} onChange={(e) => updateField('name', e.target.value)} />
        </label>
      </div>
      <div>
        <label>Email
          <input name="email" type="email" value={formData.email} onChange={(e) => updateField('email', e.target.value)} />
        </label>
      </div>
      <div>
        <button type="submit">Invia</button>
      </div>
      {status === 'ok' && <div role="status">Invio avvenuto</div>}
      {status === 'error' && <div role="alert">Compila tutti i campi</div>}
    </form>
  )
}

export default ContactForm

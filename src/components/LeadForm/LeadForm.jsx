import { useId, useState } from 'react'
import Button from '../Button/Button.jsx'
import { leadForm } from '../../content/leadForm.js'
import { integrations } from '../../content/integrations.js'
import styles from './LeadForm.module.css'

const EMPTY = { name: '', phone: '', email: '', salary: '' }

// Mirrors footer.phone in content/closing.js and content/starter.js — see
// the same note on PHONE in Button.jsx.
const PHONE = '9894449002'

/* Plain, forgiving checks. The point is to catch a typo, not to police. */
function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please tell us your name.'

  const digits = values.phone.replace(/\D/g, '')
  if (!digits) errors.phone = 'We need a number to call you on.'
  else if (digits.length < 10) errors.phone = 'That looks short. 10 digits please.'

  if (!values.email.trim()) errors.email = 'Please add your email.'
  else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Check the email address.'

  if (!values.salary) errors.salary = 'Pick the salary you are aiming for.'
  return errors
}

function Tick() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12.5 10 17.5 19 7"
        stroke="#280820"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function LeadForm({ source }) {
  // The popup and the inline copy (Companies.jsx) can both be mounted at
  // once, so field ids need a per-instance prefix — two <input id="lead-name">
  // on the same page would break both the label association and the
  // getElementById focus-jump below.
  const uid = useId()
  const fieldId = (name) => `lead-${uid}-${name}`

  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  // idle -> submitting -> sent, or back to idle (with a banner) on failure.
  // Kept as one state machine rather than a `sent` bool plus a `submitting`
  // bool so the UI can't land in an impossible combination of the two.
  const [status, setStatus] = useState('idle')

  const set = (key) => (event) => {
    setValues((v) => ({ ...v, [key]: event.target.value }))
    // Clear a field's error as soon as the person starts fixing it.
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      // Put the cursor on the first thing that needs fixing.
      document.getElementById(fieldId(Object.keys(found)[0]))?.focus()
      return
    }

    setStatus('submitting')

    if (integrations.googleSheetEndpoint) {
      // URLSearchParams, not FormData: FormData posts as multipart/form-data,
      // and Apps Script's e.parameter does not reliably parse that — the
      // request "succeeds" but doPost sees empty fields. url-encoded is what
      // e.parameter is actually built for.
      const body = new URLSearchParams({
        name: values.name.trim(),
        phone: values.phone.trim(),
        email: values.email.trim(),
        salary: values.salary,
        page: window.location.pathname,
        // Which section's CTA opened this — 'companies-inline' for the copy
        // embedded directly in the page, a data-section value (see
        // Button.jsx) for everything opened through the popup.
        section: source || 'unknown',
      })

      try {
        // Apps Script Web Apps don't send back CORS headers a browser can
        // read, so mode: 'no-cors' is required and the response is always
        // opaque — this can confirm the request LEFT the browser, not that
        // Apps Script did anything with it. That residual gap is the price
        // of posting straight to Apps Script with no server of our own in
        // between; what this can and does catch is offline, DNS failure, or
        // a blocked request — the failure modes that used to show "Got it"
        // while silently losing the lead. No artificial timeout here: the
        // button just stays "Sending…" for as long as the request actually
        // takes, rather than guessing a cutoff.
        await fetch(integrations.googleSheetEndpoint, { method: 'POST', mode: 'no-cors', body })
      } catch {
        setStatus('error')
        return
      }
    } else if (import.meta.env.DEV) {
      console.warn('[LeadForm] integrations.googleSheetEndpoint is empty — this lead was not saved anywhere.')
    }

    // Fires once the lead is captured — the same moment the "Got it" card
    // below replaces the form. Guarded because an ad blocker or a page the
    // pixel snippet hasn't loaded on yet just means window.fbq is missing,
    // not an error worth breaking the submission over.
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead')
    }
    setStatus('sent')
  }

  if (status === 'sent') {
    return (
      <div className={styles.card}>
        <div className={styles.done}>
          <div className={styles.tick}>
            <Tick />
          </div>
          <p className={styles.doneHeading}>
            {leadForm.doneHeading} {values.name.trim().split(' ')[0]}.
          </p>
          <p className={styles.doneBody}>{leadForm.doneBody}</p>
        </div>
      </div>
    )
  }

  return (
    <form className={styles.card} onSubmit={handleSubmit} noValidate>
      <p className={styles.heading}>{leadForm.heading}</p>
      <p className={styles.sub}>{leadForm.sub}</p>

      {status === 'error' && (
        <p className={styles.submitError} role="alert">
          <strong>{leadForm.errorHeading}</strong> {leadForm.errorBody}{' '}
          <a className={styles.submitErrorLink} href={`tel:${PHONE}`}>{PHONE}</a>.
        </p>
      )}

      <div className={styles.fields}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor={fieldId('name')}>Your name</label>
          <input
            className={styles.input}
            id={fieldId('name')}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Ajay Krishna"
            value={values.name}
            onChange={set('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? fieldId('name-error') : undefined}
          />
          {errors.name && (
            <p className={styles.error} id={fieldId('name-error')}>{errors.name}</p>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={fieldId('phone')}>Phone number</label>
          <input
            className={styles.input}
            id={fieldId('phone')}
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="98765 43210"
            value={values.phone}
            onChange={set('phone')}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? fieldId('phone-error') : undefined}
          />
          {errors.phone && (
            <p className={styles.error} id={fieldId('phone-error')}>{errors.phone}</p>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={fieldId('email')}>Email</label>
          <input
            className={styles.input}
            id={fieldId('email')}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            value={values.email}
            onChange={set('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? fieldId('email-error') : undefined}
          />
          {errors.email && (
            <p className={styles.error} id={fieldId('email-error')}>{errors.email}</p>
          )}
        </div>

        <fieldset className={styles.field} style={{ border: 0, padding: 0, margin: 0 }}>
          <legend className={styles.label}>{leadForm.salaryLabel}</legend>
          <div className={styles.chips}>
            {leadForm.salaryOptions.map((option) => (
              <button
                type="button"
                key={option}
                id={option === leadForm.salaryOptions[0] ? fieldId('salary') : undefined}
                className={`${styles.chip} ${values.salary === option ? styles.chipOn : ''}`}
                aria-pressed={values.salary === option}
                onClick={() => {
                  setValues((v) => ({ ...v, salary: option }))
                  setErrors((e) => ({ ...e, salary: undefined }))
                }}
              >
                {option}
              </button>
            ))}
          </div>
          {errors.salary && <p className={styles.error}>{errors.salary}</p>}
        </fieldset>
      </div>

      <div className={styles.submit}>
        <Button as="button" type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? leadForm.submitLabelBusy : leadForm.submitLabel}
        </Button>
      </div>
      <p className={styles.note}>{leadForm.note}</p>
    </form>
  )
}

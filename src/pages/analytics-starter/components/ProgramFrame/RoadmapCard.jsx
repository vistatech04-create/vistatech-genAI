import { useState } from 'react'
import Button from '@/components/Button/Button.jsx'
import ImageSlot from '@/components/ImageSlot/ImageSlot.jsx'
import { starter } from '@/content/starter.js'

import CertGlyph from '../CertificateBackdrop/CertGlyph.jsx'
import styles from './RoadmapCard.module.css'

const { roadmap } = starter.program

const EMPTY = { name: '', phone: '', email: '', salary: '', stage: '' }

/* Forgiving checks. The point is to catch a typo, not to police. */
function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please tell us your name.'

  const digits = values.phone.replace(/\D/g, '')
  if (!digits) errors.phone = 'We need a number to send it to.'
  else if (digits.length < 10) errors.phone = 'That looks short. 10 digits please.'

  if (!values.email.trim()) errors.email = 'Please add your email.'
  else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Check the email address.'

  if (!values.salary) errors.salary = 'Pick the salary you are aiming for.'
  if (!values.stage) errors.stage = 'Pick the one that fits you.'
  return errors
}

/**
 * The two chip questions. Buttons rather than a dropdown: a dropdown on a
 * phone opens a native picker and costs a tap, and four short answers fit
 * on screen anyway.
 */
function Chips({ name, label, options, value, error, onPick }) {
  return (
    <fieldset className={styles.chipField}>
      <legend className={styles.label}>{label}</legend>
      <div className={styles.chips}>
        {options.map((option, i) => (
          <button
            type="button"
            key={option}
            id={i === 0 ? `roadmap-${name}` : undefined}
            className={`${styles.chip} ${value === option ? styles.chipOn : ''}`}
            aria-pressed={value === option}
            onClick={() => onPick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </fieldset>
  )
}

/**
 * The roadmap download.
 *
 * Deliberately the quieter of the two actions in this section: the button is
 * the outlined variant, because on this page flame means booking the week.
 * A download is what we offer someone who is not going to pay today, and it
 * must not out-shout the thing that actually earns.
 */
export default function RoadmapCard() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (key) => (event) => {
    setValues((v) => ({ ...v, [key]: event.target.value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const pick = (key) => (option) => {
    setValues((v) => ({ ...v, [key]: option }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      document.getElementById(`roadmap-${Object.keys(found)[0]}`)?.focus()
      return
    }
    // TODO send `values` somewhere real, fire the Meta Pixel event, and
    // deliver the PDF. Right now this only changes what is on screen.
    setSent(true)
  }

  return (
    <div className={styles.card}>
      {/* The bundle shot runs the full width of the card, so what arrives
          looks like a thing you receive rather than a link you click. */}
      <div className={styles.cover}>
        <ImageSlot
          src={roadmap.cover}
          alt={roadmap.coverAlt}
          label="Image 03"
          hint="The roadmap as a bundle, 16:10"
        />
      </div>

      <div className={styles.head}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowIcon}>
            <CertGlyph name="scroll" />
          </span>
          {roadmap.eyebrow}
        </p>
        <h3 className={styles.title}>{roadmap.title}</h3>
        <p className={styles.body}>{roadmap.body}</p>
      </div>

      <ul className={styles.bullets}>
        {roadmap.bullets.map((b) => (
          <li className={styles.bullet} key={b}>
            {b}
          </li>
        ))}
      </ul>

      {sent ? (
        <div className={styles.done}>
          <p className={styles.doneHeading}>
            {roadmap.doneHeading}, {values.name.trim().split(' ')[0]}.
          </p>
          <p className={styles.doneBody}>{roadmap.doneBody}</p>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="roadmap-name">
              {roadmap.nameLabel}
            </label>
            <input
              className={styles.input}
              id="roadmap-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder={roadmap.namePlaceholder}
              value={values.name}
              onChange={set('name')}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'roadmap-name-error' : undefined}
            />
            {errors.name && (
              <p className={styles.error} id="roadmap-name-error">
                {errors.name}
              </p>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="roadmap-phone">
              {roadmap.phoneLabel}
            </label>
            <input
              className={styles.input}
              id="roadmap-phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder={roadmap.phonePlaceholder}
              value={values.phone}
              onChange={set('phone')}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'roadmap-phone-error' : undefined}
            />
            {errors.phone && (
              <p className={styles.error} id="roadmap-phone-error">
                {errors.phone}
              </p>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="roadmap-email">
              {roadmap.emailLabel}
            </label>
            <input
              className={styles.input}
              id="roadmap-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={roadmap.emailPlaceholder}
              value={values.email}
              onChange={set('email')}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'roadmap-email-error' : undefined}
            />
            {errors.email && (
              <p className={styles.error} id="roadmap-email-error">
                {errors.email}
              </p>
            )}
          </div>

          <Chips
            name="salary"
            label={roadmap.salaryLabel}
            options={roadmap.salaryOptions}
            value={values.salary}
            error={errors.salary}
            onPick={pick('salary')}
          />

          <Chips
            name="stage"
            label={roadmap.stageLabel}
            options={roadmap.stageOptions}
            value={values.stage}
            error={errors.stage}
            onPick={pick('stage')}
          />

          <Button as="button" type="submit" variant="secondary">
            {roadmap.submitLabel}
          </Button>
          <p className={styles.note}>{roadmap.note}</p>
        </form>
      )}
    </div>
  )
}

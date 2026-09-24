import { useEffect, useState } from 'react'
import { useLeadModal } from './LeadModalContext.jsx'
import LeadForm from '../LeadForm/LeadForm.jsx'
import styles from './LeadModal.module.css'

/**
 * The lead form as a popup, opened by every '#enroll' Button on the main
 * page (see Button.jsx). One instance, rendered once near the root in
 * App.jsx.
 */
export default function LeadModal() {
  const { isOpen, closeModal } = useLeadModal()

  // A fresh key each time the popup opens, so reopening it after a
  // submission shows the blank form again instead of the "Got it" card.
  const [instance, setInstance] = useState(0)
  useEffect(() => {
    if (isOpen) setInstance((n) => n + 1)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (event) => {
      if (event.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, closeModal])

  if (!isOpen) return null

  return (
    <div
      className={styles.overlay}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeModal()
      }}
    >
      <div className={styles.dialog} role="dialog" aria-modal="true" aria-label="Tell us where to reach you">
        <button type="button" className={styles.close} onClick={closeModal} aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 5 19 19M19 5 5 19" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
          </svg>
        </button>
        <LeadForm key={instance} />
      </div>
    </div>
  )
}

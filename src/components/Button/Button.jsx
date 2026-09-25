import { useLeadModal } from '../LeadModal/LeadModalContext.jsx'
import styles from './Button.module.css'

// Mirrors footer.phone in content/closing.js and content/starter.js — the
// one number printed everywhere else on the site.
const PHONE = '9894449002'

/**
 * The only two button shapes on the site.
 * variant="primary"   the one action we want
 * variant="secondary" the softer step
 *
 * Two hrefs are wired centrally here, so every button that uses them gets
 * the behaviour without its label or destination being touched:
 *   '#enroll' opens the lead popup (LeadModal) instead of navigating.
 *   '#call'   goes straight to a phone call — a tel: link needs no popup.
 */
export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'default',
  fullOnMobile = true,
  as,
  onClick,
  ...rest
}) {
  const { openModal } = useLeadModal()

  const opensModal = href === '#enroll'
  const resolvedHref = href === '#call' ? `tel:${PHONE}` : href

  // A link by default, a real button when it has to submit a form or open
  // the popup.
  const Tag = as === 'button' || !resolvedHref || opensModal ? 'button' : 'a'

  const handleClick = (event) => {
    if (opensModal) {
      // Which section this button lives in, so the submission says where it
      // came from instead of every lead reading the same "/" (see the
      // data-section attributes on each section's root element).
      const section = event.currentTarget.closest('[data-section]')?.dataset.section
      openModal(section || 'unknown')
    }
    onClick?.(event)
  }

  const className = [
    styles.btn,
    styles[variant],
    size === 'small' ? styles.small : '',
    fullOnMobile ? styles.fullOnMobile : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag
      className={className}
      href={Tag === 'a' ? resolvedHref : undefined}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </Tag>
  )
}

import CertGlyph from './CertGlyph.jsx'
import styles from './CertificateBackdrop.module.css'

/**
 * The backdrop for the ₹999 page.
 *
 * The course page drifts the tools it teaches. This page drifts what you
 * walk out with: a certificate, a seal, a ribbon, a finished dashboard. Same
 * warm wash, same slow upward drift, so it reads as the same brand — but the
 * gold is turned up, because gold is what a certificate is printed with.
 */
const BLOCKS = [
  { slot: 'b1', tool: 'certificate' },
  { slot: 'b2', tool: 'seal' },
  { slot: 'b3', tool: 'project' },
  { slot: 'b4', tool: 'ribbon' },
  { slot: 'b5', tool: 'certificate' },
  { slot: 'b6', tool: 'checkBadge' },
  { slot: 'b7', tool: 'scroll' },
  { slot: 'b8', tool: 'seal' },
]

export default function CertificateBackdrop() {
  return (
    <div className={styles.backdrop} aria-hidden="true">
      {BLOCKS.map(({ slot, tool }) => (
        <span className={`${styles.block} ${styles[slot]}`} key={slot}>
          <CertGlyph name={tool} />
        </span>
      ))}
    </div>
  )
}

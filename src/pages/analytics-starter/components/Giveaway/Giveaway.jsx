import Button from '@/components/Button/Button.jsx'
import { starter } from '@/content/starter.js'

import PrizeGlyph from './PrizeGlyph.jsx'
import styles from './Giveaway.module.css'

const { giveaway } = starter

function Prize({ prize }) {
  return (
    <li className={styles.prize}>
      <span className={styles.icon}>
        <PrizeGlyph name={prize.glyph} />
      </span>
      <h3 className={styles.prizeTitle}>{prize.title}</h3>
      <p className={styles.prizeBody}>{prize.body}</p>
    </li>
  )
}

/**
 * Section 06. The draw.
 *
 * Last on the page on purpose. A prize is a reason to book today for
 * someone already convinced, and a distraction for someone who is not —
 * above the syllabus it would have the page selling a voucher instead of a
 * training week.
 *
 * The one dark section on the page, so the bonus reads as a bonus and the
 * page has somewhere to land before the booking.
 */
export default function Giveaway() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>{giveaway.eyebrow}</p>

        <h2 className={styles.heading}>
          {giveaway.heading}{' '}
          <span className={styles.accent}>{giveaway.headingAccent}</span>
        </h2>

        <ul className={styles.prizes}>
          <Prize prize={giveaway.prizes[0]} />
          {/* The plus is the whole point: it is both, not one of the two. */}
          <li className={styles.plus} aria-hidden="true">
            +
          </li>
          <Prize prize={giveaway.prizes[1]} />
        </ul>

        <p className={styles.rules}>{giveaway.rules}</p>

        <div className={styles.actions}>
          <Button href={giveaway.cta.href}>{giveaway.cta.label}</Button>
          <p className={styles.note}>{giveaway.note}</p>
        </div>
      </div>
    </section>
  )
}

import { starter } from '@/content/starter.js'

import styles from './Faq.module.css'

const { faq } = starter

/**
 * Section 08. The questions.
 *
 * Native <details>, so it opens without JavaScript, works with a keyboard
 * and a screen reader for free, and a phone's find-in-page can still reach
 * a closed answer. The first one is open, because a row of closed grey bars
 * does not tell anyone there are answers inside.
 */
export default function Faq() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>
          {faq.heading} <span className={styles.accent}>{faq.headingAccent}</span>
        </h2>

        <ul className={styles.list}>
          {faq.items.map((item, i) => (
            <li key={item.q}>
              <details className={styles.item} open={i === 0}>
                <summary className={styles.q}>
                  <span>{item.q}</span>
                  <span className={styles.mark} aria-hidden="true" />
                </summary>
                <p className={styles.a}>{item.a}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

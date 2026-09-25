import { faq } from '../../content/faq.js'
import styles from './Faq.module.css'

/**
 * Section 12. The questions.
 *
 * Native <details>, so an answer opens with JavaScript switched off, works
 * with a keyboard and a screen reader for free, and a phone's find-in-page
 * can still reach text inside a closed one. The first two are open, because
 * a column of shut grey bars does not tell anybody there are answers in
 * there — and because the first two are the money and the placement, which
 * is what the reader came down here for.
 */
export default function Faq() {
  return (
    <section className={styles.section} id="faq">
      <div className="container">
        <h2 className={styles.heading}>
          {faq.heading} <span className={styles.accent}>{faq.headingAccent}</span>
        </h2>

        <ul className={styles.list}>
          {faq.items.map((item, i) => (
            <li key={item.q}>
              <details className={styles.item} open={i < 2}>
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

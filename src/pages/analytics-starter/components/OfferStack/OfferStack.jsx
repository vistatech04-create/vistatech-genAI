import Button from '@/components/Button/Button.jsx'
import { starter } from '@/content/starter.js'

import styles from './OfferStack.module.css'

const { stack } = starter

function Row({ item }) {
  return (
    <li className={styles.row}>
      <span className={styles.rowText}>
        <span className={styles.rowTitle}>{item.title}</span>
        <span className={styles.rowBody}>{item.body}</span>
      </span>
      <span className={styles.rowValue}>{item.value}</span>
    </li>
  )
}

/**
 * Section 07. What the week is worth, itemised.
 *
 * Laid out as a receipt on purpose — a list of things with prices beside
 * them, added up, with what you actually pay at the bottom. It is the
 * format the argument already has, and it keeps the section from turning
 * into the usual wall of "BONUS #4 — worth ₹4,999".
 *
 * Every line is something Vista Tech can hand over and every number is one
 * we can defend. See the notes in starter.js before changing either.
 */
export default function OfferStack() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <h2 className={styles.heading}>
            {stack.heading} <span className={styles.accent}>{stack.headingAccent}</span>
          </h2>
          <p className={styles.sub}>{stack.sub}</p>
        </div>

        <div className={styles.card}>
          <ul className={styles.rows}>
            {stack.items.map((item) => (
              <Row item={item} key={item.title} />
            ))}
          </ul>

          <div className={styles.total}>
            <span className={styles.totalLabel}>{stack.totalLabel}</span>
            <span className={styles.totalValue}>{stack.total}</span>
          </div>

          <div className={styles.pay}>
            <span className={styles.payLabel}>{stack.payLabel}</span>
            <span className={styles.payValue}>{stack.pay}</span>
          </div>

          <p className={styles.note}>{stack.note}</p>
        </div>

        <div className={styles.actions}>
          <div className={styles.buttons}>
            <Button href={stack.cta.href}>{stack.cta.label}</Button>
          </div>
          <p className={styles.footnote}>{stack.footnote}</p>
        </div>
      </div>
    </section>
  )
}

import Button from '../Button/Button.jsx'
import JoinStrip from '../JoinStrip/JoinStrip.jsx'
import { social } from '../../content/social.js'
import { valueStack } from '../../content/valueStack.js'
import styles from './ValueStack.module.css'

/**
 * Section 09. What the fee pays for, itemised.
 *
 * Laid out as a receipt on purpose — things on the left, prices on the
 * right, a rule, a total — because that is the shape the argument already
 * has, and it keeps the section out of the usual "BONUS #4 — worth
 * ₹24,999!!" register that makes a reader stop believing every other
 * number on the page.
 *
 * The card steps down once and then stops: what it all adds up to, then
 * the full fee. It does NOT show what is due today — half now, half after
 * placement is the fee section's reveal, three sections further down, and
 * it only lands as relief on a reader who has already swallowed ₹29,998.
 * Read the note at the top of valueStack.js before adding a number here.
 *
 * Every line is something Vista Tech can hand over and every value is one
 * we can defend out loud on a call.
 */
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

export default function ValueStack() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <JoinStrip line={social.lines.value} offset={0} />

          <h2 className={styles.heading}>
            {valueStack.heading}{' '}
            <span className={styles.accent}>{valueStack.headingAccent}</span>
          </h2>
          <p className={styles.sub}>{valueStack.sub}</p>
        </div>

        <div className={styles.card}>
          <ul className={styles.rows}>
            {valueStack.items.map((item) => (
              <Row item={item} key={item.title} />
            ))}
          </ul>

          <div className={styles.total}>
            <span className={styles.totalLabel}>{valueStack.totalLabel}</span>
            <span className={styles.totalValue}>{valueStack.total}</span>
          </div>

          {/* The reveal, and the last number in the card. Gold rather than
              flame: flame on this page means something you can press, and a
              price is not a button. */}
          <div className={styles.fee}>
            <span className={styles.feeLabel}>{valueStack.feeLabel}</span>
            <span className={styles.feeValue}>{valueStack.fee}</span>
          </div>

          <p className={styles.note}>{valueStack.note}</p>
        </div>

        <div className={styles.actions}>
          <div className={styles.buttons}>
            <Button href={valueStack.cta.href}>{valueStack.cta.label}</Button>
            <Button href={valueStack.secondaryCta.href} variant="secondary">
              {valueStack.secondaryCta.label}
            </Button>
          </div>
          <p className={styles.footnote}>{valueStack.footnote}</p>
        </div>
      </div>
    </section>
  )
}

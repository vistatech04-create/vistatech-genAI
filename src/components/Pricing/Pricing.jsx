import Button from '../Button/Button.jsx'
import { pricing } from '../../content/pricing.js'
import { social } from '../../content/social.js'
import JoinStrip from '../JoinStrip/JoinStrip.jsx'
import styles from './Pricing.module.css'

const { labels } = pricing

/**
 * Section 11. The fee, and the split that makes it worth reading.
 *
 * Each card states the full fee plainly, then breaks it in half underneath.
 * That order matters: the value stack up the page already closed on the
 * full ₹29,999, so repeating it here keeps the page honest — the number
 * does not shrink as the reader gets closer to the button — and the split
 * arrives as the answer to the price rather than a way of dodging it.
 *
 * Two plans, not three, and ONE rupee figure inside the split — the one
 * due today. The balance is words. See the note in pricing.js for why.
 */
function Plan({ plan }) {
  const className = [styles.plan, plan.featured ? styles.planFeatured : '']
    .filter(Boolean)
    .join(' ')

  return (
    <li className={className}>
      {plan.featured && <p className={styles.pick}>{plan.featuredLabel}</p>}

      <div className={styles.planHead}>
        <h3 className={styles.planName}>{plan.name}</h3>
        <p className={styles.planNote}>{plan.note}</p>
      </div>

      {/* This plan's own batch, filling. Each card counts its own seats. */}
      <div className={styles.planLive}>
        <JoinStrip
          compact
          line={social.lines.plan}
          taken={plan.seats.taken}
          total={plan.seats.total}
          offset={plan.featured ? 0 : 2}
        />
      </div>

      {/* Said plainly, before the split softens it. */}
      <div className={styles.total}>
        <span className={styles.totalLabel}>{labels.total}</span>
        <span className={styles.totalValue}>{plan.total}</span>
      </div>

      {/* The whole argument of the page, in one block. Only the first
          payment is a figure; repeating the second as a number put the
          same amount on the card twice and made readers stop to work out
          whether they were being charged it twice. */}
      <div className={styles.split}>
        <div className={styles.half}>
          <span className={styles.halfLabel}>{labels.now}</span>
          <span className={styles.halfValue}>{plan.now}</span>
        </div>

        <span className={styles.then} aria-hidden="true">
          then
        </span>

        <div className={styles.half}>
          <span className={styles.halfLabel}>{labels.later}</span>
          <span className={styles.halfLater}>{labels.laterText}</span>
          <span className={styles.halfNote}>{labels.laterNote}</span>
        </div>
      </div>

      <ul className={styles.points}>
        {plan.points.map((point) => (
          <li className={styles.point} key={point}>
            <span className={styles.tick} aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>

      <div className={styles.planCta}>
        <Button href={plan.cta.href} variant={plan.featured ? 'primary' : 'secondary'}>
          {plan.cta.label}
        </Button>
      </div>
    </li>
  )
}

export default function Pricing() {
  return (
    <section className={styles.section} id="fees" data-section="pricing">
      <div className="container">
        <div className={styles.head}>
          <p className={styles.badge}>{pricing.badge}</p>

          <h2 className={styles.heading}>
            {pricing.heading} <span className={styles.accent}>{pricing.headingAccent}</span>
          </h2>

          <p className={styles.sub}>{pricing.sub}</p>
        </div>

        {/* How the split works, before any number is attached to it. */}
        <ol className={styles.beats}>
          {pricing.beats.map((beat) => (
            <li className={styles.beat} key={beat.step}>
              <span className={styles.beatStep} aria-hidden="true">
                {beat.step}
              </span>
              <span className={styles.beatText}>
                <span className={styles.beatTitle}>{beat.title}</span>
                <span className={styles.beatBody}>{beat.body}</span>
              </span>
            </li>
          ))}
        </ol>

        <ul className={styles.plans}>
          {pricing.plans.map((plan) => (
            <Plan plan={plan} key={plan.id} />
          ))}
        </ul>

        <ul className={styles.assurances}>
          {pricing.assurances.map((item) => (
            <li className={styles.assurance} key={item.title}>
              <span className={styles.assuranceTitle}>{item.title}</span>
              <span className={styles.assuranceBody}>{item.body}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

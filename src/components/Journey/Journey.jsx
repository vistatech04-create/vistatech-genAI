import { useEffect, useRef, useState } from 'react'
import { journey } from '../../content/journey.js'
import styles from './Journey.module.css'

function Step({ step, index, reached, railLit, current }) {
  return (
    <li className={styles.step} data-index={index}>
      <div className={`${styles.marker} ${railLit ? styles.railOn : ''}`}>
        <span className={`${styles.num} ${reached ? styles.numOn : ''}`}>
          {index + 1}
        </span>
      </div>

      <div className={`${styles.card} ${current ? styles.cardOn : ''}`}>
        <h3 className={styles.title}>{step.title}</h3>
        <p className={styles.text}>{step.body}</p>
      </div>
    </li>
  )
}

export default function Journey() {
  // Step one is lit the moment the page loads, before anyone scrolls.
  const [active, setActive] = useState(0)
  const list = useRef(null)
  const summary = useRef(null)

  useEffect(() => {
    // Read the steps out of the list itself rather than collecting them
    // through per-item refs. Those can be detached when an effect re-runs,
    // which leaves nothing to observe and the progress stuck on step one.
    const steps = list.current ? [...list.current.querySelectorAll('li')] : []
    if (steps.length === 0) return

    /* A thin band across the middle of the screen. Whichever steps cross it
       are the ones being read. An observer rather than a scroll listener, so
       nothing runs on every frame.

       Two cards can cross the band at once, so the set below tracks all of
       them and the furthest one wins. Without that, whichever entry the
       browser happened to report last would decide, and the progress would
       skip steps. */
    const crossing = new Set()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index)
          if (entry.isIntersecting) crossing.add(index)
          else crossing.delete(index)
        })
        // Nothing crossing means the section has scrolled by. Hold the last
        // step lit rather than resetting the whole rail.
        if (crossing.size > 0) setActive(Math.max(...crossing))
      },
      // The band sits just below the middle rather than on it. Dead centre
      // means the final step can never reach it: this is the last section on
      // the page, so the document runs out of scroll while step six is still
      // below halfway.
      { rootMargin: '-45% 0px -40% 0px', threshold: 0 },
    )

    steps.forEach((step) => observer.observe(step))

    /* Belt and braces. Whatever the screen height, once the closing line is
       in view the journey has been read, so the whole rail is lit. */
    const finish = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(steps.length - 1)
      },
      { rootMargin: '0px 0px -15% 0px', threshold: 0 },
    )
    if (summary.current) finish.observe(summary.current)

    return () => {
      observer.disconnect()
      finish.disconnect()
    }
  }, [])

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <h2 className={styles.heading}>
            {journey.heading}{' '}
            <span className={styles.accent}>{journey.headingAccent}</span>
          </h2>
        </div>

        <ol className={styles.steps} ref={list}>
          {journey.steps.map((step, i) => (
            <Step
              key={step.title}
              step={step}
              index={i}
              /* Everything up to where you have read is lit. The rail on a
                 step turns once the step below it has been reached. */
              reached={i <= active}
              railLit={i < active}
              current={i === active}
            />
          ))}
        </ol>

        <p className={styles.summary} ref={summary}>
          {journey.summary.lead} <b>{journey.summary.strong}</b>
        </p>
      </div>
    </section>
  )
}

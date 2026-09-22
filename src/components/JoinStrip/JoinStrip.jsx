import { useEffect, useRef, useState } from 'react'

import Avatar from '../Avatar/Avatar.jsx'
import { social } from '../../content/social.js'
import styles from './JoinStrip.module.css'

const FACES = 3
const ROTATE_MS = 3200
const STEP_MS = 110
/* How long to wait for the observer before simply showing the figure. Long
   enough that a reader scrolling down still sees the count run, short
   enough that nobody looks at a wrong number. */
const SAFETY_MS = 2600

/**
 * The batch strip. One line, the height of a pill, at the top of each
 * section in the second half of the page.
 *
 * Two things move. The faces rotate through the roster three at a time, so
 * the strip reads as populated rather than printed; and the count ticks up
 * to the real seat figure when the strip first scrolls into view, slowly
 * enough to be seen counting. Neither invents anything — see the long note
 * in social.js for what this deliberately does not do.
 *
 * It has to survive being used four times on one page, so: every instance
 * animates its own count off its own observer, the rotation starts at a
 * different point in the roster per instance (`offset`), and both stop
 * dead under prefers-reduced-motion.
 *
 */
export default function JoinStrip({
  line,
  offset = 0,
  /* A plan card passes its own batch's numbers; everywhere else falls back
     to the page-level figures in social.js. */
  taken,
  total,
  compact = false,
}) {
  const { roster, readLabel } = social
  const seatsTaken = taken ?? social.seatsTaken
  const seatsTotal = total ?? social.seatsTotal
  const left = Math.max(seatsTotal - seatsTaken, 0)

  /* Two faces inside a plan card, three when the strip has a section to
     itself — three plus a sentence does not fit a card column cleanly.
     Declared up here because the rotation effect below lists it as a
     dependency, and a const cannot be read before it is initialised. */
  const faceCount = compact ? 2 : FACES

  const [count, setCount] = useState(0)
  const [turn, setTurn] = useState(offset)
  const ref = useRef(null)

  const still =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  /**
   * The count.
   *
   * Three ways this can go, and all three end on the real figure:
   *
   *   1. it scrolls into view and counts up, which is the point;
   *   2. the reader asked for less motion, or the browser has no
   *      observer — it shows the figure immediately;
   *   3. the observer exists but never reports (a tab that has not been
   *      painted, a browser that does not compute intersections while
   *      hidden) — the safety timer below shows the figure anyway.
   *
   * Case 3 is why the timer is here and not an over-engineering. A strip
   * left sitting on its starting value would read "0 of 30 seats taken",
   * which is not an animation that failed to run, it is a false claim
   * about the business. The animation is the nice-to-have; the true
   * number is the requirement.
   */
  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (still || typeof IntersectionObserver === 'undefined') {
      setCount(seatsTaken)
      return
    }

    let timer = 0
    let safety = 0
    // 'animating' once the count is running, 'settled' if we short-circuited.
    let phase = ''

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        observer.disconnect()
        window.clearTimeout(safety)
        if (phase) return
        phase = 'animating'

        let n = 0
        const tick = () => {
          n += 1
          setCount(n)
          if (n < seatsTaken) timer = window.setTimeout(tick, STEP_MS)
        }
        tick()
      },
      /* A fifth of a 36px pill is enough. A stricter threshold meant a
         strip that stopped just short of it kept showing zero. */
      { threshold: 0.2 },
    )

    observer.observe(node)

    safety = window.setTimeout(() => {
      if (phase) return
      phase = 'settled'
      observer.disconnect()
      setCount(seatsTaken)
    }, SAFETY_MS)

    return () => {
      observer.disconnect()
      window.clearTimeout(timer)
      window.clearTimeout(safety)
    }
  }, [seatsTaken, still])

  /* The faces. Rotates for as long as the strip is mounted; it is a couple
     of opacity transitions on a 3.2s clock, cheap enough to leave running
     on every strip on the page at once. */
  useEffect(() => {
    if (still || roster.length <= faceCount) return
    const id = window.setInterval(() => setTurn((t) => t + 1), ROTATE_MS)
    return () => window.clearInterval(id)
  }, [roster.length, faceCount, still])

  const text = (line || social.lines.fees)
    .replace('{taken}', String(count))
    .replace('{total}', String(seatsTotal))
    .replace('{left}', String(left))

  /* The same sentence with the settled figures, for anyone listening
     rather than looking. */
  const read = (line || social.lines.fees)
    .replace('{taken}', String(seatsTaken))
    .replace('{total}', String(seatsTotal))
    .replace('{left}', String(left))

  const className = [styles.strip, compact ? styles.compact : '']
    .filter(Boolean)
    .join(' ')


  return (
    <div className={className} ref={ref} title={readLabel}>
      <span className={styles.dot} aria-hidden="true" />

      <span className={styles.faces} aria-hidden="true">
        {Array.from({ length: faceCount }).map((_, i) => {
          const person = roster[(turn + i) % roster.length]
          return (
            <span className={styles.face} key={`${i}-${person.name}`}>
              <Avatar src={person.photo} name={person.name} />
            </span>
          )
        })}
      </span>

      {/* The digits are hidden from screen readers mid-count; the finished
          sentence follows in the visually hidden span. */}
      <span className={styles.text} aria-hidden="true">
        {text}
      </span>
      <span className={styles.sr}>{read}</span>
    </div>
  )
}

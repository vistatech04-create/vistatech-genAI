import { useEffect, useState } from 'react'
import VideoPlayer from '../VideoPlayer/VideoPlayer.jsx'
import { testimonials } from '../../content/testimonials.js'
import styles from './Testimonials.module.css'

/* A barcode is the detail that makes a badge read as a badge. Fixed widths,
   so every card looks printed rather than randomly generated. */
const BARS = [3, 1, 2, 1, 1, 3, 2, 1, 4, 1, 2, 2, 1, 3, 1, 1, 2, 4, 1, 2]

function Arrow({ direction }) {
  const d = direction === 'left' ? 'M14 5 7 12l7 7' : 'M10 5l7 7-7 7'
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* The strap, the crimp, and nothing else. Decoration only. */
function Lanyard() {
  return (
    <div className={styles.lanyard} aria-hidden="true">
      <span className={`${styles.strap} ${styles.strapLeft}`} />
      <span className={`${styles.strap} ${styles.strapRight}`} />
      <span className={styles.clip} />
    </div>
  )
}

function Card({ person, offset, onFocusCard, onPlay }) {
  const distance = Math.abs(offset)
  const active = distance === 0
  const className = [
    styles.item,
    active ? '' : styles.inactive,
    distance > 1 ? styles.behind : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={className}
      // Strings, not numbers: React appends "px" to numeric style values,
      // which would turn the calc in the stylesheet into px * px.
      style={{ '--d': String(offset), '--ad': String(distance) }}
      aria-hidden={!active}
      onClick={active ? undefined : onFocusCard}
    >
      <Lanyard />
      <article className={styles.card}>
      <div className={styles.band} />
      <div className={styles.slot} />
      <p className={styles.company}>{person.company}</p>

      <div className={styles.photo}>
        <VideoPlayer
          youtubeId={person.youtubeId}
          poster={person.poster}
          posterAlt={`${person.name}, ${person.role} at ${person.company}`}
          ratio="4 / 5"
          onPlay={onPlay}
        />
      </div>

      <div className={styles.identity}>
        <h3 className={styles.name}>{person.name}</h3>
        <p className={styles.role}>{person.role}</p>
      </div>

      <div className={styles.fields}>
        <div className={styles.field}>
          <p className={styles.key}>Package</p>
          <p className={styles.val}>{person.pay}</p>
        </div>
        <div className={styles.field}>
          <p className={styles.key}>Came from</p>
          <p className={styles.val}>{person.background}</p>
        </div>
      </div>

      <div className={styles.foot}>
        <span className={styles.bars} aria-hidden="true">
          {BARS.map((w, i) => (
            <i style={{ width: `${w}px` }} key={i} />
          ))}
        </span>
        <span className={styles.issued}>
          Trained at Vista Tech
          <br />
          {person.placed}
        </span>
      </div>
      </article>
    </div>
  )
}

const ROTATE_MS = 5200

export default function Testimonials() {
  const items = testimonials.items
  const count = items.length

  const [index, setIndex] = useState(0)
  // Stops for good once somebody starts a video, and while the pointer is
  // over the stack. Rotating a card away from someone who is watching it is
  // the fastest way to lose them.
  const [held, setHeld] = useState(false)

  useEffect(() => {
    if (held || count < 2) return
    const id = setInterval(() => setIndex((n) => (n + 1) % count), ROTATE_MS)
    return () => clearInterval(id)
  }, [held, count])

  /* How far each card sits from the front, by the shorter way round. */
  const offsetOf = (i) => {
    let d = i - index
    if (d > count / 2) d -= count
    if (d < -count / 2) d += count
    return d
  }

  const step = (delta) => {
    setHeld(true)
    setIndex((n) => (n + delta + count) % count)
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <h2 className={styles.heading}>
            {testimonials.heading}{' '}
            <span className={styles.accent}>{testimonials.headingAccent}</span>
          </h2>
        </div>
      </div>

      <div
        className={styles.stage}
        onMouseEnter={() => setHeld(true)}
        onMouseLeave={() => setHeld(false)}
      >
        {items.map((person, i) => (
          <Card
            key={person.id}
            person={person}
            offset={offsetOf(i)}
            onFocusCard={() => {
              setHeld(true)
              setIndex(i)
            }}
            onPlay={() => setHeld(true)}
          />
        ))}
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => step(-1)}
          aria-label="Previous student"
        >
          <Arrow direction="left" />
        </button>

        <div className={styles.dots}>
          {items.map((person, i) => (
            <button
              type="button"
              key={person.id}
              className={`${styles.dot} ${i === index ? styles.dotOn : ''}`}
              onClick={() => {
                setHeld(true)
                setIndex(i)
              }}
              aria-label={`Show ${person.name}`}
              aria-current={i === index}
            />
          ))}
        </div>

        <button
          type="button"
          className={styles.arrow}
          onClick={() => step(1)}
          aria-label="Next student"
        >
          <Arrow direction="right" />
        </button>
      </div>
    </section>
  )
}

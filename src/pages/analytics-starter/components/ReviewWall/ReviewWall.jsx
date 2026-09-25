import { starter } from '@/content/starter.js'

import GoogleMark from './GoogleMark.jsx'
import styles from './ReviewWall.module.css'

const { trust } = starter

/** AG, VK, N — the same initials Google shows when there is no photo. */
function initials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

/**
 * Google gives every photo-less reviewer a flat coloured disc with their
 * initial on it. Same idea here, and the colour is picked from the name so a
 * given person always gets the same one.
 */
const AVATAR_COLOURS = ['#5b7bc4', '#4f8f63', '#c07a35', '#a4596b', '#5d8a94', '#7b6bab']

function colourFor(name) {
  const sum = [...name].reduce((n, c) => n + c.charCodeAt(0), 0)
  return AVATAR_COLOURS[sum % AVATAR_COLOURS.length]
}

/** 4.8 out of 5, drawn as four and a bit stars rather than a rounded five. */
function Stars({ rating }) {
  return (
    <span className={styles.stars} aria-hidden="true">
      <span className={styles.starsBase}>★★★★★</span>
      <span className={styles.starsFill} style={{ width: `${(rating / 5) * 100}%` }}>
        ★★★★★
      </span>
    </span>
  )
}

function Stat({ big, unit, rating, label }) {
  return (
    <div className={styles.stat}>
      <p className={styles.num}>
        <span className={styles.stroke}>
          {big}
          {unit && <span className={styles.unit}>{unit}</span>}
        </span>
      </p>
      {/* Both stats reserve the star row, so the two labels sit on the
          same line whether or not the stat has a rating. */}
      {rating ? <Stars rating={rating} /> : <span className={styles.starsSpacer} />}
      <p className={styles.lab}>
        {rating ? <GoogleMark size={15} className={styles.labMark} /> : null}
        {label}
      </p>
    </div>
  )
}

function Card({ review }) {
  return (
    <figure className={styles.card}>
      <header className={styles.who}>
        {review.photo ? (
          <img className={styles.photo} src={review.photo} alt="" width="38" height="38" />
        ) : (
          <span
            className={styles.avatar}
            style={{ background: colourFor(review.name) }}
            aria-hidden="true"
          >
            {initials(review.name)}
          </span>
        )}
        <span className={styles.whoText}>
          <span className={styles.name}>{review.name}</span>
          <span className={styles.when}>{review.when}</span>
        </span>
        {/* Where the review came from, on every card. */}
        <GoogleMark size={17} className={styles.cardMark} />
      </header>
      <blockquote className={styles.quote}>{review.quote}</blockquote>
    </figure>
  )
}

/**
 * Three rows of reviews, the middle one running the other way, so the wall
 * reads as a crowd rather than a list. Same loop as the company row on the
 * course page: each row is rendered twice and slides by exactly one copy.
 */
function Row({ reviews, reverse, speed }) {
  return (
    <div
      className={`${styles.row} ${reverse ? styles.reverse : ''}`}
      style={{ animationDuration: speed }}
    >
      {reviews.map((r) => (
        <Card key={r.name} review={r} />
      ))}
      {/* The second copy is what the loop slides into. Hidden from screen
          readers so no review is announced twice. */}
      <span aria-hidden="true" style={{ display: 'contents' }}>
        {reviews.map((r) => (
          <Card key={`loop-${r.name}`} review={r} />
        ))}
      </span>
    </div>
  )
}

/**
 * Splits the reviews into rows that alternate direction.
 *
 * A row has to be wide enough that its second copy is off screen, or the
 * same person shows up twice at once. Three cards is the floor, so three
 * rows need nine reviews; below that it runs as two rows and the third
 * appears on its own once more reviews are added.
 */
function toRows(reviews) {
  const count = reviews.length >= 9 ? 3 : 2
  const per = Math.ceil(reviews.length / count)
  return Array.from({ length: count }, (_, i) => reviews.slice(i * per, (i + 1) * per))
    .filter((row) => row.length > 0)
}

/* Each row runs at its own speed so they never line up into a single block. */
const SPEEDS = ['64s', '74s', '58s']

export default function ReviewWall() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.stats}>
          <Stat {...trust.stats[0]} />
          <span className={styles.divider} aria-hidden="true" />
          <Stat {...trust.stats[1]} />
        </div>
      </div>

      <p className={styles.rowsLabel}>{trust.rowsLabel}</p>

      {/* Outside the container: the rows run the full width of the screen and
          fade out at both edges. */}
      <div className={styles.rows}>
        {toRows(trust.reviews).map((row, i) => (
          <Row
            key={`row-${i}`}
            reviews={row}
            reverse={i % 2 === 1}
            speed={SPEEDS[i % SPEEDS.length]}
          />
        ))}
      </div>

      <div className="container">
        <p className={styles.linkWrap}>
          <a
            className={styles.link}
            href={trust.link.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            {trust.link.label}
          </a>
        </p>
      </div>
    </section>
  )
}

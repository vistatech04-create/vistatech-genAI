import Button from '@/components/Button/Button.jsx'
import ToolGlyph from '@/components/ToolGlyph/ToolGlyph.jsx'
import { starter } from '@/content/starter.js'

import CertGlyph from '../CertificateBackdrop/CertGlyph.jsx'
import SkillCurve from './SkillCurve.jsx'
import styles from './WeekGrid.module.css'

const { week } = starter

/* The pills at the top of each card. Generic marks, not brand logos — the
   same rule the course page follows. */
const TOOLS = {
  excel: { label: 'Excel', glyph: 'sheet' },
  sql: { label: 'SQL', glyph: 'database' },
  certificate: { label: 'Certificate', cert: true },
}

function Pill({ name }) {
  const tool = TOOLS[name]
  if (!tool) return null
  return (
    <span className={`${styles.pill} ${tool.cert ? styles.pillCert : ''}`}>
      <span className={styles.pillIcon}>
        {tool.cert ? <CertGlyph name="seal" /> : <ToolGlyph name={tool.glyph} />}
      </span>
      {tool.label}
    </span>
  )
}

function Check() {
  return (
    <svg className={styles.check} viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="var(--ink)" />
      <path
        d="M5.8 10.4l2.7 2.7 5.7-6"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Day({ day, index }) {
  return (
    <li
      className={`${styles.card} ${day.highlight ? styles.cardGold : ''}`}
      /* Each card sticks 44px lower than the one before it. 44 is not
         arbitrary: it is exactly enough for the DAY label of the card
         underneath to stay readable, so the pile reads as "day 1, 2, 3 and
         now day 4" rather than as cards cut in half. */
      style={{ '--stick': `${16 + index * 44}px`, zIndex: index + 1 }}
    >
      <p className={styles.dayLabel}>{day.day}</p>
      <h3 className={styles.title}>{day.title}</h3>

      <p className={styles.pills}>
        <span className={styles.pill}>
          <span className={styles.pillDot} aria-hidden="true" />
          {week.livePill}
        </span>
        {day.tools.map((t) => (
          <Pill name={t} key={t} />
        ))}
      </p>

      <ul className={styles.points}>
        {day.points.map((p) => (
          <li className={styles.point} key={p}>
            <Check />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </li>
  )
}

/**
 * Section 03. The week, one card per day.
 *
 * The left side stays put while the seven cards climb past it on the right,
 * so the curve and the heading are still there when the reader reaches day
 * seven. Nothing is behind a tab: this is the section that decides whether
 * ₹999 sounds like a fair trade, and anything a reader has to click to see
 * is something most readers never see.
 */
export default function WeekGrid() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.split}`}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            {week.heading} <span className={styles.accent}>{week.headingAccent}</span>
          </h2>
          <p className={styles.sub}>{week.sub}</p>
          <SkillCurve />
        </div>

        <ol className={styles.cards}>
          {week.days.map((day, i) => (
            <Day day={day} index={i} key={day.day} />
          ))}

          <li className={styles.ctaTile}>
            <p className={styles.ctaLead}>Your week starts on Day 1.</p>
            <Button href={week.cta.href}>{week.cta.label}</Button>
            <p className={styles.ctaNote}>{week.cta.note}</p>
          </li>
        </ol>
      </div>
    </section>
  )
}

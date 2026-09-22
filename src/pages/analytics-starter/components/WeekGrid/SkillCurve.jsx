import { starter } from '@/content/starter.js'
import styles from './SkillCurve.module.css'

const { marks, yLabel, xLabel } = starter.week.curve

/* Where each label sits. Read off the curve by eye, because a formula puts
   them either on top of the line or miles away from it.
   The three later labels hang off the left of the curve — set to the right
   they run straight through it, and text across a 5px line is unreadable. */
const SPOTS = [
  { x: 88, y: 298, align: 'start' },
  { x: 262, y: 240, align: 'end' },
  { x: 344, y: 154, align: 'end' },
  { x: 408, y: 28, align: 'end' },
]

/**
 * What seven days does to what you can do. Flat at the start, steep at the
 * end — which is the honest shape of learning a tool: nothing works, then
 * suddenly everything does.
 *
 * The line is gold at the top because that is where the certificate is.
 */
export default function SkillCurve() {
  return (
    <figure className={styles.wrap}>
      <svg
        className={styles.svg}
        viewBox="0 0 470 400"
        role="img"
        aria-label={`${yLabel} against ${xLabel}: ${marks
          .map((m) => `${m.day}, ${m.text}`)
          .join('; ')}`}
      >
        <defs>
          <linearGradient id="curveInk" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#f85830" />
            <stop offset="62%" stopColor="#f85830" />
            <stop offset="100%" stopColor="#d8b820" />
          </linearGradient>
        </defs>

        {/* the dashed rules, so the rise is measurable rather than decorative */}
        {[300, 250, 200, 150, 100, 50].map((y) => (
          <line
            key={y}
            className={styles.rule}
            x1="150"
            y1={y}
            x2="430"
            y2={y}
          />
        ))}

        {/* axes */}
        <path className={styles.axis} d="M58 34V352H452" />

        {/* the curve: flat, then steep */}
        <path
          className={styles.curve}
          d="M62 348C150 346 230 330 292 288C352 246 388 168 420 58"
          stroke="url(#curveInk)"
        />

        {/* where the week ends */}
        <circle className={styles.dotHalo} cx="420" cy="58" r="11" />
        <circle className={styles.dot} cx="420" cy="58" r="5.5" />

        {marks.map((m, i) => (
          <g key={m.day} className={i > 0 && i < 3 ? styles.midMark : undefined}>
            <text
              className={styles.markDay}
              x={SPOTS[i].x}
              y={SPOTS[i].y}
              textAnchor={SPOTS[i].align}
            >
              {m.day}
            </text>
            <text
              className={styles.markText}
              x={SPOTS[i].x}
              y={SPOTS[i].y + 17}
              textAnchor={SPOTS[i].align}
            >
              {m.text}
            </text>
          </g>
        ))}

        <text className={styles.axisLabel} x="250" y="384" textAnchor="middle">
          {xLabel}
        </text>
        <text
          className={styles.axisLabel}
          x="26"
          y="193"
          textAnchor="middle"
          transform="rotate(-90 26 193)"
        >
          {yLabel}
        </text>
      </svg>
    </figure>
  )
}

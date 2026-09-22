/**
 * The gold seal that sits in the corner of the hero's certificate frame.
 * Engraved rings, a ring of ticks, the logo's diamond at the centre, and
 * two ribbon tails. Drawn, not photographed, so it stays crisp and weighs
 * nothing — and so it is clearly a decorative mark rather than a fake
 * reproduction of an official seal.
 */
const TICKS = Array.from({ length: 28 }, (_, i) => {
  const angle = (i / 28) * Math.PI * 2
  const inner = 25.5
  const outer = 30.5
  return {
    key: i,
    x1: 50 + Math.cos(angle) * inner,
    y1: 50 + Math.sin(angle) * inner,
    x2: 50 + Math.cos(angle) * outer,
    y2: 50 + Math.sin(angle) * outer,
  }
})

export default function Seal({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 128"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {/* ribbon tails, behind the disc */}
      <path
        d="M36 74 L28 124 L50 110 L72 124 L64 74"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <circle cx="50" cy="50" r="33" strokeWidth="1.6" />
      <circle cx="50" cy="50" r="30.5" strokeWidth="0.9" />
      <circle cx="50" cy="50" r="25.5" strokeWidth="0.9" />
      <circle cx="50" cy="50" r="19" strokeWidth="1.3" strokeDasharray="3 3.4" />

      {TICKS.map((t) => (
        <line key={t.key} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} strokeWidth="0.9" />
      ))}

      {/* the peak from the logo, at the centre */}
      <path d="M50 40 L60 50 L50 60 L40 50 Z" strokeWidth="1.4" />
    </svg>
  )
}

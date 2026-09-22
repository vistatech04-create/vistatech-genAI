/**
 * The arrow from the Vista Tech logo, rebuilt as vector so it stays sharp
 * at 16px. Two diagonal arms with orange tips, a plum shaft that turns
 * orange at the foot, and the gold diamond at the peak.
 */
export default function ArrowMark({ size = 18, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* shaft */}
      <rect x="10.5" y="8" width="3" height="8.5" fill="#280820" />
      <rect x="10.5" y="16.5" width="3" height="5.5" fill="#F85830" />

      {/* left arm */}
      <path d="M2 13 L5 16 L8.4 12.6 L5.4 9.6 Z" fill="#F85830" />
      <path d="M5.4 9.6 L8.4 12.6 L13.5 7.5 L10.5 4.5 Z" fill="#280820" />

      {/* right arm */}
      <path d="M22 13 L19 16 L15.6 12.6 L18.6 9.6 Z" fill="#F85830" />
      <path d="M18.6 9.6 L15.6 12.6 L10.5 7.5 L13.5 4.5 Z" fill="#280820" />

      {/* the peak */}
      <path d="M12 2 L15 5 L12 8 L9 5 Z" fill="#D8B820" />
    </svg>
  )
}

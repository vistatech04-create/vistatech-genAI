/**
 * Line glyphs for what this page promises: a certificate, a seal, a ribbon,
 * a finished project. Same drawing rules as ToolGlyph on the course page —
 * vector, one stroke weight, no brand marks — so the two pages feel drawn
 * by the same hand even though they carry different symbols.
 */
const PATHS = {
  // a certificate sheet: ruled lines and a seal in the corner
  certificate: (
    <>
      <rect x="2.8" y="4" width="18.4" height="13.4" rx="2.2" />
      <path d="M6.2 8.4h11.6M6.2 11.4h7.4" />
      <circle cx="16.8" cy="16.4" r="2.5" />
      <path d="M15.2 18.4 14.3 22l2.5-1.5 2.5 1.5-.9-3.6" />
    </>
  ),
  // the seal on its own, ribbon tails below
  seal: (
    <>
      <circle cx="12" cy="9.2" r="5.6" />
      <circle cx="12" cy="9.2" r="2.6" />
      <path d="M8.4 13.6 6.8 21.6 12 18.8l5.2 2.8-1.6-8" />
    </>
  ),
  // an award ribbon
  ribbon: (
    <>
      <path d="M12 3.2 14 7.4l4.6.6-3.3 3.3.8 4.6L12 13.8l-4.1 2.1.8-4.6L5.4 8l4.6-.6z" />
      <path d="M9.2 16.4 7.8 21.8 12 19.6l4.2 2.2-1.4-5.4" />
    </>
  ),
  // a rolled diploma
  scroll: (
    <>
      <path d="M5.4 5.6c0-1.3 1-2.3 2.3-2.3h10.9c-1.3 0-2.3 1-2.3 2.3v12.8c0 1.3-1 2.3-2.3 2.3H3.1c1.3 0 2.3-1 2.3-2.3z" />
      <path d="M8.6 8.4h5.2M8.6 11.6h3.4" />
    </>
  ),
  // a finished thing, ticked off
  checkBadge: (
    <>
      <path d="M12 2.8l2.6 1.9 3.2-.2.6 3.2 2.4 2.1-1.5 2.9.4 3.2-3.1.9-2 2.5L12 18l-2.6 1.2-2-2.5-3.1-.9.4-3.2L3.2 9.7l2.4-2.1.6-3.2 3.2.2z" />
      <path d="M9.2 11.8 11.4 14l3.8-4" />
    </>
  ),
  // the project itself: a dashboard sheet
  project: (
    <>
      <rect x="3.2" y="4.4" width="17.6" height="15.2" rx="2.3" />
      <path d="M7 16.2v-4M11.6 16.2V8.6M16.2 16.2v-2.4" strokeWidth="2.2" />
    </>
  ),
}

export default function CertGlyph({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  )
}

/**
 * Two marks for the two prizes. Same drawing rules as every other glyph on
 * the site — one stroke weight, no brand logos. Amazon's own logo is
 * deliberately not here: a voucher is what is being won, and borrowing
 * someone else's mark to say so is both a trademark question and a way to
 * make a real offer look like a scam ad.
 */
const PATHS = {
  // a gift: box, ribbon, bow
  voucher: (
    <>
      <path d="M3.6 8.6h16.8v3.2H3.6z" />
      <path d="M5.2 11.8v8.4h13.6v-8.4" />
      <path d="M12 8.6v11.6" />
      <path d="M12 8.6S10.4 4 8.2 4.6 8 8.6 12 8.6zM12 8.6s1.6-4.6 3.8-4 2 4 -3.8 4z" />
    </>
  ),
  // a private call: one person, inside a speech bubble
  call: (
    <>
      <path d="M20.4 12.6c0 4-3.8 7.2-8.4 7.2-1 0-2-.15-2.9-.43L4.2 21l1.1-3.5A6.9 6.9 0 0 1 3.6 12.6c0-4 3.8-7.2 8.4-7.2s8.4 3.2 8.4 7.2z" />
      <circle cx="12" cy="11" r="1.9" />
      <path d="M8.9 16.1c.5-1.6 1.7-2.5 3.1-2.5s2.6.9 3.1 2.5" />
    </>
  ),
}

export default function PrizeGlyph({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  )
}

/**
 * The batch strip — the small live line that sits at the top of each
 * section in the second half of the page.
 *
 * ⚠ TWO NUMBERS AND A ROSTER, AND ALL OF IT HAS TO BE REAL BEFORE LAUNCH.
 *
 * 1. `seatsTaken` / `seatsTotal` are the seat count for the batch that is
 *    open right now. Somebody at Vista Tech has to keep them current. A
 *    visitor can check this by ringing up and asking how many seats are
 *    left, so a stale number is not a small embarrassment.
 *
 * 2. `roster` is the faces. THESE ARE GENERATED PEOPLE RIGHT NOW — the
 *    same placeholder stills as the testimonials, see the note at the top
 *    of testimonials.js. Publishing invented faces as students is a
 *    misrepresentation on its own, whatever the caption says, so these
 *    have to be swapped for real students who have agreed to be shown
 *    before any of this goes live. placements.js already lists fifteen
 *    real placed students by name; photographs of those people, with
 *    their permission, is what belongs here.
 *
 * WHAT THE STRIP DOES, AND WHAT IT DELIBERATELY DOES NOT DO.
 * The faces rotate and the count animates up to `seatsTaken` when the
 * strip scrolls into view. Both are ways of presenting a true figure.
 * There is no timer inventing fresh enrolments — no "+1 joined 40 seconds
 * ago", no number that climbs for as long as the tab is open. That would
 * be a claim about specific events that did not happen: it contradicts
 * itself the moment a reader leaves the page open, and manufactured
 * urgency is a standard reason Meta pulls a course ad, which would cost
 * the whole campaign rather than one section.
 *
 * If a genuinely live figure is wanted, point `seatsTaken` at the CRM or
 * the enrolment sheet. The component animates whatever number it is
 * handed and nothing in it needs changing.
 */
export const social = {
  /* The seat count for the open batch. */
  seatsTaken: 23,
  seatsTotal: 30,

  /* Screen-reader and hover text. Says the same thing the strip shows, in
     one piece, so nobody has to hear a number count upward. */
  readLabel: 'Seats taken in the batch that is enrolling now',

  /**
   * The faces. Three show at a time and the window moves along, which is
   * what makes the strip feel populated rather than printed.
   *
   * photo: a file in public/images/, or null for the initial fallback —
   * the Avatar component handles either, so a roster entry without a
   * photograph yet still looks deliberate.
   */
  roster: [
    { name: 'Ramya S.',          photo: '/images/mock/ramya.jpg' },
    { name: 'Ajay Krishna',      photo: '/images/mock/ajay.jpg' },
    { name: 'Priyadharshini M.', photo: '/images/mock/priya.jpg' },
    { name: 'Saravanan M.',      photo: '/images/mock/saravanan.jpg' },
    { name: 'Manikandan S.',     photo: '/images/mock/mani.jpg' },
  ],

  /**
   * One line per placement, all of them built from the same two real
   * numbers. Four identical strips down one page read as a copy-paste
   * mistake; four framings of the same fact read as a status line.
   *
   * {taken} {total} {left} are filled in by the component.
   */
  lines: {
    value:   '{taken} of {total} seats taken in this batch',
    starter: 'Only {left} seats left in this batch',
    fees:    '{taken} of {total} seats taken · enrolling now',
    /* Inside a plan card, where the card's own name already says which
       batch this is, so the line only has to carry the number. */
    plan:    '{taken} of {total} seats taken',
    closing: '{left} seats left · next batch starts this month',
  },
}

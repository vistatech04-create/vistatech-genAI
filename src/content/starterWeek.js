/**
 * Section 10. The seven day starter week, pitched from the course page.
 *
 * This block does NOT try to sell the week, and it does NOT link out to
 * /analytics-starter. This page is paid ad traffic: a link to another page
 * mid-scroll is an exit, and the visitor rarely comes back. The section
 * answers "can I try before I commit" and then routes that interest to the
 * same consultant call as everything else on this page. The starter page
 * gets its own ads and sells the week on its own terms.
 *
 * The price of the week is deliberately not here either.
 *
 * ⚠ CONFLICT TO RESOLVE — see the message thread.
 * /analytics-starter currently presents the voucher and the one-to-one
 * mentor call as a PRIZE: one winner per batch, picked at the end. This
 * block, as briefed, presents both as things every student gets. Both
 * pages cannot be right. If every student gets them, the starter page
 * needs correcting. If it is one winner, the two lines marked below do.
 */
export const starterWeek = {
  badge: 'Not ready to commit yet?',

  headingLight: 'Sit in a full week of live classes',
  headingAccent: 'before you decide.',

  sub:
    'One week, seven live classes, the same mentors who teach the 60 days. ' +
    'You see exactly how it is taught before you enrol in anything.',

  /** Portrait video. Nothing loads from YouTube until someone taps play. */
  youtubeId: null,
  poster: null,
  posterAlt: 'A student talking about the seven day starter week',

  benefits: [
    {
      glyph: 'live',
      title: 'Seven live classes',
      body: 'One a day, in Tamil, with a mentor in the room. Not recordings.',
    },
    {
      glyph: 'project',
      title: 'One finished project',
      body: 'Built during the week, on real data, ready to show in an interview.',
    },
    {
      glyph: 'certificate',
      title: 'A certificate',
      body: 'Awarded when you complete the seven days.',
    },
    // {
    //   /* ⚠ This one is the conflict. On /analytics-starter the voucher and
    //      the mentor call go to one winner per batch, not to everyone. */
    //   glyph: 'voucher',
    //   title: '₹1,000 voucher and a mentor call',
    //   body:
    //     'A voucher you can spend anywhere, and a one-to-one call with a ' +
    //     'senior mentor about your own resume.',
    // },
  ],

  cta: { label: 'Ask about the starter week', href: '#enroll' },
  note: 'A mentor will talk you through it on the call. No payment now.',
}

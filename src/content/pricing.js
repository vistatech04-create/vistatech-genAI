/**
 * Section 11. What it costs, and when.
 *
 * This is the payoff of the run-up. Section 09 itemised ₹78,500 of value
 * and closed on the full ₹29,998 without breathing a word about how it is
 * paid; section 10 offered the trial week to anyone that number frightened.
 * So a reader arriving here has already accepted the price. What is left to
 * tell them is the part that no competitor can match: half of it is not due
 * until they have a job.
 *
 * That is why the full fee is printed plainly at the top of each card and
 * the split sits underneath it. The total is not hidden — a price a visitor
 * has to phone up for reads as a price that changes depending on who is
 * asking, and this page has spent two sections earning the right to say the
 * number out loud.
 *
 *   Group online     ₹14,999 to start, remaining 50% after placement  (₹29,998)
 *   Group in person  ₹19,999 to start, remaining 50% after placement  (₹39,998)
 *
 * ONLY ONE RUPEE FIGURE IN THE SPLIT, AND IT IS THE ONE YOU PAY TODAY.
 * Printing both halves as numbers put ₹14,999 on the card twice, and two
 * identical large numbers a few lines apart read as a mistake or as a
 * double charge — the reader stops to work out which one is real, and a
 * reader doing arithmetic is a reader not pressing the button. The total
 * is stated above the split, the first payment is stated inside it, and
 * the balance is described in words. Nobody has to subtract anything.
 *
 * ONLY TWO PLANS, on purpose. The live site sells a third — a 1:1 dedicated
 * mentor — but three cards side by side turn a decision into a comparison
 * exercise, and the 1:1 is a conversation, not a checkbox. It is offered in
 * the footnote and on the call instead.
 *
 * CONFIRM before launch:
 *  - ⚠ THE IN-PERSON PRICE IS MY CONSTRUCTION. The audited enroll page has
 *    ₹20,000 + ₹20,000 = ₹40,000 (research/existing-site-audit.md). Online
 *    was given to me as ₹14,999 + ₹14,999, so in person is carried across
 *    on the same convention as ₹19,999 + ₹19,999. If the client wants a
 *    round ₹20,000 there, say so — but a round ₹40,000 sitting beside a
 *    charm-priced ₹29,998 reads as a typo on the more expensive option.
 *  - whether GST applies on top, and on which half. The live site does not
 *    say, and a fee section that turns out to be plus-tax is the fastest
 *    way to lose a paid lead at the payment page.
 *  - is there an EMI or instalment option on the first half?
 *  - the refund window, if one exists, for a student who leaves in week one
 *  - the 1:1 price, if it is still ₹40,000, before anyone quotes it
 */
export const pricing = {
  badge: 'No cost until you enrol. No hidden fees.',

  heading: 'Half now. The other half',
  headingAccent: 'after you are placed.',

  sub:
    'Both plans below split the same way. You pay the first half to start ' +
    'training, and the second half only once you have an offer letter in ' +
    'hand, not on a deadline and not on a due date.',

  /* The mechanic, said in three beats above the cards, so the split is
     understood before a number is attached to it. */
  beats: [
    { step: '1', title: 'Pay the first half', body: 'Your seat, your mentor, your 60 days of classes start.' },
    { step: '2', title: 'Train, then sit for placements', body: 'Our panel clears you, then our partners put you in front of openings.' },
    { step: '3', title: 'Get the offer, then pay the rest', body: 'The second half comes due when there is a salary behind it.' },
  ],

  plans: [
    {
      id: 'online',
      name: 'Group · Online',
      note: 'Live classes, batch of students, from home.',
      featured: true,
      featuredLabel: 'Most students pick this',
      /* ⚠ PLACEHOLDER, like every seat figure on this page — see the note
         at the top of social.js. Each plan runs its own batch, so each
         card carries its own count; showing the same number on both would
         be both wrong and pointless. */
      seats: { taken: 23, total: 30 },
      total: '₹29,998',
      now: '₹14,999',
      points: [
        'All 60 days live with a mentor',
        'Excel, SQL, Python, Power BI, Tableau',
        'Capstone project and portfolio',
        'Placement drive through our HR partners',
      ],
      cta: { label: 'Start your job training', href: '#enroll' },
    },
    {
      id: 'offline',
      name: 'Group · In person',
      note: 'The same batch, in the Chennai classroom.',
      featured: false,
      /* ⚠ PLACEHOLDER. A classroom holds fewer people than a video call,
         so this is not the online number. CONFIRM the real room capacity. */
      seats: { taken: 11, total: 20 },
      total: '₹39,998',
      now: '₹19,999',
      points: [
        'Everything in the online plan',
        'In the room with the mentor',
        'Lab machines and a place to sit and work',
        'Chennai, Egmore',
      ],
      cta: { label: 'Ask about the classroom batch', href: '#call' },
    },
  ],

  /* Kept out of the plan objects so both cards are guaranteed to read the
     same way. If one card labels a half differently from the other, the
     cheaper one starts to look like a trick. */
  labels: {
    total: 'Full course fee',
    now: 'To start training',
    later: 'After you are placed',
    /* Words, not a number. Matches the brochure's own wording: "50% fee
       payable upfront, remaining 50% payable only after successful
       placement." */
    laterText: 'The remaining 50%',
    laterNote: 'Due only once you have an offer letter in hand.',
  },

  /* The three things that stop a person at a price, answered beside it
     rather than in the FAQ two screens down. */
  assurances: [
    { title: 'Nothing due in between', body: 'From the day you enrol to the day you are placed, you pay nothing more.' },
    { title: 'No cost to find out', body: 'The consultant call is free, and a mentor tells you if this does not suit you.' },
    { title: 'Support does not stop', body: 'Placement support continues until your first offer, however long that takes.' },
  ],

}

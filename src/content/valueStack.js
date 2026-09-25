/**
 * Section 09. What the fee actually buys, itemised.
 *
 * journey.js hands this section its job: money is kept out of the journey
 * steps so that it lands here, once, on a reader who now knows what the
 * program is.
 *
 * THIS SECTION IS THE PRICE ANCHOR, AND IT DELIBERATELY STOPS SHORT.
 * The order down the page is: this list, then the full ₹29,999, then the
 * trial week for anyone who flinched at it, and only then the section that
 * reveals half is due now and half after placement.
 *
 * So ₹14,999 MUST NOT APPEAR ANYWHERE IN HERE. The split is the strongest
 * card this page holds, and it only feels like relief if the reader has
 * already accepted the full number. Reveal it here and the fee section
 * further down has nothing left to say. The forward pointer in `note` is
 * the most this section is allowed to give away.
 *
 * THE DISCIPLINE ON THESE NUMBERS. Every line is something Vista Tech can
 * actually hand a student, and every value is what that piece would cost
 * bought on its own in Chennai. The total comes to roughly two and a half
 * times the full fee — not twenty times. A stack that claims "₹4,00,000 of
 * value for ₹29,999" reads as a lie and takes the real argument down with
 * it. If a value below cannot be defended out loud on a sales call, cut the
 * line rather than keep the number.
 *
 * The last line in the card is the fee itself, and that is where this
 * section stops.
 *
 * CONFIRM before launch:
 *  - are classes recorded for all 60 days, and do students keep them?
 *  - does every student get a mock interview, or only those the panel clears?
 *  - who reviews the resume and the LinkedIn profile — a mentor, or HR?
 *  - the certificate's exact name, and who issues it
 *  - is the WhatsApp mentor group real for the full 60 days?
 *  - MUST CHECK: the ₹12,000 placement line. A recruitment consultancy
 *    charges the employer, not the candidate, so this is priced as what a
 *    paid placement service quotes a job seeker. If that comparison cannot
 *    be evidenced, drop the value and leave the line at 'Included'.
 */
export const valueStack = {
  heading: 'What your fee actually',
  headingAccent: 'pays for.',

  sub:
    'Priced the way each piece would cost bought on its own, so you can see ' +
    'where the money goes instead of taking our word for it.',

  items: [
    {
      title: '60 days of live classes',
      body: 'Excel, SQL, Python, Power BI and Tableau, taught live by a mentor.',
      value: '₹36,000',
    },
    {
      title: 'Your capstone project',
      body: 'Built on real data, scoped to the job you are going after.',
      value: '₹6,000',
    },
    {
      title: 'A portfolio a recruiter can open',
      body: 'Your dashboards and queries, arranged so the work speaks first.',
      value: '₹3,500',
    },
    {
      title: 'The panel assessment',
      body: 'We check you are ready before a company ever sees your profile.',
      value: '₹4,000',
    },
    {
      title: 'Mock interviews, then the real ones',
      body: 'Practised with a mentor, until the answers stop being a guess.',
      value: '₹6,000',
    },
    {
      title: 'The placement drive',
      body: 'Our HR partners map your profile to live openings, not job boards.',
      value: '₹12,000',
    },
    {
      title: 'Your resume and LinkedIn, rebuilt',
      body: 'Written for the analyst roles you are applying to.',
      value: '₹2,500',
    },
    {
      title: 'Recordings of every class',
      body: 'Miss a day, or sit through a hard one twice. They stay with you.',
      value: '₹3,000',
    },
    {
      title: 'A mentor on WhatsApp',
      body: 'Stuck at 11pm on a query. Someone answers through the 60 days.',
      value: '₹3,000',
    },
    {
      title: 'Practice files and datasets',
      body: 'The same Excel files and SQL tables the mentors teach from.',
      value: '₹1,000',
    },
    {
      title: 'Your certificate',
      body: 'Issued when you complete the program. Goes on your resume.',
      value: '₹1,500',
    },
  ],

  totalLabel: 'What that adds up to',
  /* Must equal the items above.
     36000+6000+3500+4000+6000+12000+2500+3000+3000+1000+1500 */
  total: '₹78,500',

  /* The reveal. The full fee, whole, with nothing softening it — a reader
     who is going to balk at ₹29,999 should balk here, three sections before
     we ask for anything, not at a payment page. */
  feeLabel: 'Full course fee, everything above included',
  fee: '₹29,999',

  /* Green, because on both pages green only ever means money not spent.
     Points forward without naming the number: enough to keep a reader
     scrolling, not enough to spend the split. */
  note: 'And you do not pay all of it upfront. How the fee splits is further down.',

  footnote:
    'Values are what each part would cost bought on its own. The fee shown ' +
    'is for the group online program. Nothing above is an optional add-on. ' +
    'Every line is included for every student.',

  cta: { label: 'Start your job training', href: '#enroll' },
  /* Sends the reader who is doing arithmetic straight to the fee section
     instead of losing them to the back button. */
  secondaryCta: { label: 'See how the payment splits', href: '#fees' },
}

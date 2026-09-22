/**
 * Section 05. The whole program, start to offer letter.
 *
 * NO MONEY MARKERS HERE, deliberately. This section teaches the sequence and
 * nothing else. The value stack further down the page is where money gets
 * introduced, and it lands hardest on a reader who has not been thinking in
 * rupees for two sections already.
 *
 * The one line that survives is the closing note under the steps: nothing
 * more is due between enrolling and the offer letter. That is the whole
 * pay-after-placement argument, said once, without a number attached.
 *
 * TODO confirm: is 3 LPA a floor Vista Tech actually holds candidates to, or
 * the typical starting salary? If it is not contractual it should read
 * "roles usually start at 3 LPA".
 */
export const journey = {
  heading: 'This is how your journey to',
  headingAccent: 'an IT job starts.',

  steps: [
    {
      title: 'Talk to our consultant',
      body:
        'A mentor calls you, looks at what you have studied so far, and ' +
        'tells you straight whether this program suits you.',
    },
    {
      title: 'Enroll and pay half',
      body:
        'Half the fee starts your training. The other half stays where it ' +
        'is until you have a job.',
    },
    {
      title: 'Learn the skills',
      body:
        'Excel, SQL, Python, Power BI and Tableau, over 60 days, taught ' +
        'live. Enough to work as a data analyst or a business analyst.',
    },
    {
      title: 'Clear the assessment',
      body:
        'Our panel checks you are actually ready before anyone puts you in ' +
        'front of a company. This protects you more than it protects us.',
    },
    {
      title: 'Sit for placements',
      body:
        'Our recruitment partners put your profile in front of real ' +
        'openings, not job boards. Minimum 3 LPA.',
    },
    {
      title: 'Get placed, then pay the rest',
      body:
        'You have an offer letter and a salary. Only now does the second ' +
        'half of the fee come due.',
    },
  ],

  summary: {
    lead: 'Between enrolling and your offer letter,',
    strong: 'you pay nothing more.',
  },

  // The label names the step it drops you into, so pressing it is not a leap.
  cta: { label: 'Step 1: Talk to our consultant', href: '#call' },
}

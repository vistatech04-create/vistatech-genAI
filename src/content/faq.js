/**
 * Section 12. The questions people ask before they pay ₹14,999.
 *
 * Ordered the way the worry actually arrives: the money first, then the
 * fear of not being placed, then "can somebody like me do this", then
 * logistics. Anything a person would have to ring up to find out belongs
 * here, because a paid visitor who has to ring up mostly does not.
 *
 * THE ONE THAT CARRIES THE PAGE is "what if I never get placed". The
 * honest answer — no guarantee, support continues, and half the fee is
 * never taken — is stronger than a promise, and it is the only answer that
 * survives a student asking the same question on day one of the batch. The
 * live site's "placement guarantee" wording has to come off for the same
 * reason: Meta rejects job guarantees, and it is not true.
 *
 * DELIBERATELY NOT LINKED: the trial week has its own page and its own ads.
 * This page is paid traffic, so the trial answer routes to the same
 * consultant call as everything else rather than sending the reader away
 * mid-scroll. See the note at the top of starterWeek.js.
 *
 * CONFIRM before launch: class timings, batch start dates, the assessment
 * pass mark, how long the placement drive usually takes, whether fees
 * attract GST, and whether any refund policy exists.
 */
export const faq = {
  heading: 'Questions people ask',
  headingAccent: 'before they enrol.',

  items: [
    {
      q: 'What exactly do I pay, and when?',
      a:
        '₹14,999 to start your training on the group online plan, and ' +
        '₹14,999 once you have an offer letter. That is the whole fee: ' +
        '₹29,998 across both halves, and nothing else. Between those two ' +
        'moments you are not asked for anything, whether that gap is two ' +
        'months or six.',
    },
    {
      q: 'What if I finish the course and still do not get placed?',
      a:
        'Then we have not earned the second half, and we do not take it. We ' +
        'do not promise you a job. Nobody honestly can, and you should walk ' +
        'away from anyone who does. What we commit to is the training, ' +
        'the panel assessment and the placement drive, and that the support ' +
        'keeps going until your first offer rather than stopping when the ' +
        '60 days end.',
    },
    {
      q: 'Is the second half really only due after a job?',
      a:
        'Yes, and it is due on your offer letter, not on a date we choose. ' +
        'It is the reason the first half exists: we are betting our own fee ' +
        'on getting you placed, which is not a bet you can make if the ' +
        'training does not work.',
    },
    {
      q: 'I am from a non-IT background and have never written code.',
      a:
        'Most of the batch is exactly that: commerce, arts and engineering ' +
        'graduates, and people already working in non-IT jobs. The 60 days ' +
        'start at Excel, which is not programming, and Python arrives only ' +
        'after you have spent a month working with data.',
    },
    {
      q: 'What salary can I expect?',
      a:
        'The roles our partners place into start at 3 LPA, and our students ' +
        'have gone in at more than that. What you are offered depends on ' +
        'your interviews, your degree and the company. No institute can ' +
        'quote you a number before it knows any of that.',
    },
    {
      q: 'How long after the 60 days until I am placed?',
      a:
        'The placement drive starts as soon as the panel clears you, which ' +
        'is usually within a fortnight of finishing. How long it runs ' +
        'depends on the openings and on how your interviews go. Nothing is ' +
        'payable while you wait.',
    },
    {
      q: 'Do I have to quit my job or my college to do this?',
      a:
        'No. Classes are in the evening, after working hours, and every one ' +
        'of them is recorded, so a late shift or an exam week does not cost ' +
        'you the material.',
    },
    {
      q: 'Are the classes live, and what language are they in?',
      a:
        'Live, with a mentor you can interrupt and ask questions. Taught in ' +
        'Tamil, with tool names and technical terms kept in English, ' +
        'because that is how they turn up at work and in interviews.',
    },
    {
      q: 'Can I see how you teach before I pay for the full program?',
      a:
        'Yes. There is a one-week batch of live classes you can sit in ' +
        'before deciding anything, with the same mentors who teach the 60 ' +
        'days. Ask about it on the consultant call and someone will set it up.',
    },
    {
      q: 'What do I need to attend?',
      a:
        'A laptop or desktop and an internet connection that holds a video ' +
        'call. Everything the mentors teach on is free to install, and they ' +
        'tell you what to set up before day one.',
    },
  ],

  /* A person with a question that is not on this list is a lead, not a
     dead end. */
  more: {
    text: 'Still have a question we have not answered here?',
    cta: { label: 'Talk to our consultant', href: '#call' },
  },
}

/**
 * Section 13, and the footer under it.
 *
 * The last ask introduces nothing new — no fresh offer, no discount, no
 * number the reader has not already seen. Somebody who has scrolled this
 * far has every fact they need and is looking for the button.
 *
 * The urgency is real or it is not there at all: batches start monthly, so
 * "the next batch" is honest. Put the actual date in `note` before launch —
 * a real date converts better than any amount of written pressure, and it
 * is the only scarcity this page is entitled to.
 *
 * THE FOOTER is deliberately thin. On a page you are paying to send people
 * to, every link is an exit. But an ad landing page with no company name,
 * address or contact looks like a fly-by-night operation, and that is one
 * of the things Meta's reviewers look for. So: who we are, where we are,
 * how to reach us, the two legal pages, and nothing else.
 *
 * NOTE: this footer data is duplicated in starter.js for /analytics-starter.
 * Worth lifting into one shared src/content/footer.js the next time either
 * page is touched — an address that changes in one place and not the other
 * is exactly the kind of thing nobody notices.
 *
 * CONFIRM: address, phone and email all came off vistatech.org. Terms and
 * Privacy need real pages before any ad spend starts.
 */
export const closing = {
  heading: 'Sixty days from now, this is either done or it is not started.',

  body:
    'The training is live, the placement drive is real, and half the fee ' +
    'waits until you have the job. The only part left is the call.',

  /**
   * The three facts that decide it, restated as a row so a reader who
   * scrolled straight to the bottom can still see the whole offer without
   * going back up. Nothing new — each one appears earlier on the page.
   */
  recap: [
    { big: '60 days', small: 'live, with a mentor' },
    { big: '₹15,000', small: 'to start training' },
    { big: 'The rest', small: 'only once you are placed' },
  ],

  cta: { label: 'Start your job training', href: '#enroll' },

  /**
   * The second action is the phone, not another anchor.
   *
   * Two reasons. A tel: link is the only button on this page that works
   * today — #enroll and #call have no target yet — and in this market a
   * person deciding on ₹14,999 of training would usually rather ring and
   * ask than fill a form. `href` is built from footer.phone, so the number
   * cannot drift out of step with the one printed below it.
   */
  callLabel: 'Call',

  note: 'A mentor calls you within 24 hours. No payment now.',

  /* Qualitative on purpose. Every count on this page (students trained,
     students placed, the Google rating) is still marked CONFIRM in one
     content file or another, and the last line before the button is the
     worst place on the page to print a number nobody has verified. */
  trust: [
    'Placement partner: Infinite HR Consultants',
    'Support continues until your first offer',
    'No payment to talk to us',
  ],
}

export const footer = {
  line: 'Vista Tech Solutions · IT training, digital marketing and HR consulting.',
  address: 'No.115, 7th Floor, Metro Towers, PH Road, Egmore, Chennai 600084',
  phone: '9894449002',
  email: 'support@vistatech.com',
  links: [
    { label: 'Terms', href: '#terms' },
    { label: 'Privacy', href: '#privacy' },
  ],
  // legal:
  //   'No claim of guaranteed employment. Roles our partners place into start ' +
  //   'at 3 LPA. Placement support continues until your first offer.',
}

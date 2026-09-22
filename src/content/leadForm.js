/**
 * The first form on the page.
 *
 * TODO before launch: onSubmit currently only shows a confirmation on screen.
 * It needs a real destination — a CRM endpoint, a Google Sheet, whatever the
 * team actually watches — plus a Meta Pixel "Lead" event so the ads can
 * optimise. A form that silently drops leads is worse than no form.
 */
export const leadForm = {
  heading: 'Tell us where to reach you',
  sub: 'A mentor calls you within 24 hours. No payment now.',

  salaryLabel: 'What salary are you aiming for?',
  salaryOptions: ['3 LPA', '5 LPA', '7 LPA+'],

  submitLabel: 'Get hired in 60 days',
  note: 'Takes 2 minutes. We never share your number.',

  doneHeading: 'Got it.',
  doneBody: 'A mentor will call you within 24 hours. Keep your phone nearby.',
}

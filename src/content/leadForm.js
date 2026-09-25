/**
 * The first form on the page.
 *
 * Posts to integrations.googleSheetEndpoint (see LeadForm.jsx) and fires the
 * Meta Pixel Lead event. If that request actually fails to send — offline,
 * DNS down, the request timing out — errorHeading/errorBody show instead of
 * the done screen, and the form stays filled in so the person can just hit
 * submit again rather than typing it all a second time. A form that shows
 * "Got it" while quietly dropping the lead is worse than no form.
 */
export const leadForm = {
  heading: 'Tell us where to reach you',
  sub: 'A mentor calls you within 24 hours. No payment now.',

  salaryLabel: 'What salary are you aiming for?',
  salaryOptions: ['3 LPA', '5 LPA', '7 LPA+'],

  submitLabel: 'Get hired in 60 days',
  submitLabelBusy: 'Sending…',
  note: 'Takes 2 minutes. We never share your number.',

  doneHeading: 'Got it.',
  doneBody: 'A mentor will call you within 24 hours. Keep your phone nearby.',

  errorHeading: 'That did not go through.',
  errorBody: 'Check your connection and try again, or call us directly at',
}

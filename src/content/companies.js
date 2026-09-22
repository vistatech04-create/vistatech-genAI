/**
 * Section 03. The companies the placement partner recruits for.
 *
 * WORDING MATTERS HERE. These are companies that hire through Vista Tech's
 * recruitment partners. They are not Vista Tech's clients and most have no
 * relationship with Vista Tech at all. Saying "brands that trust us" over a
 * wall containing Wipro, Fujitsu and Cognizant is a claim we cannot defend,
 * and it is the kind of thing that gets Meta ads pulled.
 *
 * "Partners", plural, reads as a network rather than one person. The 20
 * years and 2,000 placements belong to one firm, Infinite HR, so the sub
 * line says "our lead partner alone" rather than crediting the whole
 * network with figures it has not earned.
 */
export const companies = {
  heading: 'Companies hiring through our placement partners',
  sub:
    'We place students through recruitment partners, not job boards. ' +
    'Our lead partner alone has 20 years in hiring and over 2,000 placements.',

  /**
   * The two headline results.
   *
   * TODO CONFIRM BOTH. Neither figure appears on vistatech.org, which
   * currently claims 150+ students placed. Before these go anywhere near an
   * ad we need to know: 79% of which batch, measured over what period, and
   * who did the 6.7 LPA, in what role, at which company.
   *
   * The footnote must state the real conditions. "Conditions apply" with no
   * conditions written down is the kind of asterisk that reads as a dodge
   * and invites the exact question it is trying to avoid.
   */
  stats: [
    { value: '79', suffix: '%', star: true, label: 'of our students placed' },
    { value: '6.7', suffix: ' LPA', star: false, label: 'highest package cracked' },
  ],
  /**
   * NOTE ON THIS LABEL: Vista Tech's own timeline puts training at 60 days,
   * the HR placement drive at Day 61-71, and the offer letter after that.
   * "Get hired in 60 days" therefore promises an outcome, on a schedule the
   * company's own page contradicts. See the message thread for safer
   * alternatives that keep the same energy.
   */
  cta: { label: 'Get hired in 60 days', href: '#enroll' },

  footnote:
    '* Not a guarantee. This covers students who completed the full ' +
    'program and attended every interview arranged for them.',

  /* Taken from vistatech.org/enroll. TODO confirm the list is current. */
  rowOne: [
    'CBTS',
    'Kyndryl',
    'TAO Digital',
    'Sensiple',
    'Prodapt',
    'CAPCO',
    'Zillion Technologies',
    'Fujitsu',
    'Contus Tech',
    'Digile',
  ],
  rowTwo: [
    'Orion Systems',
    'ManVision',
    'Cerebra',
    'iOPEX',
    'Wipro',
    'ZoomInfo',
    'Cognizant',
    'Changbee',
    'Hansiba Technologies',
    'Digil Technologies',
  ],
}

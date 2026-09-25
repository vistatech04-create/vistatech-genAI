/**
 * Third-party endpoints the site posts to. Nothing here is a secret — an
 * Apps Script Web App URL is only useful if you already know which sheet
 * it writes to — but keeping it in one file means it changes in one place.
 */
export const integrations = {
  /**
   * The lead form (popup and inline) posts here on submit. Paste the URL
   * you get from deploying google-apps-script/lead-form.gs.js as a Web App
   * (Deploy > New deployment > Web app). It looks like:
   *   https://script.google.com/macros/s/AKfycb.../exec
   *
   * Left blank, submitting the form still shows the on-screen confirmation
   * — it just does not save anywhere, and a warning prints to the console.
   */
  googleSheetEndpoint: 'https://script.google.com/macros/s/AKfycbwhdi5nfvbJL5tlrHBPUZZcBrxXwXyihBWwnYL--_aFU5zwyTbVUA7yiasYaUeleNte/exec',
}

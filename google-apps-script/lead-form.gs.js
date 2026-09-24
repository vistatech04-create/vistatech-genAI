/**
 * Vista Tech lead form — Google Apps Script Web App.
 *
 * What this does: every time src/components/LeadForm/LeadForm.jsx submits
 * (popup or inline), it POSTs name/phone/email/salary/page here as form
 * fields. doPost appends one row per submission to the sheet this script
 * is bound to.
 *
 * SETUP (one time):
 *   1. Open (or create) the Google Sheet you want leads saved to.
 *   2. Extensions > Apps Script. Delete the placeholder code there and
 *      paste this whole file in.
 *   3. Deploy > New deployment > select type "Web app".
 *        - Execute as: Me
 *        - Who has access: Anyone
 *      (It has to be "Anyone" — the site calls this with no Google login.
 *      It does not expose the sheet itself, only this one write action.)
 *   4. Copy the resulting URL (ends in /exec) and paste it as
 *      integrations.googleSheetEndpoint in
 *      src/content/integrations.js.
 *   5. Submit the form once from the site and confirm a row lands in the
 *      sheet named SHEET_NAME below (it is created automatically if it
 *      does not exist yet).
 *
 * Re-deploying after an edit to this file: Deploy > Manage deployments >
 * the pencil icon > New version > Deploy. The /exec URL stays the same,
 * so you only update integrations.js the first time.
 */

var SHEET_NAME = 'Leads'
var HEADERS = ['Timestamp', 'Name', 'Phone', 'Email', 'Target salary', 'Page']

function doPost(e) {
  var sheet = getOrCreateSheet_()
  var p = (e && e.parameter) || {}

  sheet.appendRow([
    new Date(),
    p.name || '',
    p.phone || '',
    p.email || '',
    p.salary || '',
    p.page || '',
  ])

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON)
}

function getOrCreateSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = ss.getSheetByName(SHEET_NAME)
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME)
    sheet.appendRow(HEADERS)
    sheet.setFrozenRows(1)
  }
  return sheet
}

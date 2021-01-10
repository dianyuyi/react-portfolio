const { GoogleSpreadsheet } = require("google-spreadsheet");

/**
 * @param  {String} docID the document ID
 * @param  {String} sheetID the google sheet table ID
 * @param  {String} credentialsPath the credentials path defalt is './credentials.json'
 */
async function getData(docID, sheetID) {
  const result = [];
  const doc = new GoogleSpreadsheet(docID);
  await doc.useServiceAccountAuth({
    client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY,
  });
  await doc.loadInfo();
  const sheet = doc.sheetsById[sheetID];
  const rows = await sheet.getRows();
  // for (let row of rows) {
  //   result.push(row._rawData);
  // }
  return result;
}

module.exports = {
  getData,
};

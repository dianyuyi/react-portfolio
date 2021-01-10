import { render, screen } from "@testing-library/react";
import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// import useGoogleSheets from "use-google-sheets";
// import useGoogleSpreadsheet from "use-google-spreadsheet";

// const { getData } = require("./googleSheet.js");

// (async () => {
//   const resp = await getData("<docID>", "<sheetID>");
//   console.log(resp);
// })();

// (async () => {
//   const { data, loading, error } = useGoogleSheets({
//     apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
//     sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
//     sheetsNames: ["Sheet1"],
//   });
//   const googleData = data.JSON();
//   console.log(googleData);
// })();
// const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
// const sheetId = process.env.REACT_APP_GOOGLE_SHEETS_ID;
// const shareUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/edit?usp=sharing`;
// const { rows, isFetching } = useGoogleSpreadsheet(shareUrl, apiKey);
// const googleData = rows;

// console.log(googleData);

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

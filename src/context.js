import React, { useState, useContext, useEffect } from "react";
// import useGoogleSheets from "use-google-sheets";
import data from "./data/workProject";
import testdata from "./data/testdata";
// import { useTranslation } from "react-i18next";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [workProjects, setWorkProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lng, setLng] = useState("en");

  // const { t, i18n } = useTranslation();
  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };

  // local: data json
  useEffect(() => {
    setWorkProjects(testdata);
  }, [workProjects]);
  // online: google sheet
  // const { data, loading, error } = useGoogleSheets({
  //   apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  //   sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
  //   sheetsNames: ["Sheet1"],
  // });
  // newData = JSON.stringify(data);

  return (
    <AppContext.Provider
      value={{
        workProjects,
        lng,
        setLng,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };

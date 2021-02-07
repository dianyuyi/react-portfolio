import React, { useState, useContext, useEffect } from "react";
// import { getData } from "./googleSheet.js";
import localData from "./data/workProject";
// import testdata from "./data/testdata";
import Tabletop from "tabletop";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // local ver.
  // const TagList = [...new Set(localdata.map((...item) => item.tag))];
  // console.log(TagList);
  // const allTag = new Set([
  //   ...TagList.reduce((prev, next) => prev.concat(next)),
  // ]);
  // setAllTags("All", ...allTag);
  const [googleData, setGoogleData] = useState([]);
  const [workProjects, setWorkProjects] = useState([]);
  const [webLoading, setWebLoading] = useState(true);
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [lng, setLng] = useState("en");
  const [allTags, setAllTags] = useState([]);
  const [activeTag, setActiveTag] = useState("All");
  // console.log(workProjects);
  // console.log(allTags);

  // googleData ? setWorkProjects(googleData) : setWorkProjects(localData);

  const fetchTag = (data) => {
    const TagList = data
      .map((item) => item.tag.split(","))
      .reduce((prev, next) => prev.concat(next));

    const allTag = new Set(TagList);
    setAllTags(["All", ...allTag]);
  };
  const fetchGoogleSheet = () => {
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS_ID,
      simpleSheet: true,
    })
      .then((data) => {
        console.log(data);
        const reData = data.reverse();
        setGoogleData(reData);
        setWorkProjects(reData);
        fetchTag(data);
        setWebLoading(false);
      })
      .catch((err) => {
        setWebLoading(false);
        console.log(err);
      });
  };
  const filterByTag = (tag) => {
    if (tag === "All") {
      // setWorkProjects(localData);
      setWorkProjects(googleData);

      setActiveTag("All");
      return;
    }

    const filterWorks = googleData.filter((item) => {
      //local ver
      // item.tag.find((value) => value === tag)

      //google ver
      const arr = item.tag.split(",");
      if (arr.find((value) => value === tag)) return item;
      // console.log(allTags);
      // console.log(arr);
    });
    setWorkProjects(filterWorks);
    // console.log(filterWorks);

    setActiveTag(tag);
  };

  useEffect(() => {
    setWebLoading(true);
    fetchGoogleSheet();
  }, []);

  return (
    <AppContext.Provider
      value={{
        workProjects,
        lng,
        setLng,
        webLoading,
        setWebLoading,
        isSideOpen,
        setIsSideOpen,
        allTags,
        filterByTag,
        activeTag,
        setActiveTag,
        googleData,
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

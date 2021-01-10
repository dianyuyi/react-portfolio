import React, { useState, useContext, useEffect } from "react";
// import { getData } from "./googleSheet.js";
import localData from "./data/workProject";
// import testdata from "./data/testdata";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const TagList = [...new Set(localData.map((item) => item.tag))];
  const allTag = new Set([
    ...TagList.reduce((prev, next) => prev.concat(next)),
  ]);

  const [workProjects, setWorkProjects] = useState(localData);
  const [webLoading, setWebLoading] = useState(true);
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [lng, setLng] = useState("en");
  const [allTags, setAllTags] = useState(["All", ...allTag]);
  const [activeTag, setActiveTag] = useState("All");
  // console.log(workProjects);
  // console.log(allTags);

  const filterByTag = (tag) => {
    if (tag === "All") {
      setWorkProjects(localData);
      setActiveTag("All");
      return;
    }
    const filterWorks = localData.filter((item) =>
      item.tag.find((value) => value === tag)
    );
    setWorkProjects(filterWorks);
    // console.log(filterWorks);

    setActiveTag(tag);
  };

  useEffect(() => {
    // (async () => {
    //   const resp = await getData(process.env.REACT_APP_GOOGLE_SHEETS_ID, 0);
    //   // console.log("google test :" + resp);
    //   if (resp) {
    //     setWorkProjects(resp);
    //   } else {
    //     setWorkProjects([]);
    //   }
    // })();
  }, [workProjects]);

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

import React from "react";
import WorksList from "../components/WorksList";
import Title from "../components/Title";
import TagMenu from "../components/TagMenu";
const Works = () => {
  return (
    <>
      <Title heading={"work_title"} />
      <TagMenu />
      <WorksList />
    </>
  );
};

export default Works;

import React from "react";
import { motion } from "framer-motion";
import WorksList from "../components/WorksList";
import Title from "../components/Title";
import TagMenu from "../components/TagMenu";

const Works = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Title heading={"work_title"} home={false} />
      <TagMenu />
      <WorksList home={false} />
    </motion.div>
  );
};

export default Works;

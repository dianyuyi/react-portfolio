import React from "react";
import { motion } from "framer-motion";
import { WorksList, Title, TagMenu } from "../components";

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

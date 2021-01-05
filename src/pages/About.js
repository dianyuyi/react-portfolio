import React from "react";
import { motion } from "framer-motion";
import Profile from "../components/Profile";
import Title from "../components/Title";
const About = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Title heading={"about_title"} home={false} />
      <Profile />
    </motion.div>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";
import Profile from "../components/Profile";
import Title from "../components/Title";
// import SocialMedia from "../components/SocialMedia";
import { ResumeBar, ResumeBtn } from "../components/styles/aboutStyle";

const About = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Title heading={"about_title"} home={false} />
      <Profile />
      {/* <SocialMedia iconColor={"black"} /> */}
      <ResumeBar>
        <ResumeBtn
          to="https://www.cakeresume.com/xi-lo"
          target="_blank"
          rel="noreferrer noopener"
        >
          》 Resume
        </ResumeBtn>
      </ResumeBar>
    </motion.div>
  );
};

export default About;

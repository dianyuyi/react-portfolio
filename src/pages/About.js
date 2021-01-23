import React from "react";
import { motion } from "framer-motion";
import { Profile, Title } from "../components";
import { ResumeBar, ResumeBtn } from "../components/styles/aboutStyle";

const About = () => {
  const url = "https://www.cakeresume.com/xi-lo";
  const ResumeUrl = (e) => {
    e.preventDefault();
    // window.location.href = url;
    window.open(url, "_blank");
  };
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Title heading={"about_title"} home={false} />
      <Profile />
      {/* <SocialMedia iconColor={"black"} /> */}
      <ResumeBar>
        <ResumeBtn
          onClick={(e) => ResumeUrl(e)}
          // to={url}
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

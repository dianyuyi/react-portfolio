import React from "react";
// import { motion } from "framer-motion";
import { Profile, Title } from "../components";
import {
  MotionContainer,
  ResumeBar,
  ResumeBtn,
} from "../components/styles/aboutStyle";

const About = () => {
  const url_en = "https://www.cakeresume.com/xi-lo";
  const url_tw = "https://www.cakeresume.com/xi-lo-tw";

  const ResumeUrl = (e, url) => {
    e.preventDefault();
    // window.location.href = url;
    window.open(url, "_blank");
  };
  return (
    <MotionContainer exit={{ opacity: 0 }}>
      <Title heading={"about_title"} home={false} />
      <Profile />
      {/* <SocialMedia iconColor={"black"} /> */}
      <ResumeBar>
        <ResumeBtn
          onClick={(e) => ResumeUrl(e, url_en)}
          // to={url}
          target="_blank"
          rel="noreferrer noopener"
        >
          》Resume(EN)
        </ResumeBtn>
        <ResumeBtn
          onClick={(e) => ResumeUrl(e, url_tw)}
          // to={url}
          target="_blank"
          rel="noreferrer noopener"
        >
          》Resume(TW)
        </ResumeBtn>
      </ResumeBar>
    </MotionContainer>
  );
};

export default About;

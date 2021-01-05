import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import WorksList from "../components/WorksList";
import Title from "../components/Title";
import { MainBg, FlexContainer } from "../components/styles/home";

const Home = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <MainBg>
        <Hero />
        <FlexContainer>
          <Title
            heading={"about_title"}
            grid={25}
            home={true}
            dir={"left"}
          ></Title>
          <Profile grid={75} />
          <WorksList grid={75} limit={6} />
          <Title
            heading={"work_title"}
            grid={25}
            home={true}
            dir={"right"}
          ></Title>
        </FlexContainer>
      </MainBg>
    </motion.div>
  );
};

export default Home;

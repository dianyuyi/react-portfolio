import React from "react";
import { motion } from "framer-motion";
import { Hero, Profile, WorksList, Title, SubmitForm } from "../components";
import { MainBg, FlexContainer } from "../components/styles/home";
import { useGlobalContext } from "../context";

const Home = () => {
  const { isWebp } = useGlobalContext();

  return (
    <motion.div exit={{ opacity: 0 }}>
      <MainBg isWebp={isWebp}>
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
        <Title
          heading={"contact_title"}
          grid={25}
          home={true}
          dir={"left"}
        ></Title>
        <SubmitForm grid={75} />
      </MainBg>
    </motion.div>
  );
};

export default Home;

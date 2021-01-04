import React from "react";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import WorksList from "../components/WorksList";
import Title from "../components/Title";
// import Loading from "../components/Loading";
import { MainBg, FlexContainer } from "../components/styles/home";

const Home = () => {
  return (
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
  );
};

export default Home;

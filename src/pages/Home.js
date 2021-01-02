import React from "react";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import WorksList from "../components/WorksList";
import styled from "styled-components";
import InkBg from "../assets/image/ink_bg.png";

const Home = () => {
  return (
    <MainBg>
      <Hero />
      <Profile />
      <WorksList />
    </MainBg>
  );
};

const MainBg = styled.div`
  background-image: url(${InkBg});
`;

export default Home;

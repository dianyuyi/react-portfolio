import React from "react";
import styled from "styled-components";
import MainBg from "../assets/image/hero/hero_bg.jpg";
import LogoBg from "../assets/image/hero/loxi_sign.png";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <img className="LogoImg" src={LogoBg} alt="loxi" />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>Calligraphy, </HeroH1>
          <HeroH1>Coding</HeroH1>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100vh;
  padding: 0 0rem;
  position: relative;
  margin-top: -80px;
  color: #fff;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    /* background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.3) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%); */
  }
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${MainBg});
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  overflow: hidden;

  .LogoImg {
    position: relative;
    top: -3rem;
    left: -5rem;
    /* width: 100%; */
    height: 120vh;
  }
`;
const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  width: 100%;
  max-height: 100%;
  padding: 0rem 10%;
  /* padding: 0rem calc((100vw - 1300px) / 2); */
`;

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  /* max-height: 100%; */
  padding: 0;
  color: #fff;
  font-weight: bold;
`;
const HeroH1 = styled.h1`
  font-size: clamp(3rem, 7vw, 5rem);
  padding: 1rem 0;
  margin-bottom: 0.5rem;
  font-style: normal;
  font-weight: 900;
  line-height: 2.5rem;
  letter-spacing: 0.3rem;
  color: #ffffff;
  text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5), 4px 1px 5px rgba(0, 0, 0, 0.5),
    4px 1px 5px rgba(0, 0, 0, 0.5);
`;
const HeroP = styled.p`
  font-size: clamp(1rem, 3vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 400;
`;

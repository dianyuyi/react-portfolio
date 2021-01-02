import React from "react";
import { useGlobalContext } from "../context";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PersonImg from "../assets/image/photo_fix.jpg";

const Profile = () => {
  const { t } = useTranslation();
  return (
    <AboutContainer>
      <MainTitle>{t("About Me")}</MainTitle>
      <CircleClip>
        <img src={PersonImg} alt="person-img" />
      </CircleClip>
      <IntroContext>
        <IntroInner>
          <p>{t(`about_article_part1`)}</p>
        </IntroInner>
      </IntroContext>
    </AboutContainer>
  );
};

export default Profile;

const AboutContainer = styled.section`
  width: 100%;
  height: 100vh;
  padding: 0 5%;
  margin: 3rem 0;
`;
const MainTitle = styled.h1`
  position: relative;
  font-family: Serif;
  font-style: normal;
  font-weight: bold;
  font-size: clamp(2.5rem, 6vw, 5rem);
  line-height: 2rem;
  margin: 3rem 0;
  text-align: center;
  letter-spacing: 0.1em;
  :after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    width: 100px;
    height: 1px;
    background: #222;
    transform: rotate(135deg);
  }
`;

const CircleClip = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto;
  overflow: hidden;
  img {
    max-width: 100%;
    border: 1px solid #222;
  }
`;

const IntroContext = styled.div`
  margin-top: -0.5rem;
  padding: 1rem 0.5rem;
  background: #4d4d4d;
`;

const IntroInner = styled.div`
  background: #fff;
  padding: 0.25rem;
  border: 1px solid #4d4d4d;
`;

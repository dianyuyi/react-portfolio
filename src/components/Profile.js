import React from "react";
// import { useGlobalContext } from "../context";
import { useTranslation } from "react-i18next";
import * as Fade from "react-reveal/Fade";
import {
  AboutContainer,
  CircleClip,
  IntroContext,
  IntroInner,
} from "../components/styles/aboutStyle";
import PersonImg_webp from "../assets/image/photo_fix.webp";
import PersonImg from "../assets/image/photo_fix.jpg";
import { useGlobalContext } from "../context";

const Profile = ({ grid }) => {
  const { isWebp } = useGlobalContext();
  const { t } = useTranslation();
  return (
    <AboutContainer grid={grid}>
      <CircleClip>
        <img src={isWebp ? PersonImg_webp : PersonImg} alt="person-img" />
      </CircleClip>
      <IntroContext>
        <IntroInner>
          <Fade bottom>
            <p>{t(`about_article_part1`)}</p>
            <p>{t(`about_article_part2`)}</p>
          </Fade>
        </IntroInner>
      </IntroContext>
    </AboutContainer>
  );
};

export default Profile;

import React from "react";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import config from "react-reveal/globals";
import LazyLoad from "react-lazyload";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroItems,
  HeroH1,
} from "../components/styles/heroStyle";

import LogoBg from "../assets/image/hero/loxi_sign.png";

// import Loading from "../components/Loading";
// import { useGlobalContext } from "../context";

const Hero = () => {
  // const { loading } = useGlobalContext();
  config({ ssrFadeout: true });
  const { t } = useTranslation();
  return (
    <HeroContainer>
      <LazyLoad height={500} offset={100}>
        <HeroBg>
          <img className="LogoImg" src={LogoBg} alt="loxi" />
        </HeroBg>
      </LazyLoad>
      <HeroContent>
        <HeroItems>
          <Fade left cascade ssrFadeout>
            <HeroH1>{t(`hero_title_01`)}</HeroH1>
            <HeroH1>{t(`hero_title_02`)}</HeroH1>
          </Fade>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

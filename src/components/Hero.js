import React from "react";
import { useTranslation } from "react-i18next";
import { Parallax } from "react-scroll-parallax";
import * as Fade from "react-reveal/Fade";
import config from "react-reveal/globals";
import {
  HeroContainer,
  HeroBg,
  BgLogo,
  HeroContent,
  HeroItems,
  HeroH1,
} from "../components/styles/heroStyle";
import LogoBg_webp from "../assets/image/hero/loxi_sign_resize-min.webp";
import LogoBg from "../assets/image/hero/loxi_sign-min.png";

import { useGlobalContext } from "../context";

const Hero = () => {
  const { isWebp } = useGlobalContext();

  config({ ssrFadeout: true });
  const { t } = useTranslation();
  return (
    <HeroContainer>
      <HeroBg isWebp={isWebp}>
        <Parallax y={[-10, 10]} tagOuter="figure">
          <BgLogo
            src={isWebp ? LogoBg_webp : LogoBg}
            alt="loxi"
            effect="blur"
            visibleByDefault={true}
          />
        </Parallax>
      </HeroBg>
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

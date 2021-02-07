import styled from "styled-components";
import variables from "./common/variables";
import MainBg from "../../assets/image/hero/hero_bg-min.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100vh;
  padding: 0 0rem;
  position: relative;
  margin-top: 0px;
  color: ${variables.inverse};

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

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${MainBg});
  background-size: cover;
  /* background-attachment: fixed; */
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

export const BgLogo = styled(LazyLoadImage)`
  position: relative;
  top: -3rem;
  left: -5rem;
  /* width: 100%; */
  height: 120vh;
`;
export const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 0px);
  width: 100%;
  max-height: 100%;
  padding: 0rem ${variables.gutter};
  /* padding: 0rem calc((100vw - 1300px) / 2); */
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  /* max-height: 100%; */
  padding: 0;
  color: ${variables.inverse};
  font-weight: bold;
`;
export const HeroH1 = styled.h1`
  font-family: "creamfont-1.1 regular";
  font-size: clamp(3.5rem, 7.5vw, 6rem);
  padding: 1rem 0;
  margin-bottom: 0.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 4.5rem;
  letter-spacing: 0.5rem;
  color: ${variables.inverse};
  text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5), 4px 1px 5px rgba(0, 0, 0, 0.5),
    4px 1px 5px rgba(0, 0, 0, 0.5);
  @media only screen and (max-width: ${variables.breakpointPhone}) {
    line-height: 2.5rem;
    letter-spacing: 0.3rem;
  }
`;

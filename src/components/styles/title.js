import styled from "styled-components";
import variables from "./common/variables";
import ButtonBg from "../../assets/image/btn_bg.png";

export const MainTitleContainer = styled.div`
  width: ${({ grid }) => (grid ? `${grid}%` : `100%`)};
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  /* padding: 0 ${variables.gutter}; */
  padding-left: ${({ dir }) => (dir === "left" ? `${variables.gutter}` : `0`)};
  padding-right: ${({ dir }) =>
    dir === "right" ? `${variables.gutter}` : `0`};

  @media only screen and (max-width: ${variables.breakpointLarge}) {
    /* padding: ${({ grid }) =>
      grid ? `0 0 0 ${variables.gutter}` : `0 ${variables.gutter}`}; */
  }

  @media only screen and (max-width: ${variables.breakpointTablet}) {
    width: 100%;
    padding: 0 ${variables.gutter};
    order: ${({ dir }) => (dir === "left" ? `1` : `3`)};
  }
`;

export const MainTitle = styled.h1`
  position: relative;
  font-style: normal;
  font-weight: 500;
  font-size: clamp(2.5rem, 6vw, 4rem);
  line-height: 4rem;
  padding: 2rem 0;
  margin: 3rem 0;
  text-align: center;
  letter-spacing: 0.1em;
  :after {
    content: '';
    position: absolute;
    top: ${({ home }) =>
      home ? `${variables.lineHT}` : `${variables.linePT}`};
    left: ${({ home }) =>
      home ? `${variables.lineHL}` : `${variables.linePL}`};
    width: ${({ home }) =>
      home ? `${variables.lineHW}` : `${variables.linePW}`};
    height: 1px;
    background: ${variables.primary};
    transform: ${({ home }) =>
      home ? `rotate(${variables.homeDeg})` : `rotate(${variables.pageDeg})`};
  }
`;

export const TitleBg = styled.div`
  background-image: url(${ButtonBg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center bottom;
  position: absolute;
  width: 200px;
  height: 100%;
`;

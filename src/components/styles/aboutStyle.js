import styled from "styled-components";
import variables from "./common/variables";
import { Link } from "react-router-dom";

export const AboutContainer = styled.div`
  width: ${({ grid }) => (grid ? `${grid}%` : `100%`)};
  height: 100%;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  padding: ${({ grid }) =>
    grid ? `0 ${variables.gutter} 0 0` : `0 ${variables.gutter}`};
  margin: 3rem 0 2rem 0;
  @media only screen and (max-width: ${variables.breakpointTablet}) {
    width: 100%;
    padding: 0 ${variables.gutter};
    order: 2;
  }
`;

export const CircleClip = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin: 0 auto;
  overflow: hidden;
  position: absolute;
  top: 0;
  /* right: 10%; */
  transition: 0.3s;
  z-index: 1;
  position: ${({ grid }) => (grid ? `absolute` : `initial`)};
  right: ${({ grid }) => (grid ? `10%` : `initial`)};
  img {
    max-width: 100%;
    border: 1px solid ${variables.primary};
  }

  @media only screen and (max-width: ${variables.breakpointTablet}) {
    position: initial;
    right: initial;
  }
`;

export const IntroContext = styled.div`
  max-width: 90%;
  min-width: 300px;
  margin: 160px ${variables.gutter} 0 auto;
  padding: 1.5rem 1.5rem;
  background: ${variables.darkGrey};
  margin-top: ${({ grid }) => (grid ? `160px` : `0`)};

  @media only screen and (max-width: ${variables.breakpointTablet}) {
    margin-top: -0.5rem;
  }
  @media only screen and (max-width: ${variables.breakpointPhone}) {
    margin: 0 auto 0 ${variables.gutter};
    padding: 1rem;
  }
`;

export const IntroInner = styled.div`
  margin: -3rem -3rem 0 0;
  padding: 2.5rem 2rem;
  background: ${variables.inverse};
  border: 1px solid ${variables.darkGrey};
  transition: 0.3s;
  p {
    font-family: "creamfont-1.1 regular";
    font-size: 1.15rem;
    font-weight: 300;
    line-height: 1.75rem;
    padding-top: 1rem;
    text-align: justify;
  }
  @media only screen and (max-width: ${variables.breakpointTablet}) {
    padding: 1rem 1.5rem;
    margin: -2rem -2rem 0 0;
  }
`;

export const ResumeBar = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-end;
  margin: 0 10% 5% 0;
`;

export const ResumeBtn = styled(Link)`
  border: 1px solid ${variables.darkGrey};
  color: ${variables.primary};
  font-family: "creamfont-1.1 regular";
  font-size: 1.15rem;
  font-weight: 300;
  padding: 1rem 1.5rem;
  box-shadow: inset -2px -2px 0 rgba(0, 0, 0, 1);
  transition: 0.3s;
  &:hover {
    transform: translate(2px, 2px);
    box-shadow: inset 2px 2px 1px rgba(0, 0, 0, 0.5);
  }
`;

import styled from "styled-components";
import variables from "./variables";

export const AboutContainer = styled.div`
  width: ${({ grid }) => (grid ? `${grid}%` : `100%`)};
  height: 100%;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  padding: ${({ grid }) => (grid ? `0 5% 0 0` : `0 5%`)};
  margin: 3rem 0;
  @media only screen and (max-width: ${variables.breakpointTablet}) {
    width: 100%;
    padding: 0 5%;
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
  right: 10%;
  transition: 0.3s;
  img {
    max-width: 100%;
    border: 1px solid ${variables.primary};
  }

  @media only screen and (max-width: ${variables.breakpointTablet}) {
    position: initial;
    right: initial;
    z-index: 1;
  }
`;

export const IntroContext = styled.div`
  max-width: 80%;
  min-width: 300px;
  margin: 160px 10% 0 auto;
  padding: 1.5rem 1.5rem;
  background: #4d4d4d;
  @media only screen and (max-width: ${variables.breakpointTablet}) {
    margin-top: -0.5rem;
  }
  @media only screen and (max-width: ${variables.breakpointPhone}) {
    margin: 0 auto 0 5%;
    padding: 1rem;
  }
`;

export const IntroInner = styled.div`
  margin: -3rem -3rem 0 0;
  padding: 2.5rem 2rem;
  background: ${variables.inverse};
  border: 1px solid #4d4d4d;
  transition: 0.3s;
  p {
    font-family: serif;
    font-size: 1.15rem;
    font-weight: 500;
    line-height: 1.75rem;
    padding-top: 1rem;
    text-align: justify;
  }
  @media only screen and (max-width: ${variables.breakpointTablet}) {
    padding: 1rem 1.5rem;
    margin: -2rem -2rem 0 0;
  }
`;

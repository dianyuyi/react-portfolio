import styled from "styled-components";
import variables from "../common/variables";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const IntroWorkWrapper = styled.div`
  margin: calc(80px + 1rem) ${variables.gutter};
  display: flex;
  @media only screen and (max-width: ${variables.breakpointPhone}) {
    display: block;
  }
`;

export const IntroContainer = styled.div`
  display: block;
  width: ${({ content }) => (content == "left" ? `55%` : `40%`)};
  padding-left: ${({ content }) =>
    content == "left" ? `0` : `${variables.gutter}`};
  @media only screen and (max-width: ${variables.breakpointPhone}) {
    width: 100%;
    padding-left: 0;
    padding-bottom: 1rem;
  }
`;
export const IntroImg = styled(LazyLoadImage)`
  max-width: 100%;
  height: auto;
`;
export const IntroName = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-family: "creamfont-1.1 regular";
`;
export const IntroDate = styled.p`
  font-size: 0.875rem;
  color: ${variables.grey};
  padding: 0.5rem 0;
  margin-top: 0.5rem;
`;
export const IntroDescription = styled.p`
  font-size: 1.05rem;
  padding: 1.5rem 0;
  font-weight: 300;
  line-height: 1.5rem;
  font-family: "creamfont-1.1 regular";
`;
export const IntroTagBox = styled.div`
  padding: 0.75rem 0;
  margin-bottom: 1rem;
  border-top: solid 1px ${variables.grey};
  border-bottom: solid 1px ${variables.grey};
`;

export const IntroTag = styled.div`
  color: ${variables.grey};
  border: 1px solid ${variables.grey};
  display: inline-block;
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  font-size: 0.75rem;
`;

export const IntroLink = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  font-family: "creamfont-1.1 regular";
  > a {
    font-size: 1.5rem;
    color: ${variables.darkGrey};
    display: flex;
    align-items: center;

    span {
      padding-left: 0.5rem;
      font-size: 0.875rem;
      color: ${variables.darkGrey};
    }
  }
`;

export const BackList = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid ${variables.grey};
  /* border-radius: 50px; */
  padding: 1rem 0;
  color: ${variables.darkGrey};
  font-size: 1.2rem;
  font-weight: 900;
  font-family: "creamfont-1.1 regular";
  letter-spacing: 2px;
  overflow: hidden;

  position: relative;

  span {
    padding: 0 0.5rem;
  }

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0px;
    height: 4px;
    transition: 0.3s;
    background: ${variables.darkGrey};
  }
  &:hover {
    &:before {
      width: 100%;
    }
  }
`;

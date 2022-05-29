import styled from "styled-components";
import variables from "./common/variables";
import { Link } from "react-router-dom";

export const ErrorContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  padding: 0 ${variables.gutter};
  margin: 3rem 0 2rem 0;
  @media only screen and (max-width: ${variables.breakpointTablet}) {
    width: 100%;
    padding: 0 ${variables.gutter};
    order: 2;
  }
`;

export const ErrorTitle = styled.h1`
  margin: 4rem auto 2rem auto;
  font-size: clamp(2rem, 5vw, 4rem);
`;

export const ErrorImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  img {
    max-width: 320px;
    width: 100%;
  }
`;

export const ErrorBackLink = styled(Link)`
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 5px;
  border: solid 1px ${variables.grey};
  color: ${variables.primary};
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.15);
  transition: 0.3s;
  &:hover {
    background: ${variables.primary};
    color: ${variables.inverse};
    transform: translate(2px, 3px);
    box-shadow: inset -1px -1px 0px rgba(255, 255, 255, 0.6);
  }
`;

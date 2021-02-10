import styled from "styled-components";
import variables from "./common/variables";
import InkBg from "../../assets/image/ink_bg.png";

export const MainBg = styled.div`
  width: 100%;
  padding: 0;
  background-image: url(${InkBg});
  background-attachment: fixed;
  background-size: cover;
  :before {
    content: "";
    background-image: inherit;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    -webkit-background-size: cover !important;
    -moz-background-size: cover !important;
    -o-background-size: cover;
    background-size: cover !important;
    z-index: -1;
  }
`;
export const FlexContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  @media only screen and (max-width: ${variables.breakpointTablet}) {
    flex-direction: column;
  }
`;

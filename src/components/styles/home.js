import styled from "styled-components";
import variables from "./variables";
import InkBg from "../../assets/image/ink_bg.png";

export const MainBg = styled.div`
  width: 100%;
  padding: 0;
  background-image: url(${InkBg});
  background-attachment: fixed;
  background-size: cover;
`;
export const FlexContainer = styled.div`
  flex-wrap: wrap;
  @media only screen and (max-width: ${variables.breakpointTablet}) {
    display: flex;
    flex-direction: column;
  }
`;

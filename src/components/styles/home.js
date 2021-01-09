import styled from "styled-components";
import variables from "./common/variables";
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
  display: flex;
  align-items: center;
  @media only screen and (max-width: ${variables.breakpointTablet}) {
    flex-direction: column;
  }
`;

import styled from "styled-components";
import variables from "../common/variables";

export const FooterContainer = styled.footer`
  background: ${variables.primary};
  color: ${variables.inverse};
  width: 100%;
  text-align: center;
  bottom: 0;

  h3 {
    /* font-family: "creamfont-1.1 regular"; */
    font-size: 0.875rem;
    padding-top: 1rem;
  }
`;

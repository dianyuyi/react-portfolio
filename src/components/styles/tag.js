import styled from "styled-components";
import variables from "./variables";

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 1rem 0;
  margin: 0 ${variables.gutter};
  border-bottom: solid 1px #ccc;
`;

export const TagBtn = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  background: ${variables.inverse};
  border: 1px solid #eee;
  box-sizing: border-box;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: ${variables.primary};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translate(1px, 2px);
    background: ${variables.primary};
    color: ${variables.inverse};
    box-shadow: inset -1px -1px 1px rgba(255, 255, 255, 1);
  }
`;

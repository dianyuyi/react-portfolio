import styled from "styled-components";
import variables from "./variables";

export const MediaContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 10%;
  padding-bottom: 2rem;
`;

export const MediaList = styled.ul``;

export const MediaItem = styled.li`
  font-size: 2rem;
  padding-right: 1rem;
  > a {
    color: ${variables.primary};
    transition: 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

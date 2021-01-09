import styled from "styled-components";
import variables from "../common/variables";

export const MediaContainer = styled.div`
  display: flex;
  padding-bottom: 2rem;

  &.white {
    justify-content: center;
    margin-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  &.black {
    justify-content: flex-start;
    margin-left: 10%;
  }
`;

export const MediaList = styled.div`
  display: flex;
`;

export const MediaItem = styled.div`
  font-size: 2rem;
  padding-right: 1rem;

  &.white {
    a {
      color: ${variables.inverse};
      font-size: 1.25rem;
    }
  }
  &.black {
    a {
      color: ${variables.primary};
      font-size: 2rem;
    }
  }
  > a {
    transition: 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

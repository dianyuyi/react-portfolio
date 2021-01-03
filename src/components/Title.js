import React from "react";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import {
  MainTitleContainer,
  MainTitle,
  TitleBg,
} from "../components/styles/title";

const Title = ({ heading, grid, home, left }) => {
  const { t } = useTranslation();

  return (
    <MainTitleContainer grid={grid} left={left}>
      <Fade top>
        <MainTitle home={home}>{t(heading)}</MainTitle>
      </Fade>
      <TitleBg />
    </MainTitleContainer>
  );
};

export default Title;

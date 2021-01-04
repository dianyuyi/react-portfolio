import React from "react";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import {
  MainTitleContainer,
  MainTitle,
  TitleBg,
} from "../components/styles/title";

const Title = ({ heading, grid, home, dir }) => {
  const { t } = useTranslation();

  return (
    <MainTitleContainer home={home} grid={grid} dir={dir}>
      <Fade top>
        <MainTitle>{t(heading)}</MainTitle>
      </Fade>
      <TitleBg />
    </MainTitleContainer>
  );
};

export default Title;

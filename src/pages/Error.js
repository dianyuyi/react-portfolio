import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ErrorImg from "../assets/image/error_symbol.png";
import {
  ErrorContainer,
  ErrorTitle,
  ErrorImgWrapper,
  ErrorBackLink,
} from "../components/styles/errorStyle";

const Error = () => {
  const { t } = useTranslation();
  return (
    <motion.div exit={{ opacity: 0 }}>
      <ErrorContainer>
        <ErrorTitle>{t("error_msg")}</ErrorTitle>
        <ErrorImgWrapper>
          <img src={ErrorImg} alt="" />
        </ErrorImgWrapper>
        <ErrorBackLink to="/">
          <p>{t("error_back")}</p>
        </ErrorBackLink>
      </ErrorContainer>
    </motion.div>
  );
};

export default Error;

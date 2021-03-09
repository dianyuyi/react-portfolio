import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import * as Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";
import { Loading } from "../components";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import {
  IntroWorkWrapper,
  IntroContainer,
  IntroImg,
  IntroName,
  IntroDate,
  IntroDescription,
  IntroTagBox,
  IntroLink,
  IntroTag,
  BackList,
} from "../components/styles/works/single";
import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineStop, AiOutlineBackward } from "react-icons/ai";

const SingleWork = () => {
  const { t } = useTranslation();

  const { workProjects, lng, isWebp } = useGlobalContext();
  const [displayWork, setDisplayWork] = useState([]);
  const { id } = useParams();
  const fetchData = useCallback(() => {
    const workById = workProjects.filter((item) => item.id == id);
    setDisplayWork(workById);
  }, [id, workProjects]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <motion.div exit={{ opacity: 0 }}>
      {displayWork.map((item, index) => {
        const {
          id,
          name_tw,
          name_en,
          image,
          image_webp,
          tag,
          date,
          description_tw,
          description_en,
          url,
        } = item;
        // google ver
        // const tagArr = tag.split(",");
        const urlText = () => {
          if (url) {
            return "outer_link";
          } else {
            return "confidentiality_clause";
          }
        };
        return (
          <IntroWorkWrapper key={index}>
            <IntroContainer key={id} content={"left"}>
              <Fade left>
                <IntroImg
                  src={isWebp ? image_webp : image}
                  alt={name_en}
                  effect="blur"
                  visibleByDefault={true}
                  placeholderSrc={<Loading />}
                />
              </Fade>
            </IntroContainer>
            <IntroContainer content={"right"}>
              <Fade right>
                <IntroName>{`${lng === "en" ? name_en : name_tw}`}</IntroName>

                <IntroDate>Created in {date}</IntroDate>
                <IntroDescription>{`${
                  lng === "en" ? description_en : description_tw
                }`}</IntroDescription>
                <IntroTagBox>
                  {tag.map((value, index) => {
                    return <IntroTag key={index}>{value}</IntroTag>;
                  })}
                  {/* {tagArr.map((value, index) => {
                    return <IntroTag key={index}>{value}</IntroTag>;
                  })} */}
                </IntroTagBox>
                <IntroLink>
                  <a
                    href={url ? url : "#"}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {url ? <BiLinkExternal /> : <AiOutlineStop />}
                    <span>{t(urlText())}</span>
                  </a>
                </IntroLink>
                <BackList to="/works">
                  <AiOutlineBackward />
                  <span>{t("back_list")}</span>
                </BackList>
              </Fade>
            </IntroContainer>
          </IntroWorkWrapper>
        );
      })}
    </motion.div>
  );
};

export default SingleWork;

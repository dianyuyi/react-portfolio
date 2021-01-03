import React from "react";
import * as LinesEllipsis from "react-lines-ellipsis";
import Fade from "react-reveal/Fade";
import config from "react-reveal/globals";
import LazyLoad from "react-lazyload";
import { useGlobalContext } from "../context";
import {
  WorksContainer,
  WorkWrapper,
  WorkCard,
  WorkImg,
  WorkInfo,
  WorkTitle,
  TextWrap,
  MoreBtn,
} from "../components/styles/workStyle";

const Works = ({ limit, grid, home }) => {
  config({ ssrFadeout: true });
  const { workProjects, lng } = useGlobalContext();
  const newWorkProject = limit ? workProjects.slice(0, limit) : workProjects;

  return (
    <WorksContainer grid={grid} home={home}>
      <WorkWrapper>
        {newWorkProject.map((work, index) => {
          const {
            name_tw,
            name_en,
            image,
            thumb,
            description_en,
            description_tw,
          } = work;
          return (
            <WorkCard key={index}>
              <WorkImg>
                <LazyLoad width={100}>
                  <img alt={name_en} src={thumb} />
                </LazyLoad>
              </WorkImg>
              <WorkInfo>
                <Fade cascade ssrFadeout>
                  <WorkTitle>{lng === "en" ? name_en : name_tw}</WorkTitle>
                  <TextWrap>
                    <LinesEllipsis
                      text={lng === "en" ? description_en : description_tw}
                      maxLine="1"
                      ellipsis="..."
                      trimRight
                      basedOn="letters"
                    />
                  </TextWrap>
                  <MoreBtn>{`> More`}</MoreBtn>
                </Fade>
              </WorkInfo>
            </WorkCard>
          );
        })}
      </WorkWrapper>
    </WorksContainer>
  );
};

export default Works;

import React from "react";
// import * as LinesEllipsis from "react-lines-ellipsis";
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
} from "./styles/works/workStyle";

const WorksList = ({ limit, grid, home }) => {
  const { workProjects, lng, filterProjects, isWebp } = useGlobalContext();
  const newWorkProjects = limit ? workProjects.slice(0, limit) : filterProjects;

  // console.log(googleData);
  return (
    <WorksContainer grid={grid} home={home}>
      <WorkWrapper>
        {newWorkProjects.map((work, index) => {
          const {
            id,
            name_tw,
            name_en,
            image_webp,
            thumb,
            description_en,
            description_tw,
          } = work;
          return (
            <WorkCard key={index}>
              <WorkImg>
                {isWebp && image_webp ? (
                  <img alt={name_en} src={image_webp} />
                ) : (
                  <img alt={name_en} src={thumb} />
                )}
              </WorkImg>
              <WorkInfo>
                <WorkTitle>{lng === "en" ? name_en : name_tw}</WorkTitle>
                <TextWrap>
                  {lng === "en" ? description_en : description_tw}
                  {/* <LinesEllipsis
                    text={lng === "en" ? description_en : description_tw}
                    maxLine="1"
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                  /> */}
                </TextWrap>
                <MoreBtn to={`/work/${id}`}>{`> More`}</MoreBtn>
              </WorkInfo>
            </WorkCard>
          );
        })}
      </WorkWrapper>
    </WorksContainer>
  );
};

export default WorksList;

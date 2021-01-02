import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";

const Works = () => {
  const { workProjects, lng } = useGlobalContext();
  // console.log(workProjects);
  return (
    // <WorkContainer>
    //   {workProjects.map((work, index) => {
    //     const { name_tw, name_en, image, thumb } = work;
    //     return (
    //       <WorkFigure key={index}>
    //         <figcaption>{lng === "en" ? name_tw : name_en}</figcaption>
    //         <img src={thumb} alt={name_en} />
    //       </WorkFigure>
    //     );
    //   })}
    // </WorkContainer>

    <WorksContainer>
      <WorkWrapper>
        {workProjects.map((work, index) => {
          const { name_tw, name_en, image, thumb } = work;
          return (
            <WorkCard key={index}>
              <WorkImg alt={name_en} src={thumb} />
              <WorkInfo>
                <TextWrap>
                  <WorkTitle>{lng === "en" ? name_en : name_tw}</WorkTitle>
                </TextWrap>
              </WorkInfo>
            </WorkCard>
          );
        })}
      </WorkWrapper>
    </WorksContainer>
  );
};

export default Works;

const WorkContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const WorkFigure = styled.figure`
  position: relative;
  width: 50%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  > figcaption {
    position: absolute;
    left: 20px;
    top: 100px;
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    padding: 0.25rem 1rem;
  }
  > img {
    max-width: 100%;
    //height: 100%;
    object-fit: contain;
  }
`;

const WorksContainer = styled.div`
  height: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
`;

const WorksHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`;

const WorkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`;

const WorkCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 400px;
  overflow: hidden;
  box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;

  &:hover {
    :before {
      content: "";
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;
const WorkImg = styled.img`
  /* height: 100%; */
  max-width: 100%;
  object-fit: cover;
  position: absolute;
  border-radius: 10px;
  transition: 0.4s cubic-bezier(0.075, 0.02, 0.165, 1);

  &:hover {
    transform: scale(1.2);
  }
`;

const WorkInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`;

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`;

const WorkTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`;

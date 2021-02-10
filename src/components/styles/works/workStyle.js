import styled from "styled-components";
import variables from "../common/variables";
import { Link } from "react-router-dom";

export const WorksContainer = styled.div`
  width: ${({ grid }) => (grid ? `${grid}%` : `100%`)};
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  mask-type: 2rem;
  padding: ${({ grid }) =>
    grid ? `0 0 0 ${variables.gutter}` : `0 ${variables.gutter}`};
  @media only screen and (max-width: ${variables.breakpointTablet}) {
    width: 100%;
    padding: 0 ${variables.gutter};
    order: 4;
  }
`;

export const WorkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  padding: 1rem 0;
  justify-content: center;
  align-items: center;
`;

export const WorkCard = styled.figure`
  width: 44%;
  height: 350px;
  margin: 2rem 3%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 20px 20px 0px 0px;
  border-bottom: 1px solid ${variables.grey};
  transition: 0.2s ease;

  &:hover {
    /* :before {
      content: "";
      background: rgba(0, 0, 0, 0.1);
    } */
  }
  @media only screen and (min-width: ${variables.breakpointLarge}) {
    width: 20%;
    margin: ${({ home }) => (home ? `2rem 2.5% 2rem 0` : `2rem 1.5%`)};
  }
  @media only screen and (min-width: ${variables.breakpointLaptop}) and (max-width: ${variables.breakpointLarge}) {
    width: 30%;
    margin: ${({ home }) => (home ? `2rem 6% 2rem 0` : `2rem 1.5%`)};
  }
  @media only screen and (max-width: ${variables.breakpointPhone}) {
    width: 100%;
    /* margin-top: 0; */
  }
`;
export const WorkImg = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #fff;
  /* border: 1px solid #eee;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05); */
  img {
    width: 100%;
    min-height: 200px;
    object-fit: contain;
    border-radius: 10px;
    top: 0;
    transition: 0.6s cubic-bezier(0.075, 0.02, 0.165, 1);
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const WorkInfo = styled.div`
  width: 100%;
  height: 150px;
  padding: 0 1rem;
  overflow: hidden;
  position: relative;
`;

export const WorkTitle = styled.div`
  font-family: "creamfont-1.1 regular";
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  line-height: 1.5rem;
  margin: 0.5rem 0 0.25rem 0;
  /* overflow: hidden;
  height: 1.65rem; */
`;
export const TextWrap = styled.div`
  font-family: "creamfont-1.1 regular";
  font-size: 1.05rem;
  padding: 0.2rem 0;
  position: relative;
  overflow: hidden;
  word-break: break-all;
  line-height: 1.15rem;
  max-height: 40px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  /* &:before {
    content: "...";
    position: absolute;
    right: 0px;
    top: 20px;
    height: 20px;
    padding: 0px 3px;
    background: ${variables.inverse};
  } */
`;

export const MoreBtn = styled(Link)`
  position: absolute;
  right: 1rem;
  font-family: "creamfont-1.1 regular";
  font-size: 1.05rem;
  font-weight: 300;
  letter-spacing: 0.2rem;
  padding: 0.35rem 1.5rem;
  margin: 0.5rem 0 0 0;
  border-radius: 25px;
  background: ${variables.primary};
  color: ${variables.inverse};
  border: 1px solid ${variables.primary};
  transition: 0.2s ease;
  &:hover {
    background: ${variables.inverse};
    color: ${variables.primary};
  }
`;

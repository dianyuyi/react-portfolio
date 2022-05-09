import styled from "styled-components";
import variables from "./common/variables";
import FormBg from "../../assets/image/textarea_bg_01.png";
import FormBg_webp from "../../assets/image/textarea_bg_01.webp";

export const FormContainer = styled.div`
  width: ${({ grid }) => (grid ? `${grid}%` : `100%`)};
  height: 100%;
  min-height: 500px;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  padding: ${({ grid }) => (grid ? `0 5% 0 0` : `0 5%`)};
  margin-top: 2rem;
  background-image: ${({ isWebp }) =>
    isWebp ? `url(${FormBg_webp})` : `url(${FormBg})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;

  @media only screen and (max-width: ${variables.breakpointTablet}) {
    width: 100%;
    padding: 0 ${variables.gutter};
    background-size: cover;
    background-position: 60% center;
  }
`;
export const FormWrapper = styled.div`
  width: 50%;
  min-height: 400px;
  margin: 0% auto;
  margin-left: 30%;
  padding: 20% 1rem;

  @media only screen and (max-width: ${variables.breakpointTablet}) {
    width: 70%;
    margin: 2rem auto;
    padding: 20% 1rem;
  }
  @media only screen and (max-width: ${variables.breakpointPhone}) {
    width: 85%;
    margin: 2rem auto;
    padding: 20% 1rem;
  }
`;
export const FormLineBox = styled.div`
  padding: 0.5rem;
  color: ${variables.inverse};
  /* font-family: "creamfont-1.1 regular"; */
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  &.half {
    width: 50%;
    display: inline-block;
  }
  &.btn-box {
    justify-content: center;
  }

  label {
    display: block;
    padding: 0.5rem 0;
  }
  input {
    outline: none;
    border: none;
    padding: 0.25rem;
    border-radius: 3px;
    width: 100%;
    font-size: 1rem;
  }
  textarea {
    width: 100%;
    min-height: 7rem;
    border-radius: 3px;
    padding: 0.25rem;
    font-size: 1rem;
    @media only screen and (max-width: ${variables.breakpointTablet}) {
      min-height: 5rem;
    }
  }
`;

export const SubmitBtn = styled.button`
  border: 1px solid ${variables.inverse};
  font-size: 1.15rem;
  font-weight: 300;
  padding: 0.25rem 1.25rem;
  margin-top: 1rem;
  color: ${variables.inverse};
  border-radius: 3px;
`;

import styled from "styled-components";
import variables from "./common/variables";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: transparent;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem ${variables.gutter};
  background: ${({ isScrollDown }) =>
    isScrollDown ? `rgba(255,255,255,0.8)` : `transparent`};
  z-index: 100;
  position: fixed;
  top: 0;
  @media screen and (max-width: ${variables.breakpointPhone}) {
    display: none;
  }
`;
export const LogoImg = styled.img`
  width: 48px;
  filter: brightness(0.6);
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: ${variables.primary};
  text-decoration: none;
  padding: 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 300;
  cursor: pointer;
`;

export const LngMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0px;
`;
export const LngBtn = styled.button`
  color: ${variables.primary};
  padding: 0 0.5rem;
  transition: 0.5s;
  font-weight: 300;
  font-size: 1.15rem;
  padding-bottom: 2px;
  &.active {
    /* border-bottom: solid 2px ${variables.primary};
    padding-bottom: 0; */
  }
`;

export const LngLine = styled.div`
  position: absolute;
  height: 2px;
  width: 32px;
  bottom: 0;
  left: 0;
  background: ${variables.primary};
  transition: 0.3s;
  &.en {
    transform: translateX(50px);
  }
  &.tw {
    transform: translateX(2px);
  }
`;

export const NavBtn = styled.div`
  display: flex;
  width: 120px;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: ${variables.breakpointPhone}) {
    display: none;
  }
`;

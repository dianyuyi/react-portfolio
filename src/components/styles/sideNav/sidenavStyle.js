import styled from "styled-components";
import variables from "../common/variables";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const SideNav = styled(motion.nav)`
  display: none;
  position: fixed;
  top: 0;
  /* left: 0; */
  right: 0;
  bottom: 0;
  width: 100vw;
  z-index: 101;
  @media screen and (max-width: ${variables.breakpointPhone}) {
    display: block;
    pointer-events: none;
  }
`;

export const SideNavBtn = styled.button`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: calc(10vw - 24px);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
  pointer-events: fill;
`;
export const SideNavLogo = styled(Link)`
  position: absolute;
  top: 18px;
  left: 18px;
  padding: 0.5rem;
  pointer-events: fill;

  img {
    width: 40px;
    filter: brightness(0.6);
  }
`;
export const SiderBg = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
`;

export const SideNavList = styled(motion.ul)`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3rem 0;
  margin-top: 10%;
  &.preventClick {
    pointer-events: none;
    > li > a {
      pointer-events: none;
    }
    > li > button {
      pointer-events: none;
    }
  }
`;

export const SideNavListItem = styled(motion.li)`
  padding: 1rem;
`;
export const SideNavLink = styled(Link)`
  color: ${variables.primary};
  text-decoration: none;
  padding: 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 300;
  cursor: pointer;
  pointer-events: fill;
`;

export const SideNavLngBtn = styled.button`
  color: ${variables.primary};
  padding: 0 0.5rem;
  transition: 0.5s;
  font-weight: 300;
  font-size: 1.15rem;
  padding-bottom: 2px;
  pointer-events: fill;
  &.active {
    border-bottom: solid 2px ${variables.primary};
    padding-bottom: 0;
  }
`;

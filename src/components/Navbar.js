import React from "react";
import { useGlobalContext } from "../context";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import variables from "../components/styles/variables";
import NavLogo from "../assets/image/logo_loxi.svg";

function Navbar() {
  const { lng, setLng } = useGlobalContext();
  const { t, i18n } = useTranslation();

  const changeLanguage = (activeLng) => {
    i18n.changeLanguage(activeLng);
    setLng(activeLng);
  };
  return (
    <Nav>
      <NavLink to="/">
        <LogoImg src={NavLogo} alt="loxi" />
      </NavLink>
      <NavContent>
        <NavMenu>
          {/* <Trans i18nKey="about_title">About Me</Trans> */}
          <NavLink to="/">{t(`about_title`)}</NavLink>
          <NavLink to="/">{t(`work_title`)}</NavLink>
        </NavMenu>
        <LngMenu>
          <LngBtn
            className={`${lng === "tw" ? "active" : ""}`}
            onClick={() => changeLanguage("tw")}
          >
            {t(`TW`)}
          </LngBtn>
          <LngBtn
            className={`${lng === "en" ? "active" : ""}`}
            onClick={() => changeLanguage("en")}
          >
            {t(`EN`)}
          </LngBtn>
        </LngMenu>
        {/* <LngLine /> */}
      </NavContent>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  background: transparent;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem ${variables.gutter};
  z-index: 100;
  position: fixed;
  top: 0;
`;
const LogoImg = styled.img`
  width: 60px;
  filter: brightness(0.3);
`;

// const Bars = styled(FaBars)`
//   display: none;
//   color: #fff;

//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;

const NavContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${variables.primary};
  text-decoration: none;
  padding: 0 0.5rem;
  font-family: serif;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
`;

const LngMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
`;
const LngBtn = styled.button`
  color: ${variables.primary};
  padding: 0 0.5rem;
  transition: 0.5s;
  font-weight: 900;
  font-size: 1.15rem;
  padding-bottom: 2px;
  &.active {
    border-bottom: solid 2px ${variables.primary};
    padding-bottom: 0;
  }
`;

const LngLine = styled.div`
  height: 2px;
  width: 24px;
  background: ${variables.primary}; ;
`;

const NavBtn = styled.div`
  display: flex;
  width: 120px;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

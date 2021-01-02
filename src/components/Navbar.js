import React from "react";
import { useGlobalContext } from "../context";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  const { lng, setLng } = useGlobalContext();
  const { t, i18n } = useTranslation();

  const changeLanguage = (activeLng) => {
    i18n.changeLanguage(activeLng);
    setLng(activeLng);
  };
  return (
    <Nav>
      <NavLink to="/">LOXI</NavLink>
      <NavBtn>
        <LngBtn
          className={`${lng === "tw" ? "active" : ""}`}
          onClick={() => changeLanguage("tw")}
        >
          TW
        </LngBtn>
        <LngBtn
          className={`${lng === "en" ? "active" : ""}`}
          onClick={() => changeLanguage("en")}
        >
          EN
        </LngBtn>
      </NavBtn>
      <NavMenu>
        {/* <Trans i18nKey="about_me">About Me</Trans> */}
        <p>{t(`about_title`)}</p>
        <p>{t(`work_title`)}</p>
      </NavMenu>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`;

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
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

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
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
const LngBtn = styled.button`
  padding: 0.5rem;
  transition: 0.5s;
  font-weight: 900;
  font-size: 1.25rem;
  .active {
    border-bottom: solid 1px #222;
  }
`;

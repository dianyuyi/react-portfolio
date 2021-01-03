import React from "react";
import { useGlobalContext } from "../context";
import { useTranslation } from "react-i18next";
import {
  Nav,
  NavLink,
  NavContent,
  LogoImg,
  NavMenu,
  LngMenu,
  LngBtn,
  LngLine,
} from "../components/styles/nav";
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
          <NavLink to="/about">{t(`about_title`)}</NavLink>
          <NavLink to="/works">{t(`work_title`)}</NavLink>
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

import * as React from "react";
import { useGlobalContext } from "../../../context";
import { useTranslation } from "react-i18next";
import { SideNavListItem, SideNavLink, SideNavLngBtn } from "./sidenavStyle";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ toggle }) => {
  const { lng, setLng } = useGlobalContext();
  const { t, i18n } = useTranslation();

  const changeLanguage = (activeLng) => {
    // setWebLoading(true);
    i18n.changeLanguage(activeLng);
    setLng(activeLng);
    // setWebLoading(false);
  };

  return (
    <>
      <SideNavListItem
        onClick={toggle}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <SideNavLink to="/">{t(`home_title`)}</SideNavLink>
      </SideNavListItem>
      <SideNavListItem
        onClick={toggle}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <SideNavLink to="/about">{t(`about_title`)}</SideNavLink>
      </SideNavListItem>
      <SideNavListItem
        onClick={toggle}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <SideNavLink to="/works">{t(`work_title`)}</SideNavLink>
      </SideNavListItem>
      <SideNavListItem
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <SideNavLngBtn
          className={`${lng === "tw" ? "active" : ""}`}
          onClick={() => changeLanguage("tw")}
        >
          {t(`TW`)}
        </SideNavLngBtn>
      </SideNavListItem>
      <SideNavListItem
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <SideNavLngBtn
          className={`${lng === "en" ? "active" : ""}`}
          onClick={() => changeLanguage("en")}
        >
          {t(`EN`)}
        </SideNavLngBtn>
      </SideNavListItem>
    </>
  );
};

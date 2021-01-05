import * as React from "react";
import { SideNavList } from "./sidenavStyle";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
export const Navigation = ({ isSideOpen, toggle }) => (
  <SideNavList
    variants={variants}
    className={`${isSideOpen ? "" : "preventClick"}`}
  >
    <MenuItem toggle={toggle} />
  </SideNavList>
);

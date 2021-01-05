import React, { useRef } from "react";
// import { useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { Navigation } from "./styles/sideNav/Navigation";
import { MenuToggle } from "./styles/sideNav/MenuToggle";
import { SideNav, SiderBg } from "./styles/sideNav/sidenavStyle";

const sidebar = {
  open: (height = 300) => ({
    clipPath: `circle(${height * 2 + 200}px at 90vw 36px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(24px at 90vw 36px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const SideNavbar = () => {
  // const [isOpen, toggleOpen] = useCycle(false, true);
  const [isSideOpen, setIsSideOpen] = React.useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <SideNav
      initial={false}
      animate={isSideOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      {/* toggle={() => toggleOpen()} */}
      <SiderBg variants={sidebar} />
      <Navigation
        isSideOpen={isSideOpen}
        toggle={() => setIsSideOpen(!isSideOpen)}
      />
      <MenuToggle toggle={() => setIsSideOpen(!isSideOpen)} />
    </SideNav>
  );
};

export default SideNavbar;

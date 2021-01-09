import React from "react";
import SocialMedia from "./SocialMedia";
import { FooterContainer } from "./styles/foo/foo";

const Footer = () => {
  return (
    <FooterContainer>
      <h3>© 2021 Loxi | All rights reserved.</h3>
      <SocialMedia iconColor={"white"} />
    </FooterContainer>
  );
};

export default Footer;

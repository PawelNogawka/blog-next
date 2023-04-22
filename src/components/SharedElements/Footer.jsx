import React from "react";

import Wrapper from "../UiElements/Wrapper";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Wrapper>
        <span>blog historyczny</span>
      </Wrapper>
    </footer>
  );
};

export default Footer;

import React from "react";

import classes from "./SectionHeader.module.scss";

const SectionHeader = ({ heading, subtitle, lowMargin }) => {
  return (
    <header
      className={`${classes.header} ${
        lowMargin && classes["header--low-margin"]
      }`}
    >
      <h2 className={classes.heading}>{heading}</h2>
      <p className={classes.subtitle}>{subtitle}</p>
    </header>
  );
};

export default SectionHeader;

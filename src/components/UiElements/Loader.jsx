import React from "react";

import { Oval } from "react-loader-spinner";

import classes from "./Loader.module.scss";

const Loader = ({ big }) => {
  return (
    <div
      className={`${classes["loading-spinner"]} ${
        big && classes["loading-spinner--big"]
      }`}
    >
      <Oval
        height="80"
        width="80"
        color="#ccc"
        secondaryColor="#ddd"
        ariaLabel="triangle-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;

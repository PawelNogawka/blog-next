import React from "react";
import moment from "moment";

import classes from "./PostDate.module.scss";

const PostDate = ({ creaedAt }) => {
  return (
    <time className={classes.date}>{moment(creaedAt).format("DD.MM.YY")}</time>
  );
};

export default PostDate;

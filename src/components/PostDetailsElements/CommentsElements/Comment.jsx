import React from "react";
import moment from "moment/moment";

import classes from "./Comment.module.scss";

const Comment = ({ comment }) => {
  const { name, time, text } = comment;
  return (
    <li className={classes.comment}>
      <div className={classes.author}>
        <span className={classes.name}>{name}</span>
        <time className={classes.time}>{moment(time).fromNow()}</time>
      </div>
      <p className={classes.value}>{text}</p>
    </li>
  );
};

export default Comment;

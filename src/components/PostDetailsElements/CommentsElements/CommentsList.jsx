import React from "react";

import Comment from "./Comment";
import Button from "@/components/FormElements/Button";

import classes from "./CommentsList.module.scss";

const CommentsList = ({ comments, setCommentsToShow, amount }) => {
  const handleShowMoreBtnClick = () => {
    setCommentsToShow(amount);
  };

  const handleShowLessBtnClick = () => {
    setCommentsToShow(2);
  };

  return (
    <>
      <ul className={classes.list}>
        {comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </ul>
      {comments.length < amount && (
        <Button empty onClick={handleShowMoreBtnClick}>
          pokaż więcej
        </Button>
      )}
      {comments.length == amount && (
        <Button empty onClick={handleShowLessBtnClick}>
          pokaż mniej
        </Button>
      )}
    </>
  );
};

export default CommentsList;

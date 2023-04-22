import React from "react";

import Button from "../FormElements/Button";
import PostFeatures from "../SharedElements/PostFeatures";
import PostDate from "./PostDate";

import classes from "./HorizontalPost.module.scss";

const Post = ({ post }) => {
  const { img, title, excerpt, author, category, slug, text, createdAt } = post;

  return (
    <li className={`${classes.post} ${"card"}`}>
      <img src={img} alt={title} width={300} className={classes.img} loading="lazy" />
      <PostDate createdAt={createdAt} />
      <div className={classes.bottom}>
        <h3 className={classes.title}>{title}</h3>
        <PostFeatures author={author} category={category} text={text} />
        <p className={classes.excerpt}>{excerpt}</p>
        <Button href={`/post/${slug}`}>przeczytaj</Button>
      </div>
    </li>
  );
};

export default Post;

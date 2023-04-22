import React from "react";

import PostFeatures from "../SharedElements/PostFeatures";

import Button from "../FormElements/Button";
import PostDate from "./PostDate";

import classes from "./Post.module.scss";

const Post = ({ post }) => {
  const {
    img,
    title,
    excerpt,
    author,
    category,
    categorySlug,
    slug,
    text,
    createdAt,
  } = post;

  return (
    <li className={`${classes.post} ${"card"}`}>
      <img src={img} alt={title} width={300} className={classes.img} />
      <PostDate createdAt={createdAt} />
      <div className={classes.bottom}>
        <h3 className={classes.title}>{title}</h3>
        <PostFeatures
          author={author}
          category={category}
          categorySlug={categorySlug}
          text={text}
        />
        <p className={classes.excerpt}>{excerpt}</p>
        <Button href={`/post/${slug}`}>przeczytaj</Button>
      </div>
    </li>
  );
};

export default Post;

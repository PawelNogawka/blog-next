import React from "react";

import parse from "html-react-parser";

import PostFeatures from "../SharedElements/PostFeatures";
import Sources from "./Sources";
import Share from "./Share";
import Comments from "./CommentsElements/Comments";
import PostDate from "../PostsElements/PostDate";

import classes from "./Article.module.scss";


const Article = ({ post }) => {
  const { _id, text, title, author, category, categorySlug, img, createdAt, sources } =
    post;

  return (
    <article className={classes.article}>
      <img width={300} className={classes.img} src={img} alt={title} />
      <PostDate createdAt={createdAt} />
      <PostFeatures
        author={author}
        category={category}
        categorySlug={categorySlug}
        text={text}
      />
      <h1 className={classes.title}>{title}</h1>
      <section className={classes.content}>{parse(text)}</section>
      <Sources sources={sources} />
      <Share />
      <Comments postId={_id} />
    </article>
  );
};

export default Article;

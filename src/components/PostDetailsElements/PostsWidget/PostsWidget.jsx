import React from "react";
import Link from "next/link";

import { useFetch } from "@/hooks/useFetch";


import PostFeatures from "@/components/SharedElements/PostFeatures";
import Loader from "@/components/UiElements/Loader";

import classes from "./PostsWidget.module.scss";

const PostsWidget = ({ similar, postCategory, postId }) => {
  const query = similar
    ? `/api/similarPosts/${postCategory}/${postId}`
    : "/api/posts/recentPosts";

  const { data, isLoading, error } = useFetch(query);

  if (isLoading) return <Loader />;

  if (error) return;

  if (data.length == 0) return;

  const posts = data.posts.filter((post) => post._id != postId);

  return (
    <nav
      aria-label={
        !similar
          ? "nawigacja po ostatnio dodanych postach"
          : "nawigacja po podobnych postach"
      }
      className={`${classes.widget} ${"card"}`}
    >
      <h3 className={classes.heading}>
        {!similar ? "Ostatnie posty" : "Podobne posty"}
      </h3>
      <ul className={classes.list}>
        {posts.map((post) => (
          <li key={post.title} className={classes.item}>
            <Link href={post.slug} className={classes.link}>
              <img
                width={70}
                height={70}
                className={classes.img}
                src={post.img}
                alt={post.title}
                loading="lazy"
              />
              <div className={classes.row}>
                <h4 className={classes.title}>{post.title}</h4>
                <PostFeatures
                  small
                  author={post.author}
                  category={post.category}
                  categorySlug={post.categorySlug}
                  text={post.text}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PostsWidget;

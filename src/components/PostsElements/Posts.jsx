import React from "react";

import Post from "./Post";
import HorizontalPost from "./HorizontalPost";

import classes from "./Posts.module.scss";

const Posts = ({ posts, asymmetrical }) => {
  if (!asymmetrical)
    return (
      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </ul>
    );
  else
    return (
      <ul
        className={`${classes.posts} ${
          asymmetrical && classes["posts--start"]
        }`}
      >
        <>
          <Post post={posts[0]} />
          <div className={classes.right}>
            {posts.map(
              (post, index) =>
                index !== 0 && <HorizontalPost key={post._id} post={post} />
            )}
          </div>
        </>
      </ul>
    );
};

export default Posts;

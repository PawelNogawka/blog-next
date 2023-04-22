import React from "react";
import Link from "next/link";

import { countReadTime } from "@/helpers/methods";

import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";

import classes from "./PostFeatures.module.scss";

const PostFeatures = ({ author, category, categorySlug, text, small }) => {
  const readTime = countReadTime(text.length);
  return (
    <div
      className={`${classes.features} ${small && classes["features--small"]}`}
    >
      <div
        className={classes.feature}
        data-title={small ? `kategoria: ${category}` : "kategoria"}
        aria-label="kategoria"
      >
        <BiCategory />
        <Link href={`/kategoria/${categorySlug}`}>
          {small ? category.slice(0, 9) + "..." : category}
        </Link>
      </div>
      <div className={classes.feature} data-title="autor" aria-label="autor">
        <AiOutlineUser />
        <span>{author}</span>
      </div>
      <div
        className={classes.feature}
        data-title="długość czytania"
        aria-label="długość czytania"
      >
        <AiOutlineEye />
        <span> {readTime} min</span>
      </div>
    </div>
  );
};

export default PostFeatures;

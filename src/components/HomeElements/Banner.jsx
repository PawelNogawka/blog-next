import React from "react";
import parse from "html-react-parser";

import Button from "../FormElements/Button";
import Wrapper from "../UiElements/Wrapper";
import PostFeatures from "../SharedElements/PostFeatures";

import classes from "./Banner.module.scss";

const Banner = ({ post }) => {
  const { img, title, text, excerpt , author,category, categorySlug, slug} = post;
  return (
    <section id="home" className={classes.banner}>
      <Wrapper>
        <div className={classes.container}>
          <div className={classes.header}>
            <h1 className={classes.heading}>Wiek Niepokoju: Historia XX wieku </h1>
            <p className={classes.desc}>
              Odkryj historię, która kształtowała naszą współczesność.
            </p>
            <Button ariaLabel="Exploruj bloga" href="/#categories">
              exploruj
            </Button>
          </div>
          <div className={classes["hero-post"]}>
            <div className={`${classes["hero-post-box"]} card`}>
              <div className={classes["hero-post-box-left"]}>
                <h3 className={classes["hero-post-title"]}>
                 {title}
                </h3>
                <PostFeatures
              author={author}
              category={category}
              categorySlug={categorySlug}
              text={text}
            />
                <p className={classes["hero-post-desc"]}>
                  {parse(excerpt)}
                </p>
              </div>
              <Button href={`/post/${slug}`} ariaLabel="Przeczytaj wyróżniony post" outline>
                przeczytaj
              </Button>
            </div>
            <img
              className={classes["hero-post-img"]}
              src={img}
              alt={title}
              width={400}
              height={300}
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Banner;

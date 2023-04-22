import React from "react";

import Posts from "../PostsElements/Posts";
import SectionHeader from "../SharedElements/SectionHeader";
import Wrapper from "../UiElements/Wrapper";

const FeaturedPosts = ({ posts }) => {
  return (
    <section id="featured-posts" className="section-padding">
      <Wrapper>
        <SectionHeader
          heading="przypięte posty"
          subtitle="Wybierz interesujący cie post."
        />
        <Posts posts={posts} />
      </Wrapper>
    </section>
  );
};

export default FeaturedPosts;

import React from "react";

import Posts from "../PostsElements/Posts";
import SectionHeader from "../SharedElements/SectionHeader";
import Wrapper from "../UiElements/Wrapper";

const RecentPosts = ({ posts }) => {
  return (
    <section id="recent-posts" className="section-padding">
      <Wrapper>
        <SectionHeader
          heading="oststanie posty"
          subtitle="Wybierz interesujący cie post."
        />
        <Posts asymmetrical posts={posts} />
      </Wrapper>
    </section>
  );
};

export default RecentPosts;

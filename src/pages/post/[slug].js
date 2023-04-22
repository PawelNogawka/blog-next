import { MongoClient } from "mongodb";

import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import useScrollToTop from "../../hooks/useScrollToTop";

import Article from "@/components/PostDetailsElements/Article";
import Wrapper from "@/components/UiElements/Wrapper";
import CategoriesWidget from "@/components/PostDetailsElements/CategoriesWidget";
import PostsWidget from "@/components/PostDetailsElements/PostsWidget/PostsWidget";
import Loader from "@/components/UiElements/Loader";
import Error from "@/components/UiElements/Error";

const PostDetails = ({ post, error }) => {
  useScrollToTop();

  const router = useRouter();

  if (router.isFallback) return <Loader big />;

  if (error)
    return <Error message={"Nie udało się pobrać postów z bazy danych."} />;

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <main className="post-details-main">
        <Wrapper>
          <div className="post-details-container">
            <div className="post-details-left">
              <Article post={post} />
            </div>
            <div className="post-details-right">
              <CategoriesWidget />
              <PostsWidget postId={post._id} />
              <PostsWidget
                similar
                postCategory={post.category}
                postId={post._id}
              />
            </div>
          </div>
        </Wrapper>
      </main>
    </>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ke2u009.mongodb.net/blog?retryWrites=true&w=majority`
  );

  const slug = params.slug;

  try {
    const db = client.db();
    const post = await db
      .collection("posts")
      .findOne({ slug: slug })
      .then((doc) => ({ ...doc, _id: doc._id.toString() }));

    client.close();

    if (!post || Object.keys(post).length === 0) {
      throw new Error("Nie udało się pobrać postu z bazy danych.");
    }

    return {
      props: {
        post,
      },
      revalidate: 1800,
    };
  } catch (error) {
    return {
      props: {
        post: null,
        error: true,
      },
    };
  }
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://123:123@cluster0.ke2u009.mongodb.net/blog?retryWrites=true&w=majority"
  );

  const db = client.db();
  const posts = await db.collection("posts").find().toArray();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  client.close();

  return {
    paths,
    fallback: false,
  };
}

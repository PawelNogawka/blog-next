import { MongoClient } from "mongodb";

import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import useScrollToTop from "../../hooks/useScrollToTop";

import Posts from "@/components/PostsElements/Posts";
import Wrapper from "@/components/UiElements/Wrapper";
import Error from "@/components/UiElements/Error";
import Loader from "@/components/UiElements/Loader";

const Category = ({ categoryPosts, error }) => {
  useScrollToTop();

  const router = useRouter();

  if (router.isFallback) return <Loader big />;

  if (error)
    return <Error message={"Nie udało się pobrać postów z bazy danych."} />;

  return (
    <>
      <Head>
        <title>{`Kategoria: ${categoryPosts[0].category} | Blog historyczny`}</title>
        <meta
          name="description"
          content="Wybierz interesującą cię kategorię historyczną i czytaj interesujące cię posty."
        />
      </Head>
      <main className="categories-main">
        <Wrapper>
          <h1 className="main-heading">{`Posty związane z kategorią: ${categoryPosts[0].category}`}</h1>
          <Posts posts={categoryPosts} />
        </Wrapper>
      </main>
    </>
  );
};

export default Category;

export async function getStaticProps({ params }) {
  const client = await MongoClient.connect(
    "mongodb+srv://123:123@cluster0.ke2u009.mongodb.net/blog?retryWrites=true&w=majority"
  );

  const slug = params.slug;

  try {
    const db = client.db();
    const categoryPosts = await db
      .collection("posts")
      .find({ categorySlug: slug })
      .sort({ _id: -1 })
      .map((doc) => ({ ...doc, _id: doc._id.toString() }))
      .toArray();

    client.close();

    if (!categoryPosts.length) {
      throw new Error("Nie udało się pobrać postów z bazy danych.");
    }

    return {
      props: {
        categoryPosts,
      },
      revalidate: 1800,
    };
  } catch (error) {
    return {
      props: {
        categoryPosts: null,
        error: true,
      },
    };
  }
}

export async function getStaticPaths({ params }) {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ke2u009.mongodb.net/blog?retryWrites=true&w=majority`
  );

  const db = client.db();
  const categories = await db.collection("categories").find().toArray();

  const paths = categories.map((category) => ({
    params: { slug: category.slug },
  }));

  client.close();

  return {
    paths,
    fallback: true,
  };
}

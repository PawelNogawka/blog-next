import Head from "next/head";
import { MongoClient } from "mongodb";

import Banner from "@/components/HomeElements/Banner";
import Categories from "@/components/HomeElements/Categories";
import FeaturedPosts from "@/components/HomeElements/FeaturedPosts";
import RecentPosts from "@/components/HomeElements/RecentPosts";

export default function Home(props) {
  
  return (
    <>
      <Head>
        <title>Blog historyczny</title>
        <meta
          name="description"
          content="Blog historyczny na którym wkażdym tygodniu publikowane są nowe historie z przeszłośći."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner post={props.bannerPost} />
      <main>
        <Categories categories={props.categories} />
        <FeaturedPosts posts={props.featuredPosts} />
        <RecentPosts posts={props.latestPosts} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ke2u009.mongodb.net/blog?retryWrites=true&w=majority`
  );

  const db = client.db();

  const bannerPost = await db
    .collection("posts")
    .findOne({ isBannerProduct: "true" })
    .then((doc) => ({ ...doc, _id: doc._id.toString() }));

  const latestPosts = await db
    .collection("posts")
    .find()
    .sort({ _id: -1 })
    .limit(4)
    .map((doc) => ({ ...doc, _id: doc._id.toString() }))
    .toArray();

  const featuredPosts = await db
    .collection("posts")
    .find({ isFeatured: "true" })
    .sort({ id: -1 })
    .limit(3)
    .map((doc) => ({ ...doc, _id: doc._id.toString() }))
    .toArray();

  const categories = await db
    .collection("categories")
    .find()
    .sort({ id: -1 })
    .map((doc) => ({ ...doc, _id: doc._id.toString() }))
    .toArray();

  client.close();

  return {
    props: {
      bannerPost: bannerPost,
      latestPosts: latestPosts,
      featuredPosts: featuredPosts,
      categories: categories,
    },
    revalidate: 1800,
  };
}

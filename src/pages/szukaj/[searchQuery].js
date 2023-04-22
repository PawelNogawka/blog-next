import React from "react";
import Head from "next/head";
import { useFetch } from "@/hooks/useFetch";
import { useRouter } from "next/router";

import useScrollToTop from "@/hooks/useScrollToTop";

import Posts from "@/components/PostsElements/Posts";
import Wrapper from "@/components/UiElements/Wrapper";
import Error from "@/components/UiElements/Error";
import Loader from "@/components/UiElements/Loader";

const Search = ({ post }) => {
  useScrollToTop();

  const router = useRouter();
  const searchQuery = router.query.searchQuery;

  const { data, isLoading, error } = useFetch("/api/search/" + searchQuery);

  if (isLoading) return <Loader big />;

  if (error) return <Error message={error} />;

  if (data.length == 0) return;

  if (data.posts.length == 0)
    return <Error message={`Brak wynikow wyszukiwania dla '${searchQuery}'`} />;

  return (
    <>
      <Head>
        <title>{`${searchQuery} | Blog historyczny`}</title>
        <meta
          name="description"
          content="Wyszukaj interesujących cię tematów historycznych."
        />
      </Head>
      <main className="categories-main">
        <Wrapper>
          {data.posts.length > 0 && (
            <h1 className="main-heading">{`Wyniki wyszukiwania dla '${searchQuery}'`}</h1>
          )}
          <Posts posts={data.posts} />
        </Wrapper>
      </main>
    </>
  );
};

export default Search;

import Head from "next/head";

import Error from "@/components/UiElements/Error";

export default function NoFound() {
  return (
    <>
      <Head>
        <title>Blog historyczny</title>
        <meta title="Ta strona nie istnieje" />
      </Head>
      <main>
         <Error message="Ta strona nie istnieje" />
      </main>
    </>
  );
}

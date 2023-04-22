import "../styles/globals.scss";

import { DM_Sans } from "next/font/google";

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

import Layout from "../components/UiElements/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout className={sans.className}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

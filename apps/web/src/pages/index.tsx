import Head from "next/head";
import { Home } from "../features/Home";
import { Header } from "../features/Header";
import { Layout } from "../features/Layout";

export default function Web() {
  return (
    <>
      <Head>
        <title>Warikan Netflix</title>
      </Head>
      <Layout header={<Header />}>
        <Home />
      </Layout>
    </>
  );
}

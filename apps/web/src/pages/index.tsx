import { Home } from "../features/Home";
import { Header } from "../features/Header";
import { Layout } from "../features/Layout";
import { NextPage } from "next";
import { HeadSeo } from "../features/HeadSeo";

const Page: NextPage = () => {
  return (
    <>
      <HeadSeo path="/" title="Top" />
      <Layout header={<Header />}>
        <Home />
      </Layout>
    </>
  );
};

export default Page;

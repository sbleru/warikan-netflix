import { Account } from "../../features/Account";
import { Header } from "../../features/Header";
import { Layout } from "../../features/Layout";
import { HeadSeo } from "../../features/HeadSeo";
import { NextPage } from "next";

const AccountPage: NextPage = () => {
  return (
    <>
      <HeadSeo path="/account" title="Account" noindex />
      <Layout header={<Header />}>
        <Account />
      </Layout>
    </>
  );
};

export default AccountPage;

import { Account } from "../../features/Account";
import Head from "next/head";
import { Header } from "../../features/Header";
import { Layout } from "../../features/Layout";

export default function AccountPage() {
  return (
    <>
      <Head>
        <title>Account</title>
      </Head>
      <Layout header={<Header />}>
        <Account />
      </Layout>
    </>
  );
}

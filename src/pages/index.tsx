import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>DGS Softwares e Soluções</title>
        <meta
          name="description"
          content="A tecnologia que você precisa para sua empresa!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>
  );
}

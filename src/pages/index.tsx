import Head from "next/head";
import LandingPage from "../components/landing-page";

export default function Home() {
  return (
    <>
      <Head>
        <title>SOFX | Soluções Digitais</title>
        <meta
          name="description"
          content="A tecnologia que você precisa para sua empresa!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
    </>
  );
}

import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Outfit:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <h2>Hello world</h2>
    </>
  );
}

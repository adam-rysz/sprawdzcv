import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Analiza CV</title>
      </Head>
      <Header />
      <main className="max-w-4xl mx-auto mt-6 px-4">
        <Component {...pageProps} />
      </main>
    </>
  );
}

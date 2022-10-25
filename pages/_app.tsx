import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import Header from '../components/header';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
  const key = router.route

  return (
    <div className="max-w-[2024px] relative">
      <Head>
        <title>Hanna Kunka Portfolio</title>
        <meta name="description" content="Hanna Kunka Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} key={key} />
      </AnimatePresence>
    </div>
  )
}

export default MyApp

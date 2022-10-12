import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hanna Kunka Portfolio</title>
        <meta name="description" content="Hanna Kunka Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>

      <main className="flex flex-col h-[100vh] justify-center">
        <div className="flex flex-col text-end max-w-[300px] 2xl:max-w-[600px] mx-auto">
          <p className="font-bebasNeue tracking-tight text-[64px] 2xl:text-[128px] leading-none">HANNA KUNKA</p>
          <p className="font-hindVadodara font-light tracking-wide text-[15px] 2xl:text-[30px] leading-none -mt-2">UX DESIGNER</p>
        </div>
      </main>

      <footer>
        <p className="px-4 md:px-10 fixed bottom-6 font-hindVadodara text-[12px] tracking-wide">Copyright © 2022 Hanna Kunka. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default Home

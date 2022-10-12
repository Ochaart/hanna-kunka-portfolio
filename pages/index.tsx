import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Hanna Kunka Portfolio</title>
        <meta name="description" content="Hanna Kunka Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className="fixed top-0 w-full mx-auto flex items-center justify-end px-10">
          <Image src="/svg/hamburger_menu.svg" width={66} height={81} alt="navigation menu" />
        </div>
      </header>

      <main className="flex flex-col h-[100vh] justify-center">
        <div className="flex flex-col text-end max-w-[300px] 2xl:max-w-[600px] mx-auto">
          <p className="font-bebasNeue tracking-tight text-[64px] 2xl:text-[128px] leading-none">HANNA KUNKA</p>
          <p className="font-hindVadodara font-light tracking-wide text-[15px] 2xl:text-[30px] leading-none -mt-2">UX DESIGNER</p>
        </div>
      </main>

      <footer>
        <p className="px-10 fixed bottom-6 font-hindVadodara text-[12px] tracking-wide">Copyright © 2022 Hanna Kunka. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default Home

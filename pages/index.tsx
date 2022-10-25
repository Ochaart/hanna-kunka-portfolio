import { motion } from 'framer-motion';
import { useRealViewport } from "next-real-viewport";

const Home = () => {
  const { vh } = useRealViewport();

  if (!vh) {
    return
  }

  return (
    <div style={{ height: vh * 100 }}>
      <motion.main
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        exit={{
          opacity: 0
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="flex flex-col h-full justify-center"
      >
        <section className="flex flex-col text-end max-w-[300px] 2xl:max-w-[600px] mx-auto">
          <h1 className="font-bebasNeue tracking-tight text-[64px] 2xl:text-[128px] leading-none">HANNA KUNKA</h1>
          <h2 className="font-hindVadodara font-light tracking-wide text-[15px] 2xl:text-[30px] leading-none -mt-2">UX DESIGNER</h2>
        </section>
      </motion.main>
      <footer>
        <p className="px-4 fixed md:px-10 bottom-5 font-hindVadodara text-[12px] tracking-wide">Copyright © 2022 Hanna Kunka. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default Home

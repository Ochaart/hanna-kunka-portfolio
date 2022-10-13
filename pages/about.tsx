import Image from 'next/image';
import Header from '../components/Header';
import Link from 'next/link';
import { upVariants, downVariants, aboutContainerVariants } from '../variants/variants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="min-h-[1px]" />
      <motion.main
        variants={aboutContainerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="grid xl:grid-cols-2 items-center justify-items-center px-10 xl:px-36 pt-20 gap-x-10 max-w-[1536px] mx-auto gap-y-10"
      >
        <motion.section
          variants={upVariants}
          className="flex flex-col text-[18px] md:text-[24px] max-w-[473px] md:max-w-[541px] space-y-10 md:space-y-20"
        >
          <p className="text-justify">
            I’m Hanna. I’m a UX designer based in New York City. Originally, I’m from Poland, but grew up in Sweden. My background is in fashion design and technology. I learned that User Experience is the key to making fashion and technology work together. I love creating modern and accessible experiences and researching the psychology behind a user’s actions in hopes of making their everyday interactions easier. I also believe that traveling is an incredibly rewarding and enriching experience. Meeting new people, experiencing new cultures, and appreciating new aesthetics helped me grow both personally and professionally. Living abroad made me an open and creative person.
          </p>
          <div className="flex flex-col md:space-y-5">
            <p>
              Feel free to send me a message.
            </p>
            <Link href="mailto:kunkahanna@gmail.com">
              <a target="_blank" className="font-montserrat text-md hover:text-gray-500 max-w-[250px]">kunkahanna@gmail.com</a>
            </Link>
          </div>
        </motion.section>
        <motion.section
          variants={downVariants}
        >
          <Image src="/images/hanna_kunka.png" height={868} width={476} alt="profile picture of Hanna Kunka" priority />
        </motion.section>
      </motion.main>
      <footer>
        <p className="px-4 md:px-10 pt-10 xl:pt-12 pb-5 font-hindVadodara text-[12px] tracking-wide">Copyright © 2022 Hanna Kunka. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default About;
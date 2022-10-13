import NavModal from './NavModal'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const openModal = () => {
    setIsModalOpen(true);
  }

  return (
    <>
      <div className="fixed top-0 w-full mx-auto flex items-center justify-end px-4 md:px-10">
        <button onClick={openModal}>
          <Image src="/svg/hamburger_menu.svg" width={66} height={81} alt="navigation menu" />
        </button>
      </div>
      <NavModal
        isOpen={isModalOpen}
        overlayStyles="fixed bg-gray-900 top-0 left-0 w-[100vw] overflow-hidden"
      >
        <div className="flex justify-end items-end pb-10">
          <button className="text-white text-[20px] mr-10 md:mr-16 mt-6" onClick={closeModal}>✕</button>
        </div>
        <div className="flex flex-col items-center md:items-end justify-center md:mr-20">
          <motion.div
            className="text-white grid md:grid-cols-2 max-w-[600px] md:gap-x-48 gap-y-20 text-[32px] h-[100%] justify-center"
          >
            <div className="flex flex-col space-y-16 text-center md:text-left">
              <h2 className="text-[36px]">MENU</h2>
              <ul className="flex flex-col space-y-5">
                <li>
                  <Link href="/">
                    <a onClick={closeModal} className="hover:text-gray-500">HOME</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a onClick={closeModal} className='hover:text-gray-500'>ABOUT</a>
                  </Link>
                </li>
                <li>
                  <Link href="mailto:kunkahanna@gmail.com">
                    <a target="_blank" className="font-montserrat text-md hover:text-gray-500 max-w-[250px]">GET IN TOUCH</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-16 text-center md:text-left">
              <h2 className="text-[36px]">WORK</h2>
              <ul className="flex flex-col space-y-5">
                <li>
                  <Link href="/nappe">
                    <a onClick={closeModal} className="hover:text-gray-500">NAPPE</a>
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </NavModal>
    </>
  )
}

export default Header;
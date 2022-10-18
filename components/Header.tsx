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
        <div className="w-full relative md:h-full flex">
          <ul className="md:pl-16 pt-40 md:pt-0 mx-auto text-white flex flex-col md:flex-row text-[32px] gap-y-5 md:gap-x-10 items-center justify-center">
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
              <Link href="/projects">
                <a onClick={closeModal} className="hover:text-gray-500">PROJECTS</a>
              </Link>
            </li>
          </ul>
          <button className="text-white absolute text-[20px] right-10 md:right-16 top-7" onClick={closeModal}>✕</button>
        </div>
      </NavModal>
    </>
  )
}

export default Header;
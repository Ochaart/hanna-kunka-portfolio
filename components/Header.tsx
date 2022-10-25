import NavModal from './NavModal'
import Image from 'next/image';
import Link from 'next/link';
import HamburgerButton from './HamburgurButton';
import { useState } from 'react';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const openModal = () => {
    setIsModalOpen(true);
  }

  return (
    <NavModal
      navBar={<div className="fixed right-0 top-7 mx-auto flex items-center justify-end px-4 md:px-10">
        <HamburgerButton
          isOpen={isModalOpen}
          onClick={toggleModal}
          color={isModalOpen ? '#FFFFFF' : '#000000'}
        />
      </div>}
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
      </div>
    </NavModal>
  )
}

export default Header;
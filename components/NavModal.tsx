import ReactDom from 'react-dom'
import { motion } from 'framer-motion'
import { menuVariants, mobileMenuVariants } from '../variants/variants';
import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react'

interface NavModalProps {
  children: React.ReactNode;
  overlayStyles: string;
  isOpen: boolean;
  navBar: React.ReactNode;
}

const NavModal = ({ navBar, children, overlayStyles, isOpen }: NavModalProps) => {
  const [portal, setPortal] = useState<any>(null);

  useEffect(() => {
    setPortal(document.getElementById('portal'));
  }, [])

  if (!portal) return null

  return ReactDom.createPortal(
    <>
      <div className="hidden md:block relative">
        <motion.div
          initial={false}
          className={overlayStyles}
          variants={menuVariants}
          animate={isOpen ? "opened" : "closed"}
          transition={{ ease: "easeOut", duration: .4 }}
        >
          {children}
        </motion.div>
      </div>
      <div className="block md:hidden relative">
        <motion.div
          initial={false}
          className={overlayStyles}
          variants={mobileMenuVariants}
          animate={isOpen ? "opened" : "closed"}
          transition={{ ease: "easeOut", duration: .4 }}
        >
          {children}
        </motion.div>
      </div>
      {navBar}
    </>,
    portal
  )
}

NavModal.displayName = "NavModal"

export default NavModal;
import React from "react";
import { motion } from 'framer-motion';
import { moduleVariants } from '../../variants/variants'
import useModuleInViewAnimation from '../../hooks/use_module_in_view_animation'

interface ConceptProps {
  title: string;
  caption?: string;
  children: React.ReactNode;
}

const Concept = ({ title, children, caption }: ConceptProps) => {
  const { module, controls: conceptControls } = useModuleInViewAnimation()

  return (
    <motion.div
      ref={module}
      animate={conceptControls}
      initial="initial"
      variants={moduleVariants}
      className="flex flex-col padding gap-y-4 md:gap-y-20"
    >
      <div className="flex flex-col gap-y-4 md:gap-y-20">
        <h3 className="copy-h2">{title}</h3>
        {caption && (<p className="copy-body">{caption}</p>)}
      </div>
      <div className="copy-body">{children}</div>
    </motion.div>
  )

}

export default Concept;
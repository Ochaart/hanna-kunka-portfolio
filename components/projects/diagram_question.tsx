import React from "react";
import { motion } from 'framer-motion';
import { moduleVariants } from '../../variants/variants'
import useModuleInViewAnimation from '../../hooks/use_module_in_view_animation'


interface DiagramQuestionProps {
  question: string;
  children: React.ReactNode;
}


const DiagramQuestion = ({ question, children }: DiagramQuestionProps) => {
  const { module, controls: diagramQuestionControls } = useModuleInViewAnimation()

  return (
    <motion.section
      ref={module}
      animate={diagramQuestionControls}
      initial="initial"
      variants={moduleVariants}
      className="flex flex-col items-center justify-center gap-y-10 md:gap-y-20"
    >
      <p className="copy-body text-left self-start padding">{question}</p>
      <div className="p-8">
        {children}
      </div>
    </motion.section>
  )
}

export default DiagramQuestion;
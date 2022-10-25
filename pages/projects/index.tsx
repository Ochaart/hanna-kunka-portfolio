import Link from "next/link";
import { motion } from 'framer-motion';
import { projectsVariants } from "../../variants/variants";
import { useRealViewport } from "next-real-viewport";

const Projects = () => {
  const { vh } = useRealViewport();

  if (!vh) {
    return
  }

  return (
    <div
      style={{ height: vh * 100 }}
      className="overflow-hidden flex flex-col items-center justify-center"
    >
      <motion.div
        variants={projectsVariants}
        animate="animate"
        initial="initial"
        exit="exit"
        className="w-[727px] h-[658px] -mr-[600px] md:-mr-[400px] bg-[#E3EAD4] relative"
      >
        <motion.div variants={projectsVariants} custom={0.5} className="absolute h-[298px] w-[289px] bg-[#467061] -translate-y-1/2 top-1/2 -left-24 text-[14px] text-[#FFFFFF] p-8">
          <h1 className="font-italiana text-[36px] tracking-wider pb-8">
            Nappe
          </h1>
          <h2 className="pb-14">
            How to reduce the environmental impacts of wasted food?
          </h2>
          <Link href="/projects/nappe">
            <a>
              View case study
            </a>
          </Link>
        </motion.div>
      </motion.div>
      <footer className="self-start">
        <p className="fixed md:px-10 bottom-5 px-4 font-hindVadodara text-[12px] tracking-wide">Copyright © 2022 Hanna Kunka. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default Projects;
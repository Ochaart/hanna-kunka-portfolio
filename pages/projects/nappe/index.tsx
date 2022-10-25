import Iframe from 'react-iframe';
import Hero from '../../../components/projects/hero';
import Image from 'next/image';
import DiagramQuestion from '../../../components/projects/diagram_question';
import Concept from '../../../components/projects/concept';
import { motion } from 'framer-motion';
import useHasMounted from '../../../hooks/use_has_mounted'
import { moduleVariants } from '../../../variants/variants'
import useModuleInViewAnimation from '../../../hooks/use_module_in_view_animation'


const SKETCHES = [
  '/images/sketch_1.png',
  '/images/sketch_2.png',
  '/images/sketch_3.png',
  '/images/sketch_4.png',
  '/images/sketch_5.png',
  '/images/sketch_6.png',
  '/images/sketch_7.png',
  '/images/sketch_8.png',
]

const DESIGN = [
  '/images/design_1.png',
  '/images/design_2.png',
  '/images/design_3.png',
  '/images/design_4.png',
  '/images/design_5.png',
  '/images/design_6.png',
  '/images/design_7.png',
  '/images/design_8.png',
]


const Nappe = () => {
  const { module, controls: diagramQuestionControls } = useModuleInViewAnimation()
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return;
  }

  return (
    <motion.div
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
    >
      <main className="flex flex-col gap-y">
        <Hero
          title='Nappe'
          caption='let’s fight food waste together!'
          summary='Food waste is a mounting problem globally. Water, energy and fuel must be used to produce, process and transport food to stores and then to households. As a result of food discharge into the atmosphere annually, 3.3 billion tons of greenhouse gases are released. Reducing food waste at all levels – consumer and domestic – could therefore have significant environment, social and economic benefits. With Nappe I wanted to fight food waste by giving users a simple tool with which they can prepare tasty meals that would otherwise end up in the trash.'
          roles={['Product Designer']}
          skills={['User Research', 'User Testing', 'Wireframes', 'Interactive', 'Prototypes', 'Style Guide']}
          duration="6 x 2 - Week Sprints"
        />
        <motion.div
          ref={module}
          animate={diagramQuestionControls}
          initial="initial"
          variants={moduleVariants}
          className="padding flex flex-col space-y-10 md:space-y-20"
        >
          <h2 className="copy-h2">UX Research</h2>
          <p className="copy-body">
            From the consumer’s perspective, there are many reasons for wasting food: overlooking the expiry date, perishable food, too much shopping, too large portions of meals. The most important thing is to prevent waste, so that there is not too much food in our home that ends up in the garbage. What can we do?
          </p>
          <p className="copy-body">
            First step was to understand more about our users. Having data from the intended users and potential users helped me to see from two different sides and elaborate it to the app that should be implement.
          </p>
        </motion.div>
        <DiagramQuestion question="How much food would you say your household usually throws away each week?">
          <Image src="/svg/pie_1.svg" width={1044} height={520} alt="pie chart" />
        </DiagramQuestion>
        <DiagramQuestion question="What motivates you to avoid food waste?">
          <Image src="/svg/pie_2.svg" width={1044} height={520} alt="pie chart" />
        </DiagramQuestion>
        <DiagramQuestion
          question="What do you think are the main reasons that food gets wasted in your household?"
        >
          <Image src="/svg/pie_3.svg" width={1044} height={520} alt="pie chart" />
        </DiagramQuestion>
        <DiagramQuestion
          question="How surprised are you by this statement – “if food waste were a country, it would be the third largest emitter of greenhouse gases in the world. Food waste is a huge contributor to climate change.”"
        >
          <Image src="/svg/pie_4.svg" width={1044} height={520} alt="pie chart" />
        </DiagramQuestion>
        <DiagramQuestion
          question="Which of these actions are you currently doing at home? Tick as many as you want."
        >
          <Image src="/images/line_graph.png" width={1210} height={371} alt="line graph" />
        </DiagramQuestion>
        <Concept title="Project">
          <p>
            Grocery shopping has become an interdependence of each of us. This is a mobile app that enables users to search for food recipes and to buy what they need to cook different dishes.
          </p>
        </Concept>
        <Concept title="Idea">
          <p>
            To make UX more extended, it allowed users to find the recipes by the supplies they currently had at home or create a shopping list to buy ingredients that were missing.
          </p>
        </Concept>
        <Concept title="User Interface Design">
          <p>
            As the recipe app is aimed at daily basic operations and quite a diverse target audience, the user interface has to be super easy and accessible for users with different levels of tech-literacy and all types of mobile devices. The layout is structured in light background and eye-catching visuals. Bright color accents attract users’attention to interactive zones and active states of the layout elements.
          </p>
        </Concept>
        <Concept title="Colors" caption="Brand Attributes: Earth - friendly, healthy, caring">
          <div className="flex justify-center pt-10">
            <Image src="/svg/colors.svg" width={907} height={599} alt="colors palettes" />
          </div>
        </Concept>
        <Concept title="Information Architecture">
          <div className="flex justify-center pt-10 md:pt-20">
            <Image src="/svg/architecture.svg" width={1097} height={804} alt="Information Architecture" />
          </div>
        </Concept>
        <Concept title="Low Fidelity Sketches">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 items-center justify-center">
            {SKETCHES.map((src, i) => (
              <div key={`low-fidelity-sketch-${i}`} className="max-w-[334px] max-h-[486px]">
                <Image src={src} width={334} height={486} alt={`low fidelity sketch ${i}`} />
              </div>
            ))}
          </div>
        </Concept>
        <Concept title="High Fidelity Design">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 justitems-center justify-center">
            {DESIGN.map((src, i) => (
              <div key={`high-fidelity-design-${i}`} className="max-w-[319px] max-h-[634px]">
                <Image src={src} width={319} height={634} alt={`High Fidelity Design ${i}`} />
              </div>
            ))}
            <div className="md:col-start-2 max-w-[319px] max-h-[634px]">
              <Image src="/images/design_9.png" width={319} height={634} alt="High Fidelity Design 9" />
            </div>
            <div className="md:col-start-3 max-w-[319px] max-h-[634px]">
              <Image src="/images/design_10.png" width={319} height={634} alt="High Fidelity Design 10" />
            </div>
          </div>
        </Concept>
        <Concept title="Sample Video">
          <div className="grid items-center md:justify-center relative w-full h-[600px] md:h-[800px]">
            <Iframe url="https://www.youtube.com/embed/Z8UGt_ue_a8"
              width="100%"
              height="100%"
              className="top-0 left-0"
              display="block"
              position="absolute"
              allowFullScreen
            />
          </div>
        </Concept>
      </main>
      <footer>
        <p className="px-4 md:px-10 pt-10 xl:pt-12 pb-5 font-hindVadodara text-[12px] tracking-wide">Copyright © 2022 Hanna Kunka. All Rights Reserved.</p>
      </footer>
    </motion.div>
  )
}

export default Nappe;
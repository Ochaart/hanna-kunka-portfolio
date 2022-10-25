import { useEffect } from 'react';
import { useInView, IntersectionOptions } from 'react-intersection-observer';
import { AnimationControls, useAnimation, useReducedMotion } from 'framer-motion';

interface UseModuleInViewAnimation {
  inView: boolean;
  controls: AnimationControls;
  module: (node?: HTMLElement | null) => void;
}

type ReducedMotion = boolean | undefined;

const useModuleInViewAnimation = (options?: IntersectionOptions): UseModuleInViewAnimation => {
  const prefersReduced = useReducedMotion();
  const { ref: module, inView } = useInView(options || { threshold: 0.2, initialInView: prefersReduced as ReducedMotion })
  const controls = useAnimation();

  useEffect(() => {
    if (!inView) {
      return;
    }

    controls.start('animate');
  }, [controls, inView])

  return { module, inView, controls };
}

export default useModuleInViewAnimation;
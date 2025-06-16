import type { Transition } from "motion/react";

export const fadeVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  fadeScale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  fadeRotate: {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0 },
  },
  staggeredContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  },
};

type TransitionProps = {
  default: Transition<any> | undefined;
  fast: Transition<any> | undefined;
  slow: Transition<any> | undefined;
  spring: Transition<any> | undefined;
};

export const transitionVariants: TransitionProps = {
  default: {
    duration: 0.8,
    ease: "easeInOut",
  },
  fast: {
    duration: 0.4,
    ease: "easeInOut",
  },
  slow: {
    duration: 1.2,
    ease: "easeInOut",
  },
  spring: {
    type: "spring",
    stiffness: 100,
    damping: 20,
  },
};

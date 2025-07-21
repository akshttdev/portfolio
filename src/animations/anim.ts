import { Variants } from "framer-motion";

export const arraySlideUpAnimation: Variants = {
  initial: { y: "175%" },
  animate: (i: number) => ({
    y: "0",
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
      delay: i * 0.05,
    },
  }),
  exit: { y: "175%" },
};

export const horizontalAnimation: Variants = {
  initial: {left: "0%",},
  enter: (custom: number) => ({
    left: "100%",
    transition: {
      duration: 0.45,
      ease: [0.215, 0.61, 0.355, 1],
      delay: 0.07 * custom,
    },
    transitionEnd: { left: "0%", width: 0 },
  }),
  exit: (custom: number) => ({
    left: "0%",
    width: "100%",
    transition: {
      duration: 0.45,
      ease: [0.215, 0.61, 0.355, 1],
      delay: 0.07 * custom,
    },
  }),
};


export const spanAnimation: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.8,
    },
  },
  exit: { opacity: 0, y: 100 },
};

export const slideTextAnim: Variants = {
  initial: {y: "150%",},
  animate: (custom : number) => ({
    y: "0",
    transition: {
      duration: 0.4,
      ease: [0.33, 1, 0.68, 1],
      delay: custom,
    },
  }),
  exit: {
    y: "150%",
  },
};
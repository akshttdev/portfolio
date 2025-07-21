"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HorizontalTransitionProps {
  children: ReactNode;
  backgroundColor?: string;
  duration?: number;
  staggerDelay?: number;
  easing?: [number, number, number, number];
  columns?: number;
}

// Animation variants for the transition panels
export const horizontalAnimation = {
  initial: {
    left: "0%",
    width: "100%",
  },
  enter: (custom: number) => ({
    left: "100%",
    transition: {
      duration: 0.45,
      ease: [0.215, 0.61, 0.355, 1],
      delay: 0.07 * custom,
    },
    transitionEnd: { 
      left: "0%", 
      width: "0%" 
    },
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

// Text slide animation for content
export const slideTextAnim = {
  initial: {
    y: "150%",
  },
  animate: (custom: number) => ({
    y: "0%",
    transition: {
      duration: 0.4,
      ease: [0.33, 1, 0.68, 1],
      delay: custom,
    },
  }),
  exit: {
    y: "150%",
    transition: {
      duration: 0.3,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const HorizontalTransition: React.FC<HorizontalTransitionProps> = ({
  children,
  backgroundColor = "bg-black",
  duration = 0.45,
  staggerDelay = 0.07,
  easing = [0.215, 0.61, 0.355, 1],
  columns = 6,
}) => {
  // Create custom animation with props
  const customHorizontalAnimation = {
    initial: {
      left: "0%",
      width: "100%",
    },
    enter: (custom: number) => ({
      left: "100%",
      transition: {
        duration,
        ease: easing,
        delay: staggerDelay * custom,
      },
      transitionEnd: { 
        left: "0%", 
        width: "0%" 
      },
    }),
    exit: (custom: number) => ({
      left: "0%",
      width: "100%",
      transition: {
        duration,
        ease: easing,
        delay: staggerDelay * custom,
      },
    }),
  };

  return (
    <>
      {/* Transition overlay */}
      <div className="fixed top-0 left-0 w-screen h-screen flex z-[1000] pointer-events-none select-none overflow-hidden">
        <div className="w-full h-full" style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
          {Array.from({ length: columns }).map((_, i) => (
            <div className="w-full h-full overflow-hidden" key={i}>
              <motion.div
                custom={i + 3}
                variants={customHorizontalAnimation}
                initial="initial"
                animate="enter"
                exit="exit"
                className={`relative w-full h-full ${backgroundColor}`}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Page content */}
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative z-10"
      >
        {children}
      </motion.div>
    </>
  );
};

export default HorizontalTransition;
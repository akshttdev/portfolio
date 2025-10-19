"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const paragraph = useRef<HTMLDivElement>(null);
  const isInView = useInView(paragraph, { once: true });

  const bgWords: string[] = [
    "UI/UX",
    "TYPESCRIPT",
    "JAVASCRIPT",
    "GSAP",
    "REACT",
    "NEXT.JS",
    "WEB ANIMATIONS",
    "DESIGN SYSTEMS",
    "PROBLEM SOLVING",
    "RIZZ",
  ];

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center px-6 pt-[150px] max-md:pt-[75px] max-md:px-3 overflow-hidden bg-p"
      id="about"
    >
      {/* Background Words */}
      <div className="absolute inset-0 font-robert-b text-[5rem] md:text-[7rem] opacity-[0.05] select-none pointer-events-none uppercase text-s">
        {bgWords.map((word, i) => (
          <motion.span
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 80}%`,   // random vertical placement
              left: `${Math.random() * 80}%`,  // random horizontal placement
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 0.5, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.7 }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      {/* Foreground Content */}
      <div
        className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10"
        ref={paragraph}
      >
        {/* Divider + Description */}
        <div className="flex flex-col items-center max-w-xs text-sm text-s font-robert-m leading-relaxed tracking-tight">
          <div className="h-40 w-[1px] bg-s opacity-60" />
          <p className="mt-6">
            just turning ideas into functional designs, overthinking every
            detail, diving into frustration, obsessing over perfection,
            rethinking it all and… finally — delivering.
          </p>
        </div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="hero-txt font-robert-b uppercase text-s leading-[1.1] tracking-[-2px] text-[2.8rem] md:text-[3.5rem] ml-auto text-right"
        >
          <p>I’m just doing</p>
          <p>design as other</p>
          <p>nothing too</p>
          <p>fancy</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

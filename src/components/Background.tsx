"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef, FC } from "react";

const Background: FC = () => {
  const container = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      ref={container}
      className="relative px-6 flex items-center justify-center h-screen overflow-hidden max-md:px-3"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >

      {/* Oversized Parallax Background */}
      <div className="fixed top-[-10vh] left-0 w-full h-[120vh] md:h-[130vh]">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image
            src="/images/2.jpeg"
            alt=""
            width={3000}
            height={3000}
            priority
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* MY VISION TEXT (bottom-left) */}
      <div className="absolute bottom-1 left-6 md:left-10 z-20 pointer-events-none select-none">
        <h1 className="text-white font-extrabold tracking-tight 
                      mix-blend-difference
                       text-[2.5rem] sm:text-[4rem] md:text-[10rem] 
                       leading-[0.9]">
          MY<br />VISION
        </h1>
      </div>

      {/* QUOTE – 60% FROM LEFT, 40% FROM TOP */}
      <div className="mt-6 md:mt-10 w-full md:flex md:justify-end md:pr-5">
  <div
    className="
      max-w-[90%] 
      sm:max-w-[80%] 
      md:max-w-md 
      text-left 
      md:text-right 
      mix-blend-difference   /* <-- auto inverts text */
      pointer-events-none 
      select-none
    "
  >
    <p
      className="
        text-[0.56rem] 
        sm:text-xs 
        md:text-base 
        opacity-100
        leading-relaxed 
        uppercase 
        font-medium  
        whitespace-pre-line 
        tracking-wide
        text-white                /* required for invert effect */
      "
    >
      “I’m wired to fixate, break things apart, and push them past the obvious.
It’s never clean, never linear — just persistence until meaning shows up.
Nothing extravagant.”
    </p>
  </div>
</div>


    </section>
  );
};

export default Background;

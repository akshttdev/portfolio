"use client";

import { motion } from "framer-motion";
import React, { FC } from "react";
import { arraySlideUpAnimation } from "@/animations/anim";

const Hero: FC = () => {
  return (
    <section
      className=" w-full h-screen flex flex-col items-center justify-center select-none"
      id="index"
    >
      <div className="flex flex-col items-center justify-center">
        {/* "akshat" */}
        <div className="flex items-start overflow-hidden">
          {["A", "K", "S", "H", "A", "T"].map((letter, i) => (
            <div key={`akshat-${i}`} className="overflow-hidden">
              <motion.h1
                custom={i}
                variants={arraySlideUpAnimation}
                initial="initial"
                animate="animate"
                className="hero-txt"
              >
                {letter}
              </motion.h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
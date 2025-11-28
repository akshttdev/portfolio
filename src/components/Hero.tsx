"use client";

import React, { FC } from "react";
import Dither from "./Dither";
import RandomLetterReveal from "./RandomLetterReveal";

const Hero: FC = () => {
  return (
    <section
      id="index"
      className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden select-none"
    >
      {/* === Background === */}
      <div className="absolute inset-0 -z-10 pointer-events-auto">
        <Dither
          waveColor={[1, 0, 0]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      <div className="flex flex-col px-6 md:px-16 w-full max-w-6xl pointer-events-none">

        {/* ======================================================
            BIG TITLES — FULLY RESPONSIVE + 1240–1350 FIX
        ======================================================= */}
        <div className="mt-24 md:mt-32 ml-0 lg:ml-[-6rem] xl:ml-[-10rem]">

          <RandomLetterReveal
            word="FRONT–END"
            className="block font-extrabold tracking-tight leading-[0.9]
                      text-[2.8rem] sm:text-[3.5rem]
                      md:text-[5rem]
                      lg:text-[6rem]
                      xl:text-[7rem]
                      2xl:text-[9rem] mb-2 md:mb-4"
          />

          <RandomLetterReveal
            word="DEVELOPER"
            className="block font-extrabold tracking-tight leading-[0.9]
                      text-[2.8rem] sm:text-[3.5rem]
                      md:text-[5rem]
                      lg:text-[6rem]
                      xl:text-[7rem]
                      2xl:text-[9rem] mb-2 md:mb-4"
          />

          <RandomLetterReveal
            word="BASED IN DELHI,"
            className="block font-extrabold tracking-tight leading-[0.9]
                      text-[2.8rem] sm:text-[3.5rem]
                      md:text-[5rem]
                      lg:text-[6rem]
                      xl:text-[7rem]
                      2xl:text-[9rem] mb-2 md:mb-4"
          />

          <RandomLetterReveal
            word="INDIA"
            className="block font-extrabold tracking-tight leading-[0.9]
                      text-[2.8rem] sm:text-[3.5rem]
                      md:text-[5rem]
                      lg:text-[6rem]
                      xl:text-[7rem]
                      2xl:text-[9rem]"
          />

        </div>

        {/* ======================================================
            SMALL PARAGRAPH — CLEAN, RESPONSIVE, AWWARDS STYLE
        ======================================================= */}
        <div className="mt-6 md:mt-10 w-full md:flex md:justify-end md:pr-5">
          <div className="max-w-[90%] sm:max-w-[80%] md:max-w-md text-left md:text-right">

            <RandomLetterReveal
              word={`I DESIGN AND BUILD SMOOTH, INTERACTIVE, AND VISUALLY ENGAGING DIGITAL 
EXPERIENCES. I BLEND UI/UX, MOTION, AND CLEAN ENGINEERING TO CREATE 
PRODUCTS THAT FEEL FAST, MODERN, AND HUMAN. I LOVE EXPERIMENTING 
WITH MOTION, INTERACTION, AND MICRO DETAILS THAT MAKE INTERFACES 
FEEL ALIVE. ALWAYS EXPLORING, ALWAYS LEARNING CRAFTING DIGITAL WORK 
THAT FEELS EXPRESSIVE AND INTENTIONAL.`}
              className="text-[0.65rem] sm:text-xs md:text-base opacity-80 
                         leading-relaxed uppercase font-medium  text-left whitespace-pre-line tracking-wide"
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HorizontalTransition from "@/components/HorizontalTransition";
import HoverImageReveal from "@/components/HoverImage";
import Footer from "@/components/Footer";

const bgWords = [
  "UI/UX", "REACT", "NEXT.JS", "TYPESCRIPT",
  "ANIMATION", "FRAMER", "GSAP",
  "DESIGN", "SYSTEMS", "ARCHITECTURE", "PERFORMANCE",
];

export default function AboutPage() {
  return (
    <HorizontalTransition>
      <div className="noise relative w-screen min-h-screen overflow-hidden text-white bg-black">

        <Navbar />

        {/* INTRO LINE */}
        <div
          className="
            absolute 
            z-20
            font-semibold
            text-sm md:text-base
            uppercase tracking-wide
            whitespace-pre-line
            select-none pointer-events-none
            max-sm:item-left 
            max-sm:justify-left
            max-sm:left-0
            top-24 left-8
            md:top-44 md:left-48
            text-[1rem]
          "
        >
          {"I could oversell myself here,\nbut I bet GPT-5.1 could do better."}
        </div>

        {/* BG WORDS */}
        <div
          className="
            absolute 
            left-4 
            top-1/2 
            -translate-y-1/2 
            flex flex-col 
            opacity-[0.045]
            leading-[0.8]
            select-none 
            pointer-events-none 
            space-y-[-1rem]

            max-sm:hidden
          "
        >
          {bgWords.map((w, i) => (
            <p
              key={i}
              className="
                uppercase 
                font-extrabold 
                tracking-tighter 
                whitespace-nowrap
                text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem]
              "
            >
              {w}
            </p>
          ))}
        </div>

        {/* RIGHT SIDE CONTENT */}
        <main
          className="
            w-full min-h-screen 
            flex items-center 
            justify-end 

             md:px-20 
            relative 
            z-20
            pt-60
            max-sm:justify-center 
            max-sm:pt-40
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              max-w-xl 
              space-y-8 
              text-left

              max-sm:max-w-sm
              max-sm:text-left
              max-sm:pt-10
              
            "
          >
            {/* FIRST LINE WITH HOVER IMAGE */}
            <p className="max-sm:text-s text-[1.1rem] opacity-95 leading-relaxed font-semibold uppercase">
              <HoverImageReveal label="Akshat" image="/images/me.jpg" /> is someone who runs on curiosity,
              instinct, and a slightly obsessive need to make things feel intentional. He digs deep into ideas,
              takes them apart, questions the obvious, and rebuilds them with cleaner structure and sharper personality.
            </p>

            <p className="max-sm:text-s text-[1.1rem] opacity-95 leading-relaxed font-semibold uppercase">
              He learns fast, experiments without fear, and pushes visuals until they stop feeling random.
              Whether it's code, motion, product logic, or design systems — the goal is always the same:
              make it feel alive and make it feel right.
            </p>

            <p className="max-sm:text-s text-[1.1rem] opacity-95 leading-relaxed font-semibold uppercase">
              Away from the monitor, he’s still restless — traveling whenever he can, playing guitar,
              running long distances, obsessing over football, blasting metal or Bollywood..
            </p>
          </motion.div>
        </main>
      </div>

      <Footer />
    </HorizontalTransition>
  );
}

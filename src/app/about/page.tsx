"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HorizontalTransition from "@/components/HorizontalTransition";
import Dither from "@/components/Dither";

export default function AboutPage() {
  return (
    <HorizontalTransition>
      <div className="noise scrollbar-hide relative w-screen h-screen overflow-hidden">

        {/* === DITHER BACKGROUND === */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <Dither
            waveColor={[1, 1, 1]}      // white-ish dither glow (change if needed)
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.3}
            colorNum={5}
            waveAmplitude={0.25}
            waveFrequency={3}
            waveSpeed={0.04}
          />
        </div>

        {/* === NAVBAR === */}
        <Navbar />

        {/* === MAIN CONTENT === */}
        <main className="h-screen w-screen text-white flex items-center justify-center p-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-center space-y-6 pointer-events-auto"
          >
            <h1 className="text-5xl font-bold tracking-tight uppercase">
              About
            </h1>

            <p className="text-xl italic opacity-80">
              "Sure, I can write whatever I want about myself, but I bet ©ChatGPT 4o could do a better job."
            </p>

            <p className="text-lg leading-relaxed opacity-90">
              Akshat is a builder at heart — whether it's crafting interactive visuals or wiring up full-stack logic, he does it with intent and attitude. Every pixel, every commit, every line of code feels like it has personality.
            </p>

            <p className="text-lg leading-relaxed opacity-90">
              From hackathon hustle to late-night experiments, he moves fast but never cuts corners. His work spans from animated sort visualizers and AI-powered chat apps to UIs that *actually* make people stop and stare.
            </p>

            <p className="text-lg leading-relaxed opacity-90">
              Fueled by black-and-white minimalism and Gen Z brainrot, he's on a mission to make things that feel more alive, more expressive, and way less boring.
            </p>
          </motion.div>
        </main>
      </div>
    </HorizontalTransition>
  );
}

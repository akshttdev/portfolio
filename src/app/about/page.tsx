"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HorizontalTransition from "@/components/HorizontalTransition";

export default function AboutPage() {
  return (
    <HorizontalTransition>
    <div className="noise scrollbar-hide">
    <Navbar />
    <main className="h-screen w-screen bg-white text-black flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center space-y-6"
      >
        <h1 className="text-5xl font-bold tracking-tight">About</h1>
        <p className="text-xl italic text-gray-700">
          "Sure, I can write whatever I want about myself, but I bet ©ChatGPT 4o could do a better job."
        </p>

        <p className="text-lg leading-relaxed">
          Akshat is a builder at heart — whether it's crafting interactive visuals or wiring up full-stack logic, he does it with intent and attitude. Every pixel, every commit, every line of code feels like it has personality.
        </p>

        <p className="text-lg leading-relaxed">
          From hackathon hustle to late-night experiments, he moves fast but never cuts corners. His work spans from animated sort visualizers and AI-powered chat apps to UIs that *actually* make people stop and stare.
        </p>

        <p className="text-lg leading-relaxed">
          Fueled by black-and-white minimalism and Gen Z brainrot, he's on a mission to make things that feel more alive, more expressive, and way less boring.
        </p>
      </motion.div>
    </main>
    </div>
    </HorizontalTransition>
  );
}

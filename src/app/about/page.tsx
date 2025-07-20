// app/about/page.tsx
'use client';

import { useEffect } from "react";
import { motion } from "framer-motion";
import { slideTextAnim } from "@/animations/anim";  
import HorizontalTransition from "@/components/HorizontalTransition"; 
import Image from "next/image";
import { Navbar } from "@/components/Navbar";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HorizontalTransition>
      <Navbar />
      <main className="flex w-full flex-col items-center justify-center bg-black text-white">
        <div className="flex h-screen items-center">
          <div className="overflow-hidden">
            <motion.h1
              className="text-[8rem] leading-[100%] uppercase max-md:text-[2rem]"
              variants={slideTextAnim}
              initial="initial"
              animate="animate"
              custom={0.45}
            >
              About
            </motion.h1>
          </div>
        </div>
        <div className="mb-40">
          <Image
            src={"/images/img1.jpg"} 
            width={1000}
            height={1000}
            alt="A descriptive alt text"
            className="size-full object-cover"
          />
        </div>
      </main>
    </HorizontalTransition>
  );
};

export default About;
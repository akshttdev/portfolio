"use client";

import { motion } from "framer-motion";
import { horizontalAnimation } from "@/animations/anim"; 
import { ReactNode } from "react";

export default function HorizontalTransition({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <div className="pointer-events-none fixed top-0 left-0 z-[1000] flex h-screen w-screen select-none overflow-hidden">
        <div className={`grid w-full grid-cols-6`}>
          {[...Array(6)].map((_, i) => (
            <div className="size-full overflow-hidden" key={i}>
              <motion.div
                custom={i + 3}
                variants={horizontalAnimation}
                initial="initial"
                animate="enter"
                exit="exit"
                className="relative size-full bg-slate-100" 
              />
            </div>
          ))}
        </div>
      </div>

      {children}
    </>
  );
}
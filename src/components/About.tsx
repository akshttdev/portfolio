"use client";

import { logoSlideAnim, pSlideParagraphAnim } from "@/animations/anim";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const paragraph = useRef<HTMLDivElement>(null);
  const clienti = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  const isInView = useInView(paragraph, { once: true });
  const isInView2 = useInView(clienti, { once: true });

  const paragraphs: string[] = [
    "Hey there! I'm Akshat Dhami — a creative developer and tech enthusiast.",
    "Currently pursuing my B.Tech in Computer Science at Bennett University, I'm passionate about merging code with creativity.",
    "Whether it's building sleek UIs, exploring the latest tech, or diving into full-stack apps — I thrive on challenges.",
    "<br/>",
    "This site is my little playground where I showcase not just my projects, but how I think and build.",
    "If you're into meaningful design, smart tech, and a sprinkle of Gen Z energy — you’re in the right place.",
  ];

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      className="min-h-screen w-full px-6 pt-[150px] flex max-md:pt-[75px] max-md:px-3"
      id="about"
    >
      <div
        className="w-full flex-[2] max-lg:flex-[1.5] max-md:hidden"
        ref={container}
      ></div>

      <motion.div
        className="w-full flex-[2] max-lg:flex-[3]"
        style={{ y }}
        ref={paragraph}
      >
        <h2 className="mb-6 about-hero-txt flex items-center gap-2 select-none">
          <span className="w-12 h-1 rounded-[.2rem] bg-p" />
          about
        </h2>

        <div className="w-full max-lg:max-w-full space-y-4" ref={clienti}>
          {paragraphs.map((text, i) => (
            <div className="w-full " key={i}>
              <motion.p
                custom={i}
                variants={pSlideParagraphAnim}
                initial="initial"
                animate={isInView ? "animate" : ""}
                className="about-description-txt"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;

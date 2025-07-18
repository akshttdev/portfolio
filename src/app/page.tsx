'use client';

import Image from 'next/image';
import Pic2 from '../../public/images/2.jpeg';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Projects from '@/components/Projects';
import { Navbar } from '@/components/Navbar';

// Main Home Component
export default function Home() {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="noise scrollbar-hide">
      <Navbar />
      <main ref={container} className="relative h-[200vh]">
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
      </main>
      <Projects />
    </div>
  );
}

// Props for section components
interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

// Section 1 with scale and rotate on scroll
const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen bg-gradient-to-r from-slate-900 via-slate-300 to-slate-900 text-[3.5rem] flex flex-col items-center justify-center text-black font-bold pb-[10rem]"
    >
      <p>AKSHAT</p>
    </motion.div>
  );
};

// Section 2 with reversed transform
const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen">
      <Image src={Pic2} alt="Portfolio Background" placeholder="blur" fill priority />
    </motion.div>
  );
};

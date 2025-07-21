'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Background from '@/components/Background';
import HorizontalTransition from '@/components/HorizontalTransition';
import dynamic from 'next/dynamic';
import PreLoader from '@/components/Preloader';

const DynamicHero = dynamic(() => import('@/components/Hero'), {
  ssr: false,
});

export default function Home() {
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
      <PreLoader>
      <HorizontalTransition>  
      <Navbar />
      <main>
        <Hero />
        <Background />
        <Projects />
      </main>
      </HorizontalTransition>
      </PreLoader>
    </div>
  );
}

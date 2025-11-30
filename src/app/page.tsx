'use client';

import Lenis from 'lenis';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Background from '@/components/Vision';
import HorizontalTransition from '@/components/HorizontalTransition';
import PreLoader from '@/components/Preloader';
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react';

export default function Home() {
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('hasLoaded');
    if (hasLoaded) {
      setFirstLoad(false);
    } else {
      sessionStorage.setItem('hasLoaded', 'true');
      setFirstLoad(true);
    }

    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="noise scrollbar-hide">
      {firstLoad ? (
        <PreLoader>
            <Navbar />
            <main>
              <Hero />
              <Background />
              <Projects />
              <Footer/>
            </main>
        </PreLoader>
      ) : (
        <HorizontalTransition>  
          <Navbar />
          <main>
            <Hero />
            <Background />
            <Projects />
            <Footer/>
          </main>
        </HorizontalTransition>
      )}
    </div>
  );
}

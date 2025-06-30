'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ShowcaseItem {
  title: string;
  id: string;
}

interface CardPosition {
  top: string;
  left: string;
}

const ShowcaseScroll = () => {
  const titlesContainerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLElement>(null);
  const imagesContainerRef = useRef<HTMLDivElement>(null);

  const showcaseItems: ShowcaseItem[] = [
    { title: 'Showcase Hub', id: 'showcase-hub' },
    { title: 'Nova Stream', id: 'nova-stream' },
    { title: 'Circle 30', id: 'circle-30' },
    { title: 'Bites & Banter', id: 'bites-banter' }
  ];

  const cardPositions: CardPosition[] = [
    { top: '30%', left: '55%' },
    { top: '20%', left: '25%' },
    { top: '50%', left: '10%' },
    { top: '60%', left: '40%' },
    { top: '30%', left: '30%' },
    { top: '60%', left: '60%' },
    { top: '20%', left: '50%' },
    { top: '60%', left: '10%' },
    { top: '20%', left: '40%' },
    { top: '45%', left: '55%' },
    { top: '35%', left: '15%' },
    { top: '25%', left: '70%' },
    { top: '50%', left: '80%' },
    { top: '40%', left: '20%' },
    { top: '65%', left: '35%' },
  ];

  const generatePlaceholderImage = (index: number) => 
    `https://picsum.photos/200/200?random=${index}`;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const titlesContainer = titlesContainerRef.current;
    const stickySection = stickyRef.current;
    const imagesContainer = imagesContainerRef.current;

    if (!titlesContainer || !stickySection || !imagesContainer) return;

    cardPositions.forEach((position, index) => {
      const card = document.createElement('div');
      card.className = 'card absolute w-64 h-64 rounded-3xl overflow-hidden transform-gpu';
      card.style.transformStyle = 'preserve-3d';
      card.style.willChange = 'transform';

      const img = document.createElement('img');
      img.src = generatePlaceholderImage(index + 1);
      img.alt = `Image ${index + 1}`;
      img.className = 'w-full h-full object-cover';

      card.appendChild(img);
      card.style.top = position.top;
      card.style.left = position.left;

      imagesContainer.appendChild(card);
    });

    const moveDistance = window.innerWidth * 3;

    ScrollTrigger.create({
      trigger: stickySection,
      start: 'top top',
      end: `+=${window.innerHeight * 5}px`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const xPosition = -moveDistance * self.progress;
        gsap.set(titlesContainer, { x: xPosition });
      },
    });

    const cards = imagesContainer.querySelectorAll('.card');
    ScrollTrigger.create({
      trigger: stickySection,
      start: 'top top',
      end: `+=${window.innerHeight * 5}px`,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        cards.forEach((card, index) => {
          const staggerOffset = index * 0.075;
          const scaledProgress = (progress - staggerOffset) * 3;
          const individualProgress = Math.max(0, Math.min(1, scaledProgress));
          const targetZ = index === cards.length - 1 ? 1500 : 2000;
          const newZ = -50000 + (targetZ + 50000) * individualProgress;
          const scale = Math.min(1, individualProgress * 2);

          gsap.set(card, {
            z: newZ,
            scale: scale,
          });
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="overflow-x-hidden bg-[#edebde] font-[ConfilliaBold]">
      <section className="w-screen h-screen relative flex justify-center items-center">
        <h1 className="text-[4vw] text-[#1f1f1f] font-bold">
          (SCROLL IF YOU DARE)
        </h1>
      </section>

      <section 
        ref={stickyRef}
        className="h-screen overflow-hidden relative"
      >
        <div 
          ref={titlesContainerRef}
          className="relative top-0 left-0 w-[400vw] h-screen flex"
          style={{ willChange: 'transform' }}
        >
          {showcaseItems.map((item) => (
            <div 
              key={item.id}
              className="flex-1 relative flex justify-center items-center"
            >
              <h1 className="text-[9vw] italic whitespace-nowrap text-black">
                {item.title}
              </h1>
            </div>
          ))}
        </div>

        <div 
          ref={imagesContainerRef}
          className="absolute top-1/2 left-1/2 w-[250vw] h-[250vh] transform -translate-x-1/2 -translate-y-1/2 -z-10"
          style={{ 
            transformStyle: 'preserve-3d',
            perspective: '2000px'
          }}
        ></div>
      </section>

      <section className="w-screen h-screen relative flex justify-center items-center">
        <h1 className="text-[4vw] text-[#1f1f1f] font-bold">
          (That's a wrap)
        </h1>
      </section>
    </div>
  );
};

export default ShowcaseScroll;

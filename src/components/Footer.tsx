'use client';

import { useEffect, useState } from 'react';
import SplitTextHover from './SplitTextHover'; 
import AnimatedLink from './AnimatedLink';

const EyesSocialStack = () => {
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setPos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const pupilOffset = (axis: number) => (axis - 0.5) * 30;

  const getShinePosition = () => {
    const angle = Math.atan2(pos.y - 0.5, pos.x - 0.5);
    const radius = 36;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  const shine = getShinePosition();

  return (
    <div className="w-screen h-screen bg-[#ff0000] flex flex-col items-center justify-center relative overflow-hidden font-[ConfilliaBold] font-black">
      {/* Social Text Stack with SplitTextHover */}
      <div className="text-[clamp(2.5rem,15vw,12rem)] leading-[1.1] text-black text-center z-10 pointer-events-auto">
        <div>
          <a
            href="https://github.com/akshttdev"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 no-underline"
          >
            <SplitTextHover 
              text="GITHUB" 
              fontSize='clamp(2.5rem,15vw,12rem)'
              className="text-[clamp(2.5rem,15vw,12rem)] font-[ConfilliaBold] font-black"
            />
          </a>
        </div>
        <div className="flex flex-col sm:flex-row justify-center sm:gap-20 gap-2 mt-2 sm:mt-0">
          <a
            href="https://twitter.com/akshttdev"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 no-underline"
          >
            <SplitTextHover 
              text="TWITTER" 
              fontSize='clamp(2.5rem,15vw,12rem)'
              className="text-[clamp(2.5rem,15vw,12rem)] font-[ConfilliaBold] font-black"
            />
          </a>
          <a
            href="https://leetcode.com/akshtt"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 no-underline"
          >
            <AnimatedLink 
              text="LEETCODE" 
            />
          </a>
        </div>
        <div>
          <a
            href="https://linkedin.com/in/akshatdhami"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 no-underline"
          >
            <SplitTextHover 
              text="LINKEDIN" 
              fontSize='clamp(2.5rem,15vw,12rem)'
              className="text-[clamp(2.5rem,15vw,12rem)] font-[ConfilliaBold] font-black"
            />
          </a>
        </div>
      </div>

      {/* Eyes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex gap-2 sm:gap-6 cursor-pointer">
        {[0, 1].map((_, idx) => (
          <div
            key={idx}
            className="w-24 h-24 sm:w-48 sm:h-48 bg-white rounded-full relative flex items-center justify-center"
          >
            <div
              className="w-12 h-12 sm:w-[104px] sm:h-[104px] bg-black rounded-full absolute flex items-center justify-center"
              style={{
                transform: `translate(${pupilOffset(pos.x)}px, ${pupilOffset(pos.y)}px)`,
              }}
            >
              <div
                className="w-2 h-2 sm:w-4 sm:h-4 bg-white rounded-full absolute"
                style={{
                  transform: `translate(${shine.x}px, ${shine.y}px)`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EyesSocialStack;
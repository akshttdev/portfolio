'use client';

import { useEffect, useState } from 'react';


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
    <div className="w-screen h-screen bg-[#e8fd4f] flex flex-col items-center justify-center relative overflow-hidden font-[ConfilliaBold] font-black">
      {/* Social Links as Big Stacked Text */}
      <div className="text-[200px] leading-[1.1] text-black text-center z-10 pointer-events-auto">
        <div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-all duration-300"
          >
            INSTAGRAM
          </a>
        </div>
        <div className="flex justify-center gap-20">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-all duration-300"
          >
            TWITTER
          </a>
          <a
            href="https://leetcode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-all duration-300"
          >
            LEETCODE
          </a>
        </div>
        <div>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-all duration-300"
          >
            LINKEDIN
          </a>
        </div>
      </div>

      {/* Eyes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex gap-2 cursor-pointer">
        {[0, 1].map((_, idx) => (
          <div
            key={idx}
            className="w-48 h-48 bg-white rounded-full relative flex items-center justify-center"
          >
            <div
              className="w-[104px] h-[104px] bg-black rounded-full absolute flex items-center justify-center"
              style={{
                transform: `translate(${pupilOffset(pos.x)}px, ${pupilOffset(pos.y)}px)`,
              }}
            >
              <div
                className="w-4 h-4 bg-white rounded-full absolute"
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

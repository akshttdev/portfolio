'use client';

import React from 'react';

interface AnimatedLinkProps {
  text: string;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ text }) => {
  const letters = text.split('');

  return (
    <div className="flex justify-center items-center">
      <ul className="list-none m-0 p-0 font-bold font-sans lowercase text-[7.5rem] leading-[0.76] tracking-[-0.05em]">
        <li className="relative">
          <a
            href="#"
            className="relative inline-block transition-colors duration-500 text-black group"
          >
            {/* Bottom letters */}
            <span className="flex">
              {letters.map((char, i) => (
                <span
                  key={`base-${i}`}
                  className={`block ${
                    i % 2 === 1 ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  {char}
                </span>
              ))}
            </span>

            {/* Colored Stripes */}
            <span className="absolute left-0 top-[0.5em] h-[0.115em] w-[calc(100%+0.075em)] origin-right scale-x-0 bg-[#FFD074] transition-transform duration-[800ms] ease-[cubic-bezier(0.4,0,0,1)] group-hover:origin-left group-hover:scale-x-100 delay-[100ms]" />
            <span className="absolute left-0 top-[0.5em] h-[0.115em] w-[calc(100%+0.075em)] origin-right scale-x-0 bg-[#17F1D1] transition-transform duration-[800ms] ease-[cubic-bezier(0.4,0,0,1)] group-hover:origin-left group-hover:scale-x-100 delay-[150ms]" />
            <span className="absolute left-0 top-[0.5em] h-[0.115em] w-[calc(100%+0.075em)] origin-right scale-x-0 bg-[#B087FF] transition-transform duration-[800ms] ease-[cubic-bezier(0.4,0,0,1)] group-hover:origin-left group-hover:scale-x-100 delay-[200ms]" />

            {/* Top letters */}
            <span className="absolute top-0 left-0 flex">
              {letters.map((char, i) => (
                <span
                  key={`top-${i}`}
                  className={`block ${
                    i % 2 === 0 ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  {char}
                </span>
              ))}
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AnimatedLink;

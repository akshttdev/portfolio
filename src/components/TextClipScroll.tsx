'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextEffectProps {
  className?: string;
}

const TextEffect: React.FC<TextEffectProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const textElements = containerRef.current.querySelectorAll('.text');
    
    textElements.forEach((text) => {
      gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: text,
          start: 'center 80%',
          end: 'center 20%',
          scrub: true,
        },
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className={`text-effect-wrapper ${className}`}>
      <style jsx>{`
        .text-effect-wrapper {
          margin: 0;
          padding: 0;
          font-family: 'Poppins', sans-serif;
          background-color: #ff0000;
          margin: 10%;
        }

        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          height: 200vh;
        }

        .text {
          font-size: 10vw;
          letter-spacing: -0.01em;
          line-height: 100%;
          margin: 0;
          width: 100%;
          color: rgba(182, 182, 182, 0.2);
          background: linear-gradient(to right, #b6b6b6, #b6b6b6) no-repeat;
          -webkit-background-clip: text;
          background-clip: text;
          background-size: 0%;
          transition: background-size cubic-bezier(0.1, 0.5, 0.5, 1) 0.5s;
          border-bottom: 1px solid #2F2B28;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          position: relative;
          cursor: pointer;
        }

        .text span {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: #4246ce;
          color: #0D0D0D;
          clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
          transform-origin: center;
          transition: all cubic-bezier(0.1, 0.5, 0.5, 1) 0.4s;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .text:hover > span {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }

        .text a {
          text-decoration: none;
          color: inherit;
        }

        @media (max-width: 768px) {
          .text {
            font-size: 12vw;
          }
          
          .text-effect-wrapper {
            margin: 5%;
          }
        }
      `}</style>

      <div className="container" ref={containerRef}>
        <h1 className="text">
          TEXT EFFECT
          <span>WOAH</span>
        </h1>
        
        <h1 className="text">
          GSAP
          <span>AND CLIPPING</span>
        </h1>
        
        <h1 className="text">
          CRAZYYY
          <span>CRAZYYY</span>
        </h1>
        
        <h1 className="text">
          HOVER ON ME
          <span>
            <a href="https://stacksorted.com/text-effects/minh-pham" target="_blank" rel="noopener noreferrer">
              SOURCE
            </a>
          </span>
        </h1>
        
        <h1 className="text">
          LIKE THIS?
          <span>
            <a href="https://twitter.com/juxtopposed" target="_blank" rel="noopener noreferrer">
              LET'S CONNECT
            </a>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default TextEffect;
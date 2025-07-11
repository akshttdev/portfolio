'use client';

import { useEffect, useRef } from 'react';

// Utility to split text into spans (mock of SplitType)
const mockSplitType = (element: HTMLElement) => {
  const text = element.textContent || '';
  const chars = text.split('').map((char) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.display = 'inline-block';
    span.setAttribute('data-char', char);
    return span;
  });

  element.innerHTML = '';
  chars.forEach((char) => element.appendChild(char));

  return {
    chars,
    revert: () => {
      element.innerHTML = text;
    }
  };
};

interface HoverStaggerTextProps {
  text: string;
  className?: string;
  fontSize?: string;
}

const HoverStaggerText: React.FC<HoverStaggerTextProps> = ({
  text,
  className = '',
  fontSize = '2rem'
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !topRef.current || !bottomRef.current) return;

    const splitA = mockSplitType(topRef.current);
    const splitB = mockSplitType(bottomRef.current);

    const animateIn = () => {
      splitA.chars.forEach((char, i) => {
        char.style.transition = `transform 0.5s ease`;
        char.style.transitionDelay = `${i * 0.04}s`;
        char.style.transform = `translateY(-100%)`;
      });

      splitB.chars.forEach((char, i) => {
        char.style.transition = `transform 0.5s ease`;
        char.style.transitionDelay = `${i * 0.04}s`;
        char.style.transform = `translateY(-100%)`;
      });
    };

    const animateOut = () => {
      splitA.chars.forEach((char, i) => {
        char.style.transition = `transform 0.5s ease`;
        char.style.transitionDelay = `${i * 0.04}s`;
        char.style.transform = `translateY(0%)`;
      });

      splitB.chars.forEach((char, i) => {
        char.style.transition = `transform 0.5s ease`;
        char.style.transitionDelay = `${i * 0.04}s`;
        char.style.transform = `translateY(100%)`;
      });
    };

    const el = wrapperRef.current;
    el.addEventListener('mouseenter', animateIn);
    el.addEventListener('mouseleave', animateOut);

    return () => {
      el.removeEventListener('mouseenter', animateIn);
      el.removeEventListener('mouseleave', animateOut);
      splitA.revert();
      splitB.revert();
    };
  }, [text]);

  return (
    <div
      ref={wrapperRef}
      className={`inline-block cursor-pointer relative overflow-hidden leading-none select-none ${className}`}
      style={{
        fontSize,
        height: '1.2em',
        lineHeight: '1'
      }}
    >
      <div
        ref={topRef}
        className="relative block whitespace-nowrap"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {text}
      </div>
      <div
        ref={bottomRef}
        className="absolute top-0 left-0 w-full block whitespace-nowrap"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          transform: 'translateY(100%)'
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default HoverStaggerText;

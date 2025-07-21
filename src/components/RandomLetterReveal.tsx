// components/RandomLetterReveal.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  word: string;
  className?: string;
};

const RandomLetterReveal = ({ word, className }: Props) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  // This state now holds the indices of the letters that should be visible.
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const [isInView, setIsInView] = useState(false);

  // This hook just watches if the component is on screen.
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger as soon as a small part is visible
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  // This hook runs the animation logic when the component comes into view.
  useEffect(() => {
    if (!isInView) {
      // Optional: Reset the animation when it goes out of view.
      // If you want it to only animate once, you can remove this line.
      setRevealedIndices(new Set());
      return;
    }

    const timers = word.split('').map((_, i) => {
      const delay = Math.random() * 800; // Random delay for each letter's reveal
      return setTimeout(() => {
        setRevealedIndices((prev) => new Set(prev).add(i));
      }, delay);
    });

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [isInView, word]);

  return (
    <span ref={containerRef} className={className}>
      {word.split('').map((char, i) => (
        <span
          key={i}
          className="transition-opacity duration-500 ease-in-out"
          style={{
            // The opacity is 1 if the index is in our "revealed" set, otherwise 0.
            opacity: revealedIndices.has(i) ? 1 : 0,
          }}
        >
          {/* Use a non-breaking space for spaces to maintain layout */}
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default RandomLetterReveal;
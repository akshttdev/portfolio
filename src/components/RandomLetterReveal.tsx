'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  word: string;
  className?: string;
};

const RandomLetterReveal = ({ word, className }: Props) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const [isInView, setIsInView] = useState(false);

  // NEW: Prevents re-running the animation
  const hasAnimatedRef = useRef(false);

  // Detect when the component enters the viewport
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  // Handle animation logic
  useEffect(() => {
    // If already animated once, do NOTHING
    if (hasAnimatedRef.current) return;

    // Only animate when coming into view for the first time
    if (isInView) {
      const timers = word.split('').map((_, i) => {
        const delay = Math.random() * 800;
        return setTimeout(() => {
          setRevealedIndices((prev) => new Set(prev).add(i));
        }, delay);
      });

      // Mark animation as done
      hasAnimatedRef.current = true;

      return () => timers.forEach(clearTimeout);
    }
  }, [isInView, word]);

  return (
    <span ref={containerRef} className={className}>
      {word.split('').map((char, i) => (
        <span
          key={i}
          className="transition-opacity duration-500 ease-in-out"
          style={{
            opacity: revealedIndices.has(i) ? 1 : 0,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default RandomLetterReveal;

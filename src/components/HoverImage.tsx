"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

interface HoverImageRevealProps {
  label: string;
  image: string;
}

export default function HoverImageReveal({ label, image }: HoverImageRevealProps) {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    const img = imgRef.current;
    if (!el || !img) return;

    gsap.set(img, { autoAlpha: 0 });

    const show = () => gsap.to(img, { autoAlpha: 1, duration: 0.25, ease: "power3.out" });
    const hide = () => gsap.to(img, { autoAlpha: 0, duration: 0.25 });

    const move = (e: MouseEvent) => {
      gsap.to(img, {
        x: e.clientX + 20,
        y: e.clientY + 20,
        duration: 0.15,
        ease: "power3.out",
      });
    };

    el.addEventListener("mouseenter", show);
    el.addEventListener("mouseleave", hide);
    el.addEventListener("mousemove", move);

    return () => {
      el.removeEventListener("mouseenter", show);
      el.removeEventListener("mouseleave", hide);
      el.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <span
      ref={wrapperRef}
      className="relative inline-block underline z-[100] cursor-pointer font-semibold uppercase select-none"
    >
      {label}
      <Image
        ref={imgRef}
        src={image}
        alt=""
        width={380}
        height={380}
        className="pointer-events-none fixed top-0 left-0 opacity-0 z-[9999] object-cover rounded"
      />
    </span>
  );
}

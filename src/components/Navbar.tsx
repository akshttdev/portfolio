"use client";
import Link from "next/link";
import TextScramble from "./TextScramble";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 mix-blend-exclusion px-6 py-6 select-none">
      <ul className="flex items-center justify-between text-sm max-md:text-xs w-full">
        {/* Left: Name */}
        <li className="font-semibold tracking-wide">
          <Link href="/" className="hover:opacity-70 transition-all">
            akshat
          </Link>
        </li>

        <li className="font-medium tracking-wide flex items-center gap-36">
          <Link href="/about" className="hover:underline transition-all">
          <TextScramble enterText="about" />
          </Link>
          <span className="font-medium tracking-wide flex items-center gap-36">@2025</span>
        </li>

        {/* Right: X | Ln | Mail */}
        <li className="flex gap-4 font-medium tracking-wide">
          <a
            href="https://x.com/your_x_handle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-all"
          >
            x
          </a>
          <a
            href="https://linkedin.com/in/your_linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-all"
          >
            ln
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:opacity-70 transition-all"
          >
            mail
          </a>
        </li>
      </ul>
    </nav>
  );
};


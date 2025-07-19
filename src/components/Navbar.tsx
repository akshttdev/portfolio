"use client";
import Link from "next/link";
import TextScramble from "./TextScramble";

export const Navbar = () => {
  // Uses the current year dynamically.
  const currentYear = new Date().getFullYear();

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-6 select-none mix-blend-exclusion">
      <ul className="relative w-full h-full">
        {/* Left Item: Akshat */}
        <li className="absolute left-0 top-1/2 -translate-y-1/2">
          <Link href="/" className="nav-txt">
            <TextScramble enterText="AKSHAT" />
          </Link>
        </li>

        {/* Center Group: About & Year */}
        <li className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-x-36">
            <div className="w-[5rem] text-left">
              {/* FIX: Moved nav-txt class to the Link tag */}
              <Link href="/about" className="nav-txt">
                <TextScramble enterText="ABOUT" />
              </Link>
            </div>
            <span className="nav-txt">@{currentYear}</span>
          </div>
        </li>

        {/* Right Group: Social Links */}
        <li className="absolute right-0 top-1/2 -translate-y-1/2">
          <div className="flex items-center gap-x-6">
            <a
              href="https://x.com/akshttdev"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-txt"
            >
              X
            </a>
            <a
              href="https://www.linkedin.com/in/akshatdhami/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-txt"
            >
              LN
            </a>
            <div className="w-[4rem] text-left">
              {/* FIX: Moved nav-txt class to the <a> tag */}
              <a href="mailto:akshttt.dev@gmail.com"  className="nav-txt">
                <TextScramble enterText="MAIL" />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};
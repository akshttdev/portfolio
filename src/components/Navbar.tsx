"use client";
import Link from "next/link";
import TextScramble from "./TextScramble";
import { animate } from "framer-motion";
import { usePathname, useRouter } from "next/navigation"; // Import the necessary hooks

export const Navbar = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter(); // Hook to control navigation
  const pathname = usePathname(); // Hook to get the current URL path

  // This function decides what to do when "AKSHAT" is clicked
  const handleHomeClick = () => {
    // If we are already on the homepage, scroll to the top
    if (pathname === "/") {
      animate(window.scrollY, 0, {
        duration: 1,
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
    } else {
      // If we are on any other page (like /about), navigate to the homepage
      router.push("/");
    }
  };

  return (
    <nav className="fixed top-0 w-full z-[1001] px-6 py-6 select-none mix-blend-exclusion">
      <ul className="relative w-full h-full">
        <li className="absolute left-0 top-1/2 -translate-y-1/2">
          {/* The onClick now uses our new handler function */}
          <span
            onClick={handleHomeClick}
            className="nav-txt cursor-pointer"
          >
            <TextScramble enterText="AKSHAT" />
          </span>
        </li>

        <li className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-x-16">
            <div className="w-[5rem] text-left">
              <Link href="/about" className="nav-txt">
                <TextScramble enterText="ABOUT" />
              </Link>
            </div>
            <span className="nav-txt">@{currentYear}</span>
          </div>
        </li>

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
              <a href="mailto:akshttt.dev@gmail.com" className="nav-txt">
                <TextScramble enterText="MAIL" />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};
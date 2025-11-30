import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TitleSwitcher from "../components/TitleSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akshat | Frontend Developer",
  description: "vibe coder",
  icons: {
    icon: "/logo.png", 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon (extra compatibility) */}
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TitleSwitcher />
        {children}
      </body>
    </html>
  );
}

/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

interface HeaderProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Docs", href: "/docs" },
  { label: "Blogs", href: "/blogs" },
  { label: "Support", href: "/support" },
];

const Header: React.FC<HeaderProps> = ({ visible, setVisible }) => {
  const [stars, setStars] = useState<number | null>(null);
  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/intentjs/intent`
        );
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error("Error fetching GitHub stars:", error);
      }
    };

    fetchStars();
  }, []);

  return (
    <nav className="w-full shadow-md border-b border-primary-border/20 overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 md:px-16 bg-[#111111] md:bg-transparent">
        <div className="flex justify-between items-center h-16 md:h-20  md:border-x-1 md:primary-border/10 md:px-4 ">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex flex-row items-center gap-2">
                <img
                  src="/intent-logo-light.png"
                  alt="Intentjs Logo"
                  width={55}
                  height={55}
                  // className="w-28 sm:w-28 md:w-28 lg:w-32 xl:w-36 h-auto"
                />
                <span className="text-2xl md:text-4xl text-white font-semibold hover:text-primary font-logo">
                  Intent
                </span>
              </div>
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center justify-center"></div>
            <ul className="flex items-center gap-20">
              {MENU_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-lg text-foreground hover:text-primary-color font-mono"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setVisible(!visible)}
          >
            {!visible && (
              <div className="bg-transparent border-1 border-border-primary p-1 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-align-justify-icon lucide-align-justify"
                >
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                  <path d="M3 6h18" />
                </svg>
              </div>
            )}
          </div>
          {visible && (
            <div
              className="lg:hidden bg-transparent border-1 border-border-primary p-1 rounded-md"
              onClick={() => setVisible(!visible)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x-icon lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </div>
          )}

          <div className="hidden lg:flex md:items-center md:gap-2">
            <Link
              href="https://github.com/intentjs/intent"
              className="flex items-center justify-center bg-transparent border-1 border-primary-border rounded-lg px-4 py-2 gap-3 cursor-pointer font-mono"
            >
              <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
              <div className="flex items-center gap-2">
                <span>{stars}</span>
                <Star className="w-5 h-5" />
              </div>
            </Link>

            <Link
              href="https://tryintent.com/docs"
              className="bg-gradient-to-r from-[#98D423] to-[#5B8013] border-2 border-[#47630F] rounded-lg px-4 py-2 cursor-pointer text-white font-semibold font-mono"
            >
              Documentation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import CtaButtons from "../utility/ctaButtons";
import PulseAnimation from "../utility/PulseAnimation";
import Link from "next/link";
import { CopyIcon, Star } from "lucide-react";
import { toast } from "sonner";

interface HeroProps {
  visible: boolean;
}

const MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Docs", href: "https://tryintent.com/docs" },
  { label: "Blogs", href: "https://blog.tryintent.com" },
  { label: "Support", href: "https://app.youform.com/forms/kmxapqv4" },
];

const Hero = ({ visible }: HeroProps) => {
  const [stars, setStars] = useState<number | null>(null);
  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/intentjs/intent`,
        );
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error("Error fetching GitHub stars:", error);
      }
    };

    fetchStars();
  }, []);

  // Add animation keyframes to head of document
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes float {
        0% {
          transform: translate(0, 0) rotate(0deg);
        }
        25% {
          transform: translate(10px, 10px) rotate(5deg);
        }
        50% {
          transform: translate(-5px, 15px) rotate(-5deg);
        }
        75% {
          transform: translate(-15px, 5px) rotate(3deg);
        }
        100% {
          transform: translate(5px, -10px) rotate(-3deg);
        }
      }
      
      @keyframes clockRing {
        0%, 100% {
          transform: rotate(0deg);
        }
        10% {
          transform: rotate(15deg);
        }
        20% {
          transform: rotate(-10deg);
        }
        30% {
          transform: rotate(15deg);
        }
        40% {
          transform: rotate(-10deg);
        }
        50% {
          transform: rotate(10deg);
        }
        60% {
          transform: rotate(-5deg);
        }
        70% {
          transform: rotate(5deg);
        }
        80% {
          transform: rotate(-3deg);
        }
        90% {
          transform: rotate(2deg);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center mx-auto md:px-16 overflow-hidden">
        <div className="w-full md:border-x-1 md:border-primary-border/10 md:py-0 ">
          <main className="relative flex h-full flex-col items-center justify-center  overflow-hidden z-10">
            <div className="absolute top-[-60px] left-[-100px] md:w-[580px] md:h-[300px] w-[400px] h-[100px] bg-[#345735] origin-top-left rotate-[10deg] blur-[120px]" />
            {[...Array(120)].map((_, i) => {
              const progress = i / 120;

              // Deterministic values based on the particle index
              const baseTop = progress * 600 + (((i * 47) % 200) - 100);
              const baseLeft = progress * 1160 + (((i * 83) % 200) - 100);

              const size = ((i * 37) % 5) + 2;

              const opacity = Math.max(0, 0.5 - progress) * 0.7;

              const duration = ((i * 17) % 10) + 15;
              const delay = (i * 13) % 5;

              const colors = [
                "bg-white",
                "bg-[#345735]",
                "bg-[#3c693d]",
                "bg-[#629362]",
              ];

              const color = colors[i % colors.length];

              return (
                <div
                  key={i}
                  className={`absolute rounded-full ${color}`}
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    top: `${baseTop}px`,
                    left: `${baseLeft}px`,
                    opacity,
                    animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`,
                    transform: "rotate(12deg)",
                  }}
                />
              );
            })}

            <div className="w-full h-full md:min-h-screen flex flex-col items-center justify-center px-5 sm:px-6 md:px-16 mx-auto overflow-hidden my-10 md:my-0">
              <div className="md:w-full flex flex-col md:items-center md:justify-center gap-6  md:px-6 sm:px-10 md:pb-16 text-center md:py-16 md:min-h-[calc(100vh-4rem)] md:overflow-hidden">
                <div className=" mb-3 md:mb-2 md:mt-0 z-50 relative">
                  <Link href="https://tryintent.com/docs/task-scheduling">
                    <div className="px-2 py-2 inline-flex items-center md:px-5 md:py-2 rounded-full border-2 border-gray-500/50 bg-black/50 backdrop-blur-sm">
                      <div
                        className="pr-2"
                        style={{
                          animation: "clockRing 2s ease-in-out infinite",
                        }}
                      >
                        ⏰
                      </div>
                      <span className="text-sm md:text-base md:tracking-wide font-mono font-semibold pr-2 md:pr-1">
                        Introducing Task Scheduling
                      </span>
                    </div>
                  </Link>
                </div>

                <h1 className="text-4xl md:text-6xl font-serif font-thin md:mb-1 max-w-5xl z-10 leading-tight">
                  Console. Cache. Queues. Cron. <br />
                  All built-in.{" "}
                  <span className="text-primary-color">All Intent.</span>
                </h1>

                <p className="text-sm md:text-xl text-foreground font-mono font-light max-w-2xl leading-relaxed md:max-w-3xl ">
                  Ship fast with built-in schedulers, queues, mailers, and
                  more—no setup stress, no plugin mess.
                </p>

                <div className="flex justify-center max-w-2xl mt-4">
                  <div className="bg-[#1E1E1E]/50 text-primary-color font-mono text-md md:text-lg p-4 rounded-lg flex items-center relative">
                    <span className="mr-2">
                      <img
                        src="/intent-logo-colored.png"
                        alt="Intentjs Logo"
                        className="w-8 rounded-full"
                      />
                    </span>
                    <code>npm i @intentjs/cli -g</code>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText("npm i @intentjs/cli -g");
                        toast.success("Copied!");
                      }}
                      className="ml-2 p-1 rounded cursor-pointer"
                    >
                      <CopyIcon color="#98D423" className="w-5" />
                    </button>
                  </div>
                </div>
                <CtaButtons
                  primaryTitle="Get Started"
                  primaryclassname="flex flex-row items-center justify-center gap-2 w-full md:w-auto px-6 py-3 font-semibold text-dark bg-gradient-to-r from-[#98D423] to-[#5B8013] rounded-lg cursor-pointer border-2 border-[#47630F] font-mono"
                  secondaryTitle="Star on Github"
                  primarylink="https://tryintent.com/docs"
                  secondarylink="https://github.com/intentjs/intent"
                  primarySvg={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  }
                  secondaryiconimage="/github.svg"
                />
                {/* <div className="w-full flex justify-center">
                  <video
                    src="https://youtu.be/7rAah4lcl0M?si=Pbl16ja6kO1L1Q40"
                    width={900}
                    height={1000}
                    controls
                    className="w-full max-w-[95%] h-auto object-cover"
                  />
                </div> */}
              </div>
            </div>
            {visible && (
              <div className="absolute top-5 left-0 right-0 backgroundseconadary p-6 sm:p-8 md:p-10 z-50 lg:hidden rounded-xl animate-slide-down mx-6 ">
                <ul className="flex flex-col items-start gap-6 sm:gap-7 md:gap-8 text-white text-lg font-mono">
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

                <div className="space-y-6 sm:space-y-7 md:space-y-8 mt-8 md:mt-10">
                  <CtaButtons
                    primaryTitle="Read the Docs"
                    primaryclassname="flex flex-row items-center justify-center gap-2 w-full px-6 py-3 font-semibold font-mono text-background bg-foreground rounded-lg cursor-pointer"
                    containerClass="flex flex-col gap-4 w-full"
                  />

                  <Link
                    href="#"
                    className="flex items-center justify-center bg-transparent border-2 border-primary-border rounded-lg px-4 py-2 gap-3 cursor-pointer font-mono"
                  >
                    <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
                    <div className="flex items-center gap-2">
                      <span className="text-sm w-full">Star on Github</span>
                      <Star className="w-5 h-5" />
                      <span>{stars}</span>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default Hero;

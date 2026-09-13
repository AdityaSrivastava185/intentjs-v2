/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-[#111111] via-[#3b5612] to-[#172207] bg-blend-overlay">
      <div className="w-full flex flex-col items-center justify-center mx-auto px-5 md:px-16 overflow-hidden bg-noise">
        <div className="w-full px-4 md:px-10 md:pb-16 py-16 md:py-0 relative">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-[#E4E4E4] md:pb-6 md:pt-15">
            <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-6">
              <div className="md:border-r md:border-[#ffffff]/30 md:pr-10">
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
              </div>
              <div className="w-full md:max-w-[25vw] md:p-3">
                <p className="text-foreground text-sm md:text-base font-primary">
                  The most productive way to build your nodejs applications. MIT
                  Licensed.
                </p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="relative z-50 flex flex-col items-start gap-3 mt-4 md:mt-0 md:flex-row md:items-center md:gap-10 pb-6 md:pb-0 font-primary ">
              {/* relative z-50 flex flex-col items-start gap-3 mt-4 md:mt-0 md:flex-row md:items-center md:gap-10 pb-6 md:pb-0 font-primary */}
              <Link href="/">
                <span className="text-foreground cursor-pointer">Home</span>
              </Link>
              <Link href="/docs">
                <span className="text-foreground cursor-pointer">Docs</span>
              </Link>
              <Link href="https://blog.tryintent.com">
                <span className="text-foreground cursor-pointer">Blog</span>
              </Link>
              <Link href="https://app.youform.com/forms/kmxapqv4">
                <span className="text-foreground cursor-pointer">Support</span>
              </Link>
            </div>
          </div>

          {/* Footer Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between md:py-6 mt-6 font-primary">
            <div className="flex flex-col items-start gap-2 md:gap-6 md:leading-[2.5]">
              <p className="text-foreground text-sm md:text-base">
                Copyright © {new Date().getFullYear()} IntentJS
              </p>
              <p className="text-foreground text-sm md:text-base">
                All Rights Reserved
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex flex-row items-start gap-4 mt-4 md:mt-0 md:items-center z-10">
              <Link href="https://x.com/intentjs" target="_blank">
                <img src="/twitter.png" alt="icon" width={24} height={24} />
              </Link>
              <Link href="https://github.com/intentjs" target="_blank">
                <img src="/github.svg" alt="icon" width={24} height={24} />
              </Link>
              <Link href="https://discord.gg/5ambDUN7Ge" target="_blank">
                <img src="/discord.png" alt="icon" width={30} height={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

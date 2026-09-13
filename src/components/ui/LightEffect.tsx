import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function LightEffect() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none blur-xl  md:left-[-2vw]">
      <svg
           className={cn(
             "animate-spotlight pointer-events-none absolute z-[1]  opacity-0",
           )}
           xmlns="/lighteffect.svg"
           viewBox="0 0 3900 2842"
           fill="none"
         >
           <g filter="url(#filter)">
             <ellipse
               cx="1924.71"
               cy="273.501"
               rx="1924.71"
               ry="700.501"
               transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
               fill={"#5b8013"}
               fillOpacity="0.22"
             ></ellipse>
           </g>
           <defs>
             <filter
               id="filter"
               x="0.860352"
               y="0.838989"
               width="3785.16"
               height="2840.26"
               filterUnits="userSpaceOnUse"
               colorInterpolationFilters="sRGB"
             >
               <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
               <feBlend
                 mode="normal"
                 in="SourceGraphic"
                 in2="BackgroundImageFix"
                 result="shape"
               ></feBlend>
               <feGaussianBlur
                 stdDeviation="151"
                 result="effect1_foregroundBlur_1065_8"
               ></feGaussianBlur>
             </filter>
           </defs>
         </svg>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import sectionData from "@/data/sectionData.json";
import SectionHeader from "../utility/SectionHeader";
import { MarqueeDemo } from "../utility/integration-marquee";
import { OrbitingCirclesDemo } from "../utility/orbiting-circles";

const Integrations = () => {
  const { title, description } = sectionData.integrations;
  const integrationLogos = [
    { name: "AWS", src: "/aws-color.png" },
    { name: "Firebase", src: "/integrationIcons/firebase.svg" },
    { name: "AWS Console", src: "/integration-color.png" },
    { name: "Azure", src: "/azure-color.png" },
    { name: "Cursor", src: "/mysql-color.png" },
    { name: "Redis", src: "/redis-color.png" },
    { name: "AWS", src: "/aws-color.png" },
  ];
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center mx-auto px-5 md:px-16 overflow-hidden">
        <div className="w-full md:border-x-1 md:border-primary-border/10 md:px-10 md:pb-16 py-10 md:py-0">
          <SectionHeader title={title} description={description} />
          <MarqueeDemo />
        </div>
      </div>
    </>
  );
};

export default Integrations;

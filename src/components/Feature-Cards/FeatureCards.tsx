import React from "react";
import sectionData from "@/data/sectionData.json";
import SectionHeader from "../utility/SectionHeader";
import { FeaturesData } from "@/data/featuresData";
import Card from "../utility/cards";

const FeatureCards = () => {
  const { title, description } = sectionData.featureCards;
  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto md:px-16 overflow-hidden bg-noise md:bg-none ">
      <div className="relative w-full md:border-x-1 md:border-primary-border/10 px-6 py-10 mb-5 md:mb-0 md:py-0 md:pb-16 md:px-10 md:bg-noise overflow-hidden">
        <div className="absolute top-[-60px] right-[-100px] md:w-[580px] md:h-[300px] w-[400px] h-[100px] bg-[#345735] origin-top-left rotate-[10deg] blur-[120px] overflow-hidden z-0" />

        <div className="relative z-10">
          <SectionHeader title={title} description={description} />
          ```tsx
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
                  right: `${baseLeft}px`,
                  opacity,
                  animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`,
                  transform: "rotate(12deg)",
                }}
              />
            );
          })}
          ```
          <div className="mt-5 md:mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-content-center place-items-center">
              {FeaturesData.map(({ title, description, icon, link }, index) => (
                <Card
                  key={index}
                  title={title}
                  description={description}
                  Icon={icon}
                  link={link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;

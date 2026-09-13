import React from "react";
import SectionHeader from "../utility/SectionHeader";
import sectionData from "@/data/sectionData.json";
import communityData from "@/data/communityData.json";
import Card from "../utility/cards";
import Link from "next/link";

const Community = () => {
  const { title, description } = sectionData.community;
  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto px-5 md:px-16 overflow-hidden">
      <div className="w-full md:px-10 md:pb-6 pt-10 md:py-0 md:pt-0">
        <SectionHeader
          title={title}
          titleHighlight={["community", "you."]}
          description={description}
        />

        {/* This block of code is being used to show the cards rotated at specific angles for bigger screens */}
        <div className="relative w-full py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full px-4 max-w-7xl mx-auto">
            {communityData.map(({ title, iconimage, link }, index) => {
              const rotationClasses = [
                "rotate-6",
                "-rotate-6",
                "rotate-6",
                "-rotate-6",
              ];
              const fixedRotation =
                rotationClasses[index % rotationClasses.length];

              return (
                <Link href={link} key={index}>
                  <div className="relative aspect-[4/3] h-full w-full max-w-[300px] sm:max-w-full mx-auto perspective-1000 transform-gpu bg-noise">
                    <div
                      className={`transform-gpu ${fixedRotation} h-full w-full transition-transform duration-300 hover:rotate-0`}
                    >
                      <div className="bg-gradient-to-tl from-[#98D423] to-[#1B1B1B] rounded-lg h-full w-full shadow-lg overflow-hidden">
                        <Card
                          title={title}
                          iconimage={iconimage}
                          containerclass="bg-noise w-full h-full p-6 rounded-lg flex flex-col justify-between text-center text-[13px] sm:text-[15px] md:text-[17px] leading-tight"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* This block of card is there show the cards with different style in the smaller devices , Continuing to convert it to reusable component */}
        {/* <div className="block md:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full place-items-center px-4">
            {communityData.map(({ title, iconimage }, index) => {
              const rotationClasses = [
                "rotate-2",
                "-rotate-2",
                "rotate-2",
                "-rotate-2",
              ];
              const fixedRotation =
                rotationClasses[index % rotationClasses.length];

              return (
                <div
                  key={index}
                  className={`bg-gradient-to-tl from-[#98D423] to-[#1B1B1B] rounded-lg w-full max-w-80 sm:max-w-72 ${fixedRotation}`}
                >
                  <Card
                    title={title}
                    iconimage={iconimage}
                    containerclass="w-full min-w-[260px] min-h-42 max-h-42 h-full p-6 border primary-border/20 rounded-lg shadow-sm flex flex-col justify-between bg-noise"
                  />
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Community;

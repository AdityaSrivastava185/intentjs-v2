import React from "react";
import sectionData from "@/data/sectionData.json";
import SectionHeader from "../utility/SectionHeader";
import { MarqueeDemoVertical } from "../utility/reviews";

const Testimonials = () => {
  const { title, description } = sectionData.testimonials;
  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto px-5 md:px-16 overflow-hidden py-10 md:py-0">
      <div className="w-full md:border-x-1 md:border-primary-border/10 md:px-10 md:pb-6">
        <SectionHeader
          title={title}
          description={description}
          titleHighlight={["Intent."]}
        />
        <MarqueeDemoVertical />
      </div>
    </div>
  );
};

export default Testimonials;

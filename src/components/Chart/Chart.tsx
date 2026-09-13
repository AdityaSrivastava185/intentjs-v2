import React from "react";
import SectionHeader from "../utility/SectionHeader";
import sectionData from "@/data/sectionData.json";
import { BarCharts } from "../utility/charts";

const Chart = () => {
  const { title, description } = sectionData.charts;
  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto px-5 md:px-16 overflow-hidden ">
      <div className="w-full md:border-x-1 md:border-primary-border/10 md:px-10 pt-10 pb-5 md:pt-0 md:py-0 md:pb-10">
        <SectionHeader title={title} description={description} />
        <div className="place-items-center place-content-center md:py-0 w-full md:pb-10 gap-4">
          <div className="w-[90%] sm:w-lg h-auto">
            <BarCharts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;

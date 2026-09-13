"use client";

import React from "react";
import { useState } from "react";
import sectionData from "@/data/sectionData.json";
import SectionHeader from "../utility/SectionHeader";
import { cn } from "@/lib/utils";
import { FEATURES_DATA } from "./FeaturesData";

const Features = () => {
  const { title, description } = sectionData.features;

  const [activeTab, setActiveTab] = useState(FEATURES_DATA[0].title);

  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto md:px-16 overflow-hidden">
      <div className="w-full md:border-x-1 md:border-primary-border/10 py-10 px-6 md:pb-16 md:py-0">
        <SectionHeader title={title} description={description} />

        {/* Mobile Horizontal Tabs (Chip Style) */}
        <div className="md:hidden w-full mb-6 overflow-x-auto pb-2">
          <div className="flex flex-row gap-2 min-w-max">
            {FEATURES_DATA.map((tab) => (
              <div
                key={tab.title}
                className={cn(
                  "whitespace-nowrap cursor-pointer font-mono text-sm px-4 py-2 rounded-full transition-all duration-300",
                  activeTab === tab.title
                    ? "bg-[#98D423] text-black font-medium"
                    : "bg-[#181618] text-white border border-primary-border/30"
                )}
                onClick={() => setActiveTab(tab.title)}
              >
                {tab.title}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:flex md:flex-row md:px-0 md:border-y-0 md:border-primary-border/10">
          {/* Desktop Vertical Tabs */}
          <div className="hidden md:block bg-[#181618] w-full md:max-w-[30vw] overflow-y-auto max-h-[calc(7.8*4.5rem)]">
            {FEATURES_DATA.map((tab, index) => (
              <div
                key={tab.title}
                className={cn(
                  "relative cursor-pointer /80 pl-5 font-mono py-6 border-t-1 border-r-1 primary-border/10 transition-all duration-300",
                  activeTab === tab.title ? "font-semibold" : "",
                  index == FEATURES_DATA.length - 1 ? "border-b-1" : ""
                )}
                onClick={() => setActiveTab(tab.title)}
              >
                {activeTab === tab.title && (
                  <div className="absolute left-7 top-1/2 -translate-y-1/2 h-[60%] w-1 bg-[#98D423]" />
                )}
                <p className="pl-6">{tab.title}</p>
              </div>
            ))}
          </div>

          <div className="border-y-1 w-full px-4 md:px-10 pt-7 md:max-h-[calc(7.8*4.5rem)] overflow-y-auto">
            <div className="md:border-primary-border/10">
              <p className="font-serif text-foreground text-2xl md:text-3xl">
                {activeTab}
              </p>

              <div className="font-mono text-lg pt-3 pb-3">
                {FEATURES_DATA.find((tab) => tab.title === activeTab)?.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

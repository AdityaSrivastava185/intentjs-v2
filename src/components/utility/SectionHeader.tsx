import { cn } from "@/lib/utils";
import React from "react";

interface SectionHeaderProps {
  title: string;
  titleHighlight?: string[];
  description: string;
  titleClass?: string;
  descriptionClass?: string;
  containerClass?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  titleHighlight,
  description,
  titleClass = "text-foreground font-serif md:text-5xl text-3xl leading-9 md:leading-normal md:text-center",
  descriptionClass = "text-foreground/70 md:text-center text-sm md:text-lg leading-relaxed font-primary",
  containerClass = "",
}) => {
  containerClass = cn(
    containerClass,
    "flex flex-col items-center justify-between w-full md:py-10 gap-6"
  );

  titleClass = cn(
    titleClass,
    "text-foreground font-serif md:text-5xl text-3xl leading-9 leading-tight  whitespace-normal break-words max-w-3xl mx-auto"
  );

  title = title.split(" ").map((word, index) => (
    <span
      key={index}
      className={titleHighlight?.includes(word) ? "text-primary-color" : ""}
    >
      {word}{" "}
    </span>
  )) as unknown as string;

  return (
    <div className={containerClass}>
      <div className="w-full max-w-full md:max-w-[80vw] text-start md:text-center">
        <h2 className={titleClass}>{title}</h2>
      </div>
      <div className="w-full lg:max-w-[50vw] pb-10 md:pb-0 md:text-center">
        <p className={descriptionClass}>{description}</p>
      </div>
    </div>
  );
};

export default SectionHeader;

"use client"

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  description?: string;
  iconimage?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon?: any;
  link?: string;
  titleclassname?: string;
  descriptionclassname?: string;
  iconclassname?: string;
  containerclass?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  iconimage,
  Icon,
  link,
  titleclassname,
  descriptionclassname = "mb-3 font-normal font-mono text-foreground/70",
  iconclassname = "w-7 h-7 text-gray-500 dark:text-gray-400 mb-3",
  containerclass = "",
}) => {
  titleclassname = cn(
    "mb-2 text-2xl font-light font-serif text-color-foreground",
    titleclassname
  );
  containerclass = cn(
    "w-full h-full min-h-xl flex flex-col items-start justify-start p-6 bg-[#181618] border primary-border/20 rounded-lg shadow-sm cursor-pointer",
    containerclass
  );

  const renderIcon = () => {
    if (Icon) {
      return <Icon className="text-xl mb-3" />;
    }

    if (iconimage) {
      return (
        <img
          src={iconimage}
          alt="icon"
          width={48}
          height={48}
          className={iconclassname}
        />
      );
    }
    return null;
  };

  return (
    <div className={containerclass}>
      {renderIcon() || <span>Icon not found</span>}
      {/* <Link href={link || "#"}>
        <h5 className={titleclassname}>{title}</h5>
      </Link> */}
      {description && <p className={descriptionclassname}>{description}</p>}
    </div>
  );
};

export default Card;

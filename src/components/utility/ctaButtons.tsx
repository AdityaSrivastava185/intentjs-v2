import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CtaButtonsProps {
  primaryTitle: string;
  secondaryTitle?: string;
  primaryiconimage?: string;
  secondaryiconimage?: string;
  primarySvg?: React.ReactNode;
  secondarySvg?: React.ReactNode;
  primarylink?: string;
  secondarylink?: string;
  primaryclassname?: string;
  secondaryclassname?: string;
  iconclassname?: string;
  containerClass?: string;
  variant?: "primary" | "secondary";
}

const CtaButtons: React.FC<CtaButtonsProps> = ({
  primaryTitle,
  secondaryTitle,
  primaryiconimage,
  secondaryiconimage,
  primarylink = "#",
  secondarylink = "#",
  primarySvg,
  secondarySvg,
  primaryclassname = "",
  secondaryclassname = "flex flex-row items-center font-mono font-semibold justify-center gap-2 w-full md:w-auto px-6 py-3 font-semibold border border-light rounded-lg hover:bg-light hover:text-dark cursor-pointer",
  iconclassname = "w-6",
  containerClass = "flex flex-col md:flex-row justify-center gap-4 w-full md:mt-4",
  variant = "primary",
}) => {
  primaryclassname = cn(
    primaryclassname,
    "flex flex-row items-center justify-center gap-1 w-full md:w-auto px-6 py-3 font-semibold text-dark bg-primary-color rounded-lg cursor-pointer",
    "bg-gradient-to-r from-[#98D423] to-[#5B8013] border-2 border-[#47630F] rounded-lg px-4 py-2 cursor-pointer text-white font-semibold font-mono"
  );

  const renderIcon = (svg: React.ReactNode, image?: string) => {
    if (svg) return <span className={iconclassname}>{svg}</span>;
    if (image)
      return (
        <img
          src={image}
          alt="icon"
          width={24}
          height={24}
          className={iconclassname}
        />
      );
    return null;
  };

  return (
    <div className={containerClass}>
      <Link href={primarylink} className={primaryclassname}>
        {variant === "primary" ? (
          <>
            {primaryTitle}
            {renderIcon(primarySvg, primaryiconimage)}
          </>
        ) : (
          <>
            {renderIcon(primarySvg, primaryiconimage)}
            {primaryTitle}
          </>
        )}
      </Link>

      {secondaryTitle && (
        <>
          <Link href={secondarylink} className={secondaryclassname}>
            {variant === "secondary" ? (
              <>
                {secondaryTitle}
                {secondarySvg && renderIcon(secondarySvg, secondaryiconimage)}
              </>
            ) : (
              <>
                {renderIcon(secondarySvg, secondaryiconimage)}
                {secondaryTitle}
              </>
            )}
          </Link>
        </>
      )}
    </div>
  );
};

export default CtaButtons;

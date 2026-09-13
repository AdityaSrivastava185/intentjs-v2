import React from "react";

const Pattern = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto md:px-16 overflow-hidden border-y-1">
      <div className="relative grid h-12 w-full grid-cols-[1fr_auto_1fr] grid-rows-[1fr_1px_auto_1px_1fr] [--pattern-fg:green]/5 dark:[--pattern-fg:lightgreen]/10">
        {/* Left Pattern */}
        <div className="relative col-start-1 row-span-full md:border-l border-x-[--pattern-fg] bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
        <div className="relative col-start-3 row-span-full md:border-r border-x-[--pattern-fg] bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
      </div>
    </div>
  );
};

export default Pattern;

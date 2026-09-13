import React from "react";
import { Button } from "../ui/button";
import { CodeBlockDemo } from "../utility/CodeBlock";
import { MoveRightIcon } from "lucide-react";

const About = () => {
  return (
    <div className="my-10 md:my-0 w-full flex flex-col items-center justify-center mx-auto  overflow-hidden md:px-16">
      <div className="md:w-full flex flex-col md:items-center md:justify-center md:border-x-1 md:primary-border/10 md:py-16 md:px-6 md:overflow-hidden px-6">
        <div className="md:flex md:flex-row md:justify-between w-full md:gap-14 lg:gap-10 ">
          <div className="w-full md:max-w-[80vw] lg:max-w-[32vw] flex flex-col justify-between">
            <h2 className="text-4xl md:text-6xl pb-6 md:pb-0 font-serif font-thin leading-9 md:leading-none">
              Seamlessly connect{" "}
              <span className="text-primary-color font-serif">
                20+ integrations
              </span>{" "}
              with a single command
            </h2>
            <div className="hidden md:block">
              <Button
                className="flex flex-row items-center justify-center gap-2.5 text-xl bg-transparent text-foreground border-2 primary-border/10 md:px-6 md:py-6 font-base font-logo "
                onClick={() => window.open("/docs")}
              >
                Read Installation Documentation <MoveRightIcon />
              </Button>
            </div>
          </div>
          <div className="md:max-w-[37vw] lg:max-w-[36vw]">
            <p className="text-sm font-primary text-foreground/80 md:text-lg tracking-wide pb-6">
              Intent is a web application framework for devs and teams who
              intend to build and ship complex yet sophisticated solutions to
              the world. It provides APIs that are declarative and customizable
              while keeping abstraction of unnecessary loads at its best.
            </p>
            <p className="py-4 md:py-0 font-primary text-sm text-foreground/80 md:text-lg">
              Intent works best when you create your new application with Intent
              itself. To do so, simply run the command:
            </p>
            <div className="mt-4">
              <CodeBlockDemo />
            </div>
          </div>
          <div className="block md:hidden mt-5">
            <Button className="flex flex-row items-center justify-center gap-2.5 text-xl bg-transparent text-foreground border-1 primary-border/10 py-6 md:px-6 md:py-6 font-medium w-full">
              Read Installation Documentation{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-move-right"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

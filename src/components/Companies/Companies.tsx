import Image from "next/image";
import React from "react";

const Companies = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center mx-auto px-4 md:px-16 overflow-hidden">
        {/* <div className="w-full md:border-x-1 py-10 px-10 md:pb-20">
          <div className="flex flex-row items-center justify-center">
            <div className="flex-grow max-w-20 sm:max-w-md h-[1px] bg-zinc-700"></div>
            <h2 className="text-2xl sm:text-xl font-primary mx-4 text-gray-300">
              Trusted By
            </h2>
            <div className="flex-grow max-w-20 sm:max-w-md h-[1px] bg-zinc-700"></div>
          </div>

          <div className="md:py-10 p-4">
            <div className="mx-auto px-6 text-center">
              <div className="mt-6 w-full grid grid-cols-2 sm:flex sm:flex-nowrap justify-center items-center gap-10 overflow-x-auto">
                {[
                  "logo1.png",
                  "logo2.png",
                  "logo3.png",
                  "logo4.png",
                  "logo5.png",
                  "logo6.png",
                ].map((logo, index) => (
                  <div
                    key={index}
                    className="flex justify-center w-full sm:w-52"
                  >
                    <Image
                      src={`/${logo}`}
                      width={100}
                      height={100}
                      alt="company logo"
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Companies;

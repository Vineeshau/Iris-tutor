import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { Button } from "@/Components/ui/button";

const HeroOne = ({ className = "" }) => {
  return (
    <div
      className={`relative flex flex-col md:flex-row justify-center px-4 bg-[#F5F5F5] min-h-screen ${className}`}
    >
      {/* First Column: Text Content */}
      <div className="flex flex-col md:w-1/2 space-y-4 md:space-y-6 max-w-xl md:max-w-none justify-center pl-4 md:pl-8 lg:pl-14">
        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6">
          <h1 className="md:text-4xl lg:text-5xl font-medium text-center whitespace-nowrap max-w-full lg:max-w-screen-xl mx-auto">
            Empower <span className="text-[#22577A]">Minds</span>,{" "}
            <span className="">Illuminate</span>{" "}
            <span className="text-[#22577A]">Futures</span>
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6">
            IrisTutor <span className="text-[#921E35]">@Chordify</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-medium text-center mb-4 px-2 md:px-8 lg:px-12">
            Your Gateway to Infinite Learning!
          </p>
          <p className="text-lg md:text-xl lg:text-2xl font-medium text-center mb-6 px-2 md:px-8 lg:px-16">
            See <span className="text-[#22577A]">Eye-to-Eye</span> with us.
          </p>
          <div className="w-[672px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-base font-sora">
            <div className="w-[220px] flex flex-col items-end justify-start gap-[12px]">
              <button className="self-stretch flex flex-row items-start justify-end py-0 pr-[34px] pl-[35px]">
                <div className="flex-1 rounded-xl bg-[#68B0AB] flex flex-row items-start justify-start pt-0.5 pb-1 pr-0 pl-px whitespace-nowrap border-[1px] border-solid border-gray-200">
                  <div className="h-10 w-[150px] relative rounded-xl bg-cadetblue-100 box-border hidden border-[1px] border-solid border-gray-200" />
                  <div className="flex-1 relative leading-[30px] z-[1]">
                    Start Learning
                  </div>
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-[5px] pr-[18px] pl-5 bg-black self-stretch rounded-xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkslategray-100">
                <div className="h-10 w-[220px] relative rounded-xl bg-black hidden" />
                <div className="flex-1 relative text-base leading-[30px] font-sora text-white text-center z-[1]">
                  Schedule a Demo
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Column: Image */}
      <div className="relative flex items-center justify-center md:w-1/2">
        {/* Gray Rounded Shape */}
        <div className="absolute rounded-full bg-[rgba(104,176,171,0.3)] w-48 h-48 right-20"></div>
        {/* Blue Rounded Shape */}
        <div className="absolute rounded-full bg-[rgba(34,87,122,0.30)] w-96 h-96 top-24 right-36"></div>
        <Image
          src="/hero_one.svg"
          alt="Example"
          width={1800}
          height={1600}
          className="object-cover rounded-lg relative"
        />
      </div>
    </div>
  );
};

HeroOne.propTypes = {
  className: PropTypes.string,
};

export default HeroOne;

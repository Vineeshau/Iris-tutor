import React from "react";
import Image from "next/image";
import { Button } from "@/Components/ui/button";

function HeroOne() {
  return (
    <div className="flex flex-col md:flex-row justify-center px-4 py-8 bg-[#F5F5F5]">
      <div className="flex flex-col md:w-1/2 space-y-4 md:space-y-6 max-w-xl md:max-w-none justify-center pl-4 md:pl-8 lg:pl-">
        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center">
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
          <div className="flex flex-col gap-4 px-2 md:px-8 lg:px-16">
            <Button
              variant="outline"
              className="bg-[#68B0AB] hover:bg-[#68B0AB] rounded-2xl text-black hover:text-white text-sm lg:text-base font-bold w-full lg:w-60 h-11 px-4"
            >
              Start Learning
            </Button>
            <Button
              variant="outline"
              className="bg-black hover:bg-zinc-700 rounded-2xl text-white hover:text-white text-sm lg:text-base font-bold w-full lg:w-60 h-11 px-4"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Second Column: Image */}
      <div className="flex items-center justify-center md:w-1/2 mt-8 md:mt-0">
        <Image
          src="/hero.svg"
          alt="Example"
          width={600} // Adjust the width as needed
          height={600} // Adjust the height as needed
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default HeroOne;

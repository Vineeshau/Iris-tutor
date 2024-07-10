"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/Components/ui/card";

function Page() {
  const [play, setPlay] = useState(false);

  const videoPlay = () => {
    setPlay(!play);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-10 px-4 lg:py-14 lg:px-10">
      <div className="text-center">
        <h2 className="text-2xl lg:text-5xl font-bold text-black max-w-4xl">
          Discover Iris Tutor Today
        </h2>
      </div>
      <p className="text-center font-medium text-base lg:text-lg leading-relaxed max-w-3xl lg:max-w-5xl px-4 lg:px-0">
        Iris Tutor is a versatile and user-friendly platform designed to help
        organizations create customized training programs across various
        verticals to meet their specific needs. It offers a robust suite of
        tools for building courses, enrolling trainees, managing their learning
        experiences, and assessing their progress through testing. Additionally,
        Iris Tutor is an excellent resource for freelancers who wish to conduct
        their own tutorial sessions, providing them with the technology to
        effectively manage and deliver their content.
      </p>
     

      <div className="flex items-center justify-center w-full">
        {play ? (
          <iframe
            className="w-full max-w-full lg:max-w-[900px] lg:h-[500px]"
            height="500"
            src="iris_tutor.mp4"
            allowFullScreen
            title="Iris Tutor Video"
            allow="autoplay; encrypted-media"
          ></iframe>
        ) : (
          <Card className="w-full h-60 lg:w-[900px] lg:h-[500px] shadow-2xl flex justify-center items-center cursor-pointer bg-center bg-contain bg-no-repeat bg-[url('/media.svg')]">
            <CardContent
              className="flex justify-center items-center relative w-full h-full"
              onClick={videoPlay}
            >
              <div className="absolute w-14 h-24">
                <Image
                  src="/play_bg.png"
                  alt="Play Background"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="relative w-10 h-16 md:w-20 md:h-20 lg:w-14 lg:h-14 cursor-pointer">
                <Image
                  src="/play_button.png"
                  alt="Play Button"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

export default Page;

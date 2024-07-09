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
    <div className="flex flex-col items-center justify-center gap-12 py-14 px-4">
      <div className="text-center">
        <h2 className="text-2xl lg:text-5xl font-bold text-black max-w-4xl">
          Discover Iris Tutor Today
        </h2>
      </div>
      <p className="text-center font-medium text-base lg:text-lg leading-relaxed max-w-10xl px-[10%]">
        Iris Tutor is a versatile and user-friendly platform designed to help
        organizations create customized training programs across various
        verticals to meet their specific needs. It offers a robust suite of
        tools for building courses, enrolling trainees, managing their learning
        experiences, and assessing their progress through testing. Additionally,
        Iris Tutor is an excellent resource for freelancers who wish to conduct
        their own tutorial sessions, providing them with the technology to
        effectively manage and deliver their content.
      </p>
      <div className="flex items-center justify-center">
        {play ? (
          <iframe
            className="max-w-full"
            width="900"
            height="500"
            src="iris_tutor.mp4"
            allowFullScreen
            title="Iris Tutor Video"
            allow="autoplay; encrypted-media"
          ></iframe>
        ) : (
          <Card className="w-96 h-96 lg:w-[900px] lg:h-[500px] shadow-2xl flex justify-center items-center cursor-pointer bg-[url('/media.svg')] bg-no-repeat bg-cover">
            <CardContent
              className="flex justify-center items-center"
              onClick={videoPlay}
            >
              <Image
                src="/play_bg.png"
                width={100}
                height={100}
                alt="Play Background"
                className="absolute"
              />
              <Image
                src="/play_button.png"
                width={70}
                height={70}
                alt="Play Button"
                className="relative cursor-pointer"
              />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
 
export default Page;
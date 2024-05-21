"use client";

import React from "react";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import { Button } from "@/Components/ui/button";
import Pricing from "../../app/pricing/page";

function Page({ onGetStarted }) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center py-10 lg:py-20 gap-10">
      <div className="flex flex-col lg:items-start gap-8 h-1/2">
        <p className="text-4xl lg:text-5xl font-bold text-black">
          First Step Towards
        </p>
        <p className="text-4xl lg:text-5xl font-bold text-black">Excitement</p>
        <p className="text-black">irisTutor e-learning platform.</p>
        <div className="flex gap-4">
          <button
            className="bg-blue-500 rounded-2xl text-white text-sm lg:text-base font-bold lg:w-40 lg:h-11 px-4"
            onClick={onGetStarted}
          >
            <span className="text-white">Get Started</span>
          </button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                className="bg-zinc-700 rounded-2xl text-white text-sm lg:text-base font-bold lg:w-40 lg:h-11 px-4"
              >
                For Enterprise
              </Button>
            </AlertDialogTrigger>

            <AlertDialogContent className="w-full max-w-screen-md h-auto max-h-screen-md">
              <AlertDialogFooter className="flex justify-end p-4">
                <AlertDialogCancel className="text-black">X</AlertDialogCancel>
              </AlertDialogFooter>
              <div className="overflow-y-auto h-full max-h-[60vh] p-4">
                <Pricing price={true}/>
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      <div className=" w-2/6">
        <Image src="/education.png" width={500} height={500} alt="Image" />
      </div>
    </div>
  );
}

export default Page;

"use client";
import React from "react";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import { X } from "lucide-react";
import { Button } from "@/Components/ui/button";
import Pricing from "../../app/pricing/page";
 
function Page({ onGetStarted }) {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center lg:py-20 gap-20 h-screen bg-gray-100"
    >
      <div className="flex flex-col lg:items-start gap-8 px-20">
        <p className="text-black text-5xl">
          Empower Minds, Illuminate
        </p>
        <p className="text-black text-5xl">Futures</p>
        <p className="text-4xl lg:text-4xl font-bold text-black">
          <span className="font-bold text-6xl">IrisTutor</span>{" "}
          <span style={{ color: "#921E35" }} className="font-bold text-6xl">@Chordify</span>
        </p>
        <p className="text-black text-2xl font-sm">Your Gateway to Infinite Learning!</p>
        <div className="flex gap-4">
          <button
            className="bg-blue-500 rounded-2xl text-white text-sm lg:text-base font-bold lg:w-50 lg:h-11 px-4"
            onClick={onGetStarted}
          >
            <span className="text-white">Get Started</span>
          </button>
 
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                className="bg-zinc-700 hover:bg-zinc-700 rounded-2xl text-white hover:text-white text-sm lg:text-base font-bold lg:w-40 lg:h-11 px-4"
              >
                Schedule Demo
              </Button>
            </AlertDialogTrigger>
 
            <AlertDialogContent className="w-full max-w-screen-md h-auto max-h-screen-md">
              <AlertDialogFooter className="flex justify-end">
                <AlertDialogCancel className="text-black"><X/></AlertDialogCancel>
              </AlertDialogFooter>
              <div className="overflow-y-auto h-full max-h-[60vh] p-4">
                <Pricing price={true} />
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      <div className=" w-2/6">
        <Image src="/landing.png" width={500} height={500} alt="Image" />
      </div>
    </div>
  );
}
 
export default Page;
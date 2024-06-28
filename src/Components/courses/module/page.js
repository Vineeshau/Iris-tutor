"use client"
import React, { useState, useEffect } from "react";
import { Button } from "@/Components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion"; // Adjust the import path as per your project structure
import { Plus, Smile, ArrowLeftRight, AtSign, Signal, MonitorDown, Bell } from "lucide-react";
import Image from "next/image";
import AddModulePopup from "./addModulePopup"; // Assuming AddModulePopup is your popup component

function Page({ courseId }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [moduleName, setModuleName] = useState("");
  const [moduleData, setModuleData] = useState([]);
  const [hasModules, setHasModules] = useState(false); // Initialize with false

  useEffect(() => {
    // Load ModuleData from localStorage on component mount
    const storedModules = JSON.parse(localStorage.getItem("ModuleData")) || [];
    const filteredModules = storedModules.filter(module => module.courseId === courseId);
    setModuleData(filteredModules);
    setHasModules(filteredModules.length > 0);
  }, [courseId]);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleModuleAdded = (name) => {
    setModuleName(name);
    setIsPopupVisible(false);
    // Refresh module data after adding a new module
    const storedModules = JSON.parse(localStorage.getItem("ModuleData")) || [];
    const filteredModules = storedModules.filter(module => module.courseId === courseId);
    setModuleData(filteredModules);
    setHasModules(filteredModules.length > 0);
  };

  const handleModuleClick = () => {
    setIsPopupVisible(true);
  };

  return (
    <div className="flex flex-col h-screen relative px-4 md:px-20 lg:px-10">
      <div className="flex flex-col items-end p-5">
        <Button
          className="w-full md:w-[163px] h-[42px] flex gap-2"
          onClick={handleModuleClick}
        >
          <Plus /> Module
        </Button>
      </div>
      <hr className="border bg-[#565E6C]" />
      <div className="flex flex-col items-end p-5">
        <Button
          variant="outline"
          className="w-full md:w-[163px] h-[42px] flex gap-2 border-black"
        >
          <Smile /> Student view
        </Button>
      </div>

      <div className="flex-grow">
        <div type="multiple" defaultValue={["item-1"]}>
          <h1 value="item-1" className="font-bold mb-4">
            Modules{" "}
          </h1>
          <div className="flex flex-col justify-center items-center border border-dashed border-gray-300 p-4">
            {hasModules ? (
              <Accordion type="single" collapsible className="w-full">
                {moduleData.map((module, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{module.moduleName}</AccordionTrigger>
                    <AccordionContent>
                      {/* You can add additional content related to each module here */}
                      <p>Course ID: {module.courseId}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <>
                <Image
                  src="/module.svg"
                  width={400}
                  height={400}
                  alt="No Pinned Modules"
                  className="mb-4 w-60"
                />
                <p className="text-center text-gray-600">
                  There are no modules to show in this section
                </p>
                <p
                  className="text-blue-500 cursor-pointer mt-2"
                  onClick={handleModuleClick}
                >
                  Click here to add a module
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="mb-5">
        <div className="flex flex-wrap w-full md:w-[725px]">
          <div className="w-full sm:w-1/2 md:w-1/3 p-2">
            <Button className="w-full md:w-[223px] bg-[#F6D4A0] text-black hover:bg-[#F6D4A0]">
              <ArrowLeftRight /> &nbsp; Import Existing Content
            </Button>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-2">
            <Button className="w-full md:w-[223px] bg-[#F6D4A0] text-black hover:bg-[#F6D4A0]">
              <AtSign /> &nbsp; Choose home page
            </Button>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-2">
            <Button className="w-full md:w-[223px] bg-[#F6D4A0] text-black hover:bg-[#F6D4A0]">
              <Signal /> &nbsp; View Course Stream
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap w-full md:w-[725px]">
          <div className="w-full sm:w-1/2 md:w-1/3 p-2">
            <Button className="w-full sm:w-[223px] md:w-[223px] bg-[#F6D4A0] text-black hover:bg-[#F6D4A0]">
              <MonitorDown /> &nbsp; New Module
            </Button>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-2">
            <Button className="w-full sm:w-[223px] md:w-[223px] bg-[#F6D4A0] text-black hover:bg-[#F6D4A0]">
              <Bell /> View Course Notifications
            </Button>
          </div>
        </div>
      </div>

      {/* Render AddModulePopup based on isPopupVisible state */}
      {isPopupVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white shadow-2xl rounded-2xl">
            <AddModulePopup onClose={togglePopup} onSuccess={handleModuleAdded} courseId={courseId} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;

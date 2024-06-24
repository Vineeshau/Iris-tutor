"use client";

import React, { useState } from "react";
import { Button } from "@/Components/ui/button";
import {
  Plus,
  Smile,
  ArrowLeftRight,
  AtSign,
  Signal,
  MonitorDown,
  Bell,
} from "lucide-react";
import Image from "next/image";
import DiscussionPopup from "./discussionPopup";
import DiscussionDatas from "./discussionDatas";

function Discussions() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);
  const [moduleName, setModuleName] = useState("");
  const [hasDiscussions, setHasDiscussions] = useState(true);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleSuccess = (name) => {
    setModuleName(name);
    setIsPopupVisible(false);
    setIsSuccessVisible(true);
    setHasDiscussions(true);
    alert("Discussion created successfully!");
  };

  const handleEmpty = () => {
    setIsSuccessVisible(false);
    setHasDiscussions(false);
  };
  const handleDiscussionClick = () => {
    setIsPopupVisible(true);
  };

  return (
    <div className="flex flex-col h-screen relative px-4 md:px-20 lg:px-10">
      <div className="flex flex-col items-end p-5">
        <Button
          className="w-full md:w-[163px] h-[42px] flex gap-2"
          onClick={togglePopup}
        >
          <Plus /> Discussion
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
            Discussions{" "}
          </h1>
          <div className="flex flex-col justify-center items-center border border-dashed border-gray-300 p-4">
            <Image
              src="/group.svg"
              width={329}
              height={329}
              alt="No Pinned Discussions"
              className="mb-4 w-60"
            />
            {hasDiscussions ? (
              <div style={{ width: "100%" }}>
                <DiscussionDatas
                  onEmpty={handleEmpty}
                  visible={isPopupVisible}
                />
              </div>
            ) : (
              <p className="text-center text-gray-600">
                There are no discussions to show in this section
              </p>
            )}
            <p
              className="text-blue-500 cursor-pointer mt-2"
              onClick={handleDiscussionClick}
            >
              Click here to add a discussion
            </p>
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
          <div className="flex flex-wrap w-full md:w-[725px]">
            <div className="w-full sm:w-1/2 md:w-1/3 p-2">
              <Button className="w-full sm:w-[223px] md:w-[223px] bg-[#F6D4A0] text-black hover:bg-[#F6D4A0]">
                <MonitorDown /> &nbsp; New Discussion
              </Button>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 p-2">
              <Button className="w-full sm:w-[223px] md:w-[223px] bg-[#F6D4A0] text-black hover:bg-[#F6D4A0]">
                <Bell /> View Course Notifications
              </Button>
            </div>
          </div>
        </div>
      </div>
      {isPopupVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white shadow-2xl rounded-2xl">
            {isPopupVisible && (
              <DiscussionPopup popUp={togglePopup} onSuccess={handleSuccess} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Discussions;

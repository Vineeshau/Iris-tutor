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
import AnnouncementPopup from "./announcementPopup";
import AnnouncementDatas from "./announcementDatas";

function Announcements() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);
  const [moduleName, setModuleName] = useState("");
  const [hasAnnouncements, setHasAnnouncements] = useState(true);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleSuccess = (name) => {
    setModuleName(name);
    setIsPopupVisible(false);
    setIsSuccessVisible(true);
    setHasAnnouncements(true);
  };

  const handleEmpty = () => {
    setIsSuccessVisible(false);
    setHasAnnouncements(false);
  };

  return (
    <div className="flex flex-col h-screen relative px-4 md:px-20 lg:px-10">
      <div className="flex flex-col items-end p-5">
        <Button
          className="w-full md:w-[163px] h-[42px] flex gap-2"
          onClick={togglePopup}
        >
          <Plus /> Announcement
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
        {hasAnnouncements ? (
          <AnnouncementDatas onEmpty={handleEmpty} />
        ) : (
          <div className="flex flex-col items-center py-10">
            <Image
              src="/Announcement.png"
              width={329}
              height={329}
              alt="image"
            />
          </div>
        )}
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
                <MonitorDown /> &nbsp; New Announcement
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
              <AnnouncementPopup
                popUp={togglePopup}
                onSuccess={handleSuccess}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Announcements;

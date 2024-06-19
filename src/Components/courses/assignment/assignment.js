"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/Components/ui/button";
import {
  Plus,
  Smile,
  ArrowLeftRight,
  AtSign,
  Signal,
  MonitorDown,
  Bell,
  Search,
} from "lucide-react";
import AssignmentData from "./assignmentData";
import AssignmentPopup from "./assignmentPopup";
import GroupPopup from "./groupPopup";
import { Input } from "@/Components/ui/input";

function Assignment() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [groupPopup, setGroupPopup] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const toggleGroupPopup = () => {
    setGroupPopup(!groupPopup);
  };

  return (
    <div className="flex flex-col h-screen relative px-4 md:px-20 lg:px-10 py-20">
      <div className="flex flex-row justify-between items-center p-5">
        <div className="flex px-5">
          <div className="relative">
            <Input
              type="text"
              className="border border-[black] pl-10 w-96"
              placeholder="Search assignment here"
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black cursor-pointer" />
          </div>
        </div>
        <div className="flex gap-4">
          <Button
            className="w-full md:w-[100px] h-[42px] flex gap-2"
            onClick={toggleGroupPopup}
          >
            <Plus /> Group
          </Button>
          <Button
            className="w-full md:w-[163px] h-[42px] flex gap-2"
            onClick={togglePopup}
          >
            <Plus /> Assignment
          </Button>
        </div>
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
      <div className="flex-grow pb-5">
        <div>
            <AssignmentData
              visibleAssignment={isPopupVisible}
              visibleGroup={groupPopup}
            />
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
            {isPopupVisible && <AssignmentPopup popUp={togglePopup} />}
          </div>
        </div>
      )}
      {groupPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white shadow-2xl rounded-2xl">
            {groupPopup && <GroupPopup popUp={toggleGroupPopup} />}
          </div>
        </div>
      )}
    </div>
  );
}

export default Assignment;

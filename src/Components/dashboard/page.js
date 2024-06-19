"use client"
 
import Link from "next/link";
import React, { useState } from "react";
import { Card, CardContent } from "@/Components/ui/card";
import cardData from "../../data/dashboard_courses.json";
import Image from "next/image";
import { StickyNote, MessageSquare, NotebookPen, Files, CalendarDays } from "lucide-react";
import { Button } from "@/Components/ui/button";
import StartNewCourseDialog from "@/Components/dashboard/startNewCourseDialog";
 
export default function Page() {
  const [activeButton, setActiveButton] = useState("first");
  const { publishedDatas, unpublishedDatas } = cardData;
  const cards = activeButton === "first" ? publishedDatas : unpublishedDatas;
 
  const [isDialogOpen, setIsDialogOpen] = useState(false);
 
  const openDialog = () => {
    setIsDialogOpen(true);
  };
 
  const closeDialog = () => {
    setIsDialogOpen(false);
  };
 
  return (
    <div className="bg-white-100 min-h-[70vh] flex flex-col">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row h-1/4">
        {/* Left Side */}
        <div className="bg-white-200 w-full md:w-1/2 flex items-center justify-start">
          <div className="text-black text-xl px-4 md:px-10 font-bold">
            Dashboard
          </div>
        </div>
        {/* Right Side */}
        <div className="bg-white-500 w-full md:w-1/2 flex items-center justify-end">
          <div className="flex flex-col justify-around w-full md:w-2/4 h-full p-4 space-y-4 py-5">
            {/* Section 1: Coming Up */}
            <div className="flex flex-col items-center h-1/3">
              <div className="flex items-center space-x-2 w-48 gap-3">
                <span className="material-icons text-sm font-bold">
                  Coming Up
                </span>
                <div className="flex items-center space-x-1">
                  <CalendarDays className="text-blue-500" />
                  <Link href="/dashboard/calendar" className="text-sm font-bold text-blue-500">
                    Calendar
                  </Link>
                </div>
              </div>
              <div className="border-b-2 border-gray mt-1 w-48"></div>
            </div>
            {/* Section 2: Buttons */}
            <div className="flex justify-center h-1/3">
              <StartNewCourseDialog className="bg-[#3278FF] text-white px-4 py-2 rounded w-48" onClick={openDialog}>
                Start a new Course
              </StartNewCourseDialog>
            </div>
            {/* <StartNewCourseDialog isOpen={isDialogOpen} onClose={closeDialog} /> */}
 
            <div className="flex justify-center  h-1/3">
              <button className="bg-[#3278FF] text-white px-4 py-2 rounded w-48">
                View Grades
              </button>
            </div>
          </div>
        </div>
      </div>
 
      {/* Body Section */}
      <div className="bg-white-300 flex flex-col py-1 gap-4 h-auto">
        {/* Buttons Section */}
        <div className="relative flex justify-center w-full h-1/12">
          <div className="relative flex justify-center px-4 md:px-36 w-full">
            <button
              onClick={() => setActiveButton("first")}
              className={`px-4 py-2 ${
                activeButton === "first"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500 border-b-2 border-gray-500"
              }`}
            >
              Published
            </button>
            <button
              onClick={() => setActiveButton("second")}
              className={`px-4 py-2 ${
                activeButton === "second"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500 border-b-2 border-gray-500"
              }`}
            >
              Unpublished
            </button>
          </div>
        </div>
 
        {/* Cards Section */}
        <div className="flex w-full justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 max-w-7xl w-full mx-auto">
            {cards.map((card) => (
              <Card key={card.id} className="border rounded-2xl shadow-2xl w-full">
                <div className="relative">
                  {/* Publish Button for Unpublished Courses */}
                  {activeButton === "second" && (
                    <button className="bg-black-500 text-white px-2 py-1 rounded mt-4 absolute left-2 border border-white">
                      Publish
                    </button>
                  )}
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    layout="responsive"
                    objectFit="cover"
                    className="rounded-2xl w-auto object-fill"
                    width={400}
                    height={225}
                  />
                </div>
                {/* Card Content */}
                <CardContent className="p-8">
                  <div className="text-xl font-bold mb-2">{card.title}</div>
                  <div className="text-xl font-normal mb-2">{card.description}</div>
                 
                  {/* Links Section */}
                  <div className="flex gap-4 md:gap-5 overflow-hidden mb-2">
                    {/* Conditional Rendering of Links */}
                    {activeButton === "first" && (
                      <>
                        <Link href="/dashboard/courses" passHref onClick={() => localStorage.setItem("linkedItem", "Announcement")}>
                          <div className="text-blue-500 hover:underline">
                            <span className="material-icons">
                              <StickyNote />
                            </span>
                          </div>
                        </Link>
                        <Link href="/dashboard/courses" passHref onClick={() => localStorage.setItem("linkedItem", "Assignment")}>
                          <div className="text-blue-500 hover:underline">
                            <span className="material-icons">
                              <NotebookPen />
                            </span>
                          </div>
                        </Link>
                        <Link href="" passHref>
                          <div className="text-blue-500 hover:underline">
                            <span className="material-icons">
                              <MessageSquare />
                            </span>
                          </div>
                        </Link>
                        <Link href="" passHref>
                          <div className="text-blue-500 hover:underline">
                            <span className="material-icons">
                              <Files />
                            </span>
                          </div>
                        </Link>
                      </>
                    )}
                    {activeButton === "second" && (
                      <Link href="" passHref>
                        <div className="text-blue-500 hover:underline">
                          <span className="material-icons">
                            <MessageSquare />
                          </span>
                        </div>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
 
    </div>
  );
}
 
"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Card, CardContent } from "@/Components/ui/card";
import cardData from "../../data/dashboard_courses.json";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/Components/ui/tooltip";
import {
  StickyNote,
  MessageSquare,
  NotebookPen,
  Files,
  CalendarDays,
  X,
} from "lucide-react";
import New from "@/Components/dashboard/startNewCourseDialog";
import ModuleCreationComponent from "@/Components/courses/module/addModule"; 
import { toast } from "sonner";

function Dashboard() {
  const [activeButton, setActiveButton] = useState("first");
  const { publishedDatas, unpublishedDatas } = cardData;
  const [storedCourses, setStoredCourses] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showModuleCreation, setShowModuleCreation] = useState(false);

  useEffect(() => {
    const courses = JSON.parse(localStorage.getItem("courses")) || [];
    setStoredCourses(courses);
  }, [isDialogOpen]);

  const openDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handlePublish = (index) => {
    const courses = [...storedCourses];
    const course = courses[index];
    const homeModuleData =
      JSON.parse(localStorage.getItem("HomeModuleData")) || [];

    const moduleExists = homeModuleData.some(
      (module) => module.courseId === course.id
    );

    if (moduleExists) {
      course.publish = true;
      localStorage.setItem("courses", JSON.stringify(courses));
      setStoredCourses(courses);
    } else {
      toast("Create a module first!");
      setShowModuleCreation(!showModuleCreation);
    }
  };

  const filteredCourses = storedCourses.filter((course) =>
    activeButton === "first" ? course.publish : !course.publish
  );

  const moduleClose = () => {
    setShowModuleCreation(!showModuleCreation);
  };

  return (
    <div className="bg-white-100 min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row h-1/4">
        <div className="bg-white-200 w-full md:w-1/2 flex items-center justify-start">
          <div className="text-black text-3xl px-4 md:px-10 font-bold">
            Dashboard
          </div>
        </div>
        <div className="bg-white-500 w-full md:w-1/2 flex items-center justify-end">
          <div className="flex flex-col justify-around w-full md:w-2/4 h-full p-4 space-y-4 py-5">
            <div className="flex flex-col items-center h-1/3">
              <div className="flex items-center space-x-2 w-48 gap-3">
                <span className="material-icons text-sm font-bold">
                  Coming Up
                </span>
                <div className="flex items-center space-x-1">
                  <CalendarDays className="text-blue-500" />
                  <Link
                    href="/dashboard/calendar"
                    className="text-sm font-bold text-blue-500"
                  >
                    Calendar
                  </Link>
                </div>
              </div>
              <div className="border-b-2 border-gray mt-1 w-48"></div>
            </div>
            <div className="flex justify-center h-1/3">
              <button
                className="bg-[#3278FF] text-white px-4 py-2 rounded w-48"
                onClick={openDialog}
              >
                Start a new Course
              </button>
            </div>
            <div className="flex justify-center h-1/3">
              <button className="bg-[#3278FF] text-white px-4 py-2 rounded w-48">
                View Grades
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white-300 flex flex-col py-1 gap-4 h-auto">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-7xl w-full mx-auto">
          {filteredCourses.map((course, index) => (
            <Card key={index} className="border rounded-2xl shadow-2xl w-full">
              <div className="relative">
                {course.image && (
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.coursename}
                      className="rounded-xl"
                    />
                    {activeButton === "second" && !course.publish && (
                      <button
                        className="absolute top-4 right-4 bg-black text-white px-2 py-1 rounded border border-black"
                        onClick={() => handlePublish(index)}
                      >
                        Publish
                      </button>
                    )}
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <div className="text-xl font-bold mb-2 max-w-xs truncate">
                  {course.coursename}
                </div>
                <div className="text-xl font-normal mb-2">
                  {course.duration}
                </div>
                <div className="flex gap-4 md:gap-5 overflow-hidden mb-2">
                  {activeButton === "first" && (
                    <>
                      <TooltipProvider key={index}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              href="/dashboard/courses"
                              passHref
                              onClick={() =>
                                localStorage.setItem(
                                  "linkedItem",
                                  "Announcement"
                                )
                              }
                            >
                              <div className="text-blue-500 hover:underline">
                                <span className="material-icons">
                                  <StickyNote />
                                </span>
                              </div>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View Announcement</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider key={index}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              href="/dashboard/courses"
                              passHref
                              onClick={() =>
                                localStorage.setItem("linkedItem", "Assignment")
                              }
                            >
                              <div className="text-blue-500 hover:underline">
                                <span className="material-icons">
                                  <NotebookPen />
                                </span>
                              </div>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View Assignment</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider key={index}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link href="" passHref>
                              <div className="text-blue-500 hover:underline">
                                <span className="material-icons">
                                  <MessageSquare />
                                </span>
                              </div>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View Messages</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider key={index}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link href="" passHref>
                              <div className="text-blue-500 hover:underline">
                                <span className="material-icons">
                                  <Files />
                                </span>
                              </div>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View Files</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </>
                  )}
                  {activeButton === "second" && (
                    <TooltipProvider key={index}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link href="" passHref>
                            <div className="text-blue-500 hover:underline">
                              <span className="material-icons">
                                <MessageSquare />
                              </span>
                            </div>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View Messages</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white shadow-2xl rounded-2xl">
            {isDialogOpen && <New popUp={openDialog} />}
          </div>
        </div>
      )}
      {showModuleCreation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white shadow-2xl rounded-2xl h-screen w-[1000px]">
            <div className="flex justify-end p-5">
              <X onClick={moduleClose} className="cursor-pointer"/>
            </div>
            <ModuleCreationComponent />
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;

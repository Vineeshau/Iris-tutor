"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/Components/ui/card";
import New from "@/Components/dashboard/startNewCourseDialog";
import otherCoursesData from "@/data/otherCourses.json";

function PublishedCourses() {
  const [storedCourses, setStoredCourses] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("published");

  useEffect(() => {
    const courses = JSON.parse(localStorage.getItem("courses")) || [];
    setStoredCourses(courses);
  }, [isDialogOpen]);

  const publishedCourses = storedCourses.filter((course) => course.publish);
  const otherCourses = otherCoursesData;

  const openDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white-100 min-h-screen flex flex-col mt-11">
      <div className="flex justify-around mt-10 px-6">
        <h1 className="text-3xl font-bold">Courses</h1>
        <button
          className="bg-[#3278FF] text-white px-4 py-2 rounded w-48"
          onClick={openDialog}
        >
          Start a new Course
        </button>
      </div>

      <div className="flex justify-center mt-10 space-x-10">
        <button
          onClick={() => handleTabChange("published")}
          className={`text-xl font-medium ${
            activeTab === "published"
              ? "text-blue-500  border-blue-500"
              : "text-gray-500  border-gray-500"
          }`}
        >
          Published Courses
        </button>
        <button
          onClick={() => handleTabChange("other")}
          className={`text-xl font-medium ${
            activeTab === "other"
              ? "text-blue-500  border-blue-500"
              : "text-gray-500  border-gray-500"
          }`}
        >
          Other Courses
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-7xl w-full mx-auto mt-8">
        {activeTab === "published" &&
          publishedCourses.map((course, index) => (
            <Link href={`/dashboard/courses/${course.id}`}>
              <Card
                key={index}
                className="border rounded-2xl shadow-2xl w-full cursor-pointer"
              >
                {course.image && (
                  <img
                    src={course.image}
                    alt={course.coursename}
                    className="rounded-xl"
                  />
                )}
                <CardContent className="p-6 flex flex-col items-center justify-center gap-3">
                  <div className="text-xl font-bold mb-2 max-w-xs truncate">
                    {course.coursename}
                  </div>
                  <div className="text-xl mb-2 font-medium">
                    {course.duration}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}

        {activeTab === "other" &&
          otherCourses.map((course) => (
            <Card
              key={course.id}
              className="border rounded-2xl shadow-2xl w-full cursor-pointer"
            >
              <img
                src={course.image || "/placeholder-image.jpg"}
                alt={course.coursename}
                className="rounded-xl"
              />
              <CardContent className="p-6 flex flex-col items-center justify-center gap-3">
                <div className="text-xl font-bold mb-2 max-w-xs truncate">
                  {course.coursename}
                </div>
                <div className="text-xl mb-2 font-medium">
                  {course.duration}
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white shadow-2xl rounded-2xl">
            {isDialogOpen && <New popUp={openDialog} />}
          </div>
        </div>
      )}
    </div>
  );
}

export default PublishedCourses;

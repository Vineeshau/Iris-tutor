"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/Components/ui/card";

function PublishedCourses({ onLinkClick }) {
  const [storedCourses, setStoredCourses] = useState([]);

  useEffect(() => {
    const courses = JSON.parse(localStorage.getItem("courses")) || [];
    setStoredCourses(courses);
  }, []);

  const publishedCourses = storedCourses.filter((course) => course.publish);

  return (
    <div className="bg-white-100 min-h-screen flex flex-col mt-11">
      <div className="flex justify-center items-center mt-10">
        <h1 className="text-3xl font-bold">Published Courses</h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-7xl w-full mx-auto mt-8">
        {publishedCourses.map((course, index) => (
          <Card
            key={index}
            className="border rounded-2xl shadow-2xl w-full cursor-pointer"
            onClick={onLinkClick}
          >
            {course.image && (
              <img
                src={course.image}
                alt={course.coursename}
                className="rounded-xl"
              />
            )}
            <CardContent className="p-6 flex flex-col gap-3">
              <div className="text-xl font-bold mb-2 max-w-xs truncate">
                {course.coursename}
              </div>
              <div className="text-xl mb-2 font-medium">{course.duration}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default PublishedCourses;

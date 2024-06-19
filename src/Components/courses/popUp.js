"use client";

import React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { ScrollArea } from "@/Components/ui/scroll-area";
import Courses from "../../data/dashboard_courses.json";

function PopUp({ onLinkClick }) {
  return (
    <div className="p-10 absolute inset-0 flex justify-start h-screen z-0">
      <div className="card shadow-2xl relative bg-white rounded-2xl overflow-hidden w-96 cursor-pointer">
        <ScrollArea className="rounded-md border h-screen">
          <div className="px-6 py-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Courses</h2>
            <Link
              href="/dashboard"
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </Link>
          </div>
          <div className="px-6 py-4">
            <p className="text-base font-semibold mb-2">Published Courses</p>
            {Courses.publishedDatas.map((course) => (
              <div key={course.id}>
                <p
                  className="block text-[#2C80B7] cursor-pointer"
                  onClick={onLinkClick}
                >
                  {course.title}
                </p>
                <p className="text-[#BCC1CA] text-sm mb-2">{course.term}</p>
              </div>
            ))}
            <p className="text-base font-semibold mt-4 mb-2">
              Unpublished Courses
            </p>
            {Courses.unpublishedDatas.map((course) => (
              <div key={course.id}>
                <Link href={course.link1} className="block text-[#2C80B7]">
                  {course.title}
                </Link>
                <p className="text-[#BCC1CA] text-sm mb-2">{course.term}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

export default PopUp;

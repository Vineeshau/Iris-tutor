import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import CourseData from "../../data/courses.json"; // Adjust path as per your project structure

function Page() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
      <div className="flex flex-col items-center">
        <p className="text-2xl lg:text-5xl font-bold text-black max-w-xs lg:max-w-none text-center">
          Why Iris Tutor
        </p>
      </div>
      <div className="grid w-full max-w-screen-xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 px-4">
        {CourseData.map((course, index) => (
          <div
            key={index}
            className={`overflow-hidden shadow-lg bg-white rounded-xl w-full px-6 py-6 flex flex-col justify-between items-center ${
              isVisible ? "animate-slide-in" : ""
            }`}
            style={{ margin: "0 auto", animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex justify-center items-center h-80 w-full mb-2">
              <Image
                src={course.image}
                width={250}
                height={300}
                alt="Course Image"
                className="rounded-t-xl object-cover"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow w-full gap-2">
              <div className="px-6 py-4 text-start">
                <div className="font-bold text-xl mb-2">{course.name}</div>
              </div>
              <div className="flex items-center justify-start px-6 py-2 text-blue-700 rounded-lg transition duration-300 ease-in-out cursor-pointer">
                <span className="mr-2">GO TO</span>
                <FaArrowRight className="text-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;

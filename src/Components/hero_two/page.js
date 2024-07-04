import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import CourseData from "../../data/courses.json"; // Adjust path as per your project structure

function Page() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-4 py-20"
      style={{
        background:
          "linear-gradient(135deg, rgba(251, 178, 67, 0.4), rgba(50, 120, 255, 0.2))",
        minHeight: "100vh", // Ensure the container takes at least the full viewport height
      }}
    >
      <div className="flex flex-col items-center">
        <p className="text-2xl lg:text-5xl font-bold text-black max-w-xs lg:max-w-none">
          Why you will love IrisTutor?
        </p>
      </div>
      <div className="grid w-full max-w-screen-xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 px-4">
        {CourseData.map((course, index) => (
          <div
            key={index}
            className="overflow-hidden shadow-lg bg-white rounded-xl w-full md:max-w-sm lg:max-w-md px-6 py-6 flex flex-col justify-between items-center"
            style={{ margin: "0 auto" }}
          >
            {/* First Section: Image */}
            <div className="flex justify-center items-center h-80 w-full mb-2">
              <Image
                src={course.image}
                width={250}
                height={300}
                alt="Course Image"
                className="rounded-t-xl object-fill"
              />
            </div>
            {/* Second Section: Name and Go To Link */}
            <div className="flex flex-col justify-between flex-grow w-full gap-4">
              <div className="px-6 py-4 text-start">
                <div className="font-bold text-xl mb-2">{course.name}</div>
              </div>
              <div className="px-6 pt-4 pb-2 text-start">
                <Link href="">
                  <div className="text-blue-700 flex items-start justify-start">
                    <span>GO TO</span>
                    <FaArrowRight className="ml-1" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;

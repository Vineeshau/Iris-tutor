import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import CourseData from "../../data/courses.json";
 
function Page() {
  return (
    <div>
      <div className="flex flex-col lg:flex-col items-center justify-center lg:justify-between gap-6 py-20">
        <div className="flex flex-col items-center gap-6">
          <p className="text-2xl lg:text-5xl font-bold text-black max-w-xs lg:max-w-none">
            Sections
          </p>
          <p className="text-2xl lg:text-xl font-bold text-black py-8">
            Link to different sections of your app.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 justify-center">
          {CourseData.map((data, index) => (
            <Card
              key={index}
              className="bg-white shadow-2xl py-4 rounded-2xl border-none w-full h-[550px] flex flex-col"
            >
              <CardHeader>
                <CardTitle className="flex flex-col items-center py-8">
                  <Image
                    src={data.imageUrl}
                    width={224}
                    height={224}
                    alt={data.title}
                    className="w-56 h-56"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-between flex-grow px-8">
                <div>
                  <div className="text-sm text-gray-500">
                    {data.description}
                  </div>
                  <p className="text-2xl lg:text-xl font-bold text-black py-10">
                    {data.title}
                  </p>
                </div>
                <Link href={data.link}>
                  <div className="text-blue-700 flex items-center mt-auto">
                    <span>GO TO</span>
                    <FaArrowRightLong className="ml-1" />
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default Page;
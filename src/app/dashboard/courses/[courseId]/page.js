"use client"
import React, { useState } from "react";
import Sidebar from "@/Components/courses/sidebar";
import CourseContent from "@/Components/courses/courseContent";
 
const CoursePage = () => {
  const [selectedModuleId, setSelectedModuleId] = useState(null);
 
  const handleSelectModule = (moduleId) => {
    setSelectedModuleId(moduleId);
  };
 
  return (
    <div className="flex mt-10 gap-0">
      <div className="w-1/4 px-10">
        <Sidebar onSelectModule={handleSelectModule} />
      </div>
      <div className="flex flex-col w-3/4 px-10">
        <CourseContent selectedModuleId={selectedModuleId} />
      </div>
      <div className="w-72"></div>
    </div>
  );
};
 
export default CoursePage;
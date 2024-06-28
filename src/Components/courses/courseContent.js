import React, { useEffect, useState } from "react";
import Announcements from "@/Components/courses/announcements/announcements";
import Assignment from "@/Components/courses/assignment/assignment";
// import Module from "@/Components/courses/module/addModule";
import Discussion from "@/Components/courses/discussion/discussion";
import ModuleDetails from "@/Components/courses/module/moduleDetails";
import Home from "@/Components/courses/module/home";
import Grades from "@/Components/courses/grades/grade";

const CourseContent = ({ route = "home", params, moduleData, selectedModuleId, onSelectModule }) => {
  const [courseId, setCourseId] = useState(null);

  useEffect(() => {
    if (params && params.courseId) {
      setCourseId(params.courseId);
    } else {
      const currentPath = window.location.pathname;
      const pathSegments = currentPath.split("/");
      const id = pathSegments[pathSegments.length - 1];
      setCourseId(id);
    }
  }, [params]);

  useEffect(() => {
    if (selectedModuleId && selectedModuleId !== "Grades") {
      // Handle the new page rendering or routing logic here based on selectedModuleId
      console.log("Selected Module ID:", selectedModuleId);
      // Add your logic here if needed
    }
  }, [selectedModuleId]);

  return (
    <div className="course-content">
      {selectedModuleId === "Grades" ? (
        <Grades />
      ) : selectedModuleId ? (
        <ModuleDetails moduleId={selectedModuleId} />
      ) : route === "announcement" ? (
        <Announcements />
      ) : route === "assignment" ? (
        <Assignment />
      ) : route === "discussion" ? (
        <Discussion />
      ) : (
        <Home courseId={courseId} />
      )}
    </div>
  );
};

export default CourseContent;

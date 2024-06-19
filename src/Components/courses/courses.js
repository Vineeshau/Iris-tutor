"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import SelectItems from "./selectItems";
const Home = dynamic(() => import("./coursesHome/home"), { ssr: false });
const Announcement = dynamic(() => import("./announcements/announcements"), {
  ssr: false,
});
const Dashboard = dynamic(() => import("../../app/dashboard/page"), {
  ssr: false,
});
const PopUp = dynamic(() => import("./popUp"), { ssr: false });
const Assignment = dynamic(() => import("./assignment/assignment"), {
  ssr: false,
});

function Courses() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("linkedItem")) {
      setSelectedComponent(localStorage.getItem("linkedItem"));
    }
  }, []);

  const handleValueChange = (value) => {
    setSelectedComponent(value);
  };

  const handleLinkClick = () => {
    setSelectedComponent("Home");
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Home":
        return <Home />;
      case "Announcement":
        return <Announcement />;
      case "Assignment":
        return <Assignment />;
      case "Discussion":
      // return <Discussion />;
      case "Grade":
      // return <Grade />;
      case "People":
      // return <People />;
      case "Pages":
      // return <Pages />;
      case "Files":
      // return <Files />;
      case "Syllabus":
      // return <Syllabus />;
      case "Outcome":
      // return <Outcome />;
      case "Rubrics":
      // return <Rubrics />;
      case "Quizzes":
      // return <Quizzes />;
      case "Modules":
      // return <Modules />;
      case "Settings":
      // return <Settings />;
      default:
        return null;
    }
  };

  return (
    <div className="relative">
      {selectedComponent === null && (
        <>
          <Dashboard />
          <PopUp onLinkClick={handleLinkClick} />
        </>
      )}
      {selectedComponent !== null && (
        <div className="py-10">
          <SelectItems onValueChange={handleValueChange} selectedComponent={selectedComponent}/>
          <div>{renderComponent()}</div>
        </div>
      )}
    </div>
  );
}

export default Courses;

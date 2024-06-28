import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/Components/ui/accordion";

const Sidebar = ({ onSelectModule }) => {
  const [courseId, setCourseId] = useState(null);
  const [openSection, setOpenSection] = useState("Course Outline");
  const [modules, setModules] = useState([]);
  const [selectedModuleId, setSelectedModuleId] = useState(null);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split("/");
    const id = pathSegments[pathSegments.length - 1];
    setCourseId(id);
  }, []);

  useEffect(() => {
    if (courseId) {
      const storedModules =
        JSON.parse(localStorage.getItem("DummyModules")) || [];
      const filteredModules = storedModules.filter(
        (module) => module.courseId === courseId
      );
      setModules(filteredModules);
    }
  }, [courseId]);

  const dummyItems = [
    { title: "Course Overview", modules: modules },
    { title: "Announcements" },
    { title: "Assignments" },
    { title: "Discussions" },
    { title: "Grades" },
    { title: "People" },
    { title: "Pages" },
    { title: "Syllabus" },
    { title: "Quizzes" },
  ];

  const handleSectionClick = (title) => {
    setOpenSection(openSection === title ? null : title);
    if (title === "Grades" || title === "Pages") {
      onSelectModule(title); // Passes "Grades" or "Pages" to onSelectModule
    }
  };

  const handleModuleClick = (moduleId) => {
    setSelectedModuleId(moduleId);
    onSelectModule(moduleId); // Passes moduleId to onSelectModule
  };

  return (
    <div className="sidebar">
      <Accordion type="single" collapsible className="w-full">
        {dummyItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger
              className="text-lg font-bold text-gray-700 hover:text-gray-900"
              onClick={() => handleSectionClick(item.title)}
              isOpen={openSection === item.title}
            >
              {item.title}
            </AccordionTrigger>
            {item.title === "Course Overview" && (
              <AccordionContent isOpen={openSection === "Course Overview"}>
                <Accordion type="single" collapsible>
                  {modules.map((module, idx) => (
                    <AccordionItem
                      key={`module-${idx}`}
                      value={`module-${idx}`}
                      className={`flex flex-col`}
                    >
                      <AccordionTrigger
                        className={`text-lg font-normal text-gray-700 hover:text-gray-900 ${
                          selectedModuleId === module.id ? "bg-gray-200" : ""
                        }`}
                        onClick={(event) => {
                          event.stopPropagation();
                          handleModuleClick(module.id); // Pass module.id to handleModuleClick
                        }}
                      >
                        <div className="flex flex-col">
                          <p className="underline-none justify-start">Module {idx + 1}</p>
                          <p>{module.moduleName}</p>
                        </div>
                      </AccordionTrigger>
                      {selectedModuleId === module.id && (
                        <AccordionContent
                          isOpen={selectedModuleId === module.id}
                        ></AccordionContent>
                      )}
                    </AccordionItem>
                  ))}
                </Accordion>
              </AccordionContent>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Sidebar;

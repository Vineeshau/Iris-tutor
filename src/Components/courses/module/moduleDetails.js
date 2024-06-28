import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
import { Button } from "@/Components/ui/button";
import AddModulePopup from "./addModulePopup"; // Adjust the import path as per your project structure
import { Plus } from "lucide-react";

const ModuleDetails = ({ moduleId, courseId }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [moduleData, setModuleData] = useState(null);

  useEffect(() => {
    // Fetch moduleData from localStorage based on moduleId
    const storedModules = JSON.parse(localStorage.getItem("DummyModules")) || [];
    const module = storedModules.find((module) => module.id === moduleId);

    if (module) {
      setModuleData(module);
    }
  }, [moduleId]);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleModuleAdded = () => {
    const storedModules = JSON.parse(localStorage.getItem("ModuleData")) || [];
    setModuleData(storedModules);
    setIsPopupVisible(false);
  };

  if (!moduleData) {
    return null; // Placeholder for when data is loading
  }

  return (
    <div className="module-details">
      <div className="flex flex-col h-screen relative px-4 md:px-20 lg:px-10">
        <div className="flex flex-col items-end p-5">
          <Button
            className="w-full md:w-[163px] h-[42px] flex gap-2"
            onClick={togglePopup}
          >
            <Plus /> Module
          </Button>
        </div>

        {/* Video Section */}
        <div className="bg-white p-4 rounded-lg shadow-lg mb-8">
          <h2 className="text-4xl font-bold">{moduleData.moduleName}</h2>
          <iframe
            className="w-full h-96 mt-4"
            src="https://www.youtube.com/embed/Vm7qM1wmXwE"
            title="What is TypeScript"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Accordion Section */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
        <Accordion type="single" collapsible>
      {/* Lesson 1: Introduction to ReactJS */}
      <AccordionItem value="item-1" className="mb-4 mt-4">
        <AccordionTrigger className="text-lg font-semibold bg-gray-200 py-2 px-4 rounded-md hover:bg-gray-300">
          Lesson 1: {moduleData.moduleName}
        </AccordionTrigger>
        <AccordionContent className="text-base">
          <p className="tracking-wide leading-relaxed">
            React is a well-known JavaScript library for creating user
            interfaces. It was developed by Facebook and is widely utilized by
            developers worldwide. React enables developers to easily create
            complex, dynamic, and responsive online apps. The component-based
            architecture of React is one of its primary advantages. Developers
            can develop reusable components that can be utilized across multiple
            portions of an application, making code maintenance and updating
            easier. React also employs a virtual DOM, which enables it to update
            only the areas of a page that require updating when changes are
            made, making it faster and more efficient than older techniques.
          </p>
        </AccordionContent>
      </AccordionItem>

      {/* Lesson 2: Install ReactJS and Environment Setup */}
      <AccordionItem value="item-2" className="mb-4">
        <AccordionTrigger className="text-lg font-semibold bg-gray-200 py-2 px-4 rounded-md hover:bg-gray-300">
          Lesson 2: Install ReactJS and Environment Setup
        </AccordionTrigger>
        <AccordionContent className="text-base">
          <p>
            A development environment is a collection of tools, software, and
            hardware used by software developers to construct software
            applications. It comprises a text editor, a version control system,
            testing tools, and other software development tools. A development
            environment is important because it enables developers to write,
            test, and deploy software applications more efficiently and
            effectively. Because ReactJS is a JavaScript library, it necessitates
            the establishment of a development environment in order to develop
            and run apps. To develop and run code, ReactJS uses Node.js, NPM,
            and a text editor. Git and GitHub Desktop are also required for
            version control and collaboration. Without setting up a proper
            development environment, developers may face challenges in creating
            and testing their applications, leading to longer development times
            and potentially buggy software.
          </p>
        </AccordionContent>
      </AccordionItem>

      {/* Lesson 3: Understanding the Basics of JSX in ReactJS */}
      <AccordionItem value="item-3" className="mb-4">
        <AccordionTrigger className="text-lg font-semibold bg-gray-200 py-2 px-4 rounded-md hover:bg-gray-300">
          Lesson 3: Understanding the Basics of JSX in ReactJS
        </AccordionTrigger>
        <AccordionContent className="text-base">
          <p>
            JSX is a JavaScript syntactic extension that allows developers to
            write HTML-like code directly in JavaScript files. Facebook introduced
            it as part of their React library. JSX allows developers to easily
            construct complex user interfaces by leveraging the power of
            JavaScript and HTML. There are various advantages to adopting JSX,
            including the ability for developers to produce cleaner, more concise
            code that is easier to read and manage. It also makes it easy to
            visualize a component's structure and debug any difficulties that may
            develop. However, in order to use JSX efficiently in development, it
            is necessary to comprehend its syntax. Knowing how to create elements,
            use expressions, and add properties to components is part of this.
          </p>
        </AccordionContent>
      </AccordionItem>

      {/* Video */}
      <AccordionItem value="video" className="mb-4">
        <AccordionTrigger className="text-lg font-semibold bg-gray-200 py-2 px-4 rounded-md hover:bg-gray-300">
          Videos: Introduction to ReactJS
        </AccordionTrigger>
        <AccordionContent className="text-base">
        <h1>Video One</h1>
          <iframe
            className="w-full h-80"
            src="https://www.youtube.com/embed/Vm7qM1wmXwE"
            title="Introduction to ReactJS"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AccordionContent>
        <AccordionContent className="text-base">
        <h1>Video Two</h1>
          <iframe
            className="w-full h-80"
            src="https://www.youtube.com/embed/Vm7qM1wmXwE"
            title="Introduction to ReactJS"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AccordionContent>
      </AccordionItem>

      {/* File Download */}
      <AccordionItem value="file" className="mb-4">
        <AccordionTrigger className="text-lg font-semibold bg-gray-200 py-2 px-4 rounded-md hover:bg-gray-300">
          Files: Download ReactJS Files
        </AccordionTrigger>
        <AccordionContent className="text-base">
          <p>
            <a
              href="/path/to/reactjs-cheatsheet.pdf"
              download="reactjs-cheatsheet.pdf"
              className="text-blue-600 hover:underline"
            >
              Download ReactJS Files
            </a>
          </p>
          <p>
            <a
              href="/path/to/reactjs-cheatsheet.pdf"
              download="reactjs-cheatsheet.pdf"
              className="text-blue-600 hover:underline"
            >
              Download ReactJS Files
            </a>
          </p>
          <p>
            <a
              href="/path/to/reactjs-cheatsheet.pdf"
              download="reactjs-cheatsheet.pdf"
              className="text-blue-600 hover:underline"
            >
              Download ReactJS Files
            </a>
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
        </div>

        {isPopupVisible && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white shadow-2xl rounded-2xl">
              <AddModulePopup
                onClose={togglePopup}
                onSuccess={handleModuleAdded}
                courseId={courseId}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModuleDetails;

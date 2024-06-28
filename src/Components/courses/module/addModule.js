import React, { useState, useEffect } from "react";
import { Button } from "@/Components/ui/button";
import AddModulePopup from "./addModulePopup"; // Adjust the import path as per your project structure
import { Plus } from "lucide-react";

function Page({ courseId }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [moduleData, setModuleData] = useState([]);

  useEffect(() => {
    const storedModules = JSON.parse(localStorage.getItem("ModuleData")) || [];
    setModuleData(storedModules);
  }, []);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleModuleAdded = () => {
    const storedModules = JSON.parse(localStorage.getItem("ModuleData")) || [];
    setModuleData(storedModules);
    setIsPopupVisible(false);
  };

  return (
    <div className="flex flex-col h-screen relative px-4 md:px-20 lg:px-10">
      <div className="flex flex-col items-end p-5">
        <Button
          className="w-full md:w-[163px] h-[42px] flex gap-2"
          onClick={togglePopup}
        >
          <Plus /> Module
        </Button>
        
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg">
            <iframe
              className="w-full h-96 mb-4"
              src="https://www.youtube.com/embed/Vm7qM1wmXwE"
              title="What is TypeScript"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
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
  );
}

export default Page;

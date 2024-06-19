"use client";

import React, { useState, useEffect } from "react";
import {
  SquarePlus,
  X,
  EllipsisVertical,
  ChevronDown,
  ChevronRight,
  Pencil,
  Combine,
  MoveVertical,
  Trash2,
  BookCopy,
  User,
  CopyPlus,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import AddItemPopup from "./addItemPopup";
import { Card, CardContent } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";

function AddModuleSuccess({ moduleName, visible }) {
  const [modules, setModules] = useState({});
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState({
    [moduleName]: false,
  });
  const [editItem, setEditItem] = useState(null);
  const [currentModule, setCurrentModule] = useState(null);

  useEffect(() => {
    const storedModules = localStorage.getItem("courseModules");
    if (storedModules) {
      setModules(JSON.parse(storedModules));
    }
  }, [visible]);

  const togglePopup = (moduleName) => {
    setCurrentModule(moduleName);
    setIsPopupVisible(!isPopupVisible);
  };

  const toggleAccordion = (moduleName) => {
    setIsAccordionOpen((prev) => ({
      ...prev,
      [moduleName]: !prev[moduleName],
    }));
  };

  const handleAddItem = (item) => {
    const updatedModules = { ...modules };
    if (!Array.isArray(updatedModules[currentModule])) {
      updatedModules[currentModule] = []; // Initialize as an array if not already
    }

    if (editItem !== null) {
      // If editing an existing item
      updatedModules[currentModule][editItem] = item;
      setEditItem(null);
    } else {
      // If adding a new item
      updatedModules[currentModule].push(item); // Push the new item to the array
    }

    setModules(updatedModules);
    localStorage.setItem("courseModules", JSON.stringify(updatedModules));
  };

  const handleEditItem = (moduleName, index) => {
    setEditItem(index);
    togglePopup(moduleName);
  };

  const handleDeleteItem = (moduleName, index) => {
    const updatedModules = { ...modules };
    // Ensure updatedModules[moduleName] is an array before calling splice
    if (Array.isArray(updatedModules[moduleName])) {
      updatedModules[moduleName].splice(index, 1);
      setModules(updatedModules);
      localStorage.setItem("courseModules", JSON.stringify(updatedModules));
    }
  };

  return (
    <div className="w-full">
      {Object.keys(modules).map((moduleKey) => (
        <Card key={moduleKey}>
          <div className="flex justify-between items-center p-4 h-20 bg-[#E0E0E0] rounded-t-lg">
            <div className="flex gap-2">
              <div className="flex items-center">
                {isAccordionOpen[moduleKey] ? (
                  <ChevronDown
                    className="cursor-pointer"
                    onClick={() => toggleAccordion(moduleKey)}
                  />
                ) : (
                  <ChevronRight
                    className="cursor-pointer"
                    onClick={() => toggleAccordion(moduleKey)}
                  />
                )}
                <p className="text-[18px] lg:text-[25px] font-bold break-words">
                  {moduleKey}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-2">
                <AlertDialog
                  open={isPopupVisible && currentModule === moduleKey}
                  onOpenChange={setIsPopupVisible}
                >
                  <AlertDialogTrigger asChild>
                    <SquarePlus
                      className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] cursor-pointer"
                      onClick={() => {
                        setEditItem(null);
                        togglePopup(moduleKey);
                      }}
                    />
                  </AlertDialogTrigger>
                  <AlertDialogContent className="w-full max-w-screen-md h-auto max-h-screen-md">
                    <AlertDialogFooter>
                      <AlertDialogCancel className="text-black">
                        <X className="cursor-pointer" onClick={togglePopup} />
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                    <div className="overflow-y-auto h-full max-h-[60vh] p-4">
                      <AddItemPopup
                        popUp={() => togglePopup(moduleKey)}
                        onAddItem={handleAddItem}
                        initialValues={
                          editItem !== null
                            ? modules[moduleKey][editItem]
                            : null
                        }
                      />
                    </div>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
              {/* <Button className="bg-[#E0E0E0] hover:bg-[#b9b6b6]">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <EllipsisVertical className="text-gray-500 cursor-pointer" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48">
                    <DropdownMenuGroup>
                      <DropdownMenuItem
                        onClick={() => handleEditItem(moduleKey, editItem)}
                      >
                        <Pencil className="mr-2 h-4 w-4" />
                        <span>Edit</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Combine className="mr-2 h-4 w-4" />
                        <span>Move content...</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <MoveVertical className="mr-2 h-4 w-4" />
                        <span>Move module.</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDeleteItem(moduleKey, editItem)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <BookCopy className="mr-2 h-4 w-4" />
                        <span>Duplicate</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Send To.</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CopyPlus className="mr-2 h-4 w-4" />
                        <span>Copy To.</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </Button> */}
            </div>
          </div>
          <CardContent>
            {isAccordionOpen[moduleKey] && (
              <div className="mt-4 flex flex-col gap-4">
                {Array.isArray(modules[moduleKey]) &&
                  modules[moduleKey].map((item, index) => (
                    <div
                      key={index}
                      className="card bg-[#E0E0E0] rounded-lg w-11/12 h-aut flex justify-between items-center p-5 lg:p-4"
                    >
                      <div className="flex-1 w-10 sm:w-20 md:w-20 lg:w-96">
                        <p className="text-[18px] lg:text-[25px] font-bold break-words">
                          {item.assignmentDescription}
                        </p>
                      </div>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <EllipsisVertical className="cursor-pointer w-40" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                          <DropdownMenuGroup>
                            <DropdownMenuItem
                              onClick={() => handleEditItem(moduleName, index)}
                            >
                              <Pencil className="mr-2 h-4 w-4" />
                              <span>Edit</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Combine className="mr-2 h-4 w-4" />
                              <span>Move content...</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <MoveVertical className="mr-2 h-4 w-4" />
                              <span>Move module.</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() =>
                                handleDeleteItem(moduleName, index)
                              }
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              <span>Delete</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <BookCopy className="mr-2 h-4 w-4" />
                              <span>Duplicate</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <User className="mr-2 h-4 w-4" />
                              <span>Send To.</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <CopyPlus className="mr-2 h-4 w-4" />
                              <span>Copy To.</span>
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  ))}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default AddModuleSuccess;

import React, { useState, useEffect } from "react";
import {
  SquarePlus,
  ChevronDown,
  ChevronRight,
  EllipsisVertical,
  Pencil,
  Combine,
  MoveVertical,
  Trash2,
  BookCopy,
  User,
  CopyPlus,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import AddItemPopup from "./addItemPopup";
import AddModulePopup from "./addModulePopup";
import { Card, CardContent } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import DraggableHomeCard from "./draggableHomeCard";
import { Draggable, Droppable } from "react-drag-and-drop";

function AddModuleSuccess({ visible }) {
  const [modules, setModules] = useState([]);
  const [items, setItems] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isModulePopupVisible, setIsModulePopupVisible] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState({});
  const [editModule, setEditModule] = useState(null);
  const [currentModule, setCurrentModule] = useState(null);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    const storedModules =
      JSON.parse(localStorage.getItem("HomeModuleData")) || [];
    const storedItems = JSON.parse(localStorage.getItem("HomeItemData")) || [];
    setModules(storedModules);
    setItems(storedItems);
  }, [visible, isModulePopupVisible]);

  const toggleAccordion = (moduleId) => {
    setIsAccordionOpen((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId],
    }));
  };

  const togglePopup = (moduleId) => {
    setCurrentModule(moduleId);
    setIsPopupVisible(!isPopupVisible);
    setEditItem(null); 
  };

  const handleAddItem = (itemData) => {
    let updatedItems;
    if (editItem) {
      updatedItems = items.map((item) =>
        item.id === itemData.id ? { ...item, ...itemData } : item
      );
    } else {
      updatedItems = [...items, itemData];
    }
    setItems(updatedItems);
    localStorage.setItem("HomeItemData", JSON.stringify(updatedItems));
  };

  const handleDeleteModule = (moduleId) => {
    const updatedModules = modules.filter((module) => module.id !== moduleId);
    setModules(updatedModules);
    localStorage.setItem("HomeModuleData", JSON.stringify(updatedModules));

    const updatedItems = items.filter((item) => item.moduleId !== moduleId);
    setItems(updatedItems);
    localStorage.setItem("HomeItemData", JSON.stringify(updatedItems));
  };

  const handleEditModule = (moduleId) => {
    setEditModule(modules.find((module) => module.id === moduleId));
    setIsModulePopupVisible(true);
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
    localStorage.setItem("HomeItemData", JSON.stringify(updatedItems));
  };

  const handleEditItem = (item) => {
    setEditItem(item);
    setCurrentModule(item.moduleId);
    setIsPopupVisible(true);
  };

  const handleAddModule = (moduleData) => {
    if (editModule) {
      const updatedModules = modules.map((module) =>
        module.id === editModule.id ? { ...module, ...moduleData } : module
      );
      setModules(updatedModules);
      localStorage.setItem("HomeModuleData", JSON.stringify(updatedModules));
    } else {
      const newModule = {
        id: modules.length + 1,
        moduleName: moduleData.moduleName,
      };
      const updatedModules = [...modules, newModule];
      setModules(updatedModules);
      localStorage.setItem("HomeModuleData", JSON.stringify(updatedModules));
    }
    setIsModulePopupVisible(false);
    setEditModule(null);
  };

  const handleDrop = (moduleId, droppedItem) => {
    const { item, originalModuleId } = droppedItem;

    if (originalModuleId !== moduleId) {
      const itemIndex = items.findIndex((i) => i.id === item.id);

      if (itemIndex !== -1) {
        const updatedItems = [...items];

        updatedItems[itemIndex] = { ...item, moduleId };

        setItems(updatedItems);
        localStorage.setItem("HomeItemData", JSON.stringify(updatedItems));
      }
    }
  };

  const closePopup = () => {
    setIsModulePopupVisible(false);
    setEditModule(null);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {modules.map((module) => (
        <Droppable
          key={module.id}
          types={["item"]}
          onDrop={(data) => handleDrop(module.id, JSON.parse(data.item))}
        >
          <Card>
            <div className="flex justify-between items-center p-4 h-20 bg-[#E0E0E0] rounded-t-lg">
              <div className="flex gap-2">
                <div className="flex items-center">
                  {isAccordionOpen[module.id] ? (
                    <ChevronDown
                      className="cursor-pointer"
                      onClick={() => toggleAccordion(module.id)}
                    />
                  ) : (
                    <ChevronRight
                      className="cursor-pointer"
                      onClick={() => toggleAccordion(module.id)}
                    />
                  )}
                  <p className="text-[18px] lg:text-[25px] font-bold break-words">
                    {module.moduleName}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <SquarePlus
                  className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] cursor-pointer"
                  onClick={() => togglePopup(module.id)}
                />
                <Button className="bg-[#E0E0E0] hover:bg-[#b9b6b6]">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <EllipsisVertical className="text-gray-500 cursor-pointer" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48">
                      <DropdownMenuGroup>
                        <DropdownMenuItem
                          onClick={() => handleEditModule(module.id)}
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
                          <span>Move module</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDeleteModule(module.id)}
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
                          <span>Send To</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <CopyPlus className="mr-2 h-4 w-4" />
                          <span>Copy To</span>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </Button>
              </div>
            </div>
            {isAccordionOpen[module.id] && (
              <CardContent>
                <div className="mt-4 flex flex-col gap-4">
                  {items
                    .filter((item) => item.moduleId === module.id)
                    .map((item) => {
                      const originalIndex = items.findIndex(
                        (a) => a.id === item.id
                      );
                      return (
                        <Draggable
                          key={item.id}
                          type="item"
                          data={JSON.stringify({ item, moduleId: module.id })}
                        >
                          <DraggableHomeCard
                            item={item}
                            index={originalIndex}
                            handleEditItem={handleEditItem}
                            handleDeleteItem={handleDeleteItem}
                          />
                        </Draggable>
                      );
                    })}
                </div>
              </CardContent>
            )}
          </Card>
        </Droppable>
      ))}
      {isPopupVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white shadow-2xl rounded-2xl">
            <AddItemPopup
              popUp={() => setIsPopupVisible(false)}
              onAddItem={handleAddItem}
              initialValues={editItem}
              moduleId={currentModule}
            />
          </div>
        </div>
      )}
      {isModulePopupVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white shadow-2xl rounded-2xl">
            <AddModulePopup
              popUp={closePopup}
              onAddModule={handleAddModule}
              initialValues={editModule}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default AddModuleSuccess;

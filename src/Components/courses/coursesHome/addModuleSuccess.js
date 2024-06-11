"use client";

import React, { useState } from "react";
import {
  SquarePlus,
  X,
  EllipsisVertical,
  ChevronDown,
  ChevronUp,
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

function AddModuleSuccess({ moduleName }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const handleAddItem = (item) => {
    if (editItem !== null) {
      const updatedItems = items.map((existingItem, index) =>
        index === editItem ? item : existingItem
      );
      setItems(updatedItems);
      setEditItem(null);
    } else {
      setItems([...items, item]);
    }
  };

  const handleEditItem = (index) => {
    setEditItem(index);
    togglePopup();
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, itemIndex) => itemIndex !== index);
    setItems(updatedItems);
  };

  return (
    <div className="w-full">
      <div className="card shadow-2xl rounded-xl bg-[#398CEE] w-full text-white flex justify-between items-center p-5 lg:p-4">
        <div className="flex-1 w-10 sm:w-20 md:w-20 lg:w-96">
          <p className="text-[18px] lg:text-[25px] font-bold break-words">
            {moduleName}
          </p>
        </div>
        <div className="flex gap-2">
          <AlertDialog open={isPopupVisible} onOpenChange={setIsPopupVisible}>
            <AlertDialogTrigger asChild>
              <SquarePlus
                className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] cursor-pointer"
                onClick={() => {
                  setEditItem(null);
                  togglePopup();
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
                  popUp={togglePopup}
                  onAddItem={handleAddItem}
                  initialValues={editItem !== null ? items[editItem] : null}
                />
              </div>
            </AlertDialogContent>
          </AlertDialog>
          {isAccordionOpen ? (
            <ChevronUp className="cursor-pointer" onClick={toggleAccordion} />
          ) : (
            <ChevronDown className="cursor-pointer" onClick={toggleAccordion} />
          )}
        </div>
      </div>

      {isAccordionOpen && (
        <div className="mt-4 flex flex-col gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="card shadow-2xl rounded-xl bg-[#398CEE] w-11/12 h-auto text-white flex justify-between items-center p-5 lg:p-4"
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
                    <DropdownMenuItem onClick={() => handleEditItem(index)}>
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
                    <DropdownMenuItem onClick={() => handleDeleteItem(index)}>
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
    </div>
  );
}

export default AddModuleSuccess;

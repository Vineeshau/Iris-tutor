import React from "react";
import { Draggable } from "react-drag-and-drop";
import { EllipsisVertical, GripVertical, FilePenLine, Pencil, Combine, MoveVertical, Trash2, BookCopy, User, CopyPlus } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/Components/ui/dropdown-menu";
import { Button } from "@/Components/ui/button";

function DraggableAssignmentCard({ assignment, index, handleEditItem, handleDeleteItem }) {
  return (
    <Draggable type="assignment" data={JSON.stringify({ assignment, index })}>
      <div key={index} className="w-full">
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <div className="flex gap-2">
              <GripVertical />
              <FilePenLine />
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-bold">{assignment.assignmentName}</p>
              <div className="flex gap-2">
                <p className="font-bold">Available until</p>
                <p>{assignment.availableUntil}</p> |
                <p className="font-bold">Due</p>
                <p>{assignment.dueDate}</p>|
                <p>{assignment.points} pts</p>
              </div>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <EllipsisVertical className="cursor-pointer" />
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
        <div className="flex justify-end">
          <Button className="bg-black hover:bg-[#2e2d2d]">Publish</Button>
        </div>
        <hr className="my-4" />
      </div>
    </Draggable>
  );
}

export default DraggableAssignmentCard;

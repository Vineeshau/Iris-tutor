import React from "react";
import { Draggable } from "react-drag-and-drop";
import {
  EllipsisVertical,
  GripVertical,
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

function DraggableHomeCard({ item, index, handleEditItem, handleDeleteItem }) {
  return (
    <Draggable type="assignment" data={JSON.stringify({ item, index })}>
      <div className="card bg-[#E0E0E0] rounded-lg w-11/12 h-aut flex justify-between items-center p-5 lg:p-4">
        <GripVertical />
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
              <DropdownMenuItem onClick={() => handleEditItem(item)}>
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
              <DropdownMenuItem onClick={() => handleDeleteItem(item.id)}>
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
    </Draggable>
  );
}

export default DraggableHomeCard;

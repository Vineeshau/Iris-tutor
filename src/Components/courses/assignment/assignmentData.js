import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import {
  ChevronDown,
  ChevronRight ,
  Plus,
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
import AssignmentPopup from "./assignmentPopup";
import GroupPopup from "./groupPopup";
import DraggableAssignmentCard from "./draggableAssignmentCard";
import { Draggable, Droppable } from "react-drag-and-drop";

function AssignmentData({ visibleAssignment, visibleGroup }) {
  const [assignments, setAssignments] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentAssignment, setCurrentAssignment] = useState(null);
  const [currentGroup, setCurrentGroup] = useState(null);
  const [assignmentGroups, setAssignmentGroups] = useState([]);
  const [reload, setReload] = useState(false);
  const [groupPopup, setGroupPopup] = useState(false);
  const [groupVisibility, setGroupVisibility] = useState({});

  useEffect(() => {
    const initialVisibility = {};
    assignmentGroups.forEach((group) => {
      initialVisibility[group.id] = true;
    });
    setGroupVisibility(initialVisibility);
  }, [assignmentGroups]);

  const toggleGroupVisibility = (groupId) => {
    setGroupVisibility((prevState) => ({
      ...prevState,
      [groupId]: !prevState[groupId],
    }));
  };

  useEffect(() => {
    const storedAssignments =
      JSON.parse(localStorage.getItem("assignments")) || [];
    setAssignments(storedAssignments);
    console.log("Loaded assignments from local storage:", storedAssignments);

    const storedGroups =
      JSON.parse(localStorage.getItem("assignmentGroups")) || [];
    setAssignmentGroups(storedGroups);
    console.log("Loaded groups from local storage:", storedGroups);
  }, [visibleAssignment, visibleGroup, isPopupOpen, groupPopup]);

  const handleEditItem = (index) => {
    setCurrentAssignment(assignments[index]);
    setIsPopupOpen(true);
  };

  const handleGroupEditItem = (index) => {
    setCurrentGroup(assignmentGroups[index]);
    setGroupPopup(true);
  };

  const handleDeleteItem = (index) => {
    const updatedAssignments = assignments.filter((_, i) => i !== index);
    setAssignments(updatedAssignments);
    localStorage.setItem("assignments", JSON.stringify(updatedAssignments));
    console.log("Updated assignments after deletion:", updatedAssignments);
  };

  const handleGroupDeleteItem = (index) => {
    const updatedGroups = assignmentGroups.filter((_, i) => i !== index);
    setAssignmentGroups(updatedGroups);
    localStorage.setItem("assignmentGroups", JSON.stringify(updatedGroups));
    console.log("Updated groups after deletion:", updatedGroups);
  };

  const togglePopup = () => {
    setReload(!reload);
    setIsPopupOpen(!isPopupOpen);
    if (isPopupOpen) {
      setCurrentAssignment(null);
    }
  };

  const toggleGroupPopup = () => {
    setReload(!reload);
    setGroupPopup(!groupPopup);
    if (groupPopup) {
      setCurrentGroup(null);
    }
  };

  const handleDrop = (data) => {
    const { assignment, index } = JSON.parse(data.assignment);
    const droppedGroupId = assignment.groupId;
    const updatedAssignments = assignments.filter((_, i) => i !== index);
    const updatedGroups = assignmentGroups
      .map((group) => {
        if (group.id === droppedGroupId) {
          return {
            ...group,
            assignments: [...group.assignments, assignment],
          };
        }
        return group;
      })
      .map((group) => {
        group.assignments.forEach((a, idx) => {
          if (idx === index) {
            a.assignmentGroup = group.assignmentGroup;
          }
        });
        return group;
      });

    setAssignments(updatedAssignments);
    setAssignmentGroups(updatedGroups);

    localStorage.setItem("assignments", JSON.stringify(updatedAssignments));
    localStorage.setItem("assignmentGroups", JSON.stringify(updatedGroups));

    console.log("Assignments after drop:", updatedAssignments);
    console.log("Groups after drop:", updatedGroups);
  };

  return (
    <div className="flex flex-col gap-4">
      {assignmentGroups.map((group, index) => (
        <Droppable key={group.id} types={["assignment"]} onDrop={handleDrop}>
          <Card>
            <div className="flex justify-between items-center p-4 h-20 bg-[#E0E0E0] rounded-t-lg">
              <div className="flex gap-2">
                <div className="flex">
                  {groupVisibility[group.id] ? (
                    <ChevronDown 
                      onClick={() => toggleGroupVisibility(group.id)}
                    />
                  ) : (
                    <ChevronRight
                      onClick={() => toggleGroupVisibility(group.id)}
                    />
                  )}
                  <p className="font-bold">{group.assignmentGroup}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Plus
                  className="text-[gray] cursor-pointer"
                  onClick={togglePopup}
                />
                <Button className="bg-[#E0E0E0] hover:bg-[#b9b6b6]">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <EllipsisVertical className="text-[gray] cursor-pointer" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuGroup>
                        <DropdownMenuItem
                          onClick={() => handleGroupEditItem(index)}
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
                          onClick={() => handleGroupDeleteItem(index)}
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
                </Button>
              </div>
            </div>
            {groupVisibility[group.id] && (
              <CardContent>
                {assignments.map((assignment, idx) => (
                  <DraggableAssignmentCard
                    key={assignment.id}
                    assignment={assignment}
                    index={idx}
                    handleEditItem={handleEditItem}
                    handleDeleteItem={handleDeleteItem}
                  />
                ))}
              </CardContent>
            )}
          </Card>
        </Droppable>
      ))}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white shadow-2xl rounded-2xl">
            <AssignmentPopup
              isOpen={isPopupOpen}
              popUp={togglePopup}
              assignment={currentAssignment}
            />
          </div>
        </div>
      )}
      {groupPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white shadow-2xl rounded-2xl">
            <GroupPopup
              isOpen={groupPopup}
              popUp={toggleGroupPopup}
              currentGroup={currentGroup}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default AssignmentData;
  
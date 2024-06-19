"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";

const dropdownItems = [
  { title: "Home" },
  { title: "Announcement" },
  { title: "Assignment" },
  { title: "Discussion" },
  { title: "Grade" },
  { title: "People" },
  { title: "Pages" },
  { title: "Files" },
  { title: "Syllabus" },
  { title: "Outcome" },
  { title: "Rubrics" },
  { title: "Quizzes" },
  { title: "Modules" },
  { title: "Settings" },
];

function SelectItems({ onValueChange, selectedComponent }) {
  return (
    <div className="px-5 md:px-20 lg:px-30">
      <Select onValueChange={onValueChange}>
        <SelectTrigger className="w-full md:w-[294px] border border-black">
          <SelectValue placeholder={selectedComponent} />
        </SelectTrigger>
        <SelectContent>
          {dropdownItems.map((items) => (
            <SelectItem key={items.title} value={items.title}>
              {items.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectItems;

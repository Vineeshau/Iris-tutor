"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import {
  EllipsisVertical,
  Eye,
  SquareArrowUp,
  SquareArrowDown,
  CornerUpLeft,
  Pencil,
  Trash2,
} from "lucide-react";
import { Input } from "@/Components/ui/input";
import AnnouncementPopup from "./announcementPopup";

function AnnouncementDatas({ onEmpty }) {
  const [announcements, setAnnouncements] = useState([]);
  const [editData, setEditData] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const storedAnnouncements =
      JSON.parse(localStorage.getItem("announcements")) || [];
    setAnnouncements(storedAnnouncements);
    if (storedAnnouncements.length === 0) {
      onEmpty();
    }
  }, []);

  const handleDelete = (id) => {
    const updatedAnnouncements = announcements.filter(
      (announcement) => announcement.id !== id
    );
    setAnnouncements(updatedAnnouncements);
    localStorage.setItem("announcements", JSON.stringify(updatedAnnouncements));
    if (updatedAnnouncements.length === 0) {
      onEmpty();
    }
  };

  const handleEdit = (announcement) => {
    setEditData(announcement);
    setIsEditMode(true);
    setIsPopupOpen(true);
  };

  const handleSuccess = () => {
    const storedAnnouncements =
      JSON.parse(localStorage.getItem("announcements")) || [];
    setAnnouncements(storedAnnouncements);
    setIsEditMode(false);
    setIsPopupOpen(false);
    if (storedAnnouncements.length === 0) {
      onEmpty();
    }
  };

  if (announcements.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2">
      {announcements.map((announcement) => (
        <>
          <Card key={announcement.id} className="shadow-2xl rounded-lg">
            <div className="flex justify-end items-center p-4 h-20 bg-[#E0E0E0] rounded-t-lg">
              <Button className="border-2 border-[#b9b6b6] bg-[#E0E0E0] hover:bg-[#b9b6b6]">
                <EllipsisVertical className="text-black" />
              </Button>
            </div>
            <CardContent className="overflow-hidden">
              <div className="flex flex-col gap-4 py-10">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <p className="text-2xl">{announcement.title}</p>
                    <p className="text-xs">
                      {new Date().toLocaleString()}
                    </p>{" "}
                    {/* Updated line */}
                  </div>
                  <p className="text-xs text-[blue]">Email</p>
                  <p>{announcement.postTo}</p>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: announcement.titleDescription,
                  }}
                />
              </div>
            </CardContent>
            <div className="bg-[#E0E0E0] h-20 flex items-center p-4 gap-2">
              <Input
                type="text"
                className="h-10 w-1/6 rounded-md border-2 border-[#b9b6b6]"
                placeholder="Search entries or author"
              />
              <Button className="border-2 border-[#b9b6b6] bg-[#E0E0E0] hover:bg-[#b9b6b6] text-black">
                Unread
              </Button>
              <Button className="border-2 border-[#b9b6b6] bg-[#E0E0E0] hover:bg-[#b9b6b6]">
                <Eye className="text-black" />
              </Button>
              <div className="flex gap-1">
                <Button className="border-2 border-[#b9b6b6] bg-[#E0E0E0] hover:bg-[#b9b6b6]">
                  <SquareArrowUp className="text-black" />
                </Button>
                <Button className="border-2 border-[#b9b6b6] bg-[#E0E0E0] hover:bg-[#b9b6b6]">
                  <SquareArrowDown className="text-black" />
                </Button>
              </div>
            </div>
            <CardFooter className="w-full flex items-center py-4">
              <div className="w-full flex relative">
                <CornerUpLeft className="absolute left-3 top-2 text-gray-500 cursor-pointer" />
                <Input
                  type="text"
                  placeholder="Reply"
                  className="border-2 border-[#b9b6b6] w-full h-10 pl-10"
                />
              </div>
            </CardFooter>
          </Card>
          <div className="flex justify-end gap-2 py-2">
            <Button onClick={() => handleEdit(announcement)}>
              <Pencil />
            </Button>
            <Button
              className="bg-[red] hover:bg-[#fe3e3e]"
              onClick={() => handleDelete(announcement.id)}
            >
              <Trash2 />
            </Button>
          </div>
        </>
      ))}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white shadow-2xl rounded-2xl">
            <AnnouncementPopup
              popUp={() => setIsPopupOpen(false)}
              onSuccess={handleSuccess}
              editData={editData}
              isEditMode={isEditMode}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default AnnouncementDatas;

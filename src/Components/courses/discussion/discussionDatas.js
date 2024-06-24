"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import {
  Eye,
  SquareArrowUp,
  SquareArrowDown,
  CornerUpLeft,
  Pencil,
  Trash2,
  EllipsisVertical,
} from "lucide-react";
import { Input } from "@/Components/ui/input";
import DiscussionPopup from "./discussionPopup";

function DiscussionDatas({ onEmpty, visible }) {
  const [discussions, setDiscussions] = useState([]);
  const [editData, setEditData] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);


  useEffect(() => {
    const storedDiscussions =
      JSON.parse(localStorage.getItem("discussions")) || [];
    setDiscussions(storedDiscussions);
    if (storedDiscussions.length === 0) {
      onEmpty();
    }
  }, [visible]);

  const handleDelete = (id) => {
    const updatedDiscussions = discussions.filter(
      (discussion) => discussion.id !== id
    );
    setDiscussions(updatedDiscussions);
    localStorage.setItem("discussions", JSON.stringify(updatedDiscussions));
    if (updatedDiscussions.length === 0) {
      onEmpty();
    }
  };

  const handleEdit = (discussion) => {
    setEditData(discussion);
    setIsEditMode(true);
    setIsPopupOpen(true);
  };

  const handleSuccess = () => {
    const storedDiscussions =
      JSON.parse(localStorage.getItem("discussions")) || [];
    setDiscussions(storedDiscussions);
    setIsEditMode(false);
    setIsPopupOpen(false);
    if (storedDiscussions.length === 0) {
      onEmpty();
    }
  };

  if (discussions.length === 0) {
    return null;
  }
  const handleDiscussionClick = (discussion) => {
    setSelectedDiscussion(discussion);
    console.log(discussion)
  };

  return (
    <div className="flex flex-col gap-11">
      {discussions.map((discussion) => (
        <div
          key={discussion.id}
          onClick={() => handleDiscussionClick(discussion)}
        >
          <Card className="rounded-lg cursor-pointer">
            {" "}
            <div className="flex justify-end items-center p-4 h-10 bg-[#E0E0E0] rounded-t-lg gap-6">
              <Pencil onClick={() => handleEdit(discussion)} />
              <Trash2 onClick={() => handleDelete(discussion.id)} />
            </div>
            <CardContent className="overflow-hidden">
              <div className="flex flex-col gap-4 py-10">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <p className="text-2xl font-bold">{discussion.title}</p>
                    <p className="text-xs">{new Date().toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white shadow-2xl rounded-2xl">
            <DiscussionPopup
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

export default DiscussionDatas;

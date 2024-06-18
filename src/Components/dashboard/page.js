"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Card, CardContent } from "@/Components/ui/card";
import cardData from "../../data/dashboard_courses.json";
import Image from "next/image";
import {
  StickyNote,
  MessageSquare,
  Files,
  NotebookPen,
  ChevronRight,
  ChevronLeft,
  CalendarDays,
} from "lucide-react";

export default function Home() {
  const [activeButton, setActiveButton] = useState("first");
  const [startIndexPublished, setStartIndexPublished] = useState(0);
  const [startIndexUnpublished, setStartIndexUnpublished] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const { publishedDatas, unpublishedDatas } = cardData;

  const cards = activeButton === "first" ? publishedDatas : unpublishedDatas;
  const startIndex =
    activeButton === "first" ? startIndexPublished : startIndexUnpublished;
  const visibleCards = cards.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (activeButton === "first") {
      if (startIndexPublished + 3 < publishedDatas.length) {
        setStartIndexPublished(startIndexPublished + 1);
        setCurrentPage(currentPage + 1);
      }
    } else {
      if (startIndexUnpublished + 3 < unpublishedDatas.length) {
        setStartIndexUnpublished(startIndexUnpublished + 1);
        setCurrentPage(currentPage + 1);
      }
    }
  };

  const handlePrev = () => {
    if (activeButton === "first") {
      if (startIndexPublished > 0) {
        setStartIndexPublished(startIndexPublished - 1);
        setCurrentPage(currentPage - 1);
      }
    } else {
      if (startIndexUnpublished > 0) {
        setStartIndexUnpublished(startIndexUnpublished - 1);
        setCurrentPage(currentPage - 1);
      }
    }
  };

  return (
    <div className="bg-white-100 min-h-[70vh] flex flex-col">
      <div className="flex flex-col md:flex-row h-1/4">
        <div className="bg-white-200 w-full md:w-1/2 flex items-center justify-start">
          <div className="text-black text-xl px-4 md:px-10 font-bold">
            Dashboard
          </div>
        </div>
        <div className="bg-white-500 w-full md:w-1/2 flex items-center justify-end">
          <div className="flex flex-col justify-around w-full md:w-2/4 h-full p-4 space-y-4 py-5">
            <div className="flex flex-col items-center h-1/3">
              <div className="flex items-center space-x-2 w-48 gap-3">
                <span className="material-icons text-sm font-bold">
                  Coming Up
                </span>
                <div className="flex items-center space-x-1">
                  <CalendarDays className="text-blue-500" />
                  <Link
                    href="/dashboard/calendar"
                    className="text-sm font-bold text-blue-500"
                  >
                    Calendar
                  </Link>
                </div>
              </div>
              <div className="border-b-2 border-gray mt-1 w-48"></div>
            </div>

            <div className="flex justify-center h-1/3">
              <button className="bg-[#3278FF] text-white px-4 py-2 rounded w-48">
                Start a new Course
              </button>
            </div>
            <div className="flex justify-center  h-1/3">
              <button className="bg-[#3278FF] text-white px-4 py-2 rounded w-48">
                View Grades
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white-300 flex flex-col py-1 gap-4 h-auto">
        <div className="relative flex justify-center w-full h-1/12">
          <div className="relative flex justify-center px-4 md:px-36 w-full">
            <button
              onClick={() => setActiveButton("first")}
              className={`px-4 py-2 ${
                activeButton === "first"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500 border-b-2 border-gray-500"
              }`}
            >
              Published
            </button>
            <button
              onClick={() => setActiveButton("second")}
              className={`px-4 py-2 ${
                activeButton === "second"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500 border-b-2 border-gray-500"
              }`}
            >
              Unpublished
            </button>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <button onClick={handlePrev} className="px-4 py-2 text-gray-500">
            <ChevronLeft />
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full sm:w-4/5 lg:w-4/5">
            {visibleCards.map((card) => (
              <Card
                key={card.id}
                className="border rounded-2xl shadow-2xl w-full"
              >
                <div className="relative">
                  {activeButton === "second" && (
                    <button className="bg-black-500 text-white px-2 py-1 rounded mt-4 absolute left-2 border border-white">
                      Publish
                    </button>
                  )}
                  <div className=" overflow-hidden">
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      layout="responsive"
                      objectFit="cover"
                      className="rounded-2xl w-auto object-fill"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
                <CardContent className="p-5 py-10">
                  <div className="mb-4">
                    <h2 className="text-xl font-bold">{card.title}</h2>
                  </div>
                  <div className="mb-4">
                    <p>{card.description}</p>
                  </div>
                  <div className="flex gap-4 md:gap-5 overflow-hidden">
                    <Link href={card.link1} passHref>
                      <div className="text-blue-500 hover:underline">
                        <span className="material-icons">
                          <StickyNote />
                        </span>
                      </div>
                    </Link>
                    <Link href={card.link2} passHref>
                      <div className="text-blue-500 hover:underline">
                        <span className="material-icons">
                          <NotebookPen />
                        </span>
                      </div>
                    </Link>
                    <Link href={card.link3} passHref>
                      <div className="text-blue-500 hover:underline">
                        <span className="material-icons">
                          <MessageSquare />
                        </span>
                      </div>
                    </Link>
                    <Link href={card.link4} passHref>
                      <div className="text-blue-500 hover:underline">
                        <span className="material-icons">
                          <Files />
                        </span>
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <button onClick={handleNext} className="px-4 py-2 text-gray-500">
            <ChevronRight />
          </button>
        </div>
        <div>
          {/* Pagination dots */}
          <div className="flex justify-center items-center space-x-2">
            {Array.from({ length: 4 }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`w-3 h-3 rounded-full ${
                  page === currentPage
                    ? "bg-blue-500"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

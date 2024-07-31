import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import {
  StickyNote,
  MessageSquare,
  NotebookPen,
  Files,
  CalendarDays,
} from 'lucide-react';
import New from '@/Components/dashboard/startNewCourseDialog';
import {
  toggleDialog,
  setStoredCourses,
  setActiveButton,
  publishCourse,
} from '@/store/dashboardSlice';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/Components/ui/tooltip';

function Dashboard() {
  const dispatch = useDispatch();
  const storedCourses = useSelector((state) => state.dashboard.storedCourses);
  const isDialogOpen = useSelector((state) => state.dashboard.isDialogOpen);
  const activeButton = useSelector((state) => state.dashboard.activeButton);

  useEffect(() => {
    const courses = JSON.parse(localStorage.getItem('courses')) || [];
    dispatch(setStoredCourses(courses));
  }, [isDialogOpen]);

  const openDialog = () => {
    dispatch(toggleDialog());
  };

  const handlePublish = (index) => {
    dispatch(publishCourse(index));
    // Implement any other logic needed
  };

  const filteredCourses = storedCourses.filter((course) =>
    activeButton === 'first' ? course.publish : !course.publish
  );

  const setActive = (button) => {
    dispatch(setActiveButton(button));
  };

  return (
    <div className="bg-white-100 min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row h-1/4">
        <div className="bg-white-200 w-full md:w-1/2 flex items-center justify-start">
          <div className="text-black text-3xl px-4 md:px-10 font-bold">
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
              <button
                className="bg-[#3278FF] text-white px-4 py-2 rounded w-48"
                onClick={openDialog}
              >
                Start a new Course
              </button>
            </div>
            <div className="flex justify-center h-1/3">
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
              onClick={() => setActive('first')}
              className={`px-4 py-2 ${
                activeButton === 'first'
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-500 border-b-2 border-gray-500'
              }`}
            >
              Published
            </button>
            <button
              onClick={() => setActive('second')}
              className={`px-4 py-2 ${
                activeButton === 'second'
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-500 border-b-2 border-gray-500'
              }`}
            >
              Unpublished
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 max-w-10xl mx-auto py-6">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="max-w-md sm:max-w-full md:max-w-md lg:w-96 rounded-lg shadow-lg overflow-hidden bg-white"
            >
              <div className="relative h-48">
                <Image
                  alt="Course image"
                  src={course.courseThumbnail}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
                {activeButton === 'second' && !course.publish && (
                  <button
                    className="absolute top-4 right-4 bg-black text-white px-2 py-1 rounded border border-black"
                    onClick={() => handlePublish(index)}
                  >
                    Publish
                  </button>
                )}
              </div>
              <div className="p-4 flex flex-col gap-6">
                <div className="flex flex-col items-start justify-start">
                  <h5 className="text-lg font-bold">{course.coursename}</h5>
                </div>
                <TooltipProvider>
                  <Tooltip id="course-tooltip">
                    <TooltipTrigger>
                      <h5 className="text-medium font-semibold truncate">
                        {course.description}
                      </h5>
                    </TooltipTrigger>
                    <TooltipContent className="custom-tooltip-content w-80 text-sm">
                      <p>{course.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <h5 className="text-sm font-semibold">{course.duration}</h5>
                <div className="flex gap-4 md:gap-5 overflow-hidden mb-2">
                  {activeButton === 'first' && (
                    <>
                      <TooltipProvider key={index}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              href=""
                              passHref
                              onClick={() =>
                                localStorage.setItem(
                                  'linkedItem',
                                  'Announcement'
                                )
                              }
                            >
                              <div className="text-blue-500 hover:underline">
                                <span className="material-icons">
                                  <StickyNote />
                                </span>
                              </div>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View Announcement</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider key={index}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              href=""
                              passHref
                              onClick={() =>
                                localStorage.setItem(
                                  'linkedItem',
                                  'Assignment'
                                )
                              }
                            >
                              <div className="text-blue-500 hover:underline">
                                <span className="material-icons">
                                  <NotebookPen />
                                </span>
                              </div>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View Assignment</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider key={index}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link href="" passHref>
                              <div className="text-blue-500 hover:underline">
                                <span className="material-icons">
                                  <MessageSquare />
                                </span>
                              </div>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View Messages</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider key={index}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link href="" passHref>
                              <div className="text-blue-500 hover:underline">
                                <span className="material-icons">
                                  <Files />
                                </span>
                              </div>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View Files</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </>
                  )}
                  {activeButton === 'second' && (
                    <TooltipProvider key={index}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link href="" passHref>
                            <div className="text-blue-500 hover:underline">
                              <span className="material-icons">
                                <MessageSquare />
                              </span>
                            </div>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View Messages</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white shadow-2xl rounded-2xl">
            {isDialogOpen && <New popUp={openDialog} />}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;

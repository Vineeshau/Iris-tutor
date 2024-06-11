"use client";

import React from "react";
import Image from "next/image";
import {
  User,
  SquareUser,
  LayoutDashboard,
  BookAudio,
  CalendarMinus2,
  Inbox,
  CircleHelp,
  CircleUserRound,
} from "lucide-react";
import MenuLink from "./menuLink/menuLink";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import UserDetails from "../../data/userDetail.json";

const menuItems = [
  {
    title: "pages",
    list: [
      {
        title: "Account",
        path: "/dashboard/account",
        icon: <User />,
      },
      {
        title: "Admin",
        path: "/dashboard/admin",
        icon: <SquareUser />,
      },
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <LayoutDashboard />,
      },
      {
        title: "Courses",
        path: "/dashboard/courses",
        icon: <BookAudio />,
      },
      {
        title: "Calendar",
        path: "/dashboard/calendar",
        icon: <CalendarMinus2 />,
      },
      {
        title: "Inbox",
        path: "/dashboard/inbox",
        icon: <Inbox />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <CircleHelp />,
      },
    ],
  },
];

function sideBar() {
  return (
    <div className="sticky top-0">
      <Card className="w-28 sm:w-28 md:w-60 lg:w-60 h-screen flex flex-col">
        <CardHeader>
          <CardTitle className="pl-10 py-4">
            <Image src="/logo.svg" width={100} height={50} alt="Image" />
          </CardTitle>
        </CardHeader>
        <div className="flex justify-center">
          <hr className="w-full lg:w-56 border-[#ededed]" />
        </div>
        <CardContent className="pt-4 flex-grow overflow-hidden">
          <ul>
            {menuItems.map((cat) => (
              <li key={cat.title}>
                {cat.list.map((item) => (
                  <MenuLink
                    item={item}
                    key={item.title}
                  />
                ))}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="w-28 sm:w-28 md:w-60 lg:w-60 flex flex-row items-start py-4 gap-2 bg-[#3278FF] text-white sticky bottom-0">
          <div>
            <CircleUserRound/>
          </div>
          <div className="w-full max-w-xs overflow-hidden">
            {UserDetails.map((details, index) => (
              <div key={index}>
                <p className="text-xl truncate">{details.name}</p>
                <p className="text-sm truncate">{details.email}</p>
              </div>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default sideBar;

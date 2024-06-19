import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function MenuLink({ item }) {
    const pathname = usePathname();
  return (
    <div className={`w-full flex p-4 items-center m-1 rounded-lg hover:bg-[#F6D4A0] ${pathname === item.path ? "bg-[#F6D4A0]" : ''}`}>
      <Link href={item.path} onClick={() => localStorage.removeItem("linkedItem")} className="flex items-center gap-2 w-full">
        <span>{item.icon}</span>
        <span className="hidden md:block">{item.title}</span>
      </Link>
    </div>
  );
}

export default MenuLink;

import React from "react";
import Navbar from "../../Components/navbar/page";
import Sidebar from "../../Components/sideBar/sideBar";

function Layout({ children }) {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1">
        <Navbar className=""/>
        <div className="overflow-auto">{children}</div>
      </div>
    </div>
  );
}

export default Layout;

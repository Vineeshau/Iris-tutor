import React from "react";
import Navbar from "../../Components/dashboard/navbar";
import Sidebar from "../../Components/dashboard/sidebar";

function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="overflow-auto">{children}</div>
      </div>
    </div>
  );
}

export default Layout;

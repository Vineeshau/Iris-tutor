import React from "react";
import Navbar from "../../Components/navbar/page";
import Sidebar from "../../Components/sideBar/sideBar";

function Layout({children}) {
  return (
    <div className="flex">
      <div>
        <Sidebar/>
      </div>
      <div className="flex-1">
        <Navbar />
        {children}
      </div>
    </div>
  );
} 

export default Layout;

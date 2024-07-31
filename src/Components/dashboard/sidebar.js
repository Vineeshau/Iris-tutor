// components/Sidebar.js
import {
  FaUserCircle,
  FaShieldAlt,
  FaTachometerAlt,
  FaBook,
  FaCalendarAlt,
  FaEnvelope,
  FaQuestionCircle,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div
      className="w-28 h-screen fixed"
      style={{ backgroundColor: "rgba(34, 87, 122, 0.43)" }}
    >
      {" "}
      <div className="flex flex-col items-center py-6">
        <img src="/iris_logo.svg" alt="Logo" className="h-12 mb-12" />
        <div className="flex flex-col items-center mb-6 cursor-pointer">
          <FaUserCircle size={24} className="mb-2" />
          <span className="text-sm">Profile</span>
        </div>
        <div className="flex flex-col items-center mb-6 cursor-pointer">
          <FaShieldAlt size={24} className="mb-2" />
          <span className="text-sm">Admin</span>
        </div>
        <div className="flex flex-col items-center mb-6 cursor-pointer">
          <FaTachometerAlt size={24} className="mb-2" />
          <span className="text-sm">Dashboard</span>
        </div>
        <div className="flex flex-col items-center mb-6 cursor-pointer">
          <FaBook size={24} className="mb-2" />
          <span className="text-sm">Courses</span>
        </div>
        <div className="flex flex-col items-center mb-6 cursor-pointer">
          <FaCalendarAlt size={24} className="mb-2" />
          <span className="text-sm">Calendar</span>
        </div>
        <div className="flex flex-col items-center mb-6 cursor-pointer">
          <FaEnvelope size={24} className="mb-2" />
          <span className="text-sm">Inbox</span>
        </div>
        <div className="flex flex-col items-center mb-6 cursor-pointer">
          <FaQuestionCircle size={24} className="mb-2" />
          <span className="text-sm">FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

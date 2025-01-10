import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation


const Sidebar = () => {
  const [open, setOpen] = useState(true); // State for toggling the sidebar
  const location = useLocation(); // Get the current location/path

  const Menus = [
    { title: "Dashboard", src: "Calendar", path: "/admin/dashboard" },
    { title: "Client Details", src: "Folder", path: "/admin/client-details" },
    { title: "Category Details", src: "Setting", path: "/admin/category-details" },
    { title: "Business Claims", src: "Folder", path: "/schedule" },
    { title: "All Query", src: "Search", path: "/search" },
    { title: "Delete Business", src: "Calendar", path: "/analytics" },
    { title: "Pending Business ", src: "Calendar", path: "/files" },
    { title: "Congratulation", src: "User", path: "/settings" },
    { title: "Logout", src: "User", path: "/" },
  ];

  return (
    <div className=" bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          open ? "w-64" : "w-20"
        } bg-white h-screen p-5 pt-8 border rounded relative duration-100`}
      >
        {/* Toggle Button */}
        <img
          src="./src/assets/admin/control.png" // Replace with your toggle icon path
          alt="Toggle"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 border-customBlue rounded-full  ${
            !open && "rotate-[180deg]"
          }`}
          onClick={() => setOpen(!open)}
        />

        {/* Logo and Title */}
        <div className="flex items-center gap-x-4">
          <img
            src="./src/assets/admin/beez-main-logo.svg" // Replace with your logo path
            alt="Logo"
            className={`cursor-pointer duration-500 w-11 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-customBlue text-xl origin-left duration-200 font-bold ${
              !open && "scale-0"
            }`}
          >
            Beezinfo
          </h1>
        </div>

        {/* Menu Items */}
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`text-customBlue text-sm flex items-center gap-x-4 p-2 my-2 rounded-md cursor-pointer font-bold hover:text-white hover:bg-customBlue ${
                location.pathname === menu.path
                  ? "bg-customBlue text-white" // Apply styles for active menu
                  : ""
              }`}
            >
              <Link to={menu.path} className="w-full flex items-center">
                {/* Icon */}
                <div>
                  <img
                    src={`./src/assets/admin/${menu.src}.png`}
                    alt={menu.title}
                    className="w-5 h-5" // Adjust size of the icon
                  />
                </div>

                {/* Title */}
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 ml-2`}
                >
                  {menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
    </div>
  );
};

export default Sidebar;

import React, { useState } from "react";
import { Link } from "react-router-dom"; // Using Link for routing

function Sidebar() {
  const [open, setOpen] = useState(true); // Sidebar open/close state
  const [activeMenu, setActiveMenu] = useState("Dashboard"); // Active menu state

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          open ? "w-72" : "w-20"
        } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}>
        {/* Toggle Button */}
        <img
          src="./src/assets/admin/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
          alt="toggle"
        />

        {/* Logo */}
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/admin/beez-main-logo.svg"
            className={`cursor-pointer duration-500 w-10 ${
              open && "rotate-[360deg]"
            }`}
            alt="logo"
          />
          <h1
            className={`text-black origin-left font-bold text-2xl duration-200 ${
              !open && "scale-0"
            }`}>
            Beezinfo
          </h1>
        </div>

        {/* Menu List */}
        <ul className="pt-6">
          {[
            {
              name: "Dashboard",
              path: "/admin/dashboard",
              icon: "./src/assets/admin/Chat.png",
            },
            {
              name: "Client Details",
              path: "/admin/client-details",
              icon: "./src/assets/admin/Chat.png",
            },
            {
              name: "Category Details",
              path: "/category-details",
              icon: "./src/assets/admin/User.png",
            },
            {
              name: "Business Claims",
              path: "/business-claims",
              icon: "./src/assets/admin/Calendar.png",
            },
            {
              name: "All Queries",
              path: "/all-queries",
              icon: "./src/assets/admin/Search.png",
            },
            {
              name: "Delete Business",
              path: "/delete-business",
              icon: "./src/assets/admin/Chart.png",
            },
            {
              name: "Pending Business",
              path: "/pending-business",
              icon: "./src/assets/admin/Folder.png",
            },
            {
              name: "Congratulations",
              path: "/congratulations",
              icon: "./src/assets/admin/Setting.png",
            },
            {
              name: "Logout",
              path: "/logout",
              icon: "./src/assets/admin/Setting.png",
            },
          ].map((menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 m-2 cursor-pointer items-center gap-x-4 text-xl font-medium 
                ${
                  activeMenu === menu.name
                    ? "bg-customBlue text-white"
                    : "text-customBlue hover:bg-customBlue hover:text-white"
                }`}>
              <Link
                to={menu.path}
                onClick={() => setActiveMenu(menu.name)}
                className="flex items-center gap-x-4">
                <img
                  src={menu.icon}
                  alt={menu.name}
                  onError={(e) =>
                    (e.target.src = "/assets/admin/placeholder.png")
                  }
                />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}>
                  {menu.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

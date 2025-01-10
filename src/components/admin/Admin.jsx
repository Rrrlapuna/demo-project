import React from 'react';
import { Outlet } from 'react-router-dom'; // Outlet is used to render nested routes

import Sidebar from './Sidebar'; // Import Sidebar component

const Admin = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Content Area */}
      <div className=" flex-1 p-7 bg-gray-100">
        {/* This will render the content based on the current route */}
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;

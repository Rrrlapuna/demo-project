import React from "react";


const Dashboard = () => {
  return (
    <div>
      <div className="min-h-screen w-  bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Active Users</h2>
            <p className="text-4xl font-bold">39</p>
          </div>
          <div className="bg-red-500 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Inactive Users</h2>
            <p className="text-4xl font-bold">13</p>
          </div>
          <div className="bg-cyan-500 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Total Users</h2>
            <p className="text-4xl font-bold">52</p>
          </div>
          <div className="bg-green-600 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Total Clients</h2>
            <p className="text-4xl font-bold">178,594</p>
          </div>
        </div>

        {/* Buttons Section */}

        <button className="w-full  sm:w-auto bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg shadow-md">
          Add Content-Creator
        </button>
        <br />
        <button className="w-full my-5 sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg shadow-md">
          Show Ad Request
        </button>
        <br />
        <button className="w-full  sm:w-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md">
          Ads Section
        </button>
        <br />
        <button className="w-full my-5 sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-lg shadow-md">
          Manage Greetings
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

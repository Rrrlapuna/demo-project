import React, { useState } from "react";
import AddBusiness from "../admin/AddBusiness";

const ClientDetails = () => {
  const [showModel, setShowModel] = useState(false);
  const openModal = () => setShowModel(true) 
  const closeModal = () => setShowModel(false)

  const businesses = [
    {
      id: 1,
      name: "Presidential Holidays",
      address:
        "8A, 1, Yanaikkal St, Simmakkal, Madurai Main, Madurai, Tamil Nadu 625001",
      website: "https://www.presidentialholidays.in",
      listedBy: "presidentialholidays82@gmail.com",
    },
    {
      id: 2,
      name: "Odigyn IVF Centre",
      address:
        "COM-11 1(G, Plot no 1, near Judicial Academy, MARKAT NAGAR, CDA SECTOR 1",
      website: "odigynfertilitycare.com",
      listedBy: "odigynivf@gmail.com",
    },
    {
      id: 3,
      name: "Lataksh India",
      address:
        "Plot No-19,, Bhouma Nagar, Unit-4housing Board Square, Kharavela Nagar",
      website: "www.latakshindia.com",
      listedBy: "latakshindia@gmail.com",
    },
    {
      id: 4,
      name: "Lataksh India",
      address:
        "Plot No-19,, Bhouma Nagar, Unit-4housing Board Square, Kharavela Nagar",
      website: "www.latakshindia.com",
      listedBy: "latakshindia@gmail.com",
    },
    {
      id: 5,
      name: "Lataksh India",
      address:
        "Plot No-19,, Bhouma Nagar, Unit-4housing Board Square, Kharavela Nagar",
      website: "www.latakshindia.com",
      listedBy: "latakshindia@gmail.com",
    },
    {
      id: 6,
      name: "Lataksh India",
      address:
        "Plot No-19,, Bhouma Nagar, Unit-4housing Board Square, Kharavela Nagar",
      website: "www.latakshindia.com",
      listedBy: "latakshindia@gmail.com",
    },
    {
      id: 7,
      name: "Lataksh India",
      address:
        "Plot No-19,, Bhouma Nagar, Unit-4housing Board Square, Kharavela Nagar",
      website: "www.latakshindia.com",
      listedBy: "latakshindia@gmail.com",
    },
    {
      id: 8,
      name: "Lataksh India",
      address:
        "Plot No-19,, Bhouma Nagar, Unit-4housing Board Square, Kharavela Nagar",
      website: "www.latakshindia.com",
      listedBy: "latakshindia@gmail.com",
    },
    {
      id: 9,
      name: "Lataksh India",
      address:
        "Plot No-19,, Bhouma Nagar, Unit-4housing Board Square, Kharavela Nagar",
      website: "www.latakshindia.com",
      listedBy: "latakshindia@gmail.com",
    },
    {
      id: 10,
      name: "Lataksh India",
      address:
        "Plot No-19,, Bhouma Nagar, Unit-4housing Board Square, Kharavela Nagar",
      website: "www.latakshindia.com",
      listedBy: "latakshindia@gmail.com",
    },
    // ... Additional businesses for demonstration
  ];

  return (
    <div className="h-screen overflow-y-scroll bg-gray-100">
      {/* Header Section */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Business Details</h1>
        <div className="space-x-2 mt-4">
          <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Business
          </button>
         {showModel &&  <AddBusiness  closeModal = {closeModal} />}
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Upload Excel
          </button>
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <label htmlFor="filterDate" className="text-gray-700">
            Filter by Date
          </label>
          <select
            id="filterDate"
            className="border rounded px-2 py-1 text-gray-700 w-96"
          >
            <option>All Time</option>
            <option>Last 7 Days</option>
            <option>Last Month</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="border rounded px-4 py-2 w-64 text-gray-700"
        />
      </div>

      {/* Table Section */}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Sl No</th>
              <th className="px-4 py-2 border-b">Business Name</th>
              <th className="px-4 py-2 border-b">Address</th>
              <th className="px-4 py-2 border-b">Website</th>
              <th className="px-4 py-2 border-b">Listed By</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {businesses.map((business, index) => (
              <tr key={business.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b">{index + 1}</td>
                <td className="px-4 py-2 border-b">{business.name}</td>
                <td className="px-4 py-2 border-b">{business.address}</td>
                <td className="px-4 py-2 border-b text-blue-500">
                  <a
                    href={business.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {business.website}
                  </a>
                </td>
                <td className="px-4 py-2 border-b">{business.listedBy}</td>
                <td className="px-4 py-2 border-b">
                  <div className="gap-2">
                    <div className="flex justify-center gap-3">
                      <button className="bg-blue-500 text-white w-20 px-2 py-1 rounded hover:bg-blue-600">
                        View
                      </button>
                      <button className="bg-yellow-500 w-20 text-white px-2 py-1 rounded hover:bg-yellow-600">
                        Edit
                      </button>
                    </div>
                    <div className="flex justify-center mt-1 gap-3">
                      <button className="bg-red-500 w-20 text-white px-2 py-1 rounded hover:bg-red-600">
                        Delete
                      </button>
                      <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">
                        Approve
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    

    </div>
  );
};

export default ClientDetails;

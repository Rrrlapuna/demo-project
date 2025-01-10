import React, { useState } from "react";

const AllQueries = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "RAKESH NAYAK",
      email: "s2sbizsolutions@gmail.com",
      phoneNumber: "7904268178",
      message: "Hi",
    },
    {
      id: 2,
      name: "Rashmi ranjan Rout",
      email: "rashmiranjana.rout2001@gmail.com",
      phoneNumber: "7077077547",
      message: "Hiii",
    },
    {
      id: 3,
      name: "Rashmi ranjan Rout",
      email: "rashmiranjana.rout2001@gmail.com",
      phoneNumber: "7077077547",
      message: "Hiii",
    },
    {
      id: 4,
      name: "Rashmi ranjan Rout",
      email: "rashmiranjana.rout2001@gmail.com",
      phoneNumber: "7077077547",
      message: "Hiii",
    },
    {
      id: 5,
      name: "Rashmi ranjan Rout",
      email: "rashmiranjana.rout2001@gmail.com",
      phoneNumber: "7077077547",
      message: "Hiii",
    },
  ]);
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Filtered data based on search
  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.phoneNumber.includes(search)
  );

  // Pagination logic
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <div className="">
      <h1 className="text-xl font-semibold mb-4">All Queries</h1>

      <div className="shadow-md rounded-lg bg-white p-4">
        {/* Controls (Entries & Search) */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">Show</label>
            <select
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
              className="border border-gray-300 rounded-md text-sm p-1"
            >
              {[10, 25, 50].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <label className="text-sm font-medium text-gray-700">entries</label>
          </div>

          <div className="flex items-center">
            <label className="text-sm font-medium text-gray-700 mr-2">
              Search:
            </label>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 rounded-md p-1 text-sm"
              placeholder="Search..."
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Sl No
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Name
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Email
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Phone Number
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Message
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="border border-gray-300 px-4 py-2 text-center text-gray-500"
                  >
                    No data available in table
                  </td>
                </tr>
              ) : (
                filteredData
                  .slice(
                    (currentPage - 1) * rowsPerPage,
                    currentPage * rowsPerPage
                  )
                  .map((item, index) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">
                        {(currentPage - 1) * rowsPerPage + index + 1}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.name}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.email}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.phoneNumber}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.message}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="bg-red-500 text-white rounded-md p-2"
                        >
                          🗑
                        </button>
                      </td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-700">
            Showing{" "}
            {Math.min((currentPage - 1) * rowsPerPage + 1, data.length)} to{" "}
            {Math.min(currentPage * rowsPerPage, data.length)} of {data.length}{" "}
            entries
          </span>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 border border-gray-300 rounded-md text-sm ${
                currentPage === 1 ? "text-gray-400 cursor-not-allowed" : ""
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages || totalPages === 0}
              className={`px-3 py-1 border border-gray-300 rounded-md text-sm ${
                currentPage === totalPages || totalPages === 0
                  ? "text-gray-400 cursor-not-allowed"
                  : ""
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllQueries;

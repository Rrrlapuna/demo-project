import React, { useState } from "react";

const mockData = Array.from({ length: 178604 }, (_, index) => ({
  id: index + 1,
  name: `Business ${index + 1}`,
  phone: `98${Math.floor(10000000 + Math.random() * 90000000)}`,
}));

const Cngratulations = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const totalPages = Math.ceil(mockData.length / rowsPerPage);

  const currentData = mockData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="overflow-x-auto rounded-lg shadow-md border border-gray-300">
        <h1 className="p-3 text-xl">View Certificate</h1>
        <table className="table-auto w-full border-collapse bg-white rounded-lg">
          <thead>
            <tr className="bg-gray-200 ">
              <th className="border border-gray-300 px-4 py-2 ">Sl No</th>
              <th className="border border-gray-300 px-4 py-2">Business Name</th>
              <th className="border border-gray-300 px-4 py-2">Phone Number</th>
              <th className="border border-gray-300 px-4 py-2">View Certificate</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">{item.id}</td>
                <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{item.phone}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 shadow">
                    View Certificate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-600">
          Showing {rowsPerPage * (currentPage - 1) + 1} to{" "}
          {Math.min(rowsPerPage * currentPage, mockData.length)} of{" "}
          {mockData.length} entries
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 border rounded-full ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Previous
          </button>
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border rounded-full ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cngratulations;

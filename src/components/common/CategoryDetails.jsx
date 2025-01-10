import React, { useState } from "react";

const CategoryDetails = () => {
  const categories = [
    { id: 1, name: "Translation Services" },
    { id: 2, name: "Solar Energy Solutions" },
    { id: 3, name: "Yoga and Meditation Studios" },
    { id: 4, name: "Venture Capital and Investment Firms" },
    { id: 5, name: "Public Speaking and Coaching" },
    { id: 6, name: "Eco-Friendly Products" },
    { id: 7, name: "Craft Breweries and Wineries" },
 
   
    // Add more categories as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate the displayed items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = categories.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="p-0 lg-p-6 grid ">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Category Details</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Category
        </button>
      </div>
      <hr /> <br />
   
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Sl No</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Category Name</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((category, index) => (
              <tr key={category.id} className="even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {indexOfFirstItem + index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">{category.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600"
                    onClick={() => console.log(`Edit ${category.name}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => console.log(`Delete ${category.name}`)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CategoryDetails;

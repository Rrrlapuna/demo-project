import React, { useState, useEffect } from "react";

const AddBusiness = ({ closeModal }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);
  {
    /* Modal Content */
  }
  const AddBusinessModal = () => {
    return (
      <div>
        <div>
          {/* Modal Content */}
          <div className="mt-4 space-y-4">
            {/* Business Name */}
            <h1>Add Business Details</h1>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Business Name
              </label>
              <input
                type="text"
                placeholder="Business Name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Business Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Business Username
              </label>
              <input
                type="text"
                placeholder="Business username"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option value="">Select Category</option>
                <option value="retail">Retail</option>
                <option value="service">Service</option>
                <option value="tech">Technology</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60">
      <div
        className={`bg-white rounded-lg shadow-lg p-6 w-1/3 transform transition-all duration-500 ease-in-out ${
          isVisible
            ? "-translate-y-20 opacity-500"
            : "-translate-y-20 opacity-0"
        }`}
      >
        <div className=" mt-4">
          <div className="flex justify-end">
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 mr-2"
            >
              Close
            </button>
          </div>
          <AddBusinessModal />
        </div>
      </div>
    </div>
  );
};

export default AddBusiness;

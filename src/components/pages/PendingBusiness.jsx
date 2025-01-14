import React from 'react'

const PendingBusiness = () => {
  return (
    <div>
   <div className="p-6">
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        {/* Header */}
        <div className="px-4 py-3 border bg-gray-100">
          <h2 className="text-lg font-semibold text-gray-700">Pending Business</h2>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Show</span>
            <select
              className="border border-gray-300 rounded-md text-sm px-2 py-1 focus:outline-none focus:ring focus:ring-blue-300"
              defaultValue="10"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <span className="text-sm text-gray-600">entries</span>
          </div>
          <input
            type="text"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Search"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white text-sm text-left border">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-2 border-b">Sl No</th>
                <th className="px-4 py-2 border-b">Business Name</th>
                <th className="px-4 py-2 border-b">Listed By</th>
                <th className="px-4 py-2 border-b">User Number</th>
                <th className="px-4 py-2 border-b">User Email</th>
                <th className="px-4 py-2 border-b">Address</th>
                <th className="px-4 py-2 border-b">City</th>
                <th className="px-4 py-2 border-b">State</th>
                <th className="px-4 py-2 border-b">Website</th>
                <th className="px-4 py-2 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  className="text-center text-gray-500 py-4 px-4"
                  colSpan="10"
                >
                  No data available in table
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 bg-gray-50 flex items-center justify-between">
          <span className="text-sm text-gray-600">Showing 0 to 0 of 0 entries</span>
          <div className="space-x-2">
            <button
              className="px-4 py-2 border text-sm bg-gray-200 text-gray-600 rounded-md cursor-not-allowed"
              disabled
            >
              Previous
            </button>
            <button
              className="px-4 py-2 border text-sm bg-gray-200 text-gray-600 rounded-md cursor-not-allowed"
              disabled
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PendingBusiness

import React from 'react'

const DeleteBusiness = () => {
  return (
    <div>
<div className="p-4">
      <div className="overflow-x-auto">
        <div className="min-w-full border rounded-md shadow-sm">
          <div className="px-4 py-2 border-b bg-gray-50">
            <h2 className="text-lg font-medium text-gray-800">Business Deletion Queries</h2>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center">
              <label className="flex items-center space-x-2">
                <span>Show</span>
                <select className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-200">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
                <span>entries</span>
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Search"
              />
            </div>
          </div>
          <table className="min-w-full bg-white border-t border-gray-200 text-sm text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="py-2 px-4 border-b">Sl No</th>
                <th className="py-2 px-4 border-b">Business Id</th>
                <th className="py-2 px-4 border-b">Business Name</th>
                <th className="py-2 px-4 border-b">User Name</th>
                <th className="py-2 px-4 border-b">User Number</th>
                <th className="py-2 px-4 border-b">Request Date</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 px-4 text-center text-gray-500" colSpan="7">
                  No data available in table
                </td>
              </tr>
            </tbody>
          </table>
          <div className="px-4 py-2 flex justify-between text-gray-600 bg-gray-50">
            <span>Showing 0 to 0 of 0 entries</span>
            <div className="space-x-2">
              <button className="px-3 py-1 border rounded text-sm bg-gray-200 text-gray-600 cursor-not-allowed">
                Previous
              </button>
              <button className="px-3 py-1 border rounded text-sm bg-gray-200 text-gray-600 cursor-not-allowed">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DeleteBusiness

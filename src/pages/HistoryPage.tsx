import React from 'react';

const HistoryPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4 text-gray-800">Medical History</h1>

      <h2 className="text-lg font-medium mb-2 text-blue-600">Recent Medical Records</h2>

      <div className="space-y-4">
        {/* Record 1 */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-semibold text-gray-700">Checkup</h3>
            <span className="text-sm text-gray-500">2025-05-21</span>
          </div>
          <p className="text-sm text-gray-600">Dr. Arun Saroha</p>
          <p className="text-sm text-green-600 mt-1 font-medium">Completed</p>
        </div>

        {/* Record 2 */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-semibold text-gray-700">Blood Test</h3>
            <span className="text-sm text-gray-500">2025/05/22</span>
          </div>
          <p className="text-sm text-gray-600">Sandeep Vaishya</p>
          <p className="text-sm text-green-600 mt-1 font-medium">Completed</p>
        </div>

        {/* Record 3 */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-semibold text-gray-700">X-Ray</h3>
            <span className="text-sm text-gray-500">2025/05/23</span>
          </div>
          <p className="text-sm text-gray-600">Dr. Arun Saroha</p>
          <p className="text-sm text-green-600 mt-1 font-medium">Completed</p>
        </div>

        {/* Record 4 */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-semibold text-gray-700">Consultation</h3>
            <span className="text-sm text-gray-500">2025/05/25</span>
          </div>
          <p className="text-sm text-gray-600">Sandeep Vaishya</p>
          <p className="text-sm text-green-600 mt-1 font-medium">Completed</p>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;

import React from 'react';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const timeSlots = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'];

const CalendarPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4 text-gray-800">Calendar</h1>

      {/* Calendar Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-blue-600">October 2021</h2>
        <div className="space-x-2 text-sm">
          <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">‹</button>
          <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">›</button>
        </div>
      </div>

      {/* Weekday Headings */}
      <div className="grid grid-cols-7 text-sm font-medium text-gray-500 mb-2">
        {weekdays.map((day) => (
          <div key={day} className="text-center">{day}</div>
        ))}
      </div>

      {/* Time Slots per Day */}
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 7 }).map((_, dayIndex) => (
          <div
            key={dayIndex}
            className="bg-blue-50 rounded-lg p-2 min-h-[120px] flex flex-col gap-2"
          >
            {timeSlots.map((time, index) => (
              <div
                key={index}
                className="text-xs text-blue-600 text-center bg-blue-100 px-2 py-1 rounded"
              >
                {time}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Appointment Cards */}
      <div className="mt-6 flex flex-col md:flex-row gap-4">
        <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md flex-1">
          <h3 className="font-semibold text-sm">Neurology</h3>
          <p className="text-xs mt-1">10:00AM - 4:00PM</p>
          <p className="text-xs">Dr. Arun Saroha</p>
        </div>

        <div className="bg-blue-100 text-blue-800 p-4 rounded-lg shadow-md flex-1">
          <h3 className="font-semibold text-sm">Physiotherapy</h3>
          <p className="text-xs mt-1">9:00AM - 2:00PM</p>
          <p className="text-xs">Sandeep Vaishya</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;

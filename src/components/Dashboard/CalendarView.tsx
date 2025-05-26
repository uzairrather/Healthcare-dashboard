import React from 'react';
import { ChevronLeft, ChevronRight, Bluetooth as Tooth, Activity, Brain } from 'lucide-react';
import { calendarData } from '../../data/calendarData';

const CalendarView: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 mb-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold text-gray-800">
            {calendarData.month} {calendarData.year}
          </h2>
        </div>
        <div className="flex space-x-2">
          <button className="p-1 rounded-md hover:bg-gray-100">
            <ChevronLeft size={18} className="text-blue-600" />
          </button>
          <button className="p-1 rounded-md hover:bg-gray-100">
            <ChevronRight size={18} className="text-blue-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4">
        {calendarData.days.map((day) => (
          <div key={day.day} className="text-center">
            <p className="text-xs text-gray-500 mb-1">{day.dayName}</p>
            <p className="text-md font-semibold mb-2">{day.day}</p>
            <div className="space-y-1.5">
              {day.appointments.map((appointment, index) => (
                <div 
                  key={`${day.day}-${index}`}
                  className={`text-xs py-1 px-1 rounded-md ${appointment.booked ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
                >
                  {appointment.time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {calendarData.scheduledAppointments.map((appointment) => (
          <div 
            key={appointment.id}
            className={`p-4 rounded-lg ${appointment.id === 'neurology' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'}`}
          >
            <div className="flex items-center mb-1">
              {appointment.icon === 'tooth' ? (
                <Brain className="w-5 h-5 mr-2" />
              ) : (
                <Activity className="w-5 h-5 mr-2" />
              )}
              <h3 className="font-medium">{appointment.title}</h3>
            </div>
            <p className="text-sm mb-1">{appointment.time}</p>
            <p className="text-sm">{appointment.doctor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
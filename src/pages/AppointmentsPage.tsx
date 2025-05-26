import React from 'react';
import { CalendarDays, MoreVertical } from 'lucide-react';

const appointments = [
  {
    title: 'Dentist Appointment',
    doctor: 'Dr. Arun Saroha',
    datetime: '2025-06-28 at 09:00 AM',
    status: 'confirmed',
  },
  {
    title: 'Cardiologist',
    doctor: 'Sandeep Vaishya',
    datetime: '2025-06-30 at 12:00 PM',
    status: 'pending',
  },
  {
    title: 'Physiotherapy',
    doctor: 'Dr. Arun Saroha',
    datetime: '2025-06-28 at 11:00 AM',
    status: 'confirmed',
  },
  {
    title: 'Neurologist',
    doctor: 'Dr. Arun Saroha',
    datetime: '2025-06-02 at 04:00 PM',
    status: 'confirmed',
  },
];

const statusStyles = {
  confirmed: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
};

const AppointmentsPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-6 text-gray-800">Appointments</h1>

      <div className="space-y-4">
        {appointments.map((appt, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white rounded-xl p-4 shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-2 rounded-md">
                <CalendarDays size={24} className="text-blue-600" />
              </div>
              <div>
                <h2 className="text-md font-semibold text-gray-800">{appt.title}</h2>
                <p className="text-sm text-gray-600">{appt.doctor}</p>
                <p className="text-sm text-gray-500">{appt.datetime}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full ${statusStyles[appt.status as keyof typeof statusStyles]}`}
              >
                {appt.status}
              </span>
              <MoreVertical size={20} className="text-gray-400 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentsPage;

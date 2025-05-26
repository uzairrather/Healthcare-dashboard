import React from 'react';
import { CheckCircle2, Eye, Heart, Brain, Ear } from 'lucide-react';
import { appointments } from '../../data/appointmentData';

const UpcomingSchedule: React.FC = () => {
  // Group appointments by day
  const appointmentsByDay = appointments.reduce((acc, appointment) => {
    if (!acc[appointment.day]) {
      acc[appointment.day] = [];
    }
    acc[appointment.day].push(appointment);
    return acc;
  }, {} as Record<string, typeof appointments>);
  
  // Icon mapping
  const iconMap: Record<string, React.ReactNode> = {
    check: <CheckCircle2 className="w-4 h-4 text-red-500" />,
    ear: <Ear className="w-4 h-4 text-blue-500" />,
    heart: <Heart className="w-4 h-4 text-red-500" />,
    brain: <Brain className="w-4 h-4 text-blue-500" />,
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">The Upcoming Schedule</h2>
      
      {Object.entries(appointmentsByDay).map(([day, dayAppointments]) => (
        <div key={day} className="mb-4">
          <h3 className="text-sm text-gray-500 mb-2">On {day}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {dayAppointments.map((appointment) => (
              <div 
                key={appointment.id}
                className="bg-blue-50 rounded-lg p-4 flex items-start"
              >
                <div className="flex-1">
                  <div className="flex items-center">
                    {iconMap[appointment.icon]}
                    <h4 className="ml-2 text-gray-800 font-medium">{appointment.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{appointment.time}</p>
                  <p className='text-sm text-gray-600 mt-1'>{appointment.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
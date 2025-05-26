import React from 'react';
import { activityData } from '../../data/appointmentData';

const ActivityChart: React.FC = () => {
  const barHeights = [
    [40, 30, 60], // Mon
    [20, 50, 30], // Tues
    [70, 20, 40], // Wed
    [30, 60, 25], // Thurs
    [50, 35, 70], // Fri
    [30, 40, 45], // Sat
    [60, 25, 40]  // Sun
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-lg font-semibold text-gray-800">{activityData.title}</h2>
        <span className="text-sm text-gray-500">{activityData.count}</span>
      </div>

      <div className="relative">
        {/* Y-axis labels */}
        <div className="absolute -left-10 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
          <span>100%</span>
          <span>75%</span>
          <span>50%</span>
          <span>25%</span>
          <span>0%</span>
        </div>

        {/* Grid lines */}
        <div className="relative h-48 mb-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full border-t border-gray-100"
              style={{ bottom: `${(i * 25)}%` }}
            />
          ))}

          {/* Bars */}
          <div className="absolute inset-0 flex justify-between items-end">
            {barHeights.map((dayBars, index) => (
              <div key={index} className="flex gap-1 items-end h-full">
                {dayBars.map((height, barIndex) => (
                  <div
                    key={barIndex}
                    className={`w-2 transition-all duration-300 rounded-t-sm ${
                      barIndex === 0 ? 'bg-cyan-400' :
                      barIndex === 1 ? 'bg-blue-600' :
                      'bg-gray-200'
                    }`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* X-axis labels */}
        <div className="grid grid-cols-7 text-center pt-2 border-t border-gray-100">
          {activityData.days.map((day, index) => (
            <div key={index} className="text-xs font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-end gap-4 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-cyan-400 rounded-sm" />
            <span className="text-xs text-gray-500">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-600 rounded-sm" />
            <span className="text-xs text-gray-500">Scheduled</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-200 rounded-sm" />
            <span className="text-xs text-gray-500">Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityChart;
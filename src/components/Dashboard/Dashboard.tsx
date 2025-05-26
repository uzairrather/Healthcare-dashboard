import React from 'react';
import AnatomySection from './AnatomySection';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityChart from './ActivityChart';

const Dashboard: React.FC = () => {
  return (
    <div className="pt-2 pb-8">
      {/* <h1 className="text-xl font-semibold text-gray-800 mb-6">Dashboard</h1> */}
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="space-y-6">
          <AnatomySection />
          <ActivityChart />
        </div>
        <div className="space-y-6">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
// import MobileNavbar from './MobileNavbar';

const AppLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-col flex-1 overflow-y-auto">
        <Header 
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
          isSidebarOpen={sidebarOpen}
        />

        <main className="pt-20 px-4 md:px-8">
          <Outlet />
        </main>
      </div>

      {/* <MobileNavbar /> */}
    </div>
  );
};

export default AppLayout;

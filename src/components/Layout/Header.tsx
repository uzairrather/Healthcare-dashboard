import React from 'react';
import { Search, Bell, Plus, Menu, X } from 'lucide-react';
import profile from '../../styles/images/profile.jpg'

interface HeaderProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, isSidebarOpen }) => {
  return (
    <header className="bg-white py-4 px-6 flex items-center justify-between border-b border-gray-100 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center md:ml-64">
        {/* Toggle Icon */}
        <button className="md:hidden mr-4" onClick={onToggleSidebar}>
          {isSidebarOpen ? (
            <X size={24} className="text-gray-700" />
          ) : (
            <Menu size={24} className="text-gray-700" />
          )}
        </button>

        <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300 mr-8">
          Medicare
        </h1>

        <div className="relative ml-4 hidden md:block">
          <input 
            type="text" 
            placeholder="Search" 
            className="pl-10 pr-4 py-2 bg-gray-50 rounded-md text-sm w-64 focus:outline-none"
          />
          <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Bell size={20} className="text-gray-700" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center">
           <img
                src={profile}
                alt="User Profile"
                className="w-10 h-10 rounded-full object-cover"
              />

          </div>

          <button className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors">
            <Plus size={20} className="text-white" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

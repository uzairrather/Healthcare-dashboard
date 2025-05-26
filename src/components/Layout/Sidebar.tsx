import React from 'react';
import { useLocation } from 'react-router-dom';
import { generalLinks, toolsLinks } from '../../data/navigationLinks';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`bg-white border-r border-gray-100 w-64 z-50 fixed top-0 left-0 h-full transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:block`}
      >
        <div className="absolute top-4 right-4 md:hidden z-50">
          <button onClick={onClose}>
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        <div className="pt-20 px-4 pb-4 overflow-y-auto h-full">
          <h2 className="text-xs font-medium uppercase text-gray-400 mb-4 ml-2">General</h2>
          <nav>
            <ul className="space-y-1">
              {generalLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.path}
                    onClick={onClose}
                    className={`flex items-center px-2 py-2.5 text-sm rounded-md transition-colors
                      ${isActive(link.path)
                        ? 'text-blue-600 bg-blue-50 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <link.icon size={18} className={`mr-3 ${isActive(link.path) ? 'text-blue-600' : 'text-gray-500'}`} />
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <h2 className="text-xs font-medium uppercase text-gray-400 mb-4 mt-6 ml-2">Tools</h2>
          <nav>
            <ul className="space-y-1">
              {toolsLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.path}
                    onClick={onClose}
                    className={`flex items-center px-2 py-2.5 text-sm rounded-md transition-colors
                      ${isActive(link.path)
                        ? 'text-blue-600 bg-blue-50 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <link.icon size={18} className={`mr-3 ${isActive(link.path) ? 'text-blue-600' : 'text-gray-500'}`} />
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

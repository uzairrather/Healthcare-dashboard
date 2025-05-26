import React from 'react';
import {
  HeartIcon,
  Brain,
  BoneIcon
} from 'lucide-react';
import { healthStatuses } from '../../data/healthData';
import body from '../../styles/images/body.png';

const AnatomySection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    heart: <HeartIcon className="mt-2 w-6 h-6 text-red-500" />,
    brain: <Brain className="w-6 h-6 text-blue-500" />,
    bone: <BoneIcon className="w-6 h-6 text-orange-500" />
  };

  const progressColors = {
    healthy: 'bg-green-400',
    warning: 'bg-orange-400',
    critical: 'bg-red-400'
  };

  return (
    <div className="bg-white rounded-xl p-6 flex flex-col md:flex-row relative mb-6">
      {/* Left: Image Section */}
      <div className="flex-1 flex items-center justify-center mb-6 md:mb-0">
        <div className="relative w-full max-w-xs md:max-w-sm bg-blue-50 rounded-xl p-4 shadow-sm me-2">
          <img
            src={body}
            alt="Anatomy"
            className="w-full max-h-[320px] object-contain"
          />

        </div>
      </div>

      {/* Right: Health Details */}
      <div className="flex-1 space-y-6">
        {healthStatuses
          .filter(status => status.id !== 'lungs' && status.id !== 'leg')
          .map((status) => (
            <div key={status.id} className="flex items-start">
              <div className="mr-4">
                {iconMap[status.id] || (
                  <div className="w-6 h-6 bg-gray-200 rounded-md" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <h3 className="text-md font-medium text-gray-800">
                    {status.name}
                  </h3>
                </div>
                <p className="text-xs text-gray-500 mb-2">{status.date}</p>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`${progressColors[status.status]} h-full rounded-full`}
                    style={{
                      width:
                        status.status === 'healthy'
                          ? '80%'
                          : status.status === 'warning'
                          ? '70%'
                          : '30%'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}

        <div className="flex justify-end mt-4">
          <button className="text-blue-600 text-sm font-medium flex items-center">
            Details
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;

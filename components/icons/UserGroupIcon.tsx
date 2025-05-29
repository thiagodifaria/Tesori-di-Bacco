
import React from 'react';

interface UserGroupIconProps extends React.SVGProps<SVGSVGElement> {
}

const UserGroupIcon: React.FC<UserGroupIconProps> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className="w-6 h-6"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.247-3.364A12.07 12.07 0 0017.25 10.5a12.07 12.07 0 00-3.741 2.04M17.25 10.5a9 9 0 10-10.414 8.284M17.25 10.5A2.25 2.25 0 0115 12.75M17.25 10.5a2.25 2.25 0 00-2.25-2.25M15 12.75A2.25 2.25 0 0112.75 15M15 12.75A2.25 2.25 0 0017.25 10.5M12.75 15a9 9 0 10-9.473-6.912M12.75 15A2.25 2.25 0 0115 12.75M12.75 15A2.25 2.25 0 0010.5 12.75M10.5 12.75a9 9 0 115.196 8.358M10.5 12.75A2.25 2.25 0 018.25 15M10.5 12.75A2.25 2.25 0 0012.75 15" />
  </svg>
);

export default UserGroupIcon;


import React from 'react';

interface GiftIconProps extends React.SVGProps<SVGSVGElement> {}

const GiftIcon: React.FC<GiftIconProps> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className="w-6 h-6"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A3.375 3.375 0 006.375 8.25H17.625A3.375 3.375 0 0012 4.875z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.875v16.5M17.625 8.25H6.375" />
  </svg>
);

export default GiftIcon;

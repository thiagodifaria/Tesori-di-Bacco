
import React from 'react';

interface WineGlassIconProps extends React.SVGProps<SVGSVGElement> {
}

const WineGlassIcon: React.FC<WineGlassIconProps> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className="w-6 h-6"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 21V17.25m0 0A4.504 4.504 0 0015.75 12c0-2.097-1.205-3.881-2.933-4.768" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 21H4.5m6.75 0H19.5m-15 0V12.375c0-3.094 2.188-5.76 5.156-6.584A5.263 5.263 0 0112 5.25c1.63 0 3.106.772 4.094 2.016A5.263 5.263 0 0119.5 12.375V21" />
  </svg>
);

export default WineGlassIcon;

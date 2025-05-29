
import React from 'react';

interface SparklesIconProps extends React.SVGProps<SVGSVGElement> {
}

const SparklesIcon: React.FC<SparklesIconProps> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className="w-6 h-6"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 12L17 13.75M17 13.75L15.75 12M17 13.75L18.25 15M17 13.75L15.75 15m1.5-1.5l1.5-1.75M15.75 12l1.5-1.75m1.5 1.75l1.5 1.75M15.75 12l1.5 1.75M18.25 15l1.5-1.75M18.25 15l1.5 1.75" />
  </svg>
);

export default SparklesIcon;

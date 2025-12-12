import React from 'react';

const Squiggle = ({ color = "#f36f36", rotation = 0, className = "" }) => {
  return (
    <svg
      width="60"
      height="20"
      viewBox="0 0 60 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path
        d="M2 10C10 2 15 18 25 10C35 2 40 18 50 10C55 6 58 10 58 10"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Squiggle;

import React from 'react';

interface BpmLogoProps {
  className?: string;
  isWireframe?: boolean;
}

export default function BpmLogo({ className = "w-8 h-8", isWireframe = false }: BpmLogoProps) {
  // Use currentColor so parent styles control the stroke color (providing perfect visibility in both light & dark modes)
  const strokeColor = 'currentColor';
  
  return (
    <svg 
      viewBox="0 0 500 500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      id="bpm-vector-logo"
    >
      <g 
        stroke={strokeColor} 
        strokeWidth="16" 
        strokeLinecap="butt" 
        strokeLinejoin="miter" 
        strokeMiterlimit="4"
        className="transition-all duration-300"
      >
        {/* Inner Rings (Drawn first so vertical stems perfectly cover the butt caps) */}
        
        {/* Left Inner Ring */}
        <path d="M 138 157.91 A 145 145 0 0 0 317.5 378.3" />
        
        {/* Right Inner Ring */}
        <path d="M 362 342.09 A 145 145 0 0 0 182.5 121.7" />

        {/* Letter b bowl */}
        <path d="M 138 200 A 40 40 0 0 1 138 280" />

        {/* Letter p bowl */}
        <path d="M 210 200 A 40 40 0 0 1 210 280" />

        {/* Letter p stem */}
        <path d="M 210 192 L 210 340" />

        {/* Letter b stem -> folds into Left Outer Ring */}
        <path d="M 138 288 L 138 115.54 A 175 175 0 0 0 331.5 404.8" />

        {/* Letter m left stem -> arch 1 */}
        <path d="M 282 288 L 282 220 A 20 20 0 0 1 322 220" />
        
        {/* Letter m mid stem */}
        <path d="M 322 288 L 322 220" />

        {/* Letter m arch 2 -> right stem -> folds into Right Outer Ring */}
        <path d="M 322 220 A 20 20 0 0 1 362 220 L 362 384.46 A 175 175 0 0 0 168.5 95.2" />
      </g>
    </svg>
  );
}

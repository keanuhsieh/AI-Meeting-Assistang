import React from 'react';

interface LogoProps {
  variant?: 'default' | 'outline';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', className = 'w-8 h-8' }) => {
  if (variant === 'outline') {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <rect x="6" y="4" width="13" height="17" rx="2" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M15 10V8" stroke="#334155" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M4 9H8" stroke="#334155" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M4 13H8" stroke="#334155" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M4 17H8" stroke="#334155" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    );
  }

  // Default variant
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24">
        <rect x="6" y="4" width="13" height="17" rx="2" fill="currentColor"/>
        <path d="M15 10V8" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M4 9H8" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M4 13H8" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M4 17H8" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
};

export default Logo;

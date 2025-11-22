import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  icon?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className = "", title, icon }) => {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/60 backdrop-blur-md p-6 shadow-xl transition-all hover:border-gray-700 ${className}`}>
      {(title || icon) && (
        <div className="flex items-center gap-3 mb-4 border-b border-gray-800 pb-3">
          {icon && <span className="text-wings-cyan">{icon}</span>}
          {title && <h3 className="text-lg font-semibold text-white">{title}</h3>}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;

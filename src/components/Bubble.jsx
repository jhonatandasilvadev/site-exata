import React from 'react';
import './Bubble.css';

const Bubble = ({ 
  label, 
  icon, 
  size = 'medium',
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`bubble bubble--${size} ${className}`}
      {...props}
    >
      <div className="bubble__container">
        <div className="bubble__surface">
          {icon && (
            <div className="bubble__icon">
              {icon}
            </div>
          )}
          {label && (
            <div className="bubble__label">
              {label}
            </div>
          )}
        </div>
        <div className="bubble__reflection"></div>
        <div className="bubble__highlight"></div>
      </div>
    </div>
  );
};

export default Bubble;

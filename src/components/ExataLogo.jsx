import React from 'react';
import './ExataLogo.css';

const ExataLogo = ({ size = 'large', className = '' }) => {
  return (
    <div className={`exata-logo exata-logo--${size} ${className}`}>
      <div className="exata-logo__container">
        <div className="exata-logo__text">
          <span className="letter letter--e">E</span>
          <span className="letter letter--x">X</span>
          <span className="letter letter--a1">A</span>
          <span className="letter letter--t">T</span>
          <span className="letter letter--a2">A</span>
        </div>
      </div>
    </div>
  );
};

export default ExataLogo;

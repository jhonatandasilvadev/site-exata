import React from 'react';
import './LogoCard.css';

const LogoCard = ({ 
  logo, 
  name, 
  tooltip,
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`logo-card ${className}`}
      title={tooltip || name}
      {...props}
    >
      <div className="logo-card__container">
        {logo ? (
          <img 
            src={logo} 
            alt={name || 'Logo do cliente'} 
            className="logo-card__image"
            loading="lazy"
          />
        ) : (
          <div className="logo-card__placeholder">
            <span className="logo-card__placeholder-text">
              {name ? name.charAt(0).toUpperCase() : '?'}
            </span>
          </div>
        )}
      </div>
      {name && (
        <div className="logo-card__name">
          {name}
        </div>
      )}
    </div>
  );
};

export default LogoCard;

import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true,
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`section-title ${centered ? 'section-title--centered' : ''} ${className}`}
      {...props}
    >
      {subtitle && (
        <p className="section-title__subtitle">
          {subtitle}
        </p>
      )}
      <h2 className="section-title__title">
        {title}
        <span className="section-title__line"></span>
      </h2>
    </div>
  );
};

export default SectionTitle;


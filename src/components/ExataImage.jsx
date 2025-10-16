import React, { useState } from 'react';
import './ExataImage.css';

const ExataImage = ({ 
  type = 'main', 
  size = 'large', 
  className = '',
  fallback = true,
  ...props 
}) => {
  const [imageError, setImageError] = useState(false);
  
  // Mapeamento de tipos para nomes de arquivo
  const imageMap = {
    main: 'exata-main-logo',
    head: 'exata-head-logo', 
    footer: 'exata-footer-logo'
  };
  
  const imageName = imageMap[type] || 'exata-main-logo';
  
  // Tentar carregar a imagem
  const handleImageError = () => {
    setImageError(true);
  };
  
  // Se a imagem falhou e temos fallback, mostrar o componente de texto
  if (imageError && fallback) {
    return (
      <div className={`exata-fallback exata-fallback--${size} ${className}`} {...props}>
        <div className="exata-fallback__container">
          <div className="exata-fallback__text">
            <span className="letter letter--e">E</span>
            <span className="letter letter--x">X</span>
            <span className="letter letter--a1">A</span>
            <span className="letter letter--t">T</span>
            <span className="letter letter--a2">A</span>
          </div>
        </div>
      </div>
    );
  }
  
  // Tentar carregar a imagem
  return (
    <div className={`exata-image exata-image--${size} ${className}`} {...props}>
      <img
        src={`/src/assets/images/${imageName}.png`}
        alt={`Logo EXATA ${type}`}
        onError={handleImageError}
        className="exata-image__img"
      />
    </div>
  );
};

export default ExataImage;

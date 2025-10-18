import React, { useState } from 'react';
import './ExataImage.css';

// Importar as imagens
import mainLogo from '../assets/images/exata-main-logo.png';
import headLogo from '../assets/images/exata-head-logo.png';
import footerLogo from '../assets/images/exata-footer-logo.png';

const ExataImage = ({ 
  type = 'main', 
  size = 'large', 
  className = '',
  fallback = true,
  ...props 
}) => {
  const [imageError, setImageError] = useState(false);
  
  // Mapeamento de tipos para imports
  const imageMap = {
    main: mainLogo,
    head: headLogo, 
    footer: footerLogo
  };
  
  const imageSrc = imageMap[type] || mainLogo;
  
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
        src={imageSrc}
        alt={`Logo EXATA ${type}`}
        onError={handleImageError}
        className="exata-image__img"
      />
    </div>
  );
};

export default ExataImage;

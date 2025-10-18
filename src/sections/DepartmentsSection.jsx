import React from 'react';
import SectionTitle from '../components/SectionTitle';
import exata360Image from '../assets/images/exata-360.png';
import './DepartmentsSection.css';

const DepartmentsSection = () => {

  return (
    <section id="departments" className="departments-section">
      <div className="container">
        <SectionTitle 
          title="Nossa Estrutura"
          subtitle="Conceito 360° de atendimento integrado"
          centered={true}
        />
        
        <div className="departments-section__content">
          {/* Imagem centralizada exata-360 */}
          <div className="departments-center">
            <div className="center-container">
              <div className="center-image">
                <img 
                  src={exata360Image} 
                  alt="EXATA 360°" 
                  className="exata-360-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="exata-360-placeholder" style={{display: 'none'}}>
                  <span className="placeholder-text">EXATA 360°</span>
                  <span className="placeholder-subtitle">Imagem será carregada aqui</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;

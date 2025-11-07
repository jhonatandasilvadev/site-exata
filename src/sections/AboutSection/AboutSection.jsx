import React from 'react';
import GlassCard from '../../components/GlassCard/GlassCard';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { publicPath } from '../../utils/publicPath';
import './AboutSection.css';

const AboutSection = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Missão',
      description: 'Entregar prêmios com propósito'
    },
    {
      icon: '🚀',
      title: 'Visão',
      description: 'Cuidamos de pessoas em cada gesto'
    },
    {
      icon: '💎',
      title: 'Valores',
      description: 'Vivemos com alegria, sempre.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-section__background">
        <div className="team-overlay"></div>
      </div>
      
      <div className="container">
        <div className="about-section__content">
          <SectionTitle 
            title="Sobre Nós"
            subtitle="Conheça nossa história e valores"
            centered={true}
          />
          
          <div className="about-section__card">
            <GlassCard className="about-card">
              <div className="about-card__content">
                <div className="values-grid">
                  {values.map((value, index) => (
                    <div 
                      key={index}
                      className="value-item"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="value-item__icon">
                        {value.icon}
                      </div>
                      <h3 className="value-item__title">
                        {value.title}
                      </h3>
                      <p className="value-item__description">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="team-image-container">
                  <img 
                    src={publicPath('equipe-2.jpg')} 
                    alt="Equipe Exata" 
                    className="team-image"
                    onError={(e) => {
                      console.log('Erro ao carregar imagem:', e.target.src);
                      e.target.style.display = 'none';
                    }}
                    onLoad={() => console.log('Imagem carregada com sucesso!')}
                  />
                </div>
                
                <div className="about-actions">
                  <button className="about-button about-button--primary">
                    Saiba Mais
                  </button>
                  <button className="about-button about-button--secondary">
                    Fale Conosco
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


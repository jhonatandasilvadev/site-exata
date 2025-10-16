import React from 'react';
import GlassCard from '../components/GlassCard';
import ExataImage from '../components/ExataImage';
import './HeroSection.css';

const HeroSection = () => {
  const services = [
    'Sorteios e Prêmios',
    'Clube de Vantagens', 
    'Assessoria Jurídica',
    'Municípios e Prefeituras',
    'Cash Back',
    'Gameficação',
    'Campanha de Pontos',
    'Personalização de Campanhas'
  ];

  const getServiceIcon = (service) => {
    const icons = {
      'Sorteios e Prêmios': '🎁',
      'Clube de Vantagens': '⭐',
      'Assessoria Jurídica': '⚖️',
      'Municípios e Prefeituras': '🏛️',
      'Cash Back': '💰',
      'Gameficação': '🎮',
      'Campanha de Pontos': '📊',
      'Personalização de Campanhas': '🎨'
    };
    return icons[service] || '✨';
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-section__content">
          {/* Coluna esquerda - Logo */}
          <div className="hero-section__logo">
            <ExataImage type="main" size="xlarge" />
          </div>

          {/* Coluna direita - Grid de serviços */}
          <div className="hero-section__services">
            <div className="services-grid">
              {services.map((service, index) => (
                <GlassCard 
                  key={index}
                  className="service-card"
                  hover={true}
                >
                  <div className="service-card__icon">
                    {getServiceIcon(service)}
                  </div>
                  <h3 className="service-card__title">
                    {service}
                  </h3>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from 'react';
import GlassCard from '../components/GlassCard';
import ExataImage from '../components/ExataImage';
import './HeroSection.css';

const HeroSection = () => {
  const services = [
    { name: 'Sorteios e Prêmios', link: null },
    { name: 'Clube de Vantagens', link: null }, 
    { name: 'Assessoria Jurídica', link: null },
    { name: 'Municípios e Prefeituras', link: 'municipios.html' },
    { name: 'Cash Back', link: null },
    { name: 'Gameficação', link: null },
    { name: 'Campanha de Pontos', link: null },
    { name: 'Personalização de Campanhas', link: null }
  ];

  const getServiceIcon = (serviceName) => {
    if (serviceName === 'Cash Back') {
      return (
        <img 
          src="/site-exatasis/cash-back.png" 
          alt="Cash Back" 
          className="service-icon-image"
        />
      );
    }
    
    if (serviceName === 'Sorteios e Prêmios') {
      return (
        <img 
          src="/site-exatasis/premios-sorteios.png" 
          alt="Sorteios e Prêmios" 
          className="service-icon-image"
        />
      );
    }
    
    if (serviceName === 'Gameficação') {
      return (
        <img 
          src="/site-exatasis/gamefication.png" 
          alt="Gameficação" 
          className="service-icon-image"
        />
      );
    }
    
    if (serviceName === 'Personalização de Campanhas') {
      return (
        <img 
          src="/site-exatasis/custom-campain.png" 
          alt="Personalização de Campanhas" 
          className="service-icon-image"
        />
      );
    }
    
    const icons = {
      'Clube de Vantagens': '⭐',
      'Assessoria Jurídica': '⚖️',
      'Municípios e Prefeituras': '🏛️',
      'Campanha de Pontos': '📊'
    };
    return icons[serviceName] || '✨';
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-section__content">
          {/* Logo centralizada */}
          <div className="hero-section__logo">
            <ExataImage type="main" size="xlarge" />
          </div>

          {/* Grid de serviços centralizado */}
          <div className="hero-section__services">
            <div className="services-grid">
              {services.map((service, index) => (
                service.link ? (
                  <a 
                    key={index}
                    href={service.link}
                    className="service-card-link"
                    title={`Clique para acessar ${service.name}`}
                  >
                    <div className="service-card">
                      <div className="service-card-front">
                        <div className="service-card__icon">
                          {getServiceIcon(service.name)}
                        </div>
                      </div>
                      <div className="service-card-back">
                        <h3 className="service-card__title">
                          {service.name}
                        </h3>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div key={index} className="service-card">
                    <div className="service-card-front">
                      <div className="service-card__icon">
                        {getServiceIcon(service.name)}
                      </div>
                    </div>
                    <div className="service-card-back">
                      <h3 className="service-card__title">
                        {service.name}
                      </h3>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from 'react';
import GlassCard from '../components/GlassCard';
import ExataImage from '../components/ExataImage';
import './HeroSection.css';

const HeroSection = () => {
  const services = [
    { name: 'Sorteios e Prêmios', link: 'sorteios-premios.html' },
    { name: 'Clube de Vantagens', link: 'clube-vantagens.html' }, 
    { name: 'Assessoria Jurídica', link: 'assessoria-juridica.html' },
    { name: 'Municípios e Prefeituras', link: 'municipios.html' },
    { name: 'Cash Back', link: 'cash-back.html' },
    { name: 'Gameficação', link: 'gameficacao.html' },
    { name: 'Campanha de Pontos', link: 'campanha-pontos.html' },
    { name: 'Personalização de Campanhas', link: 'personalizacao-campanhas.html' }
  ];

  const getServiceIcon = (serviceName) => {
    const imageMap = {
      'Sorteios e Prêmios': '/premios-sorteios.png',
      'Clube de Vantagens': '/clube-vantagens.png',
      'Assessoria Jurídica': '/juridico.png',
      'Municípios e Prefeituras': '/prefeitura-municipio.png',
      'Cash Back': '/cash-back.png',
      'Gameficação': '/gamefication.png',
      'Campanha de Pontos': '/campanha-pontos.png',
      'Personalização de Campanhas': '/custom-campain.png'
    };

    const imageSrc = imageMap[serviceName];
    
    if (imageSrc) {
      return (
        <img 
          src={imageSrc} 
          alt={serviceName} 
          className="service-icon-image"
        />
      );
    }
    
    // Fallback para emojis caso não encontre a imagem
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
                <div key={index} className="service-item">
                  {service.link ? (
                    <a 
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
                  )}
                  
                  {/* Botão estilo glass embaixo do card */}
                  <button 
                    className="service-glass-button"
                    onClick={() => {
                      if (service.link) {
                        window.open(service.link, '_blank');
                      }
                    }}
                  >
                    {service.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

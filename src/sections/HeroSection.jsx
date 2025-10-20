import React from 'react';
import GlassCard from '../components/GlassCard';
import ExataImage from '../components/ExataImage';
import './HeroSection.css';

const HeroSection = () => {
  const services = [
<<<<<<< HEAD
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
=======
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
>>>>>>> 35dd788bbb4800fc52e118478d74319844cc5f77
          className="service-icon-image"
        />
      );
    }
    
<<<<<<< HEAD
    // Fallback para emojis caso não encontre a imagem
=======
>>>>>>> 35dd788bbb4800fc52e118478d74319844cc5f77
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
<<<<<<< HEAD
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
=======
                service.link ? (
                  <a 
                    key={index}
                    href={service.link}
                    className="service-card-link"
                    title={`Clique para acessar ${service.name}`}
                  >
>>>>>>> 35dd788bbb4800fc52e118478d74319844cc5f77
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 35dd788bbb4800fc52e118478d74319844cc5f77
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

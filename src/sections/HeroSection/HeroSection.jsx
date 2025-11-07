import React from 'react';
import { Link } from 'react-router-dom';
import ExataImage from '../../components/ExataImage/ExataImage';
import { publicPath } from '../../utils/publicPath';
import './HeroSection.css';

const HeroSection = () => {
  const services = [
    { name: 'Sorteios e Prêmios', link: '/sorteios-premios' },
    { name: 'Clube de Vantagens', link: '/clube-vantagens' }, 
    { name: 'Assessoria Jurídica', link: '/assessoria-juridica' },
    { name: 'Municípios e Prefeituras', link: '/municipios' },
    { name: 'Cash Back', link: '/cash-back' },
    { name: 'Gamificação', link: '/gameficacao' },
    { name: 'Campanha de Pontos', link: '/campanha-pontos' },
    { name: 'Personalização de Campanhas', link: '/personalizacao-campanhas' }
  ];

  const getServiceIcon = (serviceName) => {
    const imageMap = {
      'Sorteios e Prêmios': publicPath('premios-sorteios.png'),
      'Clube de Vantagens': publicPath('clube-vantagens.png'),
      'Assessoria Jurídica': publicPath('juridico.png'),
      'Municípios e Prefeituras': publicPath('prefeitura-municipio.png'),
      'Cash Back': publicPath('cash-back.png'),
      'Gamificação': publicPath('gamefication.png'),
      'Campanha de Pontos': publicPath('campanha-pontos.png'),
      'Personalização de Campanhas': publicPath('custom-campain.png')
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
                    <Link 
                      to={service.link}
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
                    </Link>
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
                  <Link to={service.link}>
                    <button className="service-glass-button">
                      {service.name}
                    </button>
                  </Link>
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


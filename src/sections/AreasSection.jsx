import React from 'react';
import GlassCard from '../components/GlassCard';
import SectionTitle from '../components/SectionTitle';
import './AreasSection.css';

const AreasSection = () => {
  // Primeira linha: Supermercados, Varejo, Atacados
  const firstRow = [
    { name: 'Supermercados', icon: '/mercado.png', isImage: true },
    { name: 'Varejo', icon: '/varejo.png', isImage: true },
    { name: 'Atacados', icon: '/atacado.png', isImage: true }
  ];

  // Segunda linha: Congressos, Feiras de Eventos, Municípios e Prefeituras
  const secondRow = [
    { name: 'Congressos', icon: '🏛️' },
<<<<<<< HEAD
    { name: 'Feiras de Eventos', icon: '/feiras.png?v=1', isImage: true },
    { name: 'Municípios e Prefeituras', icon: '🏛️', link: 'municipios.html' }
  ];

  // Terceira linha: ACE, CDL, Farmácias
  const thirdRow = [
    { name: 'ACE', icon: '/logo-ace.png', isImage: true },
    { name: 'CDL', icon: '/cdl.png', isImage: true },
    { name: 'Farmácias', icon: '/farmacia.png', isImage: true }
=======
    { name: 'Feiras de Eventos', icon: '🎪' },
    { name: 'Municípios e Prefeituras', icon: '🏛️', link: 'municipios.html' },
    { name: 'ACE', icon: '🤝' },
    { name: 'CDL', icon: '💼' },
    { name: 'Farmácias', icon: '💊' }
>>>>>>> 35dd788bbb4800fc52e118478d74319844cc5f77
  ];

  return (
    <section id="areas" className="areas-section">
      <div className="container">
        <SectionTitle 
          title="Áreas de Atuação"
          subtitle="Conectamos diferentes setores com soluções inovadoras"
          centered={true}
        />
        
        <div className="areas-section__content">
<<<<<<< HEAD
          {/* Grid 3x3 de áreas de atuação */}
          <div className="areas-grid">
            {/* Primeira linha */}
            <div className="areas-row">
              {firstRow.map((area, index) => (
                <div key={`first-${index}`} className="area-card-wrapper">
                  <GlassCard className="area-card" hover={true}>
                    <div className="area-card__icon">
                      {area.isImage ? (
                        <img 
                          src={area.icon} 
                          alt={area.name}
                          className="area-card__image"
                          onError={(e) => {
                            console.log('Erro ao carregar imagem:', area.icon);
                            e.target.style.display = 'none';
                          }}
                        />
                      ) : (
                        area.icon
                      )}
                    </div>
                    <h3 className="area-card__name">
                      {area.name}
                    </h3>
                  </GlassCard>
=======
          <div className="ecg-container">
            {/* Linha base do ECG */}
            <div className="ecg-baseline"></div>
            
            {/* Cards em linha de ECG */}
            <div className="ecg-cards-line">
              {areas.map((area, index) => (
                <div
                  key={index}
                  className="ecg-card-wrapper"
                  style={{
                    '--card-index': index,
                    '--total-cards': areas.length,
                    animationDelay: `${index * 0.3}s`
                  }}
                >
                  {area.link ? (
                    <a 
                      href={area.link} 
                      className="ecg-card-link"
                      title={`Clique para acessar ${area.name}`}
                    >
                      <GlassCard 
                        className="ecg-card"
                        hover={true}
                      >
                        <div className="ecg-card__icon">
                          {area.icon}
                        </div>
                        <h3 className="ecg-card__name">
                          {area.name}
                        </h3>
                      </GlassCard>
                    </a>
                  ) : (
                    <GlassCard 
                      className="ecg-card"
                      hover={true}
                    >
                      <div className="ecg-card__icon">
                        {area.icon}
                      </div>
                      <h3 className="ecg-card__name">
                        {area.name}
                      </h3>
                    </GlassCard>
                  )}
>>>>>>> 35dd788bbb4800fc52e118478d74319844cc5f77
                </div>
              ))}
            </div>

            {/* Segunda linha */}
            <div className="areas-row">
              {secondRow.map((area, index) => (
                <div key={`second-${index}`} className="area-card-wrapper">
                  {area.link ? (
                    <a 
                      href={area.link} 
                      className="area-card-link"
                      title={`Clique para acessar ${area.name}`}
                    >
                      <GlassCard className="area-card" hover={true}>
                        <div className="area-card__icon">
                          {area.icon}
                        </div>
                        <h3 className="area-card__name">
                          {area.name}
                        </h3>
                      </GlassCard>
                    </a>
                  ) : (
                    <GlassCard className="area-card" hover={true}>
                      <div className="area-card__icon">
                        {area.icon}
                      </div>
                      <h3 className="area-card__name">
                        {area.name}
                      </h3>
                    </GlassCard>
                  )}
                </div>
              ))}
            </div>

            {/* Terceira linha */}
            <div className="areas-row">
              {thirdRow.map((area, index) => (
                <div key={`third-${index}`} className="area-card-wrapper">
                  <GlassCard className="area-card" hover={true}>
                    <div className="area-card__icon">
                      {area.isImage ? (
                        <img 
                          src={area.icon} 
                          alt={area.name}
                          className="area-card__image"
                          onError={(e) => {
                            console.log('Erro ao carregar imagem:', area.icon);
                            e.target.style.display = 'none';
                          }}
                        />
                      ) : (
                        area.icon
                      )}
                    </div>
                    <h3 className="area-card__name">
                      {area.name}
                    </h3>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasSection;

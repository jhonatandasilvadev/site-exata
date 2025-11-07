import React from 'react';
import { Link } from 'react-router-dom';
import GlassCard from '../../components/GlassCard/GlassCard';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { publicPath } from '../../utils/publicPath';
import './AreasSection.css';

const AreasSection = () => {
  // Primeira linha: Supermercados, Varejo, Atacados
  const firstRow = [
    { name: 'Supermercados', icon: publicPath('mercado.png'), isImage: true },
    { name: 'Varejo', icon: publicPath('varejo.png'), isImage: true },
    { name: 'Atacados', icon: publicPath('atacado.png'), isImage: true }
  ];

  // Segunda linha: Congressos, Feiras de Eventos, Municípios e Prefeituras
  const secondRow = [
    { name: 'Congressos', icon: publicPath('congresso.png'), isImage: true },
    { name: 'Feiras de Eventos', icon: publicPath('feiras.png?v=1'), isImage: true },
    { name: 'Municípios e Prefeituras', icon: publicPath('prefeituras-e-municipios.png'), isImage: true, link: '/municipios' }
  ];

  // Terceira linha: ACE, CDL, Farmácias
  const thirdRow = [
    { name: 'ACE', icon: publicPath('logo-ace.png'), isImage: true },
    { name: 'CDL', icon: publicPath('cdl.png'), isImage: true },
    { name: 'Farmácias', icon: publicPath('farmacia.png'), isImage: true }
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
                </div>
              ))}
            </div>

            {/* Segunda linha */}
            <div className="areas-row">
              {secondRow.map((area, index) => (
                <div key={`second-${index}`} className="area-card-wrapper">
                  {area.link ? (
                    <Link 
                      to={area.link} 
                      className="area-card-link"
                      title={`Clique para acessar ${area.name}`}
                    >
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
                    </Link>
                  ) : (
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


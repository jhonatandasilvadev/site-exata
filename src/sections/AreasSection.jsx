import React from 'react';
import GlassCard from '../components/GlassCard';
import SectionTitle from '../components/SectionTitle';
import './AreasSection.css';

const AreasSection = () => {
  const areas = [
    { name: 'Supermercados', icon: '🛒' },
    { name: 'Varejo', icon: '🏪' },
    { name: 'Atacados', icon: '📦' },
    { name: 'Congressos', icon: '🏛️' },
    { name: 'Feiras de Eventos', icon: '🎪' },
    { name: 'Prefeituras', icon: '🏛️' },
    { name: 'ACE', icon: '🤝' },
    { name: 'CDL', icon: '💼' },
    { name: 'Farmácias', icon: '💊' }
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
                </div>
              ))}
            </div>

            {/* Onda de pulso que percorre a linha */}
            <div className="ecg-pulse-wave"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasSection;

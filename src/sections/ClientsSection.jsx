import React, { useMemo } from 'react';
import SectionTitle from '../components/SectionTitle';
import { publicPath } from '../utils/publicPath';
import './ClientsSection.css';

const ClientsSection = () => {
  // Logos de clientes reais
  const clientLogos = [
    { id: 1, name: 'ACIG', logo: publicPath('acig-logo.png') },
    { id: 2, name: 'ACIMA', logo: publicPath('acima-logo.png') },
    { id: 3, name: 'AEFW', logo: publicPath('aefw-logo.png') },
    { id: 4, name: 'Atacadão', logo: publicPath('atacadao-logo.png') },
    { id: 5, name: 'Bahamas', logo: publicPath('bahamas-logo.png') },
    { id: 6, name: 'Carazinho', logo: publicPath('carazinho-logo.png') },
    { id: 7, name: 'CDL NH', logo: publicPath('cdlnh-logo.png') },
    { id: 8, name: 'Comper', logo: publicPath('comper-logo.png') },
    { id: 9, name: 'Excellence', logo: publicPath('excellence-logo.png') },
    { id: 10, name: 'Farroupilha', logo: publicPath('farroupilha-logo.png') },
    { id: 11, name: 'Fort', logo: publicPath('fort-logo.png') },
    { id: 12, name: 'LAR', logo: publicPath('lar-logo.png') },
    { id: 13, name: 'Líder', logo: publicPath('lider-logo.png') },
    { id: 14, name: 'ACE', logo: publicPath('logo-ace.png') },
    { id: 15, name: 'OrganAct', logo: publicPath('organact-logo.png') },
    { id: 16, name: 'Sicoob', logo: publicPath('sicoob-logo.png') },
    { id: 17, name: 'Sicredi', logo: publicPath('sicredi-logo.png') },
    { id: 18, name: 'ACICAM', logo: publicPath('acicam-logo.png') },
    { id: 19, name: 'ACIFI', logo: publicPath('acifi-logo.webp') },
    { id: 20, name: 'CLD', logo: publicPath('cld-logo.png') },
    { id: 21, name: 'Copagril', logo: publicPath('copagril-logo.png') },
    { id: 22, name: 'Copasa', logo: publicPath('copasa-logo.png') },
    { id: 23, name: 'FACIAP', logo: publicPath('faciap-logo.png') },
    { id: 24, name: 'Hipermais', logo: publicPath('hipermais-logo.png') },
    { id: 25, name: 'LAR Foods', logo: publicPath('lar-foods-logo.svg') },
    { id: 26, name: 'Trajano', logo: publicPath('TRAJANO-LOGO.png') },
    { id: 27, name: 'Transamazônica', logo: publicPath('transamazonica-logo.webp') }
  ];

  // Dividir logos entre as 4 linhas sem repetição
  const carouselRows = useMemo(() => {
    // Calcular quantas logos por linha (27 logos / 4 linhas = ~7 logos por linha)
    const logosPerRow = Math.ceil(clientLogos.length / 4);
    
    // Dividir as logos em 4 grupos equilibrados
    const row1 = clientLogos.slice(0, 7);   // 7 logos (ids 1-7)
    const row2 = clientLogos.slice(7, 14);  // 7 logos (ids 8-14)
    const row3 = clientLogos.slice(14, 21); // 7 logos (ids 15-21)
    const row4 = clientLogos.slice(21);     // 6 logos (ids 22-27)
    
    // Duplicar cada linha para criar o efeito infinito
    return [
      [...row1, ...row1, ...row1], // Linha 1: repetir 3x
      [...row2, ...row2, ...row2], // Linha 2: repetir 3x
      [...row3, ...row3, ...row3], // Linha 3: repetir 3x
      [...row4, ...row4, ...row4, ...row4]  // Linha 4: repetir 4x (tem menos logos)
    ];
  }, []);

  return (
    <section id="clients" className="clients-section">
      <div className="container">
        <SectionTitle 
          title="Nossos Clientes"
          subtitle="Empresas que confiam em nossas soluções"
          centered={true}
        />
        
        <div className="clients-section__content">
          {carouselRows.map((row, rowIndex) => (
            <div key={rowIndex} className="carousel-container">
              <div 
                className="carousel-track" 
                style={{ 
                  animationDuration: `${40 + rowIndex * 5}s`,
                  animationDirection: rowIndex % 2 === 0 ? 'normal' : 'reverse'
                }}
              >
                {row.map((client, index) => (
                  <div key={`${rowIndex}-${client.id}-${index}`} className="carousel-item">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      title={client.name}
                      className="carousel-logo"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

import React from 'react';
import LogoCard from '../components/LogoCard';
import SectionTitle from '../components/SectionTitle';
import './ClientsSection.css';

const ClientsSection = () => {
  // Placeholder para logos de clientes (40 slots)
  const clientLogos = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    name: i < 10 ? `Cliente ${i + 1}` : null,
    logo: null // Placeholder - seria substituído por URLs reais
  }));

  return (
    <section id="clients" className="clients-section">
      <div className="container">
        <SectionTitle 
          title="Nossos Clientes"
          subtitle="Empresas que confiam em nossas soluções"
          centered={true}
        />
        
        <div className="clients-section__content">
          <div className="clients-grid-container">
            <div className="clients-grid">
              {clientLogos.map((client) => (
                <LogoCard
                  key={client.id}
                  logo={client.logo}
                  name={client.name}
                  tooltip={client.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

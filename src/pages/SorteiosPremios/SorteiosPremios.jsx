import React from 'react';
import ServiceLayout from '../../components/ServiceLayout/ServiceLayout';

const SorteiosPremios = () => {
  return (
    <ServiceLayout>
      <div className="service-page">
        <section className="service-hero">
          <div className="container">
            <div className="service-hero__content">
              <h1 className="service-hero__title">Sorteios e Prêmios</h1>
              <p className="service-hero__slogan">
                Engaje seus clientes com sorteios emocionantes
              </p>
              <p className="service-hero__subtitle">
                Sistema completo de gerenciamento de sorteios e premiações para fidelizar e encantar seus clientes.
              </p>
              <div className="service-hero__actions">
                <a href="https://wa.me/5547304315886" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Quero Saber Mais
                </a>
                <a href="/" className="btn btn-secondary">
                  Voltar ao Início
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="service-section">
          <div className="container">
            <h2 className="service-section__title">Em Breve</h2>
            <p className="service-section__subtitle">
              Estamos preparando conteúdo especial sobre este serviço. Entre em contato conosco para mais informações!
            </p>
          </div>
        </section>
      </div>
    </ServiceLayout>
  );
};

export default SorteiosPremios;


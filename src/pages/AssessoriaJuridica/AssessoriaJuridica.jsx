import React from 'react';
import { Link } from 'react-router-dom';
import ServiceLayout from '../../components/ServiceLayout/ServiceLayout';

const AssessoriaJuridica = () => {
  return (
    <ServiceLayout>
      <div className="service-page">
        <section className="service-hero">
          <div className="container">
            <div className="service-hero__content">
              <h1 className="service-hero__title">Assessoria Jurídica</h1>
              <p className="service-hero__slogan">
                Suporte legal especializado para seu negócio
              </p>
              <p className="service-hero__subtitle">
                Conte com assessoria jurídica completa para garantir a conformidade e segurança das suas operações.
              </p>
              <div className="service-hero__actions">
                <a href="https://wa.me/5547304315886" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Quero Saber Mais
                </a>
                <Link to="/" className="btn btn-secondary">
                  Voltar ao Início
                </Link>
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

export default AssessoriaJuridica;


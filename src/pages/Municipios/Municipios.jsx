import React, { useEffect } from 'react';
import ServiceLayout from '../../components/ServiceLayout/ServiceLayout';
import './Municipios.css';

const Municipios = () => {
  useEffect(() => {
    // Smooth scroll para links internos
    const handleHashClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // FAQ accordion
    const handleFAQClick = (e) => {
      const faqItem = e.target.closest('.faq-item');
      if (faqItem) {
        faqItem.classList.toggle('active');
      }
    };

    document.addEventListener('click', handleHashClick);
    document.querySelectorAll('.faq-item').forEach(item => {
      item.addEventListener('click', handleFAQClick);
    });

    return () => {
      document.removeEventListener('click', handleHashClick);
      document.querySelectorAll('.faq-item').forEach(item => {
        item.removeEventListener('click', handleFAQClick);
      });
    };
  }, []);

  return (
    <ServiceLayout>
      <div className="municipios-page service-page">
        {/* Hero Section */}
        <header className="service-hero municipios-hero">
          <div className="container">
            <div className="service-hero__content">
              <div className="service-hero__text">
                <h1 className="service-hero__title">
                  Notas Fiscais Premiadas: Seu compromisso, sua recompensa!
                </h1>
                <p className="service-hero__slogan">
                  Transforme tributos em benefícios! Participe, ganhe e contribua com sua cidade!
                </p>
                <p className="service-hero__subtitle">
                  Valorize suas compras e concorra a prêmios incríveis ao solicitar sua nota fiscal!
                </p>
                <div className="service-hero__actions">
                  <a href="#como-funciona" className="btn btn-primary">Quero Participar</a>
                  <a href="#informacoes" className="btn btn-secondary">Informações Detalhadas</a>
                </div>
              </div>
              <div className="service-hero__image">
                <div className="hero-placeholder">
                  <span className="icon">🏆</span>
                  <span className="text">Cidadãos recebendo prêmios</span>
                  <span className="subtitle">Mais cidadania fiscal, mais prêmios para você!</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Apresentação do Produto */}
        <section id="informacoes" className="service-section presentation">
          <div className="container">
            <div className="presentation-content">
              <div className="presentation-text">
                <h2 className="service-section__title">
                  Notas Fiscais Premiadas – Cidadania que Vale Prêmios
                </h2>
                <p className="presentation-summary">
                  Incentive a responsabilidade fiscal e premie cidadãos engajados com a arrecadação do município. 
                  Uma iniciativa que transforma boas práticas em benefícios para todos.
                </p>
                <div className="presentation-highlights">
                  <div className="highlight-item">
                    <span className="highlight-icon">🎯</span>
                    <span className="highlight-text">Objetivo: Valorizar o cidadão que contribui com a cidade</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">💡</span>
                    <span className="highlight-text">Conceito: Transformar tributos em benefícios reais</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🤝</span>
                    <span className="highlight-text">Resultado: Cidade mais forte e cidadãos premiados</span>
                  </div>
                </div>
              </div>
              <div className="presentation-image">
                <div className="image-placeholder">
                  <span className="icon">📋</span>
                  <span className="text">Cidadão pedindo nota fiscal</span>
                  <span className="subtitle">Cada nota fiscal é uma chance de ganhar!</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section id="como-funciona" className="service-section steps">
          <div className="container">
            <h2 className="service-section__title">Como Funciona?</h2>
            <p className="service-section__subtitle">
              Processo simples e transparente para você participar e concorrer a prêmios incríveis!
            </p>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <div className="step-icon">📝</div>
                <h3>Aderir ao Programa</h3>
                <p>Faça um cadastro simples e rápido no programa municipal.</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <div className="step-icon">🧾</div>
                <h3>Realizar a Ação</h3>
                <p>Peça a nota fiscal em suas compras e contribua com a cidade.</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <div className="step-icon">🎲</div>
                <h3>Acompanhar Sorteios</h3>
                <p>Acompanhe sorteios mensais e resultados em tempo real.</p>
              </div>
              <div className="step-card">
                <div className="step-number">4</div>
                <div className="step-icon">🏆</div>
                <h3>Ganhar Prêmios</h3>
                <p>Ganhe prêmios e divulgue suas conquistas na comunidade!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section id="beneficios" className="service-section benefits">
          <div className="container">
            <h2 className="service-section__title">Benefícios para o Cidadão e para o Município</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-header">
                  <span className="benefit-icon">👤</span>
                  <h3>Para o Cidadão</h3>
                </div>
                <ul>
                  <li><span className="benefit-check">✓</span> Prêmios e reconhecimento</li>
                  <li><span className="benefit-check">✓</span> Transparência total</li>
                  <li><span className="benefit-check">✓</span> Facilidade de participação</li>
                  <li><span className="benefit-check">✓</span> Valorização social</li>
                  <li><span className="benefit-check">✓</span> Mais cidadania fiscal</li>
                </ul>
              </div>
              <div className="benefit-card">
                <div className="benefit-header">
                  <span className="benefit-icon">🏛️</span>
                  <h3>Para o Município</h3>
                </div>
                <ul>
                  <li><span className="benefit-check">✓</span> Aumento da arrecadação</li>
                  <li><span className="benefit-check">✓</span> Engajamento da comunidade</li>
                  <li><span className="benefit-check">✓</span> Combate à sonegação</li>
                  <li><span className="benefit-check">✓</span> Melhoria da gestão fiscal</li>
                  <li><span className="benefit-check">✓</span> Cidade mais forte</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="service-section faq">
          <div className="container">
            <h2 className="service-section__title">Perguntas Frequentes</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h4>Como participar?</h4>
                <p>Basta se cadastrar no programa municipal e começar a pedir a nota fiscal nas suas compras. O processo é simples e gratuito!</p>
              </div>
              <div className="faq-item">
                <h4>Quais prêmios posso ganhar?</h4>
                <p>Os prêmios variam conforme o regulamento de cada município participante, incluindo eletrônicos, eletrodomésticos, vale-compras e muito mais!</p>
              </div>
              <div className="faq-item">
                <h4>Quando acontecem os sorteios?</h4>
                <p>Os sorteios são mensais e os resultados são publicados aqui no site e divulgados nas redes sociais oficiais.</p>
              </div>
              <div className="faq-item">
                <h4>Onde vejo os resultados?</h4>
                <p>Os resultados ficam disponíveis na área do participante, no site oficial e são divulgados nas redes sociais do município.</p>
              </div>
              <div className="faq-item">
                <h4>O que fazer em caso de dúvida?</h4>
                <p>Entre em contato conosco através dos canais oficiais de atendimento: telefone, WhatsApp, e-mail ou presencialmente na prefeitura.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resultados */}
        <section id="depoimentos" className="service-section results">
          <div className="container">
            <h2 className="service-section__title">Depoimentos, Resultados ou Cases</h2>
            <p className="service-section__subtitle">
              Diversos municípios já implantaram o programa e colheram resultados expressivos. Veja o impacto positivo!
            </p>
            <div className="results-grid">
              <div className="result-card">
                <div className="result-icon">📈</div>
                <h3>+20%</h3>
                <p>de aumento na arrecadação em 6 meses</p>
                <span className="result-detail">Município de exemplo</span>
              </div>
              <div className="result-card">
                <div className="result-icon">🎁</div>
                <h3>500+</h3>
                <p>prêmios distribuídos aos cidadãos</p>
                <span className="result-detail">Valor total: R$ 150.000</span>
              </div>
              <div className="result-card">
                <div className="result-icon">👥</div>
                <h3>85%</h3>
                <p>de satisfação dos participantes</p>
                <span className="result-detail">Pesquisa de satisfação</span>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <div className="testimonial-icon">💬</div>
                <blockquote>
                  "O programa de Notas Fiscais Premiadas transformou nossa cidade. A arrecadação aumentou significativamente e os cidadãos estão mais engajados com a gestão pública."
                </blockquote>
                <cite>— Prefeito de Município Participante</cite>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="service-section cta-final">
          <div className="container">
            <h2 className="service-section__title">Participe e faça parte dessa transformação!</h2>
            <p className="service-section__subtitle">
              Engaje o visitante para solicitar proposta ou agendar reunião
            </p>
            <div className="cta-buttons">
              <a href="https://wa.me/5547304315886" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
                Quero Participar
              </a>
              <a href="https://wa.me/5547304315886" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-large">
                Informações Detalhadas
              </a>
              <a href="https://wa.me/5547304315886" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-large">
                Fale Conosco
              </a>
            </div>
            <div className="cta-downloads">
              <h4>Materiais para Download</h4>
              <div className="download-links">
                <a href="#" className="download-link">📄 Regulamento Completo</a>
                <a href="#" className="download-link">📋 Folder Virtual</a>
                <a href="#" className="download-link">📊 Relatório de Resultados</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ServiceLayout>
  );
};

export default Municipios;


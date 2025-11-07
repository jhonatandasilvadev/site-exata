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
        {/* Banner Principal / Capa */}
        <header className="service-hero municipios-hero">
          <div className="container">
            <div className="service-hero__content">
              <div className="service-hero__text">
                <div className="campaign-badge">
                  <span className="badge-icon">🏛️</span>
                  <span className="badge-text">Campanha Oficial Municipal</span>
                </div>
                <h1 className="service-hero__title">
                  Nota Fiscal Premiada
                </h1>
                <p className="service-hero__slogan">
                  "Valorize a Nota, Concorra e Ganhe!"
                </p>
                <p className="service-hero__subtitle">
                  Sua participação fortalece a cidade e transforma tributos em benefícios reais para todos!
                </p>
                <div className="service-hero__actions">
                  <a href="#como-participar" className="btn btn-primary">Quero Participar</a>
                  <a href="#o-que-e" className="btn btn-secondary">Saiba Mais</a>
                </div>
                <div className="hero-badges">
                  <span className="mini-badge">+ Transparência</span>
                  <span className="mini-badge">+ Sustentabilidade</span>
                  <span className="mini-badge">+ Cidadania</span>
                </div>
              </div>
              <div className="service-hero__image">
                <div className="hero-illustration">
                  <span className="illustration-icon">📋</span>
                  <span className="illustration-text">Cidadania que Vale Prêmios</span>
                  <div className="illustration-elements">
                    <span className="element">👨‍👩‍👧‍👦</span>
                    <span className="element">🏙️</span>
                    <span className="element">🎁</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* O que é a Campanha */}
        <section id="o-que-e" className="service-section presentation">
          <div className="container">
            <h2 className="service-section__title">O que é a Campanha</h2>
            <p className="service-section__subtitle">
              Uma iniciativa que une cidadania, responsabilidade fiscal e benefícios para toda a comunidade
            </p>
            <div className="presentation-content">
              <div className="presentation-text">
                <p className="presentation-summary">
                  A <strong>Nota Fiscal Premiada</strong> é um programa educativo e promocional que incentiva 
                  os cidadãos a solicitarem a emissão de notas fiscais em suas compras, fortalecendo a 
                  arrecadação municipal e promovendo a transparência fiscal.
                </p>
                <div className="presentation-highlights">
                  <div className="highlight-item">
                    <span className="highlight-icon">👥</span>
                    <div className="highlight-content">
                      <strong>Quem pode participar:</strong>
                      <span className="highlight-text">Todos os cidadãos maiores de 18 anos, cadastrados no município</span>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🎯</span>
                    <div className="highlight-content">
                      <strong>Vantagens:</strong>
                      <span className="highlight-text">Concorra a prêmios e contribua com o desenvolvimento da sua cidade</span>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🤝</span>
                    <div className="highlight-content">
                      <strong>Benefício coletivo:</strong>
                      <span className="highlight-text">Mais arrecadação = Mais investimentos em saúde, educação e infraestrutura</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="presentation-icons">
                <div className="icon-grid">
                  <div className="icon-item">
                    <span className="icon">📝</span>
                    <span className="label">Nota Fiscal</span>
                  </div>
                  <div className="icon-item">
                    <span className="icon">📱</span>
                    <span className="label">Cadastro Digital</span>
                  </div>
                  <div className="icon-item">
                    <span className="icon">✅</span>
                    <span className="label">Aprovação</span>
                  </div>
                  <div className="icon-item">
                    <span className="icon">🏆</span>
                    <span className="label">Premiação</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Participar */}
        <section id="como-participar" className="service-section steps">
          <div className="container">
            <h2 className="service-section__title">Como Participar</h2>
            <p className="service-section__subtitle">
              Processo simples e transparente em 4 passos
            </p>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <div className="step-icon">🌐</div>
                <h3>Acesse o Site</h3>
                <p>Entre no portal oficial da campanha e clique em "Participar Agora"</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <div className="step-icon">📋</div>
                <h3>Faça seu Cadastro</h3>
                <p>Preencha com CPF, e-mail e dados essenciais de forma rápida e segura</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <div className="step-icon">🧾</div>
                <h3>Solicite a Nota Fiscal</h3>
                <p>Sempre peça a nota fiscal em suas compras no comércio local</p>
              </div>
              <div className="step-card">
                <div className="step-number">4</div>
                <div className="step-icon">🎉</div>
                <h3>Pronto! Você está Participando</h3>
                <p>Automaticamente você já concorre aos sorteios mensais!</p>
              </div>
            </div>
            <div className="steps-callout">
              <strong>💡 Quanto mais você participar, mais chances de ganhar!</strong>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section id="beneficios" className="service-section benefits">
          <div className="container">
            <h2 className="service-section__title">Benefícios para Todos</h2>
            <p className="service-section__subtitle">
              Uma iniciativa que traz vantagens para cidadãos, comércio e município
            </p>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-header">
                  <span className="benefit-icon">🌱</span>
                  <h3>Sustentabilidade</h3>
                </div>
                <ul>
                  <li><span className="benefit-check">✓</span> Redução do uso de papel</li>
                  <li><span className="benefit-check">✓</span> Processos mais eficientes</li>
                  <li><span className="benefit-check">✓</span> Menor impacto ambiental</li>
                  <li><span className="benefit-check">✓</span> Cidade mais consciente</li>
                </ul>
              </div>

              <div className="benefit-card">
                <div className="benefit-header">
                  <span className="benefit-icon">👤</span>
                  <h3>Para o Cidadão</h3>
                </div>
                <ul>
                  <li><span className="benefit-check">✓</span> Concorre a prêmios mensais</li>
                  <li><span className="benefit-check">✓</span> Facilidade de participação</li>
                  <li><span className="benefit-check">✓</span> Transparência total</li>
                  <li><span className="benefit-check">✓</span> Valorização social</li>
                  <li><span className="benefit-check">✓</span> Fortalece a cidadania fiscal</li>
                </ul>
              </div>

              <div className="benefit-card">
                <div className="benefit-header">
                  <span className="benefit-icon">🏛️</span>
                  <h3>Para o Município</h3>
                </div>
                <ul>
                  <li><span className="benefit-check">✓</span> Aumento da arrecadação</li>
                  <li><span className="benefit-check">✓</span> Economia de custos operacionais</li>
                  <li><span className="benefit-check">✓</span> Combate à sonegação</li>
                  <li><span className="benefit-check">✓</span> Estímulo à economia local</li>
                  <li><span className="benefit-check">✓</span> Melhoria na gestão fiscal</li>
                </ul>
              </div>

              <div className="benefit-card">
                <div className="benefit-header">
                  <span className="benefit-icon">💼</span>
                  <h3>Para o Comércio</h3>
                </div>
                <ul>
                  <li><span className="benefit-check">✓</span> Maior movimento de clientes</li>
                  <li><span className="benefit-check">✓</span> Formalização incentivada</li>
                  <li><span className="benefit-check">✓</span> Valorização do comércio local</li>
                  <li><span className="benefit-check">✓</span> Participação cidadã ativa</li>
                </ul>
              </div>
            </div>
            
            <div className="impact-statement">
              <p>"Economizar papel e formalizar transações é investir no futuro da cidade."</p>
            </div>
          </div>
        </section>

        {/* Premiação e Resultados */}
        <section id="premiacao" className="service-section results">
          <div className="container">
            <h2 className="service-section__title">Premiação & Resultados</h2>
            <p className="service-section__subtitle">
              Transparência e auditoria em todos os sorteios
            </p>
            
            <div className="prize-info">
              <div className="prize-card">
                <div className="prize-icon">🔒</div>
                <h3>Sorteios Auditados</h3>
                <p>Todos os sorteios são realizados com auditoria independente e certificação oficial</p>
              </div>
              <div className="prize-card">
                <div className="prize-icon">🎁</div>
                <h3>Tipos de Prêmios</h3>
                <p>Eletrônicos, eletrodomésticos, utensílios, viagens, certificados e vale-compras</p>
              </div>
              <div className="prize-card">
                <div className="prize-icon">📢</div>
                <h3>Divulgação Constante</h3>
                <p>Resultados publicados no site oficial, redes sociais e canais de comunicação da prefeitura</p>
              </div>
            </div>

            <div className="results-highlight">
              <h3>Impacto Real na Comunidade</h3>
              <div className="results-grid">
                <div className="result-item">
                  <div className="result-icon">📈</div>
                  <div className="result-value">+20%</div>
                  <div className="result-label">Aumento na arrecadação</div>
                </div>
                <div className="result-item">
                  <div className="result-icon">👥</div>
                  <div className="result-value">85%</div>
                  <div className="result-label">Satisfação dos participantes</div>
                </div>
                <div className="result-item">
                  <div className="result-icon">🌳</div>
                  <div className="result-value">500+</div>
                  <div className="result-label">Prêmios distribuídos</div>
                </div>
              </div>
            </div>

            <div className="regulation-box">
              <p><strong>📄 Regulamento completo disponível em:</strong> prefeitura.gov.br/notafiscalpremiada</p>
            </div>
          </div>
        </section>

        {/* Notícias e Atualizações */}
        <section id="noticias" className="service-section news">
          <div className="container">
            <h2 className="service-section__title">Notícias e Atualizações</h2>
            <p className="service-section__subtitle">
              Fique por dentro de todas as novidades da campanha
            </p>
            <div className="news-grid">
              <div className="news-card">
                <div className="news-date">📅 Próximo Sorteio</div>
                <h3>Sorteio Mensal em Breve</h3>
                <p>Acompanhe a data do próximo sorteio e confira os números da sorte no site oficial</p>
              </div>
              <div className="news-card">
                <div className="news-date">👥 Participação</div>
                <h3>Mais de 10 mil Cadastrados</h3>
                <p>A campanha já conta com milhares de participantes ativos contribuindo com a cidade</p>
              </div>
              <div className="news-card">
                <div className="news-date">🤝 Parcerias</div>
                <h3>Comércio Local Participa</h3>
                <p>Estabelecimentos comerciais apoiam a iniciativa e incentivam a emissão de notas fiscais</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - Perguntas Frequentes */}
        <section id="faq" className="service-section faq">
          <div className="container">
            <h2 className="service-section__title">Perguntas Frequentes</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h4>Como faço para participar?</h4>
                <p>Basta se cadastrar no site oficial da campanha e começar a solicitar notas fiscais nas suas compras. O processo é simples, rápido e totalmente gratuito!</p>
              </div>
              <div className="faq-item">
                <h4>Quais tipos de prêmios posso ganhar?</h4>
                <p>Os prêmios variam e incluem eletrônicos, eletrodomésticos, vale-compras, viagens e outros itens conforme regulamento da campanha municipal.</p>
              </div>
              <div className="faq-item">
                <h4>Quando acontecem os sorteios?</h4>
                <p>Os sorteios são realizados mensalmente. As datas são divulgadas com antecedência no site oficial e nas redes sociais da prefeitura.</p>
              </div>
              <div className="faq-item">
                <h4>Como sei se fui sorteado?</h4>
                <p>Os resultados são publicados no site oficial, redes sociais e você também recebe uma notificação por e-mail ou SMS cadastrado.</p>
              </div>
              <div className="faq-item">
                <h4>A campanha é segura e transparente?</h4>
                <p>Sim! Todos os sorteios são auditados por empresas certificadas e os resultados são públicos. O regulamento completo está disponível para consulta.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contato e Suporte */}
        <section id="contato" className="service-section contact">
          <div className="container">
            <h2 className="service-section__title">Contato & Suporte</h2>
            <p className="service-section__subtitle">
              Estamos aqui para ajudar! Entre em contato conosco
            </p>
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-icon">📞</div>
                <h3>Telefone</h3>
                <p>+55 47 3043-1586</p>
                <span className="contact-hours">Seg à Sex: 8h às 18h</span>
              </div>
              <div className="contact-card">
                <div className="contact-icon">📧</div>
                <h3>E-mail</h3>
                <p>contato@prefeitura.gov.br</p>
                <span className="contact-hours">Resposta em até 24h</span>
              </div>
              <div className="contact-card">
                <div className="contact-icon">💬</div>
                <h3>WhatsApp</h3>
                <p>+55 47 3043-1586</p>
                <span className="contact-hours">Atendimento rápido</span>
              </div>
              <div className="contact-card">
                <div className="contact-icon">🏛️</div>
                <h3>Ouvidoria</h3>
                <p>ouvidoria@prefeitura.gov.br</p>
                <span className="contact-hours">Críticas e sugestões</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="service-section cta-final">
          <div className="container">
            <h2 className="service-section__title">Faça Parte Dessa Transformação!</h2>
            <p className="service-section__subtitle">
              Sua participação fortalece a economia local e contribui para uma cidade melhor
            </p>
            <div className="cta-buttons">
              <a href="https://wa.me/5547304315886" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
                Quero Participar Agora
              </a>
              <a href="https://wa.me/5547304315886" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-large">
                Solicitar Proposta
              </a>
            </div>
            
            <div className="seals-section">
              <h4>Certificações e Selos</h4>
              <div className="seals-grid">
                <div className="seal-item">
                  <span className="seal-icon">🏆</span>
                  <span className="seal-label">Cidade Sustentável 2025</span>
                </div>
                <div className="seal-item">
                  <span className="seal-icon">✅</span>
                  <span className="seal-label">Transparência Pública</span>
                </div>
                <div className="seal-item">
                  <span className="seal-icon">🌱</span>
                  <span className="seal-label">Certificação Verde</span>
                </div>
                <div className="seal-item">
                  <span className="seal-icon">🔒</span>
                  <span className="seal-label">Dados Protegidos</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ServiceLayout>
  );
};

export default Municipios;

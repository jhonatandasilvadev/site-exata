import React, { useState, useEffect } from 'react';
import ExataImage from './ExataImage';
import './Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Detectar seção ativa
      const sections = ['hero', 'areas', 'clients', 'departments', 'about'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  const navItems = [
    { id: 'hero', label: 'Serviços' },
    { id: 'areas', label: 'Áreas' },
    { id: 'clients', label: 'Clientes' },
    { id: 'departments', label: 'Estrutura' },
    { id: 'about', label: 'Sobre' }
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          {/* Logo */}
          <div className="header__logo" onClick={scrollToTop}>
            <ExataImage type="head" size="small" />
          </div>

          {/* Navegação */}
          <nav className="header__nav">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.id} className="nav-item">
                  <button
                    className={`nav-link ${activeSection === item.id ? 'nav-link--active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                    aria-label={`Ir para seção ${item.label}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botão de contato */}
          <div className="header__actions">
            <button className="contact-button">
              <span className="button-text">FALE CONOSCO</span>
              <span className="whatsapp-icon">📱</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

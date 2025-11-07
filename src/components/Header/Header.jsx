import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ExataImage from '../ExataImage/ExataImage';
import './Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/' || location.pathname === '';

  useEffect(() => {
    if (!isHome) return;

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
  }, [isHome]);

  const scrollToSection = (sectionId) => {
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const scrollToTop = () => {
    if (!isHome) {
      navigate('/');
    }
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
                    className={`nav-link ${activeSection === item.id && isHome ? 'nav-link--active' : ''}`}
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
            <a 
              href="https://wa.me/5547304315886" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-button"
            >
              <span className="button-text">FALE CONOSCO</span>
              <span className="whatsapp-icon">📱</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


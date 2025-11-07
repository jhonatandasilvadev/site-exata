import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import './ServiceLayout.css';

const ServiceLayout = ({ children }) => {
  return (
    <div className="service-layout">
      <Header />
      <main className="service-layout__content">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ServiceLayout;


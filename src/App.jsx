import React from 'react';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import AreasSection from './sections/AreasSection';
import ClientsSection from './sections/ClientsSection';
import DepartmentsSection from './sections/DepartmentsSection';
import AboutSection from './sections/AboutSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './styles/globals.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <main>
        <HeroSection />
        <AreasSection />
        <ClientsSection />
        <DepartmentsSection />
        <AboutSection />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

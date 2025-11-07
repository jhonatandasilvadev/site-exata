import React from 'react';
import Header from '../../components/Header/Header';
import HeroSection from '../../sections/HeroSection/HeroSection';
import AreasSection from '../../sections/AreasSection/AreasSection';
import ClientsSection from '../../sections/ClientsSection/ClientsSection';
import DepartmentsSection from '../../sections/DepartmentsSection/DepartmentsSection';
import AboutSection from '../../sections/AboutSection/AboutSection';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

const Home = () => {
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
};

export default Home;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Municipios from './pages/Municipios/Municipios';
import SorteiosPremios from './pages/SorteiosPremios/SorteiosPremios';
import ClubeVantagens from './pages/ClubeVantagens/ClubeVantagens';
import AssessoriaJuridica from './pages/AssessoriaJuridica/AssessoriaJuridica';
import CashBack from './pages/CashBack/CashBack';
import Gameficacao from './pages/Gameficacao/Gameficacao';
import CampanhaPontos from './pages/CampanhaPontos/CampanhaPontos';
import PersonalizacaoCampanhas from './pages/PersonalizacaoCampanhas/PersonalizacaoCampanhas';
import './styles/globals.css';

function App() {
  return (
    <Router basename="/site-exata">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/municipios" element={<Municipios />} />
        <Route path="/sorteios-premios" element={<SorteiosPremios />} />
        <Route path="/clube-vantagens" element={<ClubeVantagens />} />
        <Route path="/assessoria-juridica" element={<AssessoriaJuridica />} />
        <Route path="/cash-back" element={<CashBack />} />
        <Route path="/gameficacao" element={<Gameficacao />} />
        <Route path="/campanha-pontos" element={<CampanhaPontos />} />
        <Route path="/personalizacao-campanhas" element={<PersonalizacaoCampanhas />} />
      </Routes>
    </Router>
  );
}

export default App;

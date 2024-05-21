import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/utils/styles/index.module.css';
import Home from './pages/Home'; 
import About from './pages/About';
import Error from './pages/Error/'; 
import Header from './components/Header/';
import Footer from './components/Footer'; 
import FicheLogements from './pages/FicheLogements'; // Importez le composant de la page FicheLogements

function App() {
  return (
    <Router>
      <div>
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Fichelogements/:id" element={<FicheLogements />} /> {/* Ajoutez la route dynamique */}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/utils/styles/index.module.css';
import Home from './pages/Home'; 
import About from './pages/About';
import Error from './pages/Error/'; 
import Header from './components/Header/';
import Footer from './components/Footer'; 

function App() {
  return (
    <Router>
      <div>
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;

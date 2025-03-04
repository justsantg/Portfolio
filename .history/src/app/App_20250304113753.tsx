import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="bg-white shadow mt-8">
          <div className="container mx-auto px-4 py-6 text-center">
            <p className="text-gray-700">© 2023 Mi Portafolio. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
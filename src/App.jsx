import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Department from './pages/Department';
import Committees from './pages/Committees';
import Sponsors from './pages/Sponsors';
import CallForPapers from './pages/CallForPapers';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <div style={{
          backgroundColor: '#f0f7ff',
          color: '#0056b3',
          padding: '12px 20px',
          textAlign: 'center',
          fontWeight: '500',
          fontSize: '1.1rem',
          borderBottom: '1px solid #cce5ff',
          boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
          zIndex: 100,
          position: 'relative'
        }}>
          Note: The IC-MEET 2026 Conference has ended. Registrations and submissions are now closed.
        </div>
        <main style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/department" element={<Department />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/call-for-papers" element={<CallForPapers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import VictoriaPortal from "./pages/VictoriaPortal"; 

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div style={{ textAlign: 'center', marginTop: '50px', color: 'white' }}>
              <h1 style={{ color: '#00f2ff', fontSize: '3rem' }}>Ocean Tide Drop | AI Surfer</h1>
              <p style={{ letterSpacing: '2px' }}>MAIN HUB ACTIVE</p>
              
              <Link to="/victoria" style={{ 
                color: '#00f2ff', 
                textDecoration: 'none', 
                border: '2px solid #00f2ff', 
                padding: '15px 30px', 
                borderRadius: '5px',
                display: 'inline-block',
                marginTop: '30px',
                fontWeight: 'bold',
                textTransform: 'uppercase'
              }}>
                Enter Victoria Portal
              </Link>
            </div>
          } />
          <Route path="/victoria" element={<VictoriaPortal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import VictoriaPortal from "./pages/VictoriaPortal"; 

function App() {
  return (
    <Router basename="/otd-site">
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div style={{ textAlign: 'center', marginTop: '50px', color: 'white' }}>
              <h1>Ocean Tide Drop | AI Surfer</h1>
              <p>Main Hub Active</p>
              <Link to="/victoria" style={{ 
                color: '#00f2ff', 
                textDecoration: 'none', 
                border: '1px solid #00f2ff', 
                padding: '10px 20px', 
                borderRadius: '5px',
                display: 'inline-block',
                marginTop: '20px'
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

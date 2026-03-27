import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Basic Placeholder Components so the site doesn't crash
const Placeholder = ({ title }) => (
  <div className="min-h-screen bg-slate-950 text-white p-8 flex items-center justify-center">
    <h1 className="text-4xl font-black italic">{title} COMING SOON</h1>
  </div>
);

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans text-white text-center">
      <div className="max-w-6xl w-full bg-slate-900/30 border border-blue-500/10 p-12 rounded-[3rem] backdrop-blur-xl shadow-2xl">
        <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-400 to-cyan-500">
          OTD AI SURFER
        </h1>
        <p className="text-blue-400/80 font-bold tracking-[0.4em] uppercase mb-16 text-[10px] md:text-xs">Digital Ecosystem Architect</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <Link to="/automations" className="group bg-slate-800/40 hover:bg-blue-600 p-8 rounded-3xl transition-all no-underline text-white border border-blue-500/20">
            <h2 className="font-black italic text-xl">AI AUTOMATIONS</h2>
          </Link>
          <Link to="/workflows" className="group bg-slate-800/40 hover:bg-cyan-600 p-8 rounded-3xl transition-all no-underline text-white border border-cyan-500/20">
            <h2 className="font-black italic text-xl">STRATEGIC WORKFLOWS</h2>
          </Link>
          <Link to="/web-builds" className="group bg-slate-800/40 hover:bg-purple-600 p-8 rounded-3xl transition-all no-underline text-white border border-purple-500/20">
            <h2 className="font-black italic text-xl">HIGH-VELOCITY WEB</h2>
          </Link>
          <Link to="/game-builds" className="group bg-slate-800/40 hover:bg-orange-600 p-8 rounded-3xl transition-all no-underline text-white border border-orange-500/20">
            <h2 className="font-black italic text-xl">GAME & SIM BUILDS</h2>
          </Link>
          <Link to="/vault" className="group bg-slate-800/40 hover:bg-emerald-600 p-8 rounded-3xl transition-all no-underline text-white border border-emerald-500/20 lg:col-span-2">
            <h2 className="font-black italic text-xl">MEMBER VAULT ACCESS</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/automations" element={<Placeholder title="AUTOMATIONS" />} />
        <Route path="/workflows" element={<Placeholder title="WORKFLOWS" />} />
        <Route path="/web-builds" element={<Placeholder title="WEB BUILDS" />} />
        <Route path="/game-builds" element={<Placeholder title="GAME BUILDS" />} />
        <Route path="/vault" element={<Placeholder title="MEMBER VAULT" />} />
      </Routes>
    </Router>
  );
}

export default App;

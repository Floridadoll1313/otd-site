import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MemberPass from './MemberPass';
import Automations from './Automations';
import Workflows from './Workflows'; // Import the new page

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans text-white text-center">
      <div className="max-w-5xl w-full bg-slate-900/30 border border-blue-500/10 p-16 rounded-[3rem] backdrop-blur-xl">
        <h1 className="text-8xl font-black italic tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-400 to-cyan-500">
          OTD AI SURFER
        </h1>
        <p className="text-blue-400/80 font-bold tracking-[0.4em] uppercase mb-16 text-xs">Architecting the Future of Lead Flow</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/automations" className="group bg-slate-800/50 hover:bg-blue-600 border border-blue-500/20 p-8 rounded-3xl transition-all no-underline text-white shadow-xl hover:shadow-blue-500/20">
            <h2 className="font-black italic text-2xl group-hover:scale-110 transition-transform">AI AUTOMATIONS</h2>
          </Link>
          <Link to="/workflows" className="group bg-slate-800/50 hover:bg-cyan-600 border border-cyan-500/20 p-8 rounded-3xl transition-all no-underline text-white shadow-xl hover:shadow-cyan-500/20">
            <h2 className="font-black italic text-2xl group-hover:scale-110 transition-transform">STRATEGIC WORKFLOWS</h2>
          </Link>
          <Link to="/vault" className="group bg-slate-800/50 hover:bg-emerald-600 border border-emerald-500/20 p-8 rounded-3xl transition-all no-underline text-white shadow-xl hover:shadow-emerald-500/20">
            <h2 className="font-black italic text-2xl group-hover:scale-110 transition-transform">MEMBER VAULT</h2>
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
        <Route path="/automations" element={<Automations />} />
        <Route path="/workflows" element={<Workflows />} />
        <Route path="/vault" element={<MemberPass />} />
      </Routes>
    </Router>
  );
}

export default App;
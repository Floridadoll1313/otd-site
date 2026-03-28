import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Anchor, Compass, Shield, Wind, Menu, X, Lock } from 'lucide-react';

// Your core pages
import SOPBuilder from './pages/SOPBuilder';
import TokenArbitrage from './pages/TokenArbitrage';
import VictoriaPortal from './pages/VictoriaPortal';
import FuelGauge from './components/FuelGauge';

const Dashboard = () => (
  <div className="p-8 bg-[#0a0f1d] min-h-screen text-slate-200">
    <div className="max-w-7xl mx-auto">
      {/* Hatteras Hero */}
      <div className="mb-16 border-l-8 border-[#BE123C] pl-10 py-4 bg-slate-900/30 rounded-r-3xl">
        <h1 className="text-7xl font-black tracking-tighter uppercase text-white leading-none">
          The Watchtower
        </h1>
        <p className="text-[#BE123C] font-bold uppercase tracking-[0.4em] text-sm mt-4 italic">
          Ocean Tide Drop // "Choose your tools as you do."
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Navigation / Status */}
        <div className="lg:col-span-4 space-y-8">
          <FuelGauge />
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 italic text-slate-400 text-sm">
            "The storm does not ask permission. The lighthouse does not seek validation. It simply stands."
          </div>
        </div>

        {/* Tactical Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* SOP Builder (The Architect) */}
          <div className="bg-white p-10 rounded-tr-[5rem] rounded-bl-[5rem] flex flex-col justify-between border-t-8 border-[#BE123C] group shadow-2xl">
            <div>
              <div className="text-slate-900 mb-6 group-hover:rotate-12 transition-transform">
                <Compass size={40} strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl font-black uppercase text-slate-900 mb-4 tracking-tighter">SOP Architect</h2>
              <p className="text-slate-600 text-sm mb-10 font-medium italic">Map the currents. Build the protocols that keep the ship upright in the Graveyard of the Atlantic.</p>
            </div>
            <Link to="/sop-builder" className="bg-slate-900 text-white text-center py-5 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-[#BE123C] transition-all">
              Chart Course →
            </Link>
          </div>

          {/* Arbitrage (The Intel) */}
          <div className="bg-slate-900 p-10 rounded-tl-[5rem] rounded-br-[5rem] border border-slate-800 flex flex-col justify-between group">
            <div>
              <div className="text-[#BE123C] mb-6 group-hover:scale-110 transition-transform">
                <Wind size={40} />
              </div>
              <h2 className="text-3xl font-black uppercase text-white mb-4 tracking-tighter">Market Signal</h2>
              <p className="text-slate-400 text-sm mb-10 italic">Inference arbitrage and token pressure monitoring. Know which way the wind is blowing before it hits.</p>
            </div>
            <Link to="/arbitrage" className="bg-white text-slate-900 text-center py-5 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-slate-200 transition-all">
              Scan Horizons →
            </Link>
          </div>

        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-[#0a0f1d] font-serif">
        {/* Maritime Navigation */}
        <nav className="border-b-4 border-slate-900 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 px-8 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="bg-white p-2 rounded-lg group-hover:bg-[#BE123C] transition-colors">
                <Anchor className="text-slate-900 group-hover:text-white" size={28} />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black uppercase tracking-tighter text-2xl leading-none">Hatteras Realm</span>
                <span className="text-[#BE123C] text-[9px] font-bold uppercase tracking-[0.3em]">Ocean Tide Drop</span>
              </div>
            </Link>

            <div className="hidden md:flex gap-10 items-center">
              <Link to="/" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white">The Watchtower</Link>
              <Link to="/sop-builder" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white">SOPs</Link>
              <Link to="/victoria" className="text-slate-500 hover:text-[#BE123C]"><Lock size={18} /></Link>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sop-builder" element={<SOPBuilder />} />
            <Route path="/arbitrage" element={<TokenArbitrage />} />
            <Route path="/victoria" element={<VictoriaPortal />} />
          </Routes>
        </main>

        <footer className="py-20 bg-[#050811] text-center border-t border-slate-900">
           <p className="text-white font-black italic uppercase tracking-[0.2em] mb-4">"Choose your tools as you do."</p>
           <p className="text-[10px] text-slate-700 font-bold uppercase tracking-[0.8em]">© 2026 Hatteras Island // Florida Doll Intelligence</p>
        </footer>
      </div>
    </Router>
  );
}

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Globe, Zap, Database, Gamepad2, Bot, Lock } from 'lucide-react';

// 1. IMPORT YOUR NEW PAGES
import WebBuilds from './WebBuilds';
import GameBuilds from './GameBuilds';
import Workflows from './Workflows';
import Automations from './Automations';
import Vault from './Vault';

const Home = () => (
  <div className="min-h-screen bg-black text-white p-8 font-sans selection:bg-cyan-500/30">
    <div className="max-w-6xl mx-auto">
      <header className="mb-20 mt-12">
        <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 animate-sea-pulse leading-none">
          OTD AI SURFER
        </h1>
        <p className="text-xl md:text-2xl text-cyan-400 font-light tracking-[0.2em] uppercase italic">Digital Ecosystem Architect</p>
      </header>

      <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Web Builds", path: "/web", color: "from-cyan-500/20", icon: <Globe /> },
          { name: "Game Builds", path: "/games", color: "from-purple-500/20", icon: <Gamepad2 /> },
          { name: "Workflows", path: "/flows", color: "from-emerald-500/20", icon: <Database /> },
          { name: "Automations", path: "/auto", color: "from-orange-500/20", icon: <Bot /> },
          { name: "The Vault", path: "/vault", color: "from-red-500/20", icon: <Lock /> }
        ].map((item) => (
          <Link key={item.path} to={item.path} className="group relative p-10 bg-slate-900/40 border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:-translate-y-2">
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="relative z-10 text-cyan-500 mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
            <span className="relative z-10 text-2xl font-bold tracking-tight group-hover:text-cyan-400 transition-colors uppercase italic">{item.name}</span>
          </Link>
        ))}
      </nav>
      
      <footer className="mt-32 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] tracking-[0.3em] uppercase text-slate-600 font-bold">
        <span>© 2026 Ocean Tide Drop</span>
        <span className="text-cyan-900">Status: Optimized</span>
      </footer>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web" element={<WebBuilds />} />
        <Route path="/games" element={<GameBuilds />} />
        <Route path="/flows" element={<Workflows />} />
        <Route path="/auto" element={<Automations />} />
        <Route path="/vault" element={<Vault />} />
      </Routes>
    </Router>
  );
}

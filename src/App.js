const useTypewriter = (text, speed = 50) => {
  const [displayedText, setDisplayedText] = React.useState("");

  React.useEffect(() => {
    let i = 0;
    setDisplayedText(""); // Clear previous text
    
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return displayedText;
};
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// --- 1. PLACEHOLDER PAGES (Replace these with your actual files later) ---
const Home = () => <div className="p-20 text-white"><h1>Home Terminal</h1><p>System Online...</p></div>;
const WebBuilds = () => <div className="p-20 text-white"><h1>Web Builds</h1><p>Deploying protocols...</p></div>;
const GameBuilds = () => <div className="p-20 text-white"><h1>Game Engine</h1><p>Loading assets...</p></div>;
const Workflows = () => <div className="p-20 text-white"><h1>Workflows</h1><p>Automating tasks...</p></div>;
const Automations = () => <div className="p-20 text-white"><h1>Automations</h1><p>Running scripts...</p></div>;
const Vault = () => <div className="p-20 text-cyan-400"><h1>The Vault</h1><p>Encrypted Data Access Required.</p></div>;
const MarketInsights = () => <div className="p-20 text-white"><h1>Market Insights</h1><p>Analyzing trends...</p></div>;
const BookingForm = () => <div className="p-20 text-white"><h1>Booking</h1><p>Schedule a sync...</p></div>;

// --- 2. THE SYSTEM DOCK COMPONENT ---
const SystemDock = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/', icon: '⌂' },
    { name: 'Web', path: '/web', icon: '🌐' },
    { name: 'Games', path: '/games', icon: '🎮' },
    { name: 'Flows', path: '/flows', icon: '⚡' },
    { name: 'Vault', path: '/vault', icon: '🔒' },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2">
      <nav className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 p-2 backdrop-blur-xl shadow-2xl">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`relative flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 hover:bg-white/10 ${
                isActive ? 'bg-white/20 text-white scale-110' : 'text-gray-500'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {isActive && (
                <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

// --- 3. THE MAIN APP ASSEMBLY ---
export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen w-full bg-black overflow-hidden font-sans selection:bg-cyan-500/30">
        
        {/* GLOBAL NAVIGATION (Persists across routes) */}
        <SystemDock />

        {/* CONTENT AREA */}
        <main className="relative z-10 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/web" element={<WebBuilds />} />
            <Route path="/games" element={<GameBuilds />} />
            <Route path="/flows" element={<Workflows />} />
            <Route path="/auto" element={<Automations />} />
            <Route path="/vault" element={<Vault />} />
            <Route path="/insights" element={<MarketInsights />} />
            <Route path="/book" element={<BookingForm />} />
          </Routes>
        </main>

        {/* CRT SCANLINE & VFX OVERLAY */}
        <div className="pointer-events-none fixed inset-0 z-[60]">
          {/* Grid/Scanline lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_3px,3px_100%]" />
          
          {/* Subtle vignette for depth */}
          <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.7)]" />
          
          {/* Global Ambient Glow */}
          <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-cyan-500/5 blur-[120px]" />
        </div>

      </div>
    </Router>
  );
}

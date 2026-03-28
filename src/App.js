import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Users2, Download, Star, ShieldCheck, Cpu, LayoutGrid, Lock, Home as HomeIcon, Activity, CheckSquare, Wand2, Copy, CheckCircle, Terminal } from 'lucide-react';

// --- 1. THE TYPEWRITER ENGINE ---
const useTypewriter = (text, speed = 50) => {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let i = 0;
    setDisplayedText("");
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else { clearInterval(timer); }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return displayedText;
};

// --- 2. PROMPT FORGE COMPONENT ---
const PromptForge = () => {
  const [role, setRole] = useState('Marketing Expert');
  const [goal, setGoal] = useState('Write an email sequence');
  const [copied, setCopied] = useState(false);

  const generatedPrompt = `ACT AS A [${role.toUpperCase()}]. YOUR CORE OBJECTIVE IS TO [${goal.toUpperCase()}]. \n\nCONSTRAINTS: \n- USE PSYCHOLOGICAL TRIGGERS (URGENCY, SOCIAL PROOF).\n- MAINTAIN A HIGH-AUTHORITY, PROFESSIONAL TONE.\n- OUTPUT IN MARKDOWN FORMAT.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-10 max-w-2xl mx-auto animate-in fade-in duration-700">
      <div className="bg-slate-900/80 border border-emerald-500/20 p-8 rounded-[2.5rem] shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400"><Wand2 size={24} /></div>
          <h2 className="text-2xl font-black uppercase italic text-white">Prompt Forge <span className="text-emerald-500 font-mono text-[10px] tracking-[0.3em] ml-4">// V2.1</span></h2>
        </div>

        <div className="space-y-6">
          <div>
            <label className="text-[10px] font-mono uppercase text-slate-500 tracking-widest block mb-2">Define AI Persona</label>
            <input type="text" value={role} onChange={(e) => setRole(e.target.value)} className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl text-emerald-400 font-mono text-sm focus:border-emerald-500 outline-none transition-all" />
          </div>

          <div>
            <label className="text-[10px] font-mono uppercase text-slate-500 tracking-widest block mb-2">Define Objective</label>
            <textarea value={goal} onChange={(e) => setGoal(e.target.value)} className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl text-emerald-400 font-mono text-sm focus:border-emerald-500 outline-none h-24 transition-all" />
          </div>

          <div className="bg-black/50 p-6 rounded-2xl border border-slate-800 relative">
            <div className="text-[10px] font-mono text-slate-600 absolute top-4 left-4 flex items-center gap-2">
              <Terminal size={12} /> ENGINE_OUTPUT.txt
            </div>
            <p className="text-slate-300 font-mono text-[11px] mt-6 leading-relaxed whitespace-pre-wrap">
              {generatedPrompt}
            </p>
            <button onClick={handleCopy} className="absolute top-4 right-4 text-emerald-500 hover:text-white transition-colors flex items-center gap-2 text-[10px] font-black uppercase">
              {copied ? <CheckCircle size={14} /> : <Copy size={14} />}
              {copied ? "Copied" : "Copy Script"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 3. PREVIOUS COMPONENTS (Scorecard, Marketplace, etc.) ---
const AutomationScorecard = () => { /* Logic from previous turn */ };
const AgentMarketplace = () => { /* Logic from previous turn */ };
const Home = () => {
  const text = useTypewriter("OTD_ELITE_ACCESS // V2.0", 60);
  return <div className="p-20 font-mono text-cyan-400"><h1 className="text-5xl font-black italic">{text}</h1></div>;
};

// --- 4. SYSTEM DOCK ---
const SystemDock = () => {
  const location = useLocation();
  const navItems = [
    { path: '/', icon: <HomeIcon size={20} /> },
    { path: '/forge', icon: <Wand2 size={20} /> },
    { path: '/scorecard', icon: <Activity size={20} /> },
    { path: '/marketplace', icon: <LayoutGrid size={20} /> },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex gap-2 bg-black/80 backdrop-blur-xl p-2 rounded-2xl border border-white/10 shadow-2xl">
        {navItems.map((item) => (
          <Link key={item.path} to={item.path} className={`p-4 rounded-xl transition-all ${location.pathname === item.path ? 'bg-emerald-500/20 text-emerald-400 scale-110' : 'text-slate-500 hover:text-white'}`}>
            {item.icon}
          </Link>
        ))}
      </nav>
    </div>
  );
};

// --- 5. MAIN APP ASSEMBLY ---
export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#020202] text-slate-200 overflow-hidden font-sans">
        <SystemDock />
        <main className="relative z-10 pt-10 pb-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forge" element={<PromptForge />} />
            <Route path="/scorecard" element={<AutomationScorecard />} />
            <Route path="/marketplace" element={<AgentMarketplace />} />
          </Routes>
        </main>
        {/* CRT VFX OVERLAY */}
        <div className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_3px,3px_100%] opacity-40" />
      </div>
    </Router>
  );
}

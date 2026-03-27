import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Heart, MessageSquare, X, Sparkles, Anchor } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('Shoreline');

  return (
    <div className="relative min-h-screen bg-[#020617] text-white font-sans">
      {/* BACKGROUND MAGIC */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')` }} />
      
      {/* NAV BAR */}
      <nav className="relative z-50 flex items-center justify-between px-10 py-6 bg-slate-900/60 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-4">
          <img src="1000016457.png" alt="Logo" className="w-12 h-12 rounded-xl border border-cyan-400 shadow-[0_0_10px_cyan]" />
          <h1 className="text-2xl font-black italic tracking-tighter text-cyan-400 neon-text">AI SURFER</h1>
        </div>
        <div className="flex gap-6 text-xs font-bold uppercase tracking-widest">
          {['Shoreline', 'Hub', 'Shop', 'Lookout', 'Swell'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} 
                    className={activeTab === tab ? "text-pink-500" : "text-slate-400"}>{tab}</button>
          ))}
        </div>
      </nav>

      {/* MAIN STAGE */}
      <main className="relative z-10 p-12 max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            {activeTab === 'Shoreline' && <div className="text-center py-20"><h2 className="text-6xl font-black italic mb-4">THE <span className="text-cyan-400">SHORELINE</span></h2><p className="text-slate-400 text-xl italic">Catch the first wave of AI briefings.</p></div>}
            {activeTab === 'Hub' && <div className="p-10 bg-slate-900/80 rounded-[40px] border-2 border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.3)]"><h3 className="text-3xl font-bold mb-4 text-pink-500">Resource Reef — $17/mo</h3><p className="text-slate-300">Your sanctuary for AI education and CRM blueprints.</p></div>}
            {activeTab === 'Lookout' && <div className="text-center"><h2 className="text-4xl font-black mb-10">THE LOOKOUT</h2><div className="flex justify-center gap-10"><div><div className="w-24 h-24 rounded-full border-2 border-cyan-400 mb-2 overflow-hidden mx-auto"><img src="1000016457.png" className="w-full h-full object-cover" /></div><p className="font-bold text-pink-500">Stormy Gray</p></div></div></div>}
            {activeTab === 'Swell' && <div className="text-center py-10"><Heart className="mx-auto text-rose-500 mb-6" size={48} /><p className="italic text-slate-400">"Dedicated to the 12-year legacy of Bulls. The heartbeat of the island."</p></div>}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* PAIN POINT BOT */}
      <PainPointBot />
    </div>
  );
}

function PainPointBot() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {open && (
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-72 bg-slate-900 border-2 border-cyan-400 rounded-3xl mb-4 overflow-hidden shadow-2xl">
          <div className="bg-cyan-500 p-3 font-bold text-xs flex justify-between items-center text-black"><span>PAIN-POINT AI</span><button onClick={() => setOpen(false)}><X size={18}/></button></div>
          <div className="p-5"><textarea className="w-full bg-slate-800 rounded-xl p-3 text-sm h-20 outline-none border border-slate-700 focus:border-pink-500" placeholder="What is your biggest business headache?" /></div>
        </motion.div>
      )}
      <button onClick={() => setOpen(!open)} className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center text-white shadow-[0_0_20px_pink]"><MessageSquare /></button>
    </div>
  );
}

import React from 'react';
import { Zap, CheckCircle, ArrowLeft, DollarSign, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Automations = () => {
  const services = [
    { title: "LinkedIn Lead Sniper", desc: "Auto-scrape profiles & write AI personalized intros that get replies.", price: "$1,200 Setup" },
    { title: "CRM Ghostwriter", desc: "AI auto-updates your CRM notes from Zoom recordings while you sleep.", price: "$2,500 Setup" },
    { title: "24/7 AI Voice Agent", desc: "Handles inbound calls, qualifies leads, and books appointments 24/7.", price: "$3,000 Setup" },
    { title: "The 'Clay' Waterfall", desc: "Advanced lead enrichment engine to find any decision-maker's email.", price: "$1,500 Setup" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-blue-400 mb-12 hover:text-white transition-colors no-underline font-bold uppercase tracking-widest text-xs">
          <ArrowLeft size={16} /> Back to Ecosystem
        </Link>

        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 uppercase leading-none">
            AI Automations
          </h1>
          <p className="text-slate-400 mt-6 text-lg md:text-xl max-w-2xl font-medium">
            We build the systems that buy your time back. High-velocity infrastructure for modern scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-slate-900/40 border border-blue-500/10 p-10 rounded-[2.5rem] hover:border-blue-500/40 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity">
                <Zap className="text-blue-400" size={40} />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tight">{s.title}</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed font-medium">{s.desc}</p>
              <div className="flex items-center justify-between border-t border-slate-800/50 pt-6">
                <span className="flex items-center text-green-400 font-black text-xl italic tracking-tighter">
                  {s.price}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-blue-400 uppercase tracking-[0.2em] font-black">
                  <ShieldCheck size={12}/> High ROI
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-blue-600/5 border border-blue-500/20 rounded-[3rem] text-center">
          <h4 className="text-xs font-black text-blue-400 uppercase tracking-[0.4em] mb-6">The Competitive Edge</h4>
          <p className="text-slate-300 italic text-lg max-w-3xl mx-auto leading-relaxed">
            "Generic agencies charge $10k+ for basic Zapier flows. We deploy custom, high-velocity AI agents and waterfall enrichment at a fraction of the cost."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Automations;

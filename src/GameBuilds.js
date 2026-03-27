GameBuilds.js 
import React from 'react';
import { Gamepad2, Layers, Cpu, ArrowLeft, Trophy } from 'lucide-react';

const GameBuilds = () => {
  const games = [
    { title: "Brand Mini-Games", desc: "Browser-based games (Three.js) designed to capture leads and increase time-on-site.", price: "$3,500+" },
    { title: "Training Simulations", desc: "Interactive AI-driven environments for employee onboarding or product demos.", price: "$7,000+" },
    { title: "Phaser.js Web Games", desc: "2D high-velocity arcade games for marketing campaigns.", price: "$2,500+" },
    { title: "Custom WebGL Visuals", desc: "High-end 3D backgrounds and interactive site elements.", price: "$1,500+" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => window.location.href = '/'} className="flex items-center gap-2 text-blue-400 mb-8 hover:text-white transition-colors">
          <ArrowLeft size={20} /> Back to Hub
        </button>

        <div className="mb-12">
          <h1 className="text-6xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 uppercase">
            Game & Sim Builds
          </h1>
          <p className="text-slate-400 mt-4 text-lg">Interactive experiences that turn users into players.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {games.map((g, i) => (
            <div key={i} className="bg-slate-900/40 border border-orange-500/10 p-8 rounded-3xl hover:bg-slate-900/60 transition-all group border-b-4 border-b-orange-600">
              <Gamepad2 className="text-orange-400 mb-4 group-hover:rotate-12 transition-transform" />
              <h3 className="text-2xl font-bold mb-2 italic uppercase">{g.title}</h3>
              <p className="text-slate-400 text-sm mb-6">{g.desc}</p>
              <div className="text-xl font-black text-orange-400">{g.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameBuilds;
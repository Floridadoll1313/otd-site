import React from 'react';
import { Link } from 'react-router-dom';

const WebBuilds = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-purple-400 hover:text-white transition-colors mb-8 inline-block font-bold">← BACK TO HUB</Link>
        <h1 className="text-5xl md:text-7xl font-black italic mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500">HIGH-VELOCITY WEB</h1>
        <div className="bg-slate-900/50 border border-purple-500/20 p-8 rounded-3xl backdrop-blur-md">
          <p className="text-xl text-slate-300 leading-relaxed mb-6">
            Building next-generation digital experiences using React, Tailwind, and Framer Motion.
          </p>
          <div className="grid grid-cols-2 gap-4 text-purple-300 font-bold">
            <div className="bg-purple-900/20 p-4 rounded-xl border border-purple-500/10">Responsive Design</div>
            <div className="bg-purple-900/20 p-4 rounded-xl border border-purple-500/10">React Ecosystems</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebBuilds;

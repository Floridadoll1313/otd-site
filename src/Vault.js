import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, EyeOff, Key } from 'lucide-react';

const Vault = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="text-slate-600 hover:text-red-500 transition-colors uppercase tracking-[0.3em] text-[10px] font-black">← Hub Access</Link>
        
        <div className="mt-20 text-center">
          <div className="inline-block p-6 bg-red-500/10 rounded-full mb-8 border border-red-500/20">
            <Lock className="text-red-500" size={48} />
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-4">The Vault</h1>
          <p className="text-slate-500 uppercase tracking-[0.4em] text-xs font-bold mb-16">Encrypted Asset Repository</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="p-8 bg-black border border-white/5 rounded-2xl flex items-center gap-6 group hover:bg-red-950/10 transition-colors">
              <Key className="text-slate-700 group-hover:text-red-500" />
              <div className="text-left">
                <span className="block text-[10px] font-mono text-slate-600 uppercase">Access Level</span>
                <span className="font-bold uppercase tracking-widest text-sm">Security Keys</span>
              </div>
            </div>
            <div className="p-8 bg-black border border-white/5 rounded-2xl flex items-center gap-6 group hover:bg-red-950/10 transition-colors">
              <EyeOff className="text-slate-700 group-hover:text-red-500" />
              <div className="text-left">
                <span className="block text-[10px] font-mono text-slate-600 uppercase">Data Type</span>
                <span className="font-bold uppercase tracking-widest text-sm">Dark Assets</span>
              </div>
            </div>
          </div>

          <div className="mt-20 p-4 border border-red-900/30 rounded text-red-900/50 font-mono text-[10px] uppercase tracking-widest">
            Authorization Required for Full Decryption
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vault;

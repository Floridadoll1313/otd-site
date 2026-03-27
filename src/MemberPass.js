import React from 'react';
import { Download, Zap, ShieldCheck } from 'lucide-react';

const MemberPass = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 font-sans">
      <div className="max-w-4xl mx-auto border border-blue-500/30 rounded-2xl bg-slate-800/50 p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-black tracking-tighter text-blue-400 italic">OTD MEMBER PASS</h1>
          <ShieldCheck className="text-blue-500 w-8 h-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900 p-6 rounded-xl border border-white/5 hover:border-blue-500/50 transition-all">
            <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
              <Zap className="text-yellow-400 w-5 h-5" /> Lead Scout v1.0
            </h2>
            <p className="text-slate-400 text-sm mb-6">Automated AI intelligence for finding high-ticket clients.</p>
            <button className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-lg font-bold flex items-center justify-center gap-2">
              <Download size={18} /> Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberPass;

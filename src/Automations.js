import React from 'react';
import { Activity, Radio, Workflow } from 'lucide-react';

const Automations = () => {
  const logs = [
    { time: "14:02:01", action: "Lead Captured", system: "Phase 1" },
    { time: "14:05:44", action: "Ticket Routed", system: "Phase 2" },
    { time: "14:10:12", action: "Survey Dispatched", system: "Phase 3" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black italic uppercase mb-2">Automation Matrix</h1>
        <p className="text-emerald-500 font-mono text-[10px] uppercase mb-12 tracking-[0.3em]">// LIVE SYSTEM FEED</p>
        
        <div className="bg-slate-900 rounded-[2.5rem] border border-slate-800 overflow-hidden">
          {logs.map((log, i) => (
            <div key={i} className="flex items-center gap-6 p-6 border-b border-slate-800 last:border-0 hover:bg-emerald-500/5 transition-colors">
              <span className="font-mono text-emerald-500 text-xs">{log.time}</span>
              <Workflow size={16} className="text-slate-600" />
              <div className="flex-grow">
                <span className="font-black italic uppercase text-sm tracking-tight">{log.action}</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">{log.system}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Automations;

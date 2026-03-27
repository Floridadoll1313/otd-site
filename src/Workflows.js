import React from 'react';
import { GitBranch, Target, Layers, ArrowLeft, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Workflows = () => {
  const flows = [
    { 
      title: "The Content Multiplier", 
      desc: "Turn 1 video into 30 pieces of social content, distributed across all platforms automatically.",
      roi: "Save 20hrs/week" 
    },
    { 
      title: "Inbound Lead Engine", 
      desc: "Instant lead response, automated qualification, and direct calendar booking without lifting a finger.",
      roi: "+40% Conversion" 
    },
    { 
      title: "Client Onboarding Flow", 
      desc: "Automated contracts, invoice generation, and Slack channel setup the moment a deal is closed.",
      roi: "Zero Admin Overhead" 
    },
    { 
      title: "Custom Data Dashboards", 
      desc: "Real-time visibility into your business metrics, pulling data from ads, CRM, and Stripe.",
      roi: "Data-Driven Scaling" 
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-cyan-400 mb-12 hover:text-white transition-colors no-underline font-bold uppercase tracking-widest text-xs">
          <ArrowLeft size={16} /> Back to Ecosystem
        </Link>

        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase leading-none">
            Strategic Workflows
          </h1>
          <p className="text-slate-400 mt-6 text-lg md:text-xl max-w-2xl font-medium">
            We don't just build tools; we build the connective tissue that makes your business run on autopilot.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {flows.map((f, i) => (
            <div key={i} className="bg-slate-900/40 border border-cyan-500/10 p-10 rounded-[2.5rem] hover:bg-slate-900/60 transition-all group">
              <div className="flex items-start justify-between mb-6">
                <Layers className="text-cyan-400" size={32} />
                <span className="text-[10px] font-black bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full uppercase tracking-widest">
                  {f.roi}
                </span>
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tight text-white">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center gap-8 p-10 bg-cyan-600/5 border border-cyan-500/20 rounded-[3rem]">
          <BarChart3 size={48} className="text-cyan-400 shrink-0" />
          <div>
            <h4 className="text-xl font-bold mb-2">Operational Efficiency Audit</h4>
            <p className="text-slate-400 italic">"Most businesses are losing 30% of their revenue to manual 'busy work.' We identify the leaks and plug them with code."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflows;

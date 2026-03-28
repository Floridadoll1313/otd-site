import React from 'react';
import { BarChart3, Zap, ArrowDownCircle, ShieldCheck } from 'lucide-react';

const TokenArbitrage = () => {
  const models = [
    { name: 'Gemini 3.1 Flash-Lite', provider: 'Google', input: 0.25, output: 1.50, latency: '210ms', efficiency: '98%' },
    { name: 'GPT-5 Mini', provider: 'OpenAI', input: 0.25, output: 2.00, latency: '280ms', efficiency: '95%' },
    { name: 'Claude 4.5 Haiku', provider: 'Anthropic', input: 1.00, output: 5.00, latency: '264ms', efficiency: '99%' },
    { name: 'Llama 4 Maverick', provider: 'Meta', input: 0.26, output: 0.85, latency: '190ms', efficiency: '92%' },
    { name: 'DeepSeek V3.2', provider: 'DeepSeek', input: 0.28, output: 0.42, latency: '410ms', efficiency: '88%' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 border-b border-cyan-500/20 pb-8">
          <div className="flex items-center gap-4 mb-4">
            <BarChart3 className="text-pink-500" size={32} />
            <h1 className="text-4xl font-black italic tracking-tighter uppercase underline decoration-cyan-500">
              Token Arbitrage Terminal
            </h1>
          </div>
          <p className="text-slate-400 max-w-2xl font-mono text-sm uppercase">
            Real-time market intelligence for AI infrastructure. 
            Last Sync: {new Date().toLocaleTimeString()} EST.
          </p>
        </header>

        {/* Intelligence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
            <p className="text-[10px] text-cyan-400 font-bold uppercase mb-1">Market Floor</p>
            <p className="text-2xl font-mono font-bold">$0.25 / 1M</p>
          </div>
          {/* Add more stats here */}
        </div>

        {/* The Terminal Table */}
        <div className="bg-slate-900/30 rounded-2xl border border-slate-800 overflow-hidden backdrop-blur-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900/80 text-[10px] uppercase tracking-[0.2em] text-slate-500">
                <th className="p-5">Model / System</th>
                <th className="p-5">Input (per 1M)</th>
                <th className="p-5">Output (per 1M)</th>
                <th className="p-5 text-cyan-400"><Zap size={14} className="inline mr-1"/> Latency</th>
                <th className="p-5">Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50 font-mono text-sm">
              {models.map((model) => (
                <tr key={model.name} className="hover:bg-cyan-500/5 transition-colors group">
                  <td className="p-5 font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {model.name}
                    <span className="block text-[9px] text-slate-600 font-normal">{model.provider}</span>
                  </td>
                  <td className="p-5 text-slate-300">${model.input.toFixed(2)}</td>
                  <td className="p-5 text-slate-300">${model.output.toFixed(2)}</td>
                  <td className="p-5 text-cyan-500 font-bold">{model.latency}</td>
                  <td className="p-5">
                    <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700 text-pink-500 text-[10px]">
                      {model.efficiency}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-6 bg-pink-500/5 border border-pink-500/20 rounded-2xl flex items-center gap-6">
          <div className="bg-pink-500/20 p-3 rounded-full"><ShieldCheck className="text-pink-500" /></div>
          <div>
            <h3 className="font-bold uppercase text-xs text-pink-500">Arbitrage Insight</h3>
            <p className="text-sm text-slate-400">
              Moving high-volume summarization tasks from GPT-4o to <span className="text-white font-bold italic underline">Gemini 3.1 Flash-Lite</span> can reduce operational burn by <span className="text-cyan-400">~91%</span> today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenArbitrage;


import React from "react";
import { Link } from "react-router-dom";
import { Lock, Sparkles, Waves } from "lucide-react";

export default function VictoriaPortal() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center px-6 py-16 relative overflow-hidden">

      {/* Neon ocean shimmer */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-black pointer-events-none"></div>
      <div className="absolute inset-0 animate-pulse opacity-20 bg-[radial-gradient(circle_at_50%_0%,rgba(0,255,255,0.3),transparent_70%)]"></div>

      <div className="relative z-10 max-w-xl text-center">
        <h1 className="text-5xl font-bold text-cyan-300 drop-shadow-lg tracking-wide mb-6">
          VICTORIA PORTAL
        </h1>

        <p className="text-gray-300 text-lg mb-10 flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-cyan-300" />
          System Status: <span className="text-green-400 font-semibold">ONLINE</span>
        </p>

        {/* Encrypted Stream Box */}
        <div className="bg-white/5 backdrop-blur-md border border-cyan-400/20 rounded-xl p-6 shadow-lg mb-10">
          <h3 className="text-xl font-semibold text-cyan-200 mb-2 flex items-center gap-2">
            <Lock className="w-5 h-5 text-cyan-300" />
            Encrypted Data Stream
          </h3>
          <p className="text-gray-300">Awaiting surfer authentication…</p>
        </div>

        {/* Return Link */}
        <Link
          to="/"
          className="text-cyan-300 hover:text-cyan-200 transition flex items-center justify-center gap-2 text-lg"
        >
          <Waves className="w-5 h-5" />
          Return to Main Terminal
        </Link>
      </div>
    </div>
  );
}

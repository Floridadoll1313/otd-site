import React from "react";
import MemberPass from "./MemberPass";

export default function MemberServices() {
  return (
    <MemberPass>
      <div className="min-h-screen w-full bg-black text-white px-6 py-20">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl font-bold text-teal-300 drop-shadow-[0_0_12px_rgba(45,212,191,0.8)] text-center">
            Member Services
          </h1>

          <p className="mt-4 text-center text-teal-200/80">
            Exclusive tools, premium content, and realm‑level services.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="p-6 bg-slate-900/60 border border-teal-500/20 rounded-xl shadow-lg hover:shadow-teal-500/30 transition-all">
              <h2 className="text-xl font-bold text-teal-300">Cinematic Tools</h2>
              <p className="mt-2 text-teal-200/70">
                Access your AI Surfer tools, creative engines, and realm utilities.
              </p>
            </div>

            <div className="p-6 bg-slate-900/60 border border-teal-500/20 rounded-xl shadow-lg hover:shadow-teal-500/30 transition-all">
              <h2 className="text-xl font-bold text-teal-300">Premium Services</h2>
              <p className="mt-2 text-teal-200/70">
                Workshops, templates, lore engines, and founder‑level support.
              </p>
            </div>

          </div>

        </div>
      </div>
    </MemberPass>
  );
}

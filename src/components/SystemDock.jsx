import React from "react";

export default function SystemDock() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-4 px-6 py-3 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl">
      <DockItem label="Home" />
      <DockItem label="Console" />
      <DockItem label="Founders" />
      <DockItem label="Tide Tools" />
      <DockItem label="Settings" />
    </div>
  );
}

function DockItem({ label }) {
  return (
    <button className="text-white/80 hover:text-white transition-all text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/10">
      {label}
    </button>
  );
}
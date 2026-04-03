import React from "react";
import "./App.css";

// Global UI components
import SystemDock from "./components/SystemDock.jsx";
import GlobalHeader from "./components/GlobalHeader.js";

export default function App({ children }) {
  return (
    <div className="app-shell min-h-screen w-full bg-black text-white overflow-x-hidden">

      {/* Global Header */}
      {GlobalHeader && <GlobalHeader />}

      {/* Main Content Area */}
      <main className="pt-20 pb-24 px-4">
        {children}
      </main>

      {/* System Dock (bottom navigation) */}
      {SystemDock && <SystemDock />}
    </div>
  );
}

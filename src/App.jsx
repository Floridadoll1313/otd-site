import React from "react";
import SystemDock from "./components/SystemDock.jsx";

export default function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-black via-blue-900 to-black text-white relative overflow-hidden">
      {/* Hero */}
      <div className="flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg">
          Ocean Tide Drop AI Surfer
        </h1>

        <p className="mt-4 text-lg text-white/80 max-w-xl">
          Cinematic intelligence rising from the deep.  
          Your mythic console awaits.
        </p>
      </div>

      {/* Dock */}
      <SystemDock />
    </div>
  );
}
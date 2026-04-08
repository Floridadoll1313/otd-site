import React from "react";
import { Outlet } from "react-router-dom";
import SystemDock from "./system/SystemDock";
import MembershipGate from "./components/MembershipGate";

export default function App() {
  return (
    <div className="min-h-screen w-full text-white bg-gradient-to-b from-[#00111a] to-[#002b3d] relative overflow-x-hidden">

      {/* Membership Wall (gates protected areas) */}
      <MembershipGate />

      {/* Page Content */}
      <main className="pt-20 pb-24 px-4 max-w-7xl mx-auto">
        <Outlet />
      </main>

      {/* Global System Dock */}
      <SystemDock />
    </div>
  );
}

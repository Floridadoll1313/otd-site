import React from "react";
import { Outlet } from "react-router-dom";
import SystemDock from "./components/SystemDock";
import Header from "./components/Header";
import "./styles/global.css";

export default function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-black via-blue-900 to-black text-white relative overflow-hidden">
      <Header />
      <SystemDock />

      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
}

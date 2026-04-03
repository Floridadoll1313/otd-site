import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";

// Realms
import CommandCenter from "./pages/CommandCenter.jsx";
import VictoriaPortal from "./pages/VictoriaPortal.jsx";
import GameBuilds from "./pages/GameBuilds.jsx";
import Island from "./pages/Island.jsx";
import Arena from "./pages/Arena.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Campfire from "./pages/Campfire.jsx";
import Founders from "./pages/Founders.jsx";
import MembershipWall from "./pages/MemberPass.jsx";

// 404
import LostAtSea from "./pages/LostAtSea.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        {/* Main Hub */}
        <Route path="/" element={<App><CommandCenter /></App>} />

        {/* Portals */}
        <Route path="/victoria" element={<App><VictoriaPortal /></App>} />

        {/* Realms */}
        <Route path="/game-builds" element={<App><GameBuilds /></App>} />
        <Route path="/island" element={<App><Island /></App>} />
        <Route path="/arena" element={<App><Arena /></App>} />
        <Route path="/dashboard" element={<App><Dashboard /></App>} />
        <Route path="/campfire" element={<App><Campfire /></App>} />
        <Route path="/founders" element={<App><Founders /></App>} />

        {/* Membership Gate */}
        <Route path="/members" element={<App><MembershipWall /></App>} />

        {/* 404 */}
        <Route path="*" element={<App><LostAtSea /></App>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

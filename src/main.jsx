import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

// Import your pages
import Home from "./pages/Home";
import Island from "./pages/Island";
import Campfire from "./pages/Campfire";
import Arena from "./pages/Arena";
import Dashboard from "./pages/Dashboard";
import Founders from "./pages/Founders";
import Lore from "./pages/Lore";
import Progression from "./pages/Progression";
import Ceremony from "./pages/Ceremony";
import Community from "./pages/Community";
import Blog from "./pages/Blog";
import Members from "./pages/Members";
import Free from "./pages/Free";
import Tools from "./pages/Tools";
import Strategy from "./pages/Strategy";
import Pricing from "./pages/Pricing";
import Workflows from "./pages/Workflows";
import Blueprints from "./pages/Blueprints";
import AgentMarketplace from "./pages/AgentMarketplace";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="island" element={<Island />} />
        <Route path="campfire" element={<Campfire />} />
        <Route path="arena" element={<Arena />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="founders" element={<Founders />} />
        <Route path="lore" element={<Lore />} />
        <Route path="progression" element={<Progression />} />
        <Route path="ceremony" element={<Ceremony />} />
        <Route path="community" element={<Community />} />
        <Route path="blog" element={<Blog />} />
        <Route path="members" element={<Members />} />
        <Route path="free" element={<Free />} />
        <Route path="tools" element={<Tools />} />
        <Route path="strategy" element={<Strategy />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="workflows" element={<Workflows />} />
        <Route path="blueprints" element={<Blueprints />} />
        <Route path="agent-marketplace" element={<AgentMarketplace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

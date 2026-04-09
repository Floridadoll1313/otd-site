import React from "react";
import { createBrowserRouter } from "react-router-dom";

// Pages
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Pricing from "./pages/Pricing.jsx";
import PromptForge from "./pages/PromptForge.jsx";
import MarketInsights from "./pages/MarketInsights.jsx";
import VoiceInterface from "./pages/VoiceInterface.jsx";
import BlueprintLibrary from "./pages/BlueprintLibrary.jsx";

// Layout
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/promptforge", element: <PromptForge /> },
      { path: "/marketinsights", element: <MarketInsights /> },
      { path: "/voiceinterface", element: <VoiceInterface /> },
      { path: "/blueprintlibrary", element: <BlueprintLibrary /> },
    ],
  },
]);

export default router;

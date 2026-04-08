import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import MemberPortal from "./MemberPortal";
import Workflows from "./pages/Workflows";
import Strategy from "./pages/Strategy";
import Production from "./pages/Production";
import WebsiteBuild from "./pages/WebsiteBuild";
import AutomationScorecard from "./pages/AutomationScorecard";
import BlueprintLibrary from "./pages/BlueprintLibrary";
import LeadSniper from "./pages/LeadSniper";
import MarketInsights from "./pages/MarketInsights";
import ROICalculator from "./pages/ROICalculator";
import SecureCTA from "./pages/SecureCTA";
import Vault from "./pages/Vault";
import VoiceInterface from "./pages/VoiceInterface";
import TokenArbitrage from "./pages/TokenArbitrage";
import AgentMarketplace from "./pages/AgentMarketplace";
import PromptForge from "./pages/PromptForge";
import Interaction from "./pages/Interaction";
import Pricing from "./pages/Pricing";
import About from "./pages/About";

// PRIVATE — not linked anywhere
import VictoriaDashboard from "./pages/VictoriaDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
    ],
  },

  {
    path: "/memberportal",
    element: <MemberPortal />,
    children: [
      { index: true, element: <div /> }, // dashboard handled inside MemberPortal
      { path: "workflows", element: <Workflows /> },
      { path: "strategy", element: <Strategy /> },
      { path: "production", element: <Production /> },
      { path: "websitebuild", element: <WebsiteBuild /> },
      { path: "automation", element: <AutomationScorecard /> },
      { path: "blueprints", element: <BlueprintLibrary /> },
      { path: "leadsniper", element: <LeadSniper /> },
      { path: "marketinsights", element: <MarketInsights /> },
      { path: "roi", element: <ROICalculator /> },
      { path: "securecta", element: <SecureCTA /> },
      { path: "vault", element: <Vault /> },
      { path: "voice", element: <VoiceInterface /> },
      { path: "token", element: <TokenArbitrage /> },
      { path: "agents", element: <AgentMarketplace /> },
      { path: "promptforge", element: <PromptForge /> },
      { path: "interaction", element: <Interaction /> },
      { path: "pricing", element: <Pricing /> },
      { path: "about", element: <About /> },

      // PRIVATE — hidden from UI
      { path: "victoria", element: <VictoriaDashboard /> },
    ],
  },
]);

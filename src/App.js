import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

// 1. Core Layout Components
import SystemDock from './components/SystemDock';

// 2. High-Value Intelligence & Operations (Importing your 27 files)
import Home from './pages/Home';
import WebBuilds from './pages/WebBuilds';
import LeadSniper from './pages/LeadSniper';
import VictoriaDashboard from './pages/VictoriaDashboard';
import Vault from './pages/Vault';
import ComplianceSentinel from './pages/ComplianceSentinel';
import Pricing from './pages/Pricing';
// ... (Ensure all other 20+ components are imported here)

export default function App() {
  return (
    <Router>
      <div className="bg-slate-950 min-h-screen text-white font-sans selection:bg-emerald-500/30">
        
        {/* THE NAVIGATION DOCK (Persistent across all 27 pages) */}
        <SystemDock />
        
        {/* THE CONTENT WINDOW */}
        <main className="pb-32"> {/* Bottom padding prevents Dock overlap */}
          <Routes>
            {/* Public Sectors */}
            <Route path="/" element={<Home />} />
            <Route path="/web" element={<WebBuilds />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/compliance" element={<ComplianceSentinel />} />

            {/* Private Intelligence Sectors */}
            <Route path="/vault" element={<Vault />} />
            <Route path="/vault/sniper" element={<LeadSniper />} />
            
            {/* Victoria's Command Center (Live April 14th) */}
            <Route path="/victoria" element={<VictoriaDashboard />} />
            
            {/* Fallback for 404s */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* THE STEALTH ANALYTICS SHIELD */}
        <Analytics
          scriptSrc="/<unique-path>/script.js"
          eventEndpoint="/<unique-path>/event"
          viewEndpoint="/<unique-path>/view"
          beforeSend={(event) => {
            // Invisible Mode: Never track Victoria or the Vault
            if (event.url.includes('/victoria') || event.url.includes('/vault')) {
              return null;
            }
            return event;
          }}
          debug={true} // Switch to false after you verify console logs
        />
      </div>
    </Router>
  );
}

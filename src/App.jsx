import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

// Correct imports based on your actual files
import GlobalHeader from "./components/GlobalHeader.jsx";
import SystemDock from "./components/SystemDock.js";


export default function App() {
  return (
    <div className="app-container">
      <GlobalHeader />
      <RouterProvider router={router} />
      <SystemDock />
    </div>
  );
}

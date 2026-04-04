import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import GlobalHeader from "./components/GlobalHeader.js";

export default function App() {
  return (
    <div className="app-container">
      <GlobalHeader />
      <RouterProvider router={router} />
    </div>
  );
}

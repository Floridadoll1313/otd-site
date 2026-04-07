import React from "react";
import { Link } from "react-router-dom";

export default function SystemDock() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md border-b border-teal-900/40 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-teal-400 font-bold text-xl">
          OTD
        </Link>

        <div className="flex gap-6 text-gray-300">
          <Link to="/services" className="hover:text-teal-400 transition">
            Services
          </Link>
          <Link to="/about" className="hover:text-teal-400 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-teal-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

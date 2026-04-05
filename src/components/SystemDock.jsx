import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function SystemDock() {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-md border-b border-teal-900/40">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <div className="text-teal-400 font-bold text-xl drop-shadow-[0_0_10px_rgba(45,212,191,0.8)]">
          Ocean Tide Drop
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          {navItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg transition ${
                  active
                    ? "text-teal-400 drop-shadow-[0_0_8px_rgba(45,212,191,0.8)]"
                    : "text-gray-300 hover:text-teal-300"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

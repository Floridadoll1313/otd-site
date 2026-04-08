import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-[#020b16] text-[#e6f7ff] font-inter">
      {/* Header / Navigation */}
      <header className="w-full py-6 border-b border-[#0a2a3d] bg-[#03101d]/80 backdrop-blur-md shadow-lg shadow-[#4fd4ff22]">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4">
          {/* Brand */}
          <div className="text-3xl font-bold tracking-wide text-[#4fd4ff] drop-shadow-[0_0_8px_#4fd4ff]">
            Ocean Tide Drop
          </div>

          {/* Navigation Links */}
          <div className="flex gap-8 text-lg">
            <Link
              to="/"
              className="transition text-[#e6f7ff] hover:text-[#9af0ff] hover:drop-shadow-[0_0_6px_#4fd4ff]"
            >
              Home
            </Link>

            <Link
              to="/services"
              className="transition text-[#e6f7ff] hover:text-[#9af0ff] hover:drop-shadow-[0_0_6px_#4fd4ff]"
            >
              Services
            </Link>

            <Link
              to="/contact"
              className="transition text-[#e6f7ff] hover:text-[#9af0ff] hover:drop-shadow-[0_0_6px_#4fd4ff]"
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Routed Page Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <Outlet />
      </main>
    </div>
  );
}

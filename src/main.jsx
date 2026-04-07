import React from "react";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-300">
        Ocean Tide Drop
      </h1>

      <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
        Creative Technology & Brand Systems for Founders  
        We build modern, cinematic websites and customer experience systems 
        that help founders and small businesses launch with clarity, confidence, 
        and momentum.
      </p>

      <div className="flex justify-center gap-6 mt-8">
        <a
          href="/services"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition"
        >
          View Services
        </a>

        <a
          href="/contact"
          className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-blue-200 font-semibold transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

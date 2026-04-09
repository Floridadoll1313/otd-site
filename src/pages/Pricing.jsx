import React from "react";

export default function Pricing() {
  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-6">Pricing</h1>

      <p className="mb-4">
        Choose the membership tier that unlocks your journey inside Ocean Tide Drop.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-black/40 p-6 rounded-xl border border-white/10">
          <h2 className="text-2xl font-semibold mb-2">Explorer</h2>
          <p className="mb-4">Basic access to the realm.</p>
          <button className="px-4 py-2 bg-blue-500 rounded-lg">Select</button>
        </div>

        <div className="bg-black/40 p-6 rounded-xl border border-white/10">
          <h2 className="text-2xl font-semibold mb-2">Navigator</h2>
          <p className="mb-4">Unlock advanced tools and lore.</p>
          <button className="px-4 py-2 bg-blue-500 rounded-lg">Select</button>
        </div>

        <div className="bg-black/40 p-6 rounded-xl border border-white/10">
          <h2 className="text-2xl font-semibold mb-2">Realmwalker</h2>
          <p className="mb-4">Full access to the cinematic universe.</p>
          <button className="px-4 py-2 bg-blue-500 rounded-lg">Select</button>
        </div>
      </div>
    </div>
  );
}

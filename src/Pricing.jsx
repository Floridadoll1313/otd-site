import React from 'react';

const tiers = [
  {
    name: "Setup & Onboarding",
    price: "$3,000 - $10,000",
    type: "One-time fee ",
    features: ["Core Platform Config", "Customer Journey Mapping", "KPI Definition [cite: 55]"]
  },
  {
    name: "Monthly Retainer",
    price: "$2,500+",
    type: "Per month ",
    features: ["Ongoing Management", "All 3 Service Phases", "24/7 AI Monitoring "]
  },
  {
    name: "Advanced Analytics",
    price: "$500 - $1,500",
    type: "Monthly Add-on ",
    features: ["Custom Dashboards", "AI Performance Insights", "Real-time Data Tracking "]
  }
];

export default function PricingTable() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {tiers.map((tier, i) => (
          <div key={i} className="relative p-1 rounded-3xl bg-gradient-to-b from-teal-500 to-transparent">
            <div className="bg-black rounded-[22px] p-8 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold text-teal-400 mb-1">{tier.price}</div>
              <p className="text-gray-500 text-sm mb-6">{tier.type}</p>
              <ul className="flex-grow space-y-4 mb-8">
                {tier.features.map((feature, j) => (
                  <li key={j} className="text-gray-400 text-sm">✓ {feature}</li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-black font-bold transition-colors">
                Select Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

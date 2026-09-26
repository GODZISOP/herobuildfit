"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TIERS = [
  {
    name: "Rookie to Hero",
    priceMonthly: 199,
    priceFull: 549, // ~3 months
    description: "The foundational protocol to kickstart your transformation.",
    features: [
      "Custom Training Program",
      "Macro Guidelines",
      "Monthly Check-ins",
      "App Access",
    ],
    popular: false,
  },
  {
    name: "Elite 16-Week Overhaul",
    priceMonthly: 299,
    priceFull: 999, // 4 months
    description: "Our signature transformation program. Serious athletes only.",
    features: [
      "Everything in Rookie",
      "Weekly Video Audits",
      "Dynamic Macro Adjustments",
      "Supplement Protocol",
      "Priority WhatsApp Support",
    ],
    popular: true,
  },
  {
    name: "VIP 1-on-1 Direct Access",
    priceMonthly: 499,
    priceFull: 1499,
    description: "Unlimited access and daily adjustments. For competitors and elites.",
    features: [
      "Everything in Elite",
      "Daily Form Checks",
      "Peak Week Protocols",
      "Direct Line to Coach Jordan",
      "Custom Meal Plans (Not just macros)",
    ],
    popular: false,
  },
];

export default function Pricing() {
  const [isFull, setIsFull] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-bg-dark relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-syne uppercase mb-4">
            Commit to the <span className="text-brand-neon">Process</span>
          </h2>
          
          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={cn("font-bold uppercase text-sm", !isFull ? "text-white" : "text-gray-500")}>
              Monthly
            </span>
            <button
              onClick={() => setIsFull(!isFull)}
              className="relative w-16 h-8 rounded-full bg-neutral-800 border border-neutral-700 transition-colors p-1 flex items-center"
            >
              <motion.div
                className="w-6 h-6 bg-brand-neon rounded-full"
                layout
                initial={false}
                animate={{ x: isFull ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={cn("font-bold uppercase text-sm", isFull ? "text-white" : "text-gray-500")}>
              Full Term <span className="text-brand-cyan text-xs ml-1">(Save 15%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TIERS.map((tier, idx) => (
            <div
              key={tier.name}
              className={cn(
                "relative rounded-3xl p-8 flex flex-col transition-all duration-300",
                tier.popular
                  ? "bg-neutral-900 border-2 border-brand-neon shadow-[0_0_40px_rgba(255,107,0,0.2)] md:-translate-y-4"
                  : "bg-glass-bg border border-glass-border hover:border-neutral-700"
              )}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-neon text-bg-dark font-black font-syne uppercase px-4 py-1 rounded-full text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-bg-dark animate-pulse" />
                  Limited Spots
                </div>
              )}

              <h3 className="text-xl font-bold font-syne uppercase text-white mb-2">{tier.name}</h3>
              <p className="text-gray-400 text-sm mb-6 min-h-[40px]">{tier.description}</p>
              
              <div className="mb-8">
                <span className="text-5xl font-black font-syne">${isFull ? tier.priceFull : tier.priceMonthly}</span>
                <span className="text-gray-500 font-bold uppercase ml-2">
                  {isFull ? "/ term" : "/ mo"}
                </span>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {tier.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-neutral-800 rounded-full p-1">
                      <Check className="w-3 h-3 text-brand-cyan" />
                    </div>
                    <span className="text-sm font-medium text-gray-200">{f}</span>
                  </div>
                ))}
              </div>

              <button
                className={cn(
                  "w-full py-3 md:py-4 rounded-xl font-black font-syne text-base md:text-lg uppercase tracking-wider transition-all",
                  tier.popular
                    ? "bg-brand-neon text-bg-dark hover:bg-brand-neon-light"
                    : "bg-white text-black hover:bg-gray-200"
                )}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

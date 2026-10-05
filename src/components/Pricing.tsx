"use client";

import { useState } from "react";
import { Check, Sparkles, Dumbbell, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type CommitmentPeriod = "month" | "3months" | "6months";

interface TierPricing {
  total: number;
  monthly: number;
}

interface Tier {
  id: string;
  badge?: string;
  name: string;
  subtitle: string;
  pricing: Record<CommitmentPeriod, TierPricing>;
  features: string[];
  popular?: boolean;
}

const TIERS: Tier[] = [
  {
    id: "tier-1",
    name: "Tier 1 – Programming Only",
    subtitle: "Best for experienced trainees who want a structured program but do not require ongoing coaching support.",
    pricing: {
      month: { total: 80, monthly: 80 },
      "3months": { total: 210, monthly: 70 },
      "6months": { total: 360, monthly: 60 },
    },
    features: [
      "Custom workout programming delivered through Trainerize",
      "Exercise demonstrations and instructions",
      "Monthly program adjustments",
      "Access to the coaching platform for tracking workouts",
    ],
    popular: false,
  },
  {
    id: "tier-2",
    badge: "Most Popular",
    name: "Tier 2 – Standard Coaching",
    subtitle: "Full coaching experience designed for clients seeking weight loss, muscle gain, and accountability.",
    pricing: {
      month: { total: 180, monthly: 180 },
      "3months": { total: 480, monthly: 160 },
      "6months": { total: 840, monthly: 140 },
    },
    features: [
      "Fully customized workout programming",
      "Macro guidance or general nutrition coaching",
      "Weekly progress check-ins",
      "Habit and lifestyle tracking",
      "Messaging support through Trainerize",
      "Routine adjustments based on progress",
    ],
    popular: true,
  },
  {
    id: "tier-3",
    badge: "Elite Transformation",
    name: "Tier 3 – Premium Coaching",
    subtitle: "High accountability coaching designed for serious physique transformations or competition-level guidance.",
    pricing: {
      month: { total: 250, monthly: 250 },
      "3months": { total: 660, monthly: 220 },
      "6months": { total: 1140, monthly: 190 },
    },
    features: [
      "Everything included in Standard Coaching",
      "Custom meal plans",
      "Video form review and technique feedback",
      "Unlimited messaging access",
      "Bi-weekly progress reviews",
      "Advanced physique or peak week planning",
    ],
    popular: false,
  },
];

const ADDONS = [
  { name: "Custom Meal Plan", price: "$75", desc: "Tailored to your macros & food preferences" },
  { name: "Macro Setup", price: "$50", desc: "Calculated specifically for your goals" },
  { name: "Form Review Package", price: "$40", desc: "Detailed breakdown & video critique" },
  { name: "Competition Prep Upgrade", price: "+$75 / mo", desc: "Peak week & stage protocol" },
  { name: "Grocery Guide & Recipe Pack", price: "$25", desc: "Easy high-protein meal guides" },
  { name: "In-Person Session (30 Min)", price: "$20", desc: "One-on-one form & intensity coaching" },
  { name: "In-Person Session (60 Min)", price: "$40", desc: "Full workout execution & technique" },
];

export default function Pricing() {
  const [commitment, setCommitment] = useState<CommitmentPeriod>("3months");

  const scrollToContact = (planName: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-neon/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-brand-cyan/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-neon/10 border border-brand-neon/30 text-brand-neon text-xs font-bold font-syne uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Hero Build Fitness Tiers
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-syne uppercase tracking-tight mb-6">
            Online Coaching <span className="text-brand-neon">Packages & Pricing</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Structured pricing tiers built for weight loss, muscle gain, and physique development. All coaching is delivered through <span className="text-white font-bold">Trainerize</span> with accountability and nutrition guidance.
          </p>

          {/* Commitment Duration Selector */}
          <div className="mt-10 inline-flex p-1.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 shadow-2xl backdrop-blur-md">
            {[
              { id: "month" as const, label: "Month-to-Month" },
              { id: "3months" as const, label: "3 Months (Save ~$20/mo)" },
              { id: "6months" as const, label: "6 Months (Best Value)" },
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => setCommitment(option.id)}
                className={cn(
                  "px-4 md:px-6 py-2.5 rounded-xl font-bold font-syne text-xs md:text-sm uppercase transition-all duration-300 relative",
                  commitment === option.id
                    ? "bg-brand-neon text-bg-dark shadow-[0_0_20px_rgba(255,107,0,0.4)]"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {TIERS.map((tier) => {
            const currentPricing = tier.pricing[commitment];
            return (
              <motion.div
                key={tier.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300",
                  tier.popular
                    ? "bg-neutral-900/90 border-2 border-brand-neon shadow-[0_0_40px_rgba(255,107,0,0.25)] md:-translate-y-4"
                    : "bg-glass-bg border border-glass-border hover:border-neutral-700"
                )}
              >
                {tier.badge && (
                  <div
                    className={cn(
                      "absolute -top-4 left-1/2 -translate-x-1/2 font-black font-syne uppercase px-4 py-1 rounded-full text-xs flex items-center gap-1.5 shadow-lg",
                      tier.popular
                        ? "bg-brand-neon text-bg-dark"
                        : "bg-brand-cyan text-bg-dark"
                    )}
                  >
                    <Zap className="w-3 h-3 fill-current" />
                    {tier.badge}
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-extrabold font-syne uppercase text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 min-h-[48px]">
                    {tier.subtitle}
                  </p>

                  {/* Price Box */}
                  <div className="bg-neutral-950/70 border border-neutral-800/80 rounded-2xl p-5 mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl md:text-5xl font-black font-syne text-white">
                        ${currentPricing.monthly}
                      </span>
                      <span className="text-gray-400 text-xs font-bold uppercase">/ month</span>
                    </div>
                    <div className="mt-2 pt-2 border-t border-neutral-800 flex justify-between items-center text-xs">
                      <span className="text-gray-500 uppercase font-semibold">Total Commitment:</span>
                      <span className="text-brand-cyan font-bold font-syne">${currentPricing.total} total</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-0.5 bg-neutral-800/90 p-1 rounded-full border border-neutral-700/60 shrink-0">
                          <Check className="w-3.5 h-3.5 text-brand-neon" />
                        </div>
                        <span className="text-xs md:text-sm font-medium text-gray-200 leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => scrollToContact(tier.name)}
                  className={cn(
                    "w-full py-4 rounded-xl font-black font-syne text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group",
                    tier.popular
                      ? "bg-brand-neon text-bg-dark hover:bg-brand-neon-light shadow-[0_0_25px_rgba(255,107,0,0.3)]"
                      : "bg-white text-bg-dark hover:bg-brand-cyan hover:text-bg-dark"
                  )}
                >
                  <span>Select {tier.name.split("–")[0].trim()}</span>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Smart Add-Ons Section */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-neutral-900/60 border border-glass-border p-8 md:p-12 relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 blur-[80px] pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-bold font-syne uppercase mb-3">
              <Dumbbell className="w-3.5 h-3.5" /> Optional Enhancements
            </div>
            <h3 className="text-2xl md:text-3xl font-black font-syne uppercase text-white mb-3">
              Smart <span className="text-brand-cyan">Add-Ons</span>
            </h3>
            <p className="text-gray-400 text-xs md:text-sm">
              These optional services can be purchased individually or added to any coaching tier to increase personalization and client value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADDONS.map((addon, index) => (
              <div
                key={index}
                className="bg-neutral-950/80 border border-neutral-800 hover:border-neutral-700 rounded-2xl p-5 flex flex-col justify-between transition-colors"
              >
                <div>
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <h4 className="font-syne font-bold text-sm uppercase text-white">{addon.name}</h4>
                    <span className="font-syne font-black text-brand-neon text-sm whitespace-nowrap">
                      {addon.price}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">{addon.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

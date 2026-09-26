"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Calculator, Activity as ActivityIcon } from "lucide-react";

type Goal = "cut" | "recomp" | "bulk";
type Activity = "sedentary" | "light" | "moderate" | "active" | "athlete";

export default function MacroCalculator() {
  const [weight, setWeight] = useState(180);
  const [goal, setGoal] = useState<Goal>("cut");
  const [activity, setActivity] = useState<Activity>("moderate");
  const [calculated, setCalculated] = useState(false);

  // Simplified baseline math for visual impact
  const calculateMacros = () => {
    let multiplier = 12;
    if (activity === "light") multiplier = 13.5;
    if (activity === "moderate") multiplier = 15;
    if (activity === "active") multiplier = 17;
    if (activity === "athlete") multiplier = 19;

    let baseline = weight * multiplier;
    if (goal === "cut") baseline -= 500;
    if (goal === "bulk") baseline += 300;

    const protein = Math.round(weight * 1.1);
    const fat = Math.round((baseline * 0.25) / 9);
    const carbs = Math.round((baseline - (protein * 4 + fat * 9)) / 4);

    return { calories: Math.round(baseline), protein, fat, carbs };
  };

  const results = calculateMacros();

  return (
    <section className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-brand-cyan opacity-5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="bg-glass-bg border border-glass-border rounded-3xl p-8 lg:p-12 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left: Inputs */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Calculator className="w-8 h-8 text-brand-cyan" />
                <h2 className="text-3xl font-black font-syne uppercase">Hero Protocol <span className="text-brand-cyan">Calc</span></h2>
              </div>
              
              <div className="space-y-8">
                {/* Weight Input */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-bold tracking-widest text-gray-400 uppercase">Current Weight (lbs)</label>
                    <span className="text-brand-neon font-bold">{weight} lbs</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="350"
                    value={weight}
                    onChange={(e) => {
                      setWeight(parseInt(e.target.value));
                      setCalculated(false);
                    }}
                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-brand-neon"
                  />
                </div>

                {/* Goal Selection */}
                <div>
                  <label className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-3 block">Primary Goal</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: "cut", label: "Shred (Cut)" },
                      { id: "recomp", label: "Recomp" },
                      { id: "bulk", label: "Build (Bulk)" },
                    ].map((g) => (
                      <button
                        key={g.id}
                        onClick={() => {
                          setGoal(g.id as Goal);
                          setCalculated(false);
                        }}
                        className={cn(
                          "py-3 px-2 rounded-xl text-xs sm:text-sm font-bold uppercase transition-all",
                          goal === g.id
                            ? "bg-brand-cyan text-bg-dark shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                            : "bg-neutral-900 text-gray-400 hover:bg-neutral-800"
                        )}
                      >
                        {g.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Activity Level */}
                <div>
                  <label className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-3 block">Activity Level</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {["sedentary", "light", "moderate", "active"].map((act) => (
                      <button
                        key={act}
                        onClick={() => {
                          setActivity(act as Activity);
                          setCalculated(false);
                        }}
                        className={cn(
                          "py-2 px-1 rounded-lg text-xs font-bold uppercase transition-all",
                          activity === act
                            ? "bg-brand-neon text-bg-dark shadow-[0_0_15px_rgba(255,107,0,0.4)]"
                            : "bg-neutral-900 text-gray-400 hover:bg-neutral-800"
                        )}
                      >
                        {act}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setCalculated(true)}
                  className="w-full py-4 rounded-xl bg-white text-black font-black font-syne text-xl uppercase tracking-wider hover:bg-gray-200 transition-colors"
                >
                  Generate My Targets
                </button>
              </div>
            </div>

            {/* Right: Results */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!calculated ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center h-full text-neutral-600"
                  >
                    <ActivityIcon className="w-16 h-16 mb-4 opacity-20" />
                    <p className="font-syne font-bold text-xl uppercase">Awaiting Input Data</p>
                    <p className="text-sm">Enter your metrics to generate your baseline protocol.</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", bounce: 0.4 }}
                    className="flex flex-col h-full z-10"
                  >
                    <h3 className="text-brand-cyan font-bold tracking-widest text-sm uppercase mb-6 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                      Estimated Targets
                    </h3>
                    
                    <div className="mb-8">
                      <div className="text-6xl md:text-7xl font-black font-syne text-white mb-1">
                        {results.calories.toLocaleString()}
                      </div>
                      <div className="text-gray-400 font-bold uppercase tracking-widest">Daily Calories</div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-auto">
                      <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-800">
                        <div className="text-2xl font-black font-syne text-white">{results.protein}g</div>
                        <div className="text-xs text-brand-neon font-bold uppercase mt-1">Protein</div>
                      </div>
                      <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-800">
                        <div className="text-2xl font-black font-syne text-white">{results.carbs}g</div>
                        <div className="text-xs text-brand-cyan font-bold uppercase mt-1">Carbs</div>
                      </div>
                      <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-800">
                        <div className="text-2xl font-black font-syne text-white">{results.fat}g</div>
                        <div className="text-xs text-yellow-500 font-bold uppercase mt-1">Fat</div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-neutral-800">
                      <p className="text-xs text-gray-500 mb-2">* These are automated estimates. A true coach adjusts dynamically.</p>
                      <p className="text-sm text-white font-bold">
                        Recommended Tier: <span className="text-brand-neon">Elite 16-Week Overhaul</span>
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Decorative grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-20" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

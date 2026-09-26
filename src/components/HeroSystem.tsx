"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Activity, Apple, Video, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

function SpotlightCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl border border-glass-border bg-neutral-950 shadow-2xl",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.1), transparent 40%)`,
        }}
      />
      <div className="absolute inset-0 bg-glass-bg backdrop-blur-sm" />
      <div className="relative z-10 w-full h-full p-8 flex flex-col">{children}</div>
    </div>
  );
}

export default function HeroSystem() {
  const [burgerIncluded, setBurgerIncluded] = useState(50);
  const [habits, setHabits] = useState([true, false, true, false]);

  const completedHabits = habits.filter(Boolean).length;
  const habitProgress = (completedHabits / habits.length) * 100;

  return (
    <section id="services" className="py-24 bg-bg-dark relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-syne uppercase mb-4">
            The <span className="text-brand-cyan">Hero System</span> Matrix
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Four pillars engineered for sustainable, elite-level results. No guesswork. Just execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
          {/* Card 1: Hypertrophy Engine */}
          <div className="lg:col-span-2">
            <SpotlightCard className="!p-0 relative group">
              {/* Background Image */}
              <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <img src="/training.jpg" alt="Training" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
              </div>
              
              <div className="relative z-10 w-full h-full p-8 flex flex-col">
                <div className="flex justify-between items-start mb-auto">
                  <div>
                    <h3 className="text-2xl font-bold font-syne uppercase text-white mb-2">Hypertrophy Engine</h3>
                    <p className="text-gray-400">Custom training protocols optimized for muscle growth and recovery.</p>
                  </div>
                  <div className="p-3 bg-neutral-900/80 backdrop-blur-md rounded-xl border border-white/5">
                    <Activity className="w-8 h-8 text-brand-neon" />
                  </div>
                </div>
                <div className="mt-8 flex items-end gap-2 h-32 w-full px-4">
                  {/* Animated wave graph */}
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-brand-neon rounded-t-sm opacity-80"
                      animate={{
                        height: ["20%", "80%", "40%", "100%", "30%"],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5 + Math.random() * 2,
                        ease: "easeInOut",
                        repeatType: "mirror",
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Card 2: Flexible Nutrition */}
          <div className="lg:col-span-1">
            <SpotlightCard className="!p-0 relative group">
              {/* Background Image */}
              <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <img src="/food.jpg" alt="Nutrition" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/20" />
              </div>

              <div className="relative z-10 w-full h-full p-8 flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl font-bold font-syne uppercase text-white mb-2">Flexible Nutrition</h3>
                    <p className="text-gray-300 text-sm">Eat what you love. Fit it in your macros.</p>
                  </div>
                  <div className="p-3 bg-neutral-900/80 backdrop-blur-md rounded-xl border border-white/5">
                    <Apple className="w-6 h-6 text-brand-cyan" />
                  </div>
                </div>
                <div className="mt-auto bg-neutral-950/60 backdrop-blur-md p-4 rounded-xl border border-white/5">
                  <div className="flex justify-between mb-2 text-xs font-bold text-gray-400 uppercase">
                    <span>Broccoli</span>
                    <span className="text-brand-neon">Burger</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={burgerIncluded}
                    onChange={(e) => setBurgerIncluded(parseInt(e.target.value))}
                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-brand-neon"
                  />
                  <div className="text-center mt-4 font-syne font-bold text-xl drop-shadow-md">
                    Balance: {burgerIncluded}% fun
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Card 3: Video Audits */}
          <div className="lg:col-span-1">
            <SpotlightCard className="flex-col !justify-start">
              <div className="flex justify-between items-start w-full mb-6">
                <h3 className="text-xl font-bold font-syne uppercase text-white">Weekly Video Audits</h3>
                <Video className="w-5 h-5 text-brand-neon" />
              </div>
              <div className="relative w-full aspect-[9/16] bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 p-4">
                <div className="w-full h-full border border-dashed border-neutral-700 rounded-lg flex items-center justify-center relative">
                  <div className="text-center opacity-50">
                    <div className="w-12 h-12 rounded-full bg-neutral-800 mx-auto mb-2" />
                    <div className="h-2 w-20 bg-neutral-800 rounded mx-auto" />
                  </div>
                  {/* Mock coaching feedback overlay */}
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute bottom-4 left-4 right-4 bg-brand-neon/10 backdrop-blur-md border border-brand-neon/30 rounded-lg p-3 text-xs"
                  >
                    <p className="text-brand-neon font-bold mb-1">Coach Jordan:</p>
                    <p className="text-white">"Drop your hips slightly more on the eccentric..."</p>
                  </motion.div>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Card 4: Habit Tracker */}
          <div className="lg:col-span-2">
            <SpotlightCard>
              <div className="flex flex-col h-full w-full">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl font-bold font-syne uppercase text-white mb-2">Daily Execution</h3>
                    <p className="text-gray-400 text-sm">Small daily habits compound into massive transformations.</p>
                  </div>
                  <div className="w-16 h-16 rounded-full border-4 border-neutral-800 flex items-center justify-center relative">
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="text-neutral-800"
                      />
                      <circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeDasharray="283"
                        strokeDashoffset={283 - (283 * habitProgress) / 100}
                        className="text-brand-cyan transition-all duration-500 ease-out"
                      />
                    </svg>
                    <span className="font-bold font-syne text-sm">{Math.round(habitProgress)}%</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-auto">
                  {["Hit Protein Goal", "10k Steps", "Hydration", "7+ Hours Sleep"].map((task, i) => (
                    <div
                      key={task}
                      onClick={() => {
                        const newHabits = [...habits];
                        newHabits[i] = !newHabits[i];
                        setHabits(newHabits);
                      }}
                      className={cn(
                        "flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors",
                        habits[i]
                          ? "bg-brand-cyan/10 border-brand-cyan/30 text-white"
                          : "bg-neutral-900 border-neutral-800 text-gray-400 hover:bg-neutral-800"
                      )}
                    >
                      <CheckCircle2 className={cn("w-5 h-5", habits[i] ? "text-brand-cyan" : "text-neutral-600")} />
                      <span className="font-medium text-sm">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}

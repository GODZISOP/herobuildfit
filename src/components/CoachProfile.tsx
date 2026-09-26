"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";

const TABS = [
  {
    id: "athlete",
    title: "The Athlete (NPC)",
    stats: ["Stage Weight: 185 lbs", "Off-season: 215 lbs", "Years Competing: 5+"],
    bio: "Obsessed with the science of hypertrophy and pushing the human body to its absolute genetic limit on stage.",
  },
  {
    id: "dad",
    title: "The Family Man",
    stats: ["Kids: 2", "Coffee/Day: 4 Cups", "Dad Jokes: Unlimited"],
    bio: "I know what it's like to juggle a 9-to-5, family duties, and fitness. You don't need to live in the gym to look like a hero.",
  },
  {
    id: "coach",
    title: "The Coach (NASM)",
    stats: ["Clients Transformed: 100+", "Certifications: CPT, NC", "Approach: Science-based"],
    bio: "No cookie-cutter BS. Your protocol is built around your life, your metabolism, and your specific biomechanics.",
  },
];

export default function CoachProfile() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const activeContent = TABS.find((t) => t.id === activeTab)!;

  return (
    <section id="about" className="py-24 bg-bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: 3D Tilt Card */}
          <div className="w-full lg:w-1/2 perspective-[1000px]">
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-2xl bg-glass-bg border border-glass-border p-4 shadow-2xl flex flex-col items-center justify-center cursor-crosshair group"
            >
              {/* Fallback image placeholder (in production, use real image) */}
              <div
                style={{ transform: "translateZ(50px)" }}
                className="absolute inset-4 rounded-xl flex flex-col items-center justify-center overflow-hidden"
              >
                <img src="/coach.jpg" alt="Coach Jordan" className="absolute inset-0 w-full h-full object-cover rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="relative z-10 text-center flex flex-col items-center justify-end h-full pb-6">
                  <h3 className="font-syne font-bold text-3xl uppercase tracking-wider mb-1 text-white">Jordan Pickard</h3>
                  <p className="text-brand-cyan font-medium tracking-widest text-sm uppercase shadow-black drop-shadow-md">"HeroBuildFit"</p>
                </div>
                
                {/* Glowing Particle Rings on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_10px_rgba(0,240,255,1)] animate-ping" />
                  <div className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-brand-neon shadow-[0_0_10px_rgba(255,107,0,1)] animate-pulse" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Tabs & Info */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black font-syne uppercase mb-8">
              Meet The <span className="text-brand-neon">Coach</span>
            </h2>

            {/* Tab Switcher */}
            <div className="flex flex-wrap gap-2 mb-8">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-6 py-3 rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300",
                    activeTab === tab.id
                      ? "bg-brand-neon text-bg-dark"
                      : "bg-glass-bg border border-glass-border text-gray-400 hover:text-white hover:border-gray-500"
                  )}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Content Window */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-glass-bg border border-glass-border rounded-2xl p-8"
            >
              <p className="text-lg text-gray-300 mb-8 leading-relaxed font-medium">
                {activeContent.bio}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {activeContent.stats.map((stat, i) => {
                  const [label, value] = stat.split(": ");
                  return (
                    <div key={i} className="flex flex-col gap-1">
                      <span className="text-xs text-brand-cyan uppercase tracking-widest">{label}</span>
                      <span className="font-bold font-syne text-xl">{value}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

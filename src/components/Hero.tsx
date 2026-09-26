"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const headline = "UNLEASH YOUR HERO PHYSIQUE";
  const letters = headline.split("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-dark pt-20 pb-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/hero_bg.jpg" alt="Gym Background" className="w-full h-full object-cover opacity-20 object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/80 via-transparent to-bg-dark" />
      </div>

      {/* Interactive Radial Gradient */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 107, 0, 0.15), transparent 40%)`,
        }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-20 z-0" />

      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        {/* Glowing Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-glass-border bg-glass-bg backdrop-blur-md mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-neon"></span>
          </span>
          <span className="text-xs font-bold tracking-widest text-brand-neon uppercase">
            🔥 NPC Competitor • NASM CPT/NC
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-syne tracking-tighter uppercase max-w-5xl mx-auto leading-tight mb-6">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.03,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium"
        >
          World-class fitness coaching tailored to your lifestyle. Achieve an elite physique without starving or sacrificing family time.
        </motion.p>

        {/* Primary Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center gap-2 px-8 py-4 bg-brand-neon text-bg-dark font-black font-syne text-xl uppercase tracking-wider rounded-xl overflow-hidden"
        >
          <span className="absolute inset-0 bg-brand-neon-light transition-transform duration-300 translate-y-full group-hover:translate-y-0" />
          <span className="relative z-10 flex items-center gap-2">
            Start Your Journey <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.button>

        {/* Floating Hologram Stat Cards */}
        <div className="absolute top-1/4 -left-10 md:left-10 lg:left-32 animate-float">
          <div className="hidden md:flex flex-col gap-1 px-4 py-3 rounded-xl border border-glass-border bg-glass-bg backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.1)]">
            <span className="text-brand-cyan font-bold font-syne text-lg">100% Custom</span>
            <span className="text-xs text-gray-400 font-medium tracking-wider">TRAINING PROTOCOL</span>
          </div>
        </div>

        <div className="absolute top-1/3 -right-10 md:right-10 lg:right-32 animate-float" style={{ animationDelay: "1.5s" }}>
          <div className="hidden md:flex flex-col gap-1 px-4 py-3 rounded-xl border border-glass-border bg-glass-bg backdrop-blur-md shadow-[0_0_20px_rgba(255,107,0,0.1)]">
            <span className="text-brand-neon font-bold font-syne text-lg">Father of 2</span>
            <span className="text-xs text-gray-400 font-medium tracking-wider">APPROVED METHODS</span>
          </div>
        </div>

        <div className="absolute bottom-1/4 left-1/4 lg:left-1/4 animate-float" style={{ animationDelay: "2.5s" }}>
          <div className="hidden md:flex flex-col gap-1 px-4 py-3 rounded-xl border border-glass-border bg-glass-bg backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <span className="text-white font-bold font-syne text-lg">Zero Starvation</span>
            <span className="text-xs text-gray-400 font-medium tracking-wider">FLEXIBLE DIETING</span>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ChevronRight, Dumbbell, ShieldCheck, Sparkles, Star, Zap } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-bg-dark pt-28 pb-20 border-b border-glass-border">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-brand-neon/15 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[350px] bg-brand-cyan/15 blur-[140px] pointer-events-none rounded-full" />

      {/* Modern Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
          
          {/* Left Side Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-neon/40 bg-neutral-900/80 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(255,107,0,0.15)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-neon"></span>
              </span>
              <span className="text-xs font-extrabold tracking-widest text-brand-neon uppercase font-syne">
                Hero Build Fitness • Online Coaching
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black font-syne uppercase tracking-tight text-white leading-[1.05] mb-6"
            >
              Transform Your Body <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-orange-400 to-amber-300">
                Without Limits
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-300 text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Custom 1-on-1 workout & nutrition protocols designed for maximum muscle gain, fat loss, and long-term accountability by <span className="text-white font-bold">Coach Jordan Pickard</span>.
            </motion.p>

            {/* Key Feature Chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10 text-xs font-bold uppercase font-syne text-gray-300"
            >
              <span className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-900/90 border border-neutral-800">
                <Dumbbell className="w-4 h-4 text-brand-neon" /> Trainerize App Delivery
              </span>
              <span className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-900/90 border border-neutral-800">
                <ShieldCheck className="w-4 h-4 text-brand-cyan" /> NASM Certified CPT / NC
              </span>
              <span className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-900/90 border border-neutral-800">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> NPC Competitor
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => scrollTo("contact")}
                className="w-full sm:w-auto px-8 py-4 bg-brand-neon text-bg-dark font-black font-syne text-base uppercase tracking-wider rounded-2xl hover:bg-brand-neon-light transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_35px_rgba(255,107,0,0.4)] hover:scale-105 active:scale-95"
              >
                <span>Apply For Coaching</span>
                <ChevronRight className="w-5 h-5 stroke-[3]" />
              </button>

              <button
                onClick={() => scrollTo("pricing")}
                className="w-full sm:w-auto px-8 py-4 bg-neutral-900 border border-neutral-800 text-white font-black font-syne text-base uppercase tracking-wider rounded-2xl hover:border-brand-cyan hover:text-brand-cyan transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>View Pricing Tiers</span>
              </button>
            </motion.div>

          </div>

          {/* Right Side Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-3xl overflow-hidden bg-neutral-900 border-2 border-glass-border shadow-[0_0_60px_rgba(255,107,0,0.2)] group"
            >
              {/* Real Coach Photo */}
              <img
                src="/real_1.png"
                alt="Coach Jordan Pickard"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Floating Live Badge 1 */}
              <div className="absolute top-6 left-6 z-20">
                <div className="px-3.5 py-1.5 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-800 flex items-center gap-2 shadow-lg">
                  <Zap className="w-4 h-4 text-brand-neon fill-brand-neon" />
                  <span className="text-white font-black font-syne text-xs uppercase tracking-wider">
                    NPC Competitor
                  </span>
                </div>
              </div>

              {/* Bottom Card Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-neutral-950/90 backdrop-blur-xl border border-neutral-800/80 rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-syne font-black text-xl text-white uppercase">Jordan Pickard</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-cyan text-bg-dark font-black text-[10px] font-syne uppercase">
                    Head Coach
                  </span>
                </div>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                  NASM CPT / NC • Husband & Father of 2
                </p>
                <div className="mt-3 pt-3 border-t border-neutral-800 flex items-center justify-between text-[11px] text-brand-neon font-bold font-syne">
                  <span>DM "HERO" FOR COACHING</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

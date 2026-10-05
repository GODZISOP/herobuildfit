"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, MouseEvent } from "react";
import { Tag, Check, Copy, Award, Heart, Dumbbell, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const DISCOUNT_CODES = [
  {
    brand: "Bucked Up",
    code: "HERO15",
    discount: "15% OFF",
    desc: "Pre-workouts, protein & supplements",
    color: "from-amber-500/20 to-brand-neon/20 border-brand-neon/40",
    badgeColor: "bg-brand-neon text-bg-dark",
  },
  {
    brand: "TLF Products",
    code: "BA15JPICKARD",
    discount: "15% OFF",
    desc: "Premium gym apparel & performance gear",
    color: "from-brand-cyan/20 to-blue-500/20 border-brand-cyan/40",
    badgeColor: "bg-brand-cyan text-bg-dark",
  },
];

export default function CoachProfile() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

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

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section id="about" className="py-24 bg-bg-dark relative overflow-hidden border-b border-glass-border">
      {/* Glow Backdrops */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-brand-neon/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: 3D Tilt Coach Card */}
          <div className="w-full lg:w-1/2 perspective-[1000px]">
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-3xl bg-glass-bg border border-glass-border p-4 shadow-2xl flex flex-col items-center justify-center cursor-crosshair group"
            >
              <div
                style={{ transform: "translateZ(50px)" }}
                className="absolute inset-4 rounded-2xl flex flex-col items-center justify-center overflow-hidden"
              >
                <img
                  src="/real_2.png"
                  alt="Coach Jordan Pickard"
                  className="absolute inset-0 w-full h-full object-cover object-top rounded-2xl scale-105 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                
                {/* Badges on Image */}
                <div className="relative z-10 text-center flex flex-col items-center justify-end h-full pb-6 w-full px-4">
                  <span className="px-3 py-1 bg-brand-neon text-bg-dark font-black font-syne text-xs uppercase rounded-full mb-2 tracking-wider shadow-lg">
                    NASM CPT / NC
                  </span>
                  <h3 className="font-syne font-black text-3xl uppercase tracking-wider mb-1 text-white">
                    Jordan Pickard
                  </h3>
                  <p className="text-brand-cyan font-bold tracking-widest text-xs uppercase drop-shadow-md">
                    NPC Competitor • Father & Husband
                  </p>
                </div>

                {/* Ambient particle glows */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_10px_rgba(0,240,255,1)] animate-ping" />
                  <div className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-brand-neon shadow-[0_0_10px_rgba(255,107,0,1)] animate-pulse" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Coach Details & Bio */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-neon/10 border border-brand-neon/30 text-brand-neon text-xs font-bold font-syne uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" /> Certified Fitness Specialist
            </div>

            <h2 className="text-4xl md:text-5xl font-black font-syne uppercase tracking-tight mb-6">
              Meet Coach <span className="text-brand-neon">Jordan</span>
            </h2>

            {/* Key Qualifications Pill Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-gray-200 text-xs font-bold uppercase">
                <Heart className="w-4 h-4 text-brand-neon" /> Husband & Father of 2
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-gray-200 text-xs font-bold uppercase">
                <Dumbbell className="w-4 h-4 text-brand-cyan" /> NPC Competitor
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-gray-200 text-xs font-bold uppercase">
                <Award className="w-4 h-4 text-amber-400" /> NASM Certified CPT / NC
              </div>
            </div>

            <p className="text-gray-300 text-base leading-relaxed mb-8 font-medium">
              I know what it takes to balance family life, career, and high-level body building. As an active NPC Competitor and NASM Certified Personal Trainer & Nutrition Coach, I specialize in science-backed, sustainable transformations without starvation or standard generic plans.
            </p>

            {/* DM Callout Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-brand-neon/15 via-neutral-900 to-neutral-900 border border-brand-neon/30 mb-8 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase text-brand-neon block mb-1">Direct Access</span>
                <span className="font-syne font-black text-white text-base md:text-lg uppercase">
                  DM <span className="text-brand-neon">"HERO"</span> on Instagram for 1-on-1 Fitness Coaching
                </span>
              </div>
              <a
                href="https://instagram.com/herobuildfit"
                target="_blank"
                rel="noreferrer"
                className="shrink-0 px-4 py-2.5 bg-brand-neon text-bg-dark font-black font-syne text-xs uppercase rounded-xl hover:bg-brand-neon-light transition-colors whitespace-nowrap"
              >
                DM Now
              </a>
            </div>

            {/* Exclusive Sponsor Discount Codes */}
            <div className="pt-6 border-t border-neutral-800/80">
              <h4 className="font-syne font-bold text-sm uppercase text-gray-400 tracking-wider mb-4 flex items-center gap-2">
                <Tag className="w-4 h-4 text-brand-cyan" /> Exclusive Sponsor Discount Codes
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {DISCOUNT_CODES.map((item) => {
                  const isCopied = copiedCode === item.code;
                  return (
                    <div
                      key={item.code}
                      className={cn(
                        "p-4 rounded-2xl bg-gradient-to-br border flex flex-col justify-between transition-all",
                        item.color
                      )}
                    >
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-syne font-bold text-xs uppercase text-white">{item.brand}</span>
                          <span className={cn("px-2 py-0.5 rounded-full text-[10px] font-black uppercase font-syne", item.badgeColor)}>
                            {item.discount}
                          </span>
                        </div>
                        <p className="text-gray-400 text-[11px] mb-3">{item.desc}</p>
                      </div>

                      <button
                        onClick={() => handleCopyCode(item.code)}
                        className="w-full py-2 px-3 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-white font-mono font-bold text-xs uppercase flex items-center justify-between transition-colors text-white"
                      >
                        <span>Code: <strong className="text-brand-cyan">{item.code}</strong></span>
                        <span className="flex items-center gap-1 text-[10px] text-gray-400 uppercase">
                          {isCopied ? <Check className="w-3 h-3 text-brand-neon" /> : <Copy className="w-3 h-3" />}
                          {isCopied ? "Copied" : "Copy"}
                        </span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

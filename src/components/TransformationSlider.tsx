"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MoveHorizontal, Sparkles } from "lucide-react";

export default function TransformationSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const x = useMotionValue(containerWidth / 2 || 350);
  const leftClip = useTransform(x, (value) => `${value}px`);

  useEffect(() => {
    if (containerWidth > 0) {
      x.set(containerWidth / 2);
    }
  }, [containerWidth, x]);

  const handleDrag = () => {
    if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(8);
    }
  };

  return (
    <section id="results" className="py-24 bg-black relative overflow-hidden border-t border-glass-border">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-neon/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-neon/10 border border-brand-neon/30 text-brand-neon text-xs font-bold font-syne uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Proven Client Transformations
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-syne uppercase tracking-tight mb-4">
            Real People. <span className="text-brand-neon">Real Results.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-medium">
            Drag the slider to see the physique transformation achieved with Coach Jordan's tailored protocols.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div
          ref={containerRef}
          className="relative w-full max-w-3xl mx-auto aspect-[3/4] md:aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-950 border-2 border-glass-border shadow-[0_0_50px_rgba(255,107,0,0.2)] select-none"
        >
          {/* AFTER Image (Background) */}
          <div className="absolute inset-0 bg-neutral-900">
            <img
              src="/after.jpg"
              alt="After Transformation"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            
            <div className="absolute right-6 bottom-6 z-10 flex flex-col items-end">
              <span className="px-3 py-1 bg-brand-neon text-bg-dark font-black font-syne text-xs md:text-sm uppercase rounded-full shadow-lg tracking-wider mb-1">
                AFTER PROTOCOL
              </span>
              <span className="text-gray-300 text-xs font-semibold">Shredded & Lean Physique</span>
            </div>
          </div>

          {/* BEFORE Image (Foreground clipped) */}
          <motion.div
            className="absolute top-0 left-0 bottom-0 overflow-hidden border-r-2 border-brand-neon bg-neutral-950 shadow-2xl"
            style={{ width: leftClip }}
          >
            <div
              className="absolute top-0 left-0 h-full"
              style={{ width: containerWidth ? `${containerWidth}px` : "100%" }}
            >
              <img
                src="/before.jpg"
                alt="Before Transformation"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            </div>

            <div className="absolute left-6 bottom-6 z-10 flex flex-col items-start">
              <span className="px-3 py-1 bg-neutral-900/90 text-white border border-neutral-700 font-black font-syne text-xs md:text-sm uppercase rounded-full shadow-lg tracking-wider mb-1">
                DAY 1 - BEFORE
              </span>
              <span className="text-gray-400 text-xs font-semibold">Starting Point</span>
            </div>
          </motion.div>

          {/* Draggable Slider Control */}
          <motion.div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center z-30"
            style={{ x, left: -2 }}
            drag="x"
            dragConstraints={containerRef}
            dragElastic={0}
            dragMomentum={false}
            onDrag={handleDrag}
          >
            <div className="w-12 h-12 bg-white text-bg-dark rounded-full shadow-[0_0_25px_rgba(255,255,255,0.8)] flex items-center justify-center font-bold hover:scale-110 active:scale-95 transition-transform">
              <MoveHorizontal className="w-6 h-6 stroke-[3]" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

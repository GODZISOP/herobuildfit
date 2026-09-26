"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

export default function TransformationSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const x = useMotionValue(containerWidth / 2);
  const leftClip = useTransform(x, (value) => `calc(${value}px)`);

  // To play sound or haptic on drag in real environment
  const handleDrag = () => {
    if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(10); // subtle haptic feedback
    }
  };

  return (
    <section id="results" className="py-24 bg-black relative overflow-hidden border-t border-glass-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-syne uppercase mb-4">
            Real <span className="text-brand-neon">Results</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Drag the slider to reveal the difference 16 weeks of customized protocols can make.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative w-full aspect-square max-w-4xl mx-auto rounded-3xl overflow-hidden bg-neutral-900 border-2 border-glass-border shadow-[0_0_50px_rgba(255,107,0,0.15)]"
        >
          {/* AFTER Image (Background) */}
          <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
            <img src="/after.jpg" alt="After Transformation" className="absolute inset-0 w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-black/20" />
            <span className="font-syne font-black text-6xl md:text-8xl text-white/70 absolute right-10 bottom-10 z-0 drop-shadow-xl">
              AFTER
            </span>
            <div className="w-1/2 h-full ml-auto border-l-2 border-brand-cyan/30 flex items-center justify-center relative z-10">
                <span className="text-brand-cyan font-bold tracking-widest text-xl rotate-90 hidden md:block shadow-black drop-shadow-md">SHREDDED & STRONG</span>
            </div>
          </div>

          {/* BEFORE Image (Foreground clipped) */}
          <motion.div 
            className="absolute inset-0 bg-neutral-950 flex items-center justify-center border-r-2 border-brand-neon overflow-hidden"
            style={{ width: leftClip }}
          >
            <div className="absolute top-0 left-0 h-full" style={{ width: containerWidth ? `${containerWidth}px` : '100vw' }}>
              <img src="/before.jpg" alt="Before Transformation" className="absolute inset-0 w-full h-full object-cover object-top" />
            </div>
            <div className="absolute inset-0 bg-black/40" />
            <span className="font-syne font-black text-6xl md:text-8xl text-white/70 absolute left-10 bottom-10 z-0 drop-shadow-xl">
              BEFORE
            </span>
          </motion.div>

          {/* Slider Handle */}
          <motion.div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center z-10"
            style={{ x, left: -2 }}
            drag="x"
            dragConstraints={containerRef}
            dragElastic={0}
            dragMomentum={false}
            onDrag={handleDrag}
          >
            <div className="w-12 h-12 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] flex items-center justify-center text-black">
              <MoveHorizontal className="w-6 h-6" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

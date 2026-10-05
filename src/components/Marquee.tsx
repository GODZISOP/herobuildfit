"use client";

import { motion } from "framer-motion";

const CREDENTIALS = [
  "NASM CERTIFIED PERSONAL TRAINER",
  "NPC BODYBUILDING COMPETITOR",
  "NASM NUTRITION COACH",
  "1-ON-1 PERSONALIZED COACHING",
  "EVIDENCE-BASED PROTOCOLS",
  "HYPERTROPHY SPECIALIST",
];

export default function Marquee() {
  return (
    <div className="w-full bg-brand-neon py-4 overflow-hidden flex whitespace-nowrap border-y-2 border-brand-neon-light">
      <motion.div
        className="flex space-x-12 min-w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {/* Double the array for seamless infinite scroll */}
        {[...CREDENTIALS, ...CREDENTIALS].map((text, i) => (
          <div key={i} className="flex items-center gap-6">
            <span className="text-bg-dark font-black font-syne text-2xl md:text-3xl tracking-tighter uppercase">
              {text}
            </span>
            <span className="text-bg-dark opacity-50 text-xl">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

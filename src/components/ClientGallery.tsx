"use client";

import { motion } from "framer-motion";
import { Sparkles, Trophy, Award, CheckCircle } from "lucide-react";

const REAL_PHOTOS = [
  {
    src: "/real_1.png",
    tag: "NPC Physique Stage",
    caption: "Competition Ready • Peak Conditioning",
  },
  {
    src: "/real_2.png",
    tag: "Muscle Building Phase",
    caption: "Hypertrophy & Strength Focus",
  },
  {
    src: "/real_3.png",
    tag: "Fat Loss Transformation",
    caption: "16-Week Custom Macro Protocol",
  },
  {
    src: "/real_4.png",
    tag: "Client Progress",
    caption: "Weekly Form & Physique Audits",
  },
  {
    src: "/real_5.png",
    tag: "Physique Peak Week",
    caption: "Stage & Lifestyle Conditioning",
  },
];

export default function ClientGallery() {
  return (
    <section className="py-24 bg-bg-dark relative overflow-hidden border-t border-glass-border">
      {/* Background radial light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-neon/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-bold font-syne uppercase tracking-wider mb-4">
            <Trophy className="w-3.5 h-3.5" /> Authentic Results Only
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-syne uppercase tracking-tight mb-4">
            Real Transformations & <span className="text-brand-cyan">Stage Physique</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-medium max-w-xl mx-auto">
            No stock AI images. Real client progress, real conditioning, and real stage results achieved under Coach Jordan's guidance.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {REAL_PHOTOS.map((photo, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-3xl overflow-hidden bg-neutral-900 border border-glass-border aspect-[3/4] shadow-xl"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-brand-neon/90 text-bg-dark font-black font-syne text-[11px] uppercase rounded-full shadow-md tracking-wider flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  {photo.tag}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10">
                <p className="font-syne font-bold text-white text-sm md:text-base uppercase tracking-tight mb-1">
                  {photo.caption}
                </p>
                <span className="text-brand-cyan text-xs font-semibold uppercase">HeroBuildFit Protocol</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

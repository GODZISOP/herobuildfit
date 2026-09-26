"use client";

import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCTA = () => {
    // Copy to clipboard
    navigator.clipboard.writeText("HERO");
    setCopied(true);
    
    // Fire confetti
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FF6B00', '#00F0FF', '#ffffff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FF6B00', '#00F0FF', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    // Reset copy state and open IG
    setTimeout(() => {
      setCopied(false);
      window.open("https://www.instagram.com/herobuildfit", "_blank");
    }, 2000);
  };

  return (
    <footer id="contact" className="bg-black relative overflow-hidden border-t border-glass-border pt-32 pb-12">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Huge Typographic Marquee */}
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <h2 className="text-[12vw] leading-none font-black font-syne uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-800">
            READY TO
          </h2>
          <h2 className="text-[12vw] leading-none font-black font-syne uppercase tracking-tighter text-brand-neon">
            LEVEL UP?
          </h2>
        </div>

        {/* Action Button */}
        <div className="flex justify-center mb-32">
          <motion.button
            onClick={handleCTA}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 md:gap-4 px-6 py-4 md:px-8 md:py-5 bg-gradient-to-r from-brand-neon to-brand-neon-light text-bg-dark rounded-2xl shadow-[0_0_40px_rgba(255,107,0,0.4)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <InstagramIcon className="w-8 h-8 relative z-10" />
            <div className="flex flex-col items-start relative z-10">
              <span className="font-black font-syne text-xl uppercase tracking-wider leading-none mb-1">
                {copied ? "Copied! Redirecting..." : "DM me 'HERO'"}
              </span>
              <span className="text-xs font-bold uppercase opacity-80 flex items-center gap-1">
                {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                {copied ? "Copied to clipboard" : "Click to copy & open Instagram"}
              </span>
            </div>
          </motion.button>
        </div>

        {/* Structured Fat Footer */}
        <div className="mt-32 pt-16 border-t border-neutral-900 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Newsletter */}
          <div className="md:col-span-2">
            <h3 className="font-syne font-black text-3xl tracking-tighter uppercase text-white mb-4">
              HeroBuild<span className="text-brand-neon">Fit</span>
            </h3>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Elite online fitness coaching. No generic plans, no starvation diets. Just science-backed protocols and relentless execution.
            </p>
            
            <form className="flex gap-2 max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Join the newsletter" 
                className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 flex-1 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
              />
              <button 
                type="submit"
                className="bg-brand-cyan text-bg-dark px-6 font-bold font-syne uppercase tracking-wider rounded-xl hover:bg-white transition-colors"
              >
                Join
              </button>
            </form>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-white mb-6 text-sm">Navigation</h4>
            <div className="flex flex-col gap-4">
              {["About Coach", "The System", "Transformations", "Pricing", "FAQ"].map((link) => (
                <a key={link} href="#" className="text-gray-500 hover:text-brand-neon transition-colors text-sm font-medium">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact & Social */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-white mb-6 text-sm">Connect</h4>
            <div className="flex flex-col gap-4">
              <a href="https://instagram.com/herobuildfit" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-medium">
                <InstagramIcon className="w-4 h-4" /> Instagram
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-medium">
                YouTube
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-medium">
                TikTok
              </a>
              <a href="mailto:coaching@herobuildfit.com" className="flex items-center gap-2 text-gray-500 hover:text-brand-cyan transition-colors text-sm font-medium mt-2">
                coaching@herobuildfit.com
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-900/50 text-sm text-gray-600 font-medium">
          <p>© {new Date().getFullYear()} HeroBuildFit. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

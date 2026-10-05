"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Results", href: "#results" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled 
            ? "bg-bg-dark/80 backdrop-blur-md py-4 border-glass-border shadow-lg" 
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 z-50">
            <span className="font-syne font-black text-2xl tracking-tighter uppercase text-white">
              HeroBuild<span className="text-brand-neon">Fit</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-bold tracking-widest uppercase text-gray-300 hover:text-brand-neon transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollTo("#contact")}
              className="px-5 py-2 bg-brand-neon text-bg-dark font-black font-syne uppercase rounded-lg hover:bg-brand-neon-light transition-colors"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden text-white z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 bg-bg-dark/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-2xl font-black font-syne uppercase text-white hover:text-brand-neon transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => scrollTo("#contact")}
            className="px-6 py-3 md:px-8 md:py-4 mt-4 bg-brand-neon text-bg-dark font-black font-syne text-lg md:text-xl uppercase rounded-xl hover:bg-brand-neon-light transition-colors"
          >
            Apply Now
          </button>
        </motion.div>
      )}
    </>
  );
}

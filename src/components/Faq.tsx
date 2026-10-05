"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    question: "How is the coaching program delivered?",
    answer:
      "All custom workouts, tracking, habit building, and communication are delivered seamlessly through the Trainerize app. You will receive login access upon enrolling.",
  },
  {
    question: "Which tier is right for me?",
    answer:
      "If you only want a program to execute on your own, Tier 1 is ideal. If you want full weekly accountability, nutrition coaching, and progress adjustments, Tier 2 (Standard Coaching) is our most popular choice. Tier 3 is for competition-level guidance or max accountability.",
  },
  {
    question: "Can I add Custom Meal Plans or Form Reviews to any package?",
    answer:
      "Yes! You can purchase Smart Add-Ons (like Custom Meal Plans for $75, Form Review Packages for $40, or In-Person Training Sessions) alongside any coaching package.",
  },
  {
    question: "How do progress check-ins work?",
    answer:
      "Depending on your tier, you submit progress photos, weight measurements, macro logs, and feedback weekly or bi-weekly via Trainerize. Coach Jordan reviews your stats and updates your program accordingly.",
  },
  {
    question: "What if I am a beginner with no gym experience?",
    answer:
      "Every program is customized to your current fitness level, equipment access (gym or home), and goals. Video exercise demonstrations ensure you perform every movement safely with correct technique.",
  },
  {
    question: "Is there a long-term contract requirement?",
    answer:
      "No! You can choose Month-to-Month flexibility, or opt for 3-Month / 6-Month commitments to receive discounted monthly rates.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-bg-dark relative overflow-hidden border-t border-glass-border">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-bold font-syne uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" /> Got Questions?
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-syne uppercase tracking-tight mb-4">
            Frequently Asked <span className="text-brand-cyan">Questions</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Everything you need to know about Hero Build Fitness coaching packages and protocols.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-glass-bg border border-glass-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-neutral-700"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-syne font-bold text-base md:text-lg text-white"
                >
                  <span>{faq.question}</span>
                  <div className={`p-2 rounded-full bg-neutral-900 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-neon" : "text-gray-400"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-0 text-gray-300 text-sm md:text-base leading-relaxed border-t border-neutral-800/60 font-medium">
                        <div className="pt-4">{faq.answer}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

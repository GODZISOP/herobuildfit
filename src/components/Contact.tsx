"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2, Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tier: "Tier 2 – Standard Coaching",
    goal: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        tier: "Tier 2 – Standard Coaching",
        goal: "",
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-bg-dark relative overflow-hidden border-t border-glass-border">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-neon/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-neon/10 border border-brand-neon/30 text-brand-neon text-xs font-bold font-syne uppercase tracking-wider mb-4">
              <MessageSquare className="w-3.5 h-3.5" /> Start Your Transformation
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-syne uppercase tracking-tight mb-6">
              Apply For <span className="text-brand-neon">Coaching</span>
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-8 font-medium">
              Ready to commit to your physique? Fill out the application form or connect directly with Coach Jordan to find the best tier for your goals.
            </p>

            <div className="space-y-4">
              <a
                href="https://instagram.com/herobuildfit"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-brand-neon transition-colors group"
              >
                <div className="p-3 rounded-xl bg-brand-neon/10 text-brand-neon group-hover:bg-brand-neon group-hover:text-bg-dark transition-colors">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase text-gray-400 font-bold block">Instagram Direct</span>
                  <span className="text-white font-syne font-bold text-sm">@herobuildfit</span>
                </div>
              </a>

              <a
                href="mailto:coaching@herobuildfit.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-brand-cyan transition-colors group"
              >
                <div className="p-3 rounded-xl bg-brand-cyan/10 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-bg-dark transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase text-gray-400 font-bold block">Email Inquiries</span>
                  <span className="text-white font-syne font-bold text-sm">coaching@herobuildfit.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-900/90 border border-glass-border rounded-3xl p-8 md:p-10 shadow-2xl backdrop-blur-xl relative">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 className="w-16 h-16 text-brand-neon mx-auto mb-4 animate-bounce" />
                  <h3 className="text-2xl font-black font-syne uppercase text-white mb-2">Application Received!</h3>
                  <p className="text-gray-300 text-sm">
                    Thank you! Coach Jordan will review your details and reach out within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-2xl font-black font-syne uppercase text-white mb-4">Coaching Application</h3>
                  
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-neon transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-neon transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-neon transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Preferred Package Tier
                    </label>
                    <select
                      value={formData.tier}
                      onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-neon transition-colors"
                    >
                      <option value="Tier 1 – Programming Only">Tier 1 – Programming Only ($80/mo)</option>
                      <option value="Tier 2 – Standard Coaching">Tier 2 – Standard Coaching ($180/mo)</option>
                      <option value="Tier 3 – Premium Coaching">Tier 3 – Premium Coaching ($250/mo)</option>
                      <option value="Smart Add-On Inquiry">Smart Add-On Individual Purchase</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Your Primary Goal & Current Fitness Routine
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      placeholder="E.g., I want to lose 15 lbs of fat and gain muscle over the next 3 months..."
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-neon transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-neon text-bg-dark font-black font-syne text-sm uppercase tracking-wider rounded-xl hover:bg-brand-neon-light transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,107,0,0.3)]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Coaching Application</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

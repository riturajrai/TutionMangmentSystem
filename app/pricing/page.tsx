"use client";

import { useState } from "react";
import { motion } from "framer-motion"; // Make sure framer-motion is installed
import { Check, X, ArrowRight } from "lucide-react";

const PLANS = [
  {
    name: "Starter",
    price: 999,
    period: "per month",
    description: "Perfect for small coaching classes or starting institutes",
    features: [
      { text: "Up to 100 Students", included: true },
      { text: "Basic Student Management", included: true },
      { text: "Fee Collection & Reminders", included: true },
      { text: "Attendance Tracking", included: true },
      { text: "Basic Reports", included: true },
      { text: "Online Tests (Limited)", included: true },
      { text: "Admin + 2 Teacher Logins", included: true },
      { text: "Mobile App Access", included: false },
      { text: "Priority Support", included: false },
      { text: "Custom Branding", included: false },
    ],
    buttonText: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: 2499,
    period: "per month",
    description: "Best choice for growing medium-sized institutes",
    features: [
      { text: "Up to 500 Students", included: true },
      { text: "Advanced Student Management", included: true },
      { text: "Fee Collection + Auto Receipts", included: true },
      { text: "Biometric/QR Attendance", included: true },
      { text: "Detailed Analytics & Reports", included: true },
      { text: "Unlimited Online Tests", included: true },
      { text: "Admin + 10 Teacher Logins", included: true },
      { text: "Mobile App for Teachers & Parents", included: true },
      { text: "Priority Email & Chat Support", included: true },
      { text: "Custom Reports Export", included: true },
    ],
    buttonText: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large institutes, chains & coaching networks",
    features: [
      { text: "Unlimited Students", included: true },
      { text: "Full Advanced Features", included: true },
      { text: "Multi-branch Management", included: true },
      { text: "Dedicated Account Manager", included: true },
      { text: "Custom Integrations", included: true },
      { text: "Advanced Security & Audit Logs", included: true },
      { text: "Unlimited Teacher & Staff Logins", included: true },
      { text: "White-label Mobile App", included: true },
      { text: "24×7 Priority Phone Support", included: true },
      { text: "Custom Development & Training", included: true },
    ],
    buttonText: "Contact Sales",
    popular: false,
  },
];

const ANIMATED_PRICING_TEXTS = [
  "No hidden fees — ever",
  "Cancel anytime, no questions asked",
  "Save up to 20% with yearly billing",
  "Free trial — no credit card required",
  "Scales with your institute growth",
  "Transparent pricing from day one",
  "Affordable for Indian coaching centers",
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* Header / Hero */}
      <section className="pt-16 pb-20 px-5 sm:px-8 md:px-12 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Simple & Transparent
            <span className="block mt-2 text-[rgb(var(--color-primary))]">
              Pricing Plans
            </span>
          </h1>

          {/* Infinite animated scrolling text */}
          <div className="mt-6 overflow-hidden">
            <div className="relative h-10 sm:h-12">
              <motion.div
                className="absolute whitespace-nowrap flex items-center gap-8 text-base sm:text-lg md:text-xl font-medium text-[rgb(var(--color-primary))]"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }}
              >
                {/* Duplicate for seamless infinite loop */}
                {[...ANIMATED_PRICING_TEXTS, ...ANIMATED_PRICING_TEXTS].map((text, i) => (
                  <span key={i} className="flex items-center gap-3">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-[rgb(var(--color-primary))] animate-pulse" />
                    {text}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          <p className="mt-8 text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Choose the plan that fits your coaching institute size and needs.  
            Upgrade or downgrade anytime — no long-term contracts.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 md:py-20 px-5 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {PLANS.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border transition-all duration-300 flex flex-col h-full ${
                  plan.popular
                    ? "border-[rgb(var(--color-primary))] bg-[rgb(var(--color-primary)/0.07)] dark:bg-[rgb(var(--color-primary)/0.12)] shadow-xl scale-100 md:scale-105 z-10"
                    : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[rgb(var(--color-primary))] text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-md">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-6 sm:p-8 md:p-9 flex flex-col flex-grow">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{plan.name}</h3>

                  <div className="flex items-baseline gap-1.5 mb-6">
                    {typeof plan.price === "number" ? (
                      <>
                        <span className="text-4xl md:text-5xl font-extrabold">₹{plan.price}</span>
                        <span className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400">
                          /{plan.period}
                        </span>
                      </>
                    ) : (
                      <span className="text-4xl md:text-5xl font-extrabold">{plan.price}</span>
                    )}
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                    {plan.description}
                  </p>

                  <button
                    className={`w-full py-3.5 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all mb-10 ${
                      plan.popular
                        ? "bg-[rgb(var(--color-primary))] text-white hover:bg-[rgb(var(--color-primary)/0.9)] shadow-lg"
                        : "bg-zinc-800 dark:bg-zinc-700 text-white hover:bg-zinc-900 dark:hover:bg-zinc-600"
                    }`}
                  >
                    {plan.buttonText}
                    {!plan.popular && <ArrowRight size={16} className="inline ml-2" />}
                  </button>

                  <div className="space-y-3.5 text-sm sm:text-base">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className="text-emerald-500 flex-shrink-0" size={20} />
                        ) : (
                          <X className="text-zinc-400 dark:text-zinc-500 flex-shrink-0" size={20} />
                        )}
                        <span
                          className={
                            feature.included
                              ? ""
                              : "text-zinc-500 dark:text-zinc-500 line-through"
                          }
                        >
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Final CTA */}
      <section className="py-16 md:py-24 px-5 sm:px-8 md:px-12 bg-zinc-100 dark:bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5">
            Still have questions?
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
            Our team is happy to help you choose the perfect plan for your coaching institute
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-10 py-4 bg-[rgb(var(--color-primary))] text-white rounded-xl font-semibold text-base sm:text-lg hover:opacity-90 transition shadow-md">
              Contact Sales →
            </button>

            <button className="px-10 py-4 border border-zinc-300 dark:border-zinc-700 rounded-xl font-semibold text-base sm:text-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition">
              Book Free Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
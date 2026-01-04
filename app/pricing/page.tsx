"use client";

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
    color: "bg-gray-800 hover:bg-gray-900"
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
    buttonText: "Most Popular → Start Now",
    popular: true,
    color: "bg-[rgb(var(--color-primary))] hover:bg-[rgb(var(--color-primary)/0.9)]"
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
    buttonText: "Contact Sales Team",
    popular: false,
    color: "bg-gray-900 hover:bg-gray-800"
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white">

      {/* Header */}
      <section className="relative py-16 sm:py-24 px-5 sm:px-8 bg-gradient-to-br from-[rgb(var(--color-primary)/0.08)] via-transparent to-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Simple, Transparent Pricing
          </h1>
          
          <p className="mt-5 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Choose the plan that best fits your coaching institute size and needs.
            <br className="hidden sm:block" />
            Upgrade or downgrade anytime — no long-term contracts.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 sm:py-20 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {PLANS.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border ${
                  plan.popular
                    ? "border-[rgb(var(--color-primary))] shadow-2xl scale-105 md:scale-110 z-10"
                    : "border-zinc-200 dark:border-zinc-800"
                } bg-white dark:bg-zinc-900/80 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-xl`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[rgb(var(--color-primary))] text-white text-xs font-bold px-4 py-1 rounded-full shadow-md">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">{plan.name}</h3>
                  
                  <div className="flex items-baseline gap-1 mb-6">
                    {typeof plan.price === "number" ? (
                      <>
                        <span className="text-4xl sm:text-5xl font-extrabold">₹{plan.price}</span>
                        <span className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400">/{plan.period}</span>
                      </>
                    ) : (
                      <span className="text-4xl sm:text-5xl font-extrabold">{plan.price}</span>
                    )}
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-8">
                    {plan.description}
                  </p>

                  <button
                    className={`w-full py-3.5 rounded-xl font-semibold text-base sm:text-lg transition mb-8 ${
                      plan.popular
                        ? "bg-white text-[rgb(var(--color-primary))] hover:bg-zinc-100"
                        : "bg-[rgb(var(--color-primary))] text-white hover:opacity-90"
                    }`}
                  >
                    {plan.buttonText}
                  </button>

                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm sm:text-base">
                        {feature.included ? (
                          <Check className="text-green-500 flex-shrink-0" size={18} />
                        ) : (
                          <X className="text-red-400 flex-shrink-0" size={18} />
                        )}
                        <span className={feature.included ? "" : "text-zinc-500 dark:text-zinc-600"}>
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

      {/* FAQ / Contact CTA */}
      <section className="py-16 sm:py-24 bg-zinc-100 dark:bg-zinc-950 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Still have questions?
          </h2>
          
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mb-10">
            Our team is happy to help you choose the perfect plan for your institute
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-[rgb(var(--color-primary))] text-white rounded-xl font-semibold hover:opacity-90 transition">
              Contact Sales →
            </button>
            
            <button className="px-10 py-4 border border-zinc-300 dark:border-zinc-700 rounded-xl font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-800 transition">
              Book Free Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
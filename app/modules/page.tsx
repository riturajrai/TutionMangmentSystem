"use client";

import Image from "next/image";
import {
  Users,
  CreditCard,
  CalendarCheck,
  FileText,
  Smartphone,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const MODULES = [
  {
    title: "Admission & Lead Management",
    description: "Track inquiries, follow-ups, counselling & convert more admissions with smart CRM",
    icon: Users,
    color: "text-blue-600",
    image: "/modules/admission-lead-crm.png",
  },
  {
    title: "Smart Fee Collection",
    description: "UPI, cards, auto-reminders (SMS/WhatsApp), instalments, penalties & reconciliation",
    icon: CreditCard,
    color: "text-emerald-600",
    image: "/modules/smart-fee-collection.png",
  },
  {
    title: "Advanced Attendance Pro",
    description: "Biometric / QR / Selfie attendance, real-time alerts, leave & holiday management",
    icon: CalendarCheck,
    color: "text-violet-600",
    image: "/modules/advanced-attendance.png",
  },
  {
    title: "Online + Offline Exams",
    description: "Question banks, MCQ/subjective tests, auto-marking, rankings & detailed analytics",
    icon: FileText,
    color: "text-amber-600",
    image: "/modules/online-offline-exams.png",
  },
  {
    title: "Parent & Student Mobile Portal",
    description: "App access for fees, attendance, results, homework, notices & live updates",
    icon: Smartphone,
    color: "text-cyan-600",
    image: "/modules/parent-student-app.png",
  },
  {
    title: "Growth & Revenue Analytics",
    description: "Batch performance, revenue trends, teacher efficiency & student retention insights",
    icon: BarChart3,
    color: "text-rose-600",
    image: "/modules/growth-revenue-analytics.png",
  },
];

export default function ModulesPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* Hero / Header */}
      <section className="pt-16 pb-20 px-5 sm:px-8 md:px-12 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Powerful Modules Designed for
            <span className="block mt-2 text-[rgb(var(--color-primary))]">
              Modern Coaching Classes
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Complete solution trusted by 1000+ institutes — from first inquiry to revenue growth
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-16 md:py-24 px-5 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {MODULES.map((module, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-900/70 rounded-2xl overflow-hidden border border-zinc-200/70 dark:border-zinc-800/50 hover:border-[rgb(var(--color-primary)/0.4)] hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >{/* Image Container - Clean & Centered */}
<div className="relative h-48 sm:h-56 md:h-64 bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
  <Image
    src={module.image}
    alt={module.title}
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
    quality={85}
  />
</div>

                {/* Content */}
                <div className="p-6 sm:p-7 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center ${module.color.replace(
                        "text-",
                        "bg-"
                      )}/10`}
                    >
                      <module.icon size={26} className={module.color} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold leading-tight">
                      {module.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-6 flex-grow leading-relaxed">
                    {module.description}
                  </p>

                  <div className="flex items-center gap-2 text-[rgb(var(--color-primary))] font-medium">
                    <span>Explore Module</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 px-5 sm:px-8 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-primary)/0.9)] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Ready to Run Your Institute Smarter?
          </h2>

          <p className="text-lg sm:text-xl opacity-95 mb-10 max-w-3xl mx-auto">
            Join thousands of successful coaching centers — start your free trial today, no card needed
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button className="px-10 md:px-12 py-4 bg-white text-[rgb(var(--color-primary))] rounded-2xl font-bold text-lg shadow-xl hover:bg-zinc-100 transition-colors">
              Start Free Trial Now →
            </button>
            <button className="px-10 md:px-12 py-4 border-2 border-white/70 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-colors">
              Book Free Demo Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
"use client";

import Image from "next/image";
import {
  Users,
  CreditCard,
  CalendarCheck2,
  FileBarChart,
  LayoutDashboard,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const FEATURE_SECTIONS = [
  {
    title: "Student Management",
    description: "Complete lifecycle management of students from admission to results",
    icon: Users,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100/70 dark:bg-blue-950/30",
    features: [
      "Detailed student profiles with documents & photos",
      "Batch & class allocation with roll numbers",
      "Admission & inquiry management",
      "Student & parent communication portal",
      "ID card generation & printing",
    ],
    image: "/features/student-management-preview.png",
  },
  {
    title: "Fee & Payment System",
    description: "Fully automated fee collection with zero manual tracking",
    icon: CreditCard,
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100/70 dark:bg-green-950/30",
    features: [
      "Online payment gateway integration",
      "Automated fee reminders via SMS/WhatsApp",
      "Receipt generation & digital sharing",
      "Pending dues dashboard & follow-ups",
      "Fee structure management per batch",
    ],
    image: "/features/fee-management-preview.png",
  },
  {
    title: "Attendance & Discipline",
    description: "Accurate & hassle-free attendance tracking",
    icon: CalendarCheck2,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100/70 dark:bg-purple-950/30",
    features: [
      "Biometric, QR code & manual attendance",
      "Late entry & absence marking",
      "Monthly/term attendance reports",
      "SMS alerts for low attendance",
      "Defaulter list & warnings",
    ],
    image: "/features/attendance-preview.png",
  },
  {
    title: "Online Tests & Exams",
    description: "Complete solution for digital assessments",
    icon: FileBarChart,
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-100/70 dark:bg-orange-950/30",
    features: [
      "Question bank with categories & difficulty",
      "Timed & proctored online tests",
      "Auto-evaluation & instant results",
      "Performance analytics per student",
      "Custom test schedules & notifications",
    ],
    image: "/features/online-tests-preview.png",
  },
  {
    title: "Admin & Staff Dashboard",
    description: "Powerful control center with role-based access",
    icon: LayoutDashboard,
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-100/70 dark:bg-indigo-950/30",
    features: [
      "Custom roles & permissions",
      "Admin, Teacher, Accountant logins",
      "Quick overview dashboard",
      "Bulk operations & import/export",
      "Activity logs & audit trail",
    ],
    image: "/features/admin-dashboard-preview.png",
  },
  {
    title: "Reports & Analytics",
    description: "Data-driven insights for better decisions",
    icon: BarChart3,
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-100/70 dark:bg-teal-950/30",
    features: [
      "Revenue & collection reports",
      "Student performance analytics",
      "Attendance & defaulter reports",
      "Test results & ranking",
      "Export in PDF, Excel & CSV",
    ],
    image: "/features/analytics-preview.png",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* HERO */}
      <section className="pt-16 pb-20 px-5 sm:px-8 md:px-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
          Complete Feature Set for
          <span className="block mt-2 text-[rgb(var(--color-primary))]">
            Modern Coaching Institutes
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          Everything you need to manage students, fees, attendance, tests & growth — all in one powerful dashboard.
        </p>
      </section>

      {/* FEATURES */}
      <section className="px-5 sm:px-8 md:px-12 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
          {FEATURE_SECTIONS.map((section, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center"
            >
              {/* Image - comes first on mobile, alternates order on desktop */}
              <div
                className={`relative order-1 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
              >
                <div
                  className={`absolute inset-0 ${section.bgColor} rounded-3xl blur-2xl md:blur-3xl opacity-70 scale-95`}
                />
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800/50 shadow-xl">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={960}
                    height={640}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className={`order-2 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center ${section.bgColor} flex-shrink-0`}
                  >
                    <section.icon size={28} className={section.color} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold leading-tight">
                    {section.title}
                  </h2>
                </div>

                <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-300 mb-6 md:mb-8 leading-relaxed">
                  {section.description}
                </p>

                <ul className="space-y-3.5 md:space-y-4">
                  {section.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2
                        size={20}
                        className="text-emerald-500 dark:text-emerald-400 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm md:text-base leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className="mt-8 md:mt-10 inline-flex items-center gap-2 text-[rgb(var(--color-primary))] font-semibold hover:gap-3 transition-all duration-300 group">
                  Explore module
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-primary)/0.9)] text-white text-center px-5 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Ready to Transform Your Institute?
          </h2>

          <p className="text-lg sm:text-xl opacity-95 mb-10 md:mb-12 max-w-2xl mx-auto">
            Start managing students, fees & performance smarter — no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-white text-[rgb(var(--color-primary))] font-bold rounded-2xl shadow-2xl hover:bg-zinc-100 transition-colors text-lg">
              Start Free Trial →
            </button>
            <button className="px-10 py-4 border-2 border-white/70 rounded-2xl font-semibold hover:bg-white/10 transition-colors text-lg">
              Book Free Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
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
    description:
      "Complete lifecycle management of students from admission to results",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-100/60 dark:bg-blue-900/20",
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
    color: "text-green-600",
    bgColor: "bg-green-100/60 dark:bg-green-900/20",
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
    color: "text-purple-600",
    bgColor: "bg-purple-100/60 dark:bg-purple-900/20",
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
    color: "text-orange-600",
    bgColor: "bg-orange-100/60 dark:bg-orange-900/20",
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
    color: "text-indigo-600",
    bgColor: "bg-indigo-100/60 dark:bg-indigo-900/20",
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
    color: "text-teal-600",
    bgColor: "bg-teal-100/60 dark:bg-teal-900/20",
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
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white">

      {/* ================= HERO ================= */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
          Complete Feature Set for
          <span className="block text-[rgb(var(--color-primary))]">
            Modern Coaching Institutes
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
          Everything you need to manage students, fees, attendance, tests &
          growth — all in one powerful dashboard.
        </p>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="px-4 pb-24">
        <div className="max-w-7xl mx-auto space-y-24">
          {FEATURE_SECTIONS.map((section, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-12 gap-12 items-center ${
                index % 2 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* IMAGE */}
              <div
                className={`lg:col-span-6 ${
                  index % 2 ? "lg:order-2" : ""
                } relative`}
              >
                <div
                  className={`absolute inset-0 ${section.bgColor} rounded-3xl blur-2xl opacity-70`}
                />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={900}
                    height={600}
                    className="w-full object-cover"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div
                className={`lg:col-span-6 ${
                  index % 2 ? "lg:order-1" : ""
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${section.bgColor}`}>
                    <section.icon size={28} className={section.color} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {section.title}
                  </h2>
                </div>

                <p className="text-zinc-600 dark:text-zinc-300 text-base md:text-lg mb-6">
                  {section.description}
                </p>

                <ul className="space-y-4">
                  {section.features.map((feature, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-green-600 mt-1 shrink-0"
                      />
                      <span className="text-sm md:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className="mt-8 inline-flex items-center gap-2 font-semibold text-[rgb(var(--color-primary))] hover:gap-3 transition-all">
                  Explore module <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-primary)/0.85)] text-center text-white px-4">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6">
          Ready to Transform Your Institute?
        </h2>

        <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto mb-10">
          Start managing students, fees & performance smarter — no credit card
          required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-4 bg-white text-[rgb(var(--color-primary))] rounded-2xl font-bold shadow-xl hover:bg-zinc-100">
            Start Free Trial →
          </button>
          <button className="px-10 py-4 border border-white/60 rounded-2xl font-semibold hover:bg-white/10">
            Book Free Demo
          </button>
        </div>
      </section>
    </div>
  );
}

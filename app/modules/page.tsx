"use client";

import Image from "next/image";
import { 
  Users, 
  CreditCard, 
  CalendarCheck, 
  FileText, 
  LayoutDashboard, 
  BarChart3,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const MODULES = [
  {
    title: "Student Management",
    description: "Complete student profiles, batch wise allocation, performance tracking and communication",
    icon: Users,
    color: "text-blue-500",
    image: "/modules/student-management.png" // Add your real image path
  },
  {
    title: "Fee & Payments",
    description: "Online & offline fee collection, automated reminders, receipts, pending dues tracking",
    icon: CreditCard,
    color: "text-green-500",
    image: "/modules/fee-payments.png"
  },
  {
    title: "Attendance System",
    description: "Daily biometric/manual attendance, late entry marking, monthly reports & export",
    icon: CalendarCheck,
    color: "text-purple-500",
    image: "/modules/attendance.png"
  },
  {
    title: "Online Tests & Exams",
    description: "Create question banks, conduct tests, auto-evaluation, performance analytics",
    icon: FileText,
    color: "text-orange-500",
    image: "/modules/online-tests.png"
  },
  {
    title: "Admin Dashboard",
    description: "Role-based access for admin, teachers, accountants & other staff members",
    icon: LayoutDashboard,
    color: "text-indigo-500",
    image: "/modules/admin-dashboard.png"
  },
  {
    title: "Reports & Analytics",
    description: "Detailed visual reports, revenue trends, student performance, attendance summary",
    icon: BarChart3,
    color: "text-teal-500",
    image: "/modules/reports-analytics.png"
  },
];

export default function ModulesPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white">

      {/* Header / Hero Section */}
      <section className="relative py-16 sm:py-24 px-5 sm:px-8 bg-gradient-to-br from-[rgb(var(--color-primary)/0.07)] to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Powerful Modules Built for
            <span className="text-[rgb(var(--color-primary))]"> Coaching Institutes</span>
          </h1>
          
          <p className="mt-5 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Everything you need to manage your institute efficiently — from student admission to revenue tracking
          </p>
        </div>
      </section>

      {/* Main Modules Grid */}
      <section className="py-12 sm:py-20 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {MODULES.map((module, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-zinc-900/70 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-[rgb(var(--color-primary)/0.4)] hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Image area */}
                <div className="relative h-48 sm:h-56 bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-950 dark:to-zinc-900">
                  <Image
                    src={module.image}
                    alt={module.title}
                    fill
                    className="object-contain p-6 sm:p-8 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${module.color.replace('text-', 'bg-').replace('-500', '/10')} flex items-center justify-center`}>
                      <module.icon size={24} className={module.color} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold">
                      {module.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-6 flex-grow">
                    {module.description}
                  </p>

                  <div className="flex items-center gap-2 text-[rgb(var(--color-primary))] font-medium text-sm sm:text-base group-hover:translate-x-1 transition-transform">
                    <span>Learn more</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-24 bg-[rgb(var(--color-primary))] text-white text-center px-5 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience All Modules?
          </h2>
          
          <p className="text-base sm:text-lg opacity-90 mb-10">
            Start your free trial today — no credit card required
          </p>

          <button className="px-10 sm:px-12 py-4 bg-white text-[rgb(var(--color-primary))] rounded-xl font-bold text-lg hover:bg-zinc-100 transition shadow-lg">
            Start Free Trial Now →
          </button>
        </div>
      </section>
    </div>
  );
}
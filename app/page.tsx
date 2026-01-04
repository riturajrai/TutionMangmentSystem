"use client";

import Image from "next/image";
import { 
  ShieldCheck, 
  BarChart3, 
  Users, 
  TrendingUp, 
  Building2, 
  Headphones,
  Rocket,
  Lock,
  Smartphone,
  IndianRupee
} from "lucide-react";

import FeeMangmentIcon from "../public/HomeIcon/Fee and Paymangment.png";
import AdminDsboardIcon from "../public/HomeIcon/AdminDashboard.png";
import AttendanceIcon from "../public/HomeIcon/attendanceIcon.png";
import OnlineTestIcon from "../public/HomeIcon/OnlineTest.png";
import StudentMnagmentIcon from "../public/HomeIcon/StudentMangment.png";
import ReportAnalticsIcon from "../public/HomeIcon/ReportAndAnalytics.png";

const FEATURES = [
  { title: "Student Management", desc: "Complete profiles, batch allocation & progress tracking", icon: StudentMnagmentIcon },
  { title: "Fee & Payments", desc: "Online/offline tracking with automated reminders", icon: FeeMangmentIcon },
  { title: "Attendance", desc: "Daily tracking + reports & export options", icon: AttendanceIcon },
  { title: "Online Tests", desc: "Create tests with auto-evaluation & analytics", icon: OnlineTestIcon },
  { title: "Admin Dashboard", desc: "Role-based access for admin, teachers & staff", icon: AdminDsboardIcon },
  { title: "Reports & Analytics", desc: "Clear visual insights on performance & revenue", icon: ReportAnalticsIcon },
];

const TRUST_STATS = [
  { value: "500+ Students", icon: Users, color: "text-blue-500" },
  { value: "50+ Institutes", icon: Building2, color: "text-purple-500" },
  { value: "99.9% Uptime", icon: ShieldCheck, color: "text-green-500" },
  { value: "24/7 Support", icon: Headphones, color: "text-amber-500" },
];

const WHY_US_POINTS = [
  { text: "Easy & fast onboarding", icon: Rocket },
  { text: "Bank-grade data security", icon: Lock },
  { text: "Perfect on mobile & desktop", icon: Smartphone },
  { text: "Affordable for Indian institutes", icon: IndianRupee },
];

export default function Home() {
  return (
    <div className="bg-zinc-50 text-zinc-900 dark:bg-black dark:text-white min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative pt-14 pb-20 sm:pt-20 sm:pb-32 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-primary)/0.06)] via-transparent to-[rgb(var(--color-primary)/0.1)]" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl xs:text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              All-in-One Coaching
              <br className="hidden sm:block" />
              <span className="text-[rgb(var(--color-primary))]">Management Software</span>
            </h1>

            <p className="mt-5 text-sm xs:text-[11px] sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto lg:mx-0">
              Manage students, fees, attendance, online tests and reports — all from one modern, secure dashboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              <button className="px-6 py-3 xs:px-5 xs:py-2.5 bg-[rgb(var(--color-primary))] text-white rounded-xl font-medium text-sm sm:text-base hover:opacity-90 transition shadow-md">
                Get Started Free
              </button>
              <button className="px-6 py-3 xs:px-5 xs:py-2.5 border border-zinc-300 dark:border-zinc-700 rounded-xl font-medium text-sm sm:text-base hover:border-zinc-400 transition">
                Book Demo
              </button>
            </div>
          </div>

          {/* Dashboard visual */}
          <div className="relative mt-10 lg:mt-0 scale-95 sm:scale-100">
            <div className="absolute -inset-6 sm:-inset-10 bg-[rgb(var(--color-primary)/0.1)] blur-2xl sm:blur-3xl rounded-full opacity-60" />

            <div className="relative rounded-2xl sm:rounded-3xl p-3 sm:p-5 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm">
              {/* Live Preview Badge */}
              <div className="absolute -top-4 sm:-top-5 left-3 sm:left-6 flex items-center gap-2 bg-white dark:bg-zinc-900 px-3 py-1.5 rounded-full shadow-md text-[10px] sm:text-xs font-semibold z-10">
                <BarChart3 size={14} className="text-[rgb(var(--color-primary))]" />
                Live Preview
              </div>

              <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-zinc-200/40 dark:border-zinc-800/40">
                <Image
                  src="/new-hero-image.png"
                  alt="Dashboard Preview"
                  width={960}
                  height={640}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>

              {/* Floating stats - smaller & better positioned on mobile */}
              <div className="absolute -bottom-4 sm:-bottom-6 left-2 sm:left-5 flex items-center gap-1.5 bg-white dark:bg-zinc-900 px-2.5 sm:px-3.5 py-1 sm:py-2 rounded-lg shadow-md text-[9px] xs:text-[10px] sm:text-xs font-medium whitespace-nowrap">
                <Users size={14} className="text-emerald-500" />
                90% Attendance
              </div>

              <div className="absolute top-8 sm:top-16 -right-1 sm:-right-5 flex items-center gap-1.5 bg-white dark:bg-zinc-900 px-2.5 sm:px-3.5 py-1 sm:py-2 rounded-lg shadow-md text-[9px] xs:text-[10px] sm:text-xs font-medium whitespace-nowrap">
                <TrendingUp size={14} className="text-emerald-500" />
                +8% Growth
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="py-12 sm:py-16 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Trusted by growing coaching institutes
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {TRUST_STATS.map((stat, i) => (
              <div
                key={i}
                className="bg-white dark:bg-zinc-900/60 p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition text-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-opacity-10 bg-[rgb(var(--color-primary))] flex items-center justify-center mx-auto mb-3">
                 <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color}`}/>
                </div>
                <p className="text-xs sm:text-sm font-semibold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6">
            Everything you need to grow
          </h2>
          
          <p className="text-sm sm:text-base text-center text-zinc-600 dark:text-zinc-400 mb-10 sm:mb-14 max-w-2xl mx-auto">
            Modern tools built for Indian coaching institutes
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-9">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-zinc-900/70 p-5 sm:p-7 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-[rgb(var(--color-primary)/0.3)] transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-[rgb(var(--color-primary)/0.08)] flex items-center justify-center mb-4 group-hover:scale-105 transition">
                  <Image
                    src={f.icon}
                    alt={f.title}
                    width={56}
                    height={56}
                    className="w-9 h-9 sm:w-11 sm:h-11 object-contain"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-16 sm:py-20 bg-zinc-100 dark:bg-zinc-950 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Why Institutes Choose Us
            </h2>

            <div className="space-y-4 sm:space-y-5">
              {WHY_US_POINTS.map((item, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[rgb(var(--color-primary)/0.08)] flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-[rgb(var(--color-primary))]" />
                  </div>
                  <span className="text-sm sm:text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <Image
              src="/whycoooshe.png"
              alt="Institute using software"
              width={500}
              height={500}
              className="w-full max-w-[420px] mx-auto lg:mx-0 rounded-2xl shadow-xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* ================= PRICING & FINAL CTA ================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Simple & Transparent Pricing
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-10 max-w-xl mx-auto">
            Choose the plan that fits your institute — upgrade anytime
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { plan: "Starter", price: "₹999", desc: "Small batches" },
              { plan: "Professional", price: "₹2,499", desc: "Growing institutes" },
              { plan: "Enterprise", price: "Custom", desc: "Large scale needs" },
            ].map((p, i) => (
              <div
                key={i}
                className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                  i === 1
                    ? "bg-[rgb(var(--color-primary))] text-white scale-105 shadow-xl"
                    : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:shadow-lg"
                }`}
              >
                <h3 className="text-lg sm:text-xl font-bold">{p.plan}</h3>
                <p className="text-3xl sm:text-4xl font-extrabold mt-3">
                  {p.price}
                  {i !== 2 && <span className="text-lg opacity-80">/mo</span>}
                </p>
                <p className="mt-4 text-xs sm:text-sm opacity-90">{p.desc}</p>
                <button className={`mt-6 w-full py-3 rounded-xl font-medium text-sm sm:text-base ${
                  i === 1 ? "bg-white text-[rgb(var(--color-primary))]" : "bg-[rgb(var(--color-primary))] text-white"
                }`}>
                  {i === 2 ? "Contact Us" : "Choose Plan"}
                </button>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="mt-16 sm:mt-20">
            <p className="text-lg sm:text-xl font-medium mb-6">
              Ready to digitize your institute?
            </p>
            <button className="px-10 py-4 bg-[rgb(var(--color-primary))] text-white rounded-xl font-semibold text-base sm:text-lg hover:opacity-90 transition shadow-md">
              Start Free Trial → No Card Needed
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
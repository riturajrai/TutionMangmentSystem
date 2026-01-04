"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Building2,
  Headphones,
  Rocket,
  Lock,
  Smartphone,
  IndianRupee,
  BarChart3,
  TrendingUp,
} from "lucide-react";

import FeeMangmentIcon from "../public/HomeIcon/Fee and Paymangment.png";
import AdminDsboardIcon from "../public/HomeIcon/AdminDashboard.png";
import AttendanceIcon from "../public/HomeIcon/attendanceIcon.png";
import OnlineTestIcon from "../public/HomeIcon/OnlineTest.png";
import StudentMnagmentIcon from "../public/HomeIcon/StudentMangment.png";
import ReportAnalticsIcon from "../public/HomeIcon/ReportAndAnalytics.png";

const FEATURES = [
  {
    title: "Smart Student Lifecycle",
    desc: "From inquiry to alumni — complete profiles, admissions, batches & progress tracking",
    icon: StudentMnagmentIcon,
  },
  {
    title: "Automated Fee System",
    desc: "UPI, cards, auto-reminders (SMS/WhatsApp), instalments & instant receipts",
    icon: FeeMangmentIcon,
  },
  {
    title: "Advanced Attendance",
    desc: "Biometric/QR/selfie modes, real-time alerts & monthly defaulter reports",
    icon: AttendanceIcon,
  },
  {
    title: "Digital Exams Suite",
    desc: "Online + offline tests, question bank, auto-evaluation & performance analytics",
    icon: OnlineTestIcon,
  },
  {
    title: "Role-Based Dashboard",
    desc: "Separate portals for admin, teachers, accountants & parents",
    icon: AdminDsboardIcon,
  },
  {
    title: "Growth Insights",
    desc: "Revenue trends, student retention, batch performance & teacher efficiency reports",
    icon: ReportAnalticsIcon,
  },
];

const TRUST_STATS = [
  { value: "12,000+ Students", icon: Users, color: "text-blue-500" },
  { value: "180+ Coaching Centers", icon: Building2, color: "text-purple-500" },
  { value: "99.98% Uptime", icon: ShieldCheck, color: "text-green-500" },
  { value: "365-Day Support", icon: Headphones, color: "text-amber-500" },
];

const WHY_US_POINTS = [
  { text: "Ready in 48 hours — super fast setup", icon: Rocket },
  { text: "256-bit encryption & daily backups", icon: Lock },
  { text: "Beautiful mobile app for parents & teachers", icon: Smartphone },
  { text: "Most affordable premium plan in India", icon: IndianRupee },
];

const SCROLL_TEXTS = [
  "Save 15+ hours per week on admin work",
  "Increase attendance by 25%+ with smart reminders",
  "Reduce fee defaulters to almost zero",
  "Get real-time insights & rankings instantly",
  "Parents love the mobile app experience",
  "Fully secure & 99.98% uptime guaranteed",
  "Trusted by 180+ coaching centers across India",
];

export default function Home() {
  return (
    <div className="bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 min-h-screen">
      {/* ================= HERO ================= */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-32 px-5 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-primary)/0.07)] via-transparent to-[rgb(var(--color-primary)/0.12)]" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Grow Your Coaching Institute
              <br className="hidden sm:block" />
              <span className="text-[rgb(var(--color-primary))]">Effortlessly</span>
            </h1>

            {/* Infinite scrolling benefits animation */}
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
                  {[...SCROLL_TEXTS, ...SCROLL_TEXTS].map((text, i) => (
                    <span key={i} className="flex items-center gap-3">
                      <span className="inline-block w-2.5 h-2.5 rounded-full bg-[rgb(var(--color-primary))] animate-pulse" />
                      {text}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>

            <p className="mt-8 text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Modern all-in-one platform trusted by 180+ coaching centers — manage admissions, fees, exams, attendance & growth from one powerful dashboard.
            </p>

            <div className="mt-10 flex flex-wrap gap-2 justify-center lg:justify-start">
              <button className="px-4 py-4 bg-[rgb(var(--color-primary))] text-white rounded-xl font-semibold text-base sm:text-lg hover:opacity-90 transition shadow-lg">
                Start Free Trial
              </button>
              <button className="px-4 py-4 border-2 border-zinc-300 dark:border-zinc-700 rounded-xl font-semibold text-base sm:text-lg hover:border-zinc-400 dark:hover:border-zinc-500 transition">
                Book Live Demo
              </button>
            </div>
          </div>

          {/* Dashboard visual */}
          <div className="relative mt-12 lg:mt-0">
            <div className="absolute -inset-8 sm:-inset-12 bg-[rgb(var(--color-primary)/0.12)] blur-3xl rounded-full opacity-60" />

            <div className="relative rounded-3xl p-4 sm:p-6 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-md border border-zinc-200/40 dark:border-zinc-800/40">
              <div className="absolute -top-5 sm:-top-6 left-4 sm:left-8 flex items-center gap-2 bg-white dark:bg-zinc-900 px-4 py-2 rounded-full shadow-lg text-xs sm:text-sm font-semibold z-10">
                <BarChart3 size={16} className="text-[rgb(var(--color-primary))]" />
                Live Dashboard Preview
              </div>

              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/new-hero-image.png"
                  alt="Ediyo Dashboard Preview"
                  width={960}
                  height={640}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-5 sm:-bottom-7 left-4 sm:left-8 bg-white dark:bg-zinc-900 px-3 py-2 rounded-lg shadow-lg text-xs sm:text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-emerald-500" />
                  96% Attendance
                </div>
              </div>

              <div className="absolute top-10 sm:top-16 -right-2 sm:-right-6 bg-white dark:bg-zinc-900 px-3 py-2 rounded-lg shadow-lg text-xs sm:text-sm font-medium">
                <div className="flex items-center gap-2">
                  <TrendingUp size={16} className="text-emerald-500" />
                  +24% Revenue Growth
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="py-12 sm:py-16 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-8">
            Trusted across India
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-8">
            {TRUST_STATS.map((stat, i) => (
              <div
                key={i}
                className="bg-white dark:bg-zinc-900/60 p-5 sm:p-7 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[rgb(var(--color-primary)/0.1)] flex items-center justify-center mx-auto mb-4">
                  <stat.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${stat.color}`} />
                </div>
                <p className="text-base sm:text-lg font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-5">
            Everything Your Institute Needs
          </h2>

          <p className="text-base sm:text-lg text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-3xl mx-auto">
            Powerful tools built specifically for Indian coaching & tuition centers
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-zinc-900/70 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-[rgb(var(--color-primary)/0.4)] transition-all"
              >
                <div className="w-16 h-16 rounded-xl  flex items-center justify-center mb-5 group-hover:scale-105 transition">
                  <Image
                    src={f.icon}
                    alt={f.title}
                    width={220}
                    height={220}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-16 sm:py-24 bg-zinc-100 dark:bg-zinc-900/50 px-5 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Why Coaching Centers Love Ediyo
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {WHY_US_POINTS.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[rgb(var(--color-primary)/0.1)] flex items-center justify-center flex-shrink-0">
                    <item.icon size={24} className="text-[rgb(var(--color-primary))]" />
                  </div>
                  <span className="text-base sm:text-lg font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-10 lg:mt-0">
            <Image
              src="/whycoooshe.png"
              alt="Happy coaching institute team using Ediyo"
              width={600}
              height={600}
              className="w-full max-w-[480px] mx-auto lg:mx-0 rounded-3xl shadow-2xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* ================= PRICING TEASER & FINAL CTA ================= */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Affordable Plans for Every Size
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
            Starting from just ₹999/month — save more with yearly billing
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {[
              { plan: "Starter", price: "₹999", desc: "Small batches & new centers" },
              { plan: "Professional", price: "₹2,499", desc: "Growing institutes" },
              { plan: "Enterprise", price: "Custom", desc: "Large chains & multi-branch" },
            ].map((p, i) => (
              <div
                key={i}
                className={`p-7 sm:p-9 rounded-2xl border transition-all ${
                  i === 1
                    ? "bg-[rgb(var(--color-primary))] text-white shadow-2xl scale-100 md:scale-105"
                    : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
                }`}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-3">{p.plan}</h3>
                <p className="text-4xl sm:text-5xl font-extrabold">
                  {p.price}
                  {i !== 2 && <span className="text-xl sm:text-2xl opacity-80">/mo</span>}
                </p>
                <p className="mt-4 text-sm sm:text-base opacity-90">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-xl sm:text-2xl font-semibold mb-8">
              Ready to take your institute to the next level?
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <button className="px-12 py-5 bg-[rgb(var(--color-primary))] text-white rounded-xl font-bold text-lg shadow-xl hover:opacity-90 transition">
                Start Your Free Trial → No Card Required
              </button>
              <button className="px-12 py-5 border-2 border-zinc-300 dark:border-zinc-700 rounded-xl font-semibold text-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
                Schedule a Personal Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
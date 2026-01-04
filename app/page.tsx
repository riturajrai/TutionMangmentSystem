import Image from "next/image";

import FeeMangmentIcon from "../public/HomeIcon/Fee and Paymangment.png";
import AdminDsboardIcon from "../public/HomeIcon/AdminDashboard.png";
import AttendanceIcon from "../public/HomeIcon/attendanceIcon.png";
import OnlineTestIcon from "../public/HomeIcon/OnlineTest.png";
import StudentMnagmentIcon from "../public/HomeIcon/StudentMangment.png";
import ReportAnalticsIcon from "../public/HomeIcon/ReportAndAnalytics.png";

const FEATURES = [
  {
    title: "Student Management",
    desc: "Complete student profiles, batch allocation & progress tracking.",
    icon: StudentMnagmentIcon,
  },
  {
    title: "Fee & Payments",
    desc: "Online/offline fee tracking with automated reminders.",
    icon: FeeMangmentIcon,
  },
  {
    title: "Attendance System",
    desc: "Daily attendance with reports and export options.",
    icon: AttendanceIcon,
  },
  {
    title: "Online Tests",
    desc: "Create tests, auto-evaluation & performance analytics.",
    icon: OnlineTestIcon,
  },
  {
    title: "Admin Dashboard",
    desc: "Role-based access for admin, teachers & staff.",
    icon: AdminDsboardIcon,
  },
  {
    title: "Reports & Analytics",
    desc: "Visual reports for performance & revenue growth.",
    icon: ReportAnalticsIcon,
  },
];

export default function Home() {
  return (
    <div className="bg-zinc-50 text-zinc-900 dark:bg-black dark:text-white md:-mt-50 lg:-mt-20">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              All-in-One Coaching <br />
              <span className="text-[rgb(var(--color-primary))]">
                Management Software
              </span>
            </h1>

            <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-7xl">
              Manage students, fees, attendance, online tests and reports —
              all from one secure, scalable dashboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-4 py-3.5 bg-[rgb(var(--color-primary))] text-white rounded-xl font-semibold hover:opacity-90 transition">
                Get Started Free
              </button>

              <button className="px-4 py-3.5 border border-zinc-300 dark:border-zinc-700 rounded-xl font-semibold">
                Book Demo
              </button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="h-[420px] rounded-3xl bg-gradient-to-br from-[rgb(var(--color-primary)/0.15)] to-[rgb(var(--color-primary)/0.35)]" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-6 w-[85%]">
                <p className="font-semibold mb-3">📊 Live Dashboard Preview</p>
                <div className="h-48 rounded-xl bg-zinc-100 dark:bg-zinc-800" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="py-16 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-wide text-zinc-500">
            Trusted by growing coaching institutes
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {["500+ Students", "50+ Institutes", "99.9% Uptime", "24/7 Support"].map(
              (item, i) => (
                <div
                  key={i}
                  className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm font-semibold"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center">
            Powerful Features Built for Growth
          </h2>

          <p className="mt-4 text-center text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Everything your institute needs to operate efficiently, scale faster
            and deliver better outcomes.
          </p>

          <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="group p-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-[rgb(var(--color-primary)/0.12)] flex items-center justify-center group-hover:scale-110 transition">
                  <Image
                    src={f.icon}
                    alt={f.title}
                    width={120}
                    height={120}
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {f.title}
                </h3>

                <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-24 bg-zinc-100 dark:bg-zinc-950 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-xl md:text-4xl font-bold">
              Why Institutes Choose Us
            </h2>

            <ul className="mt-8 space-y-4 text-lg text-zinc-700 dark:text-zinc-300">
              <li>✔ Easy onboarding & training</li>
              <li>✔ Bank-grade data security</li>
              <li>✔ Works perfectly on mobile & desktop</li>
              <li>✔ Pricing designed for Indian institutes</li>
            </ul>
          </div>

          <div className="h-96 rounded-3xl bg-gradient-to-br from-[rgb(var(--color-primary)/0.25)] to-[rgb(var(--color-primary)/0.55)]" />
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Simple & Transparent Pricing
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {[
              { plan: "Starter", price: "₹999 / month" },
              { plan: "Professional", price: "₹2499 / month" },
              { plan: "Enterprise", price: "Custom Pricing" },
            ].map((p, i) => (
              <div
                key={i}
                className="p-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold">{p.plan}</h3>
                <p className="mt-4 text-3xl font-bold">{p.price}</p>

                <button className="mt-8 w-full py-3 bg-[rgb(var(--color-primary))] text-white rounded-xl font-semibold">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-[rgb(var(--color-primary))] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Digitize Your Coaching Institute?
        </h2>

        <p className="mt-4 text-lg opacity-90">
          Start your free trial today — no credit card required.
        </p>

        <button className="mt-10 px-10 py-4 bg-white text-[rgb(var(--color-primary))] rounded-xl font-bold">
          Start Free Trial
        </button>
      </section>
    </div>
  );
}

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
    desc: "Complete profiles, batch allocation & progress tracking.",
    icon: StudentMnagmentIcon,
  },
  {
    title: "Fee & Payments",
    desc: "Online/offline tracking with auto reminders.",
    icon: FeeMangmentIcon,
  },
  {
    title: "Attendance",
    desc: "Daily tracking with reports & export options.",
    icon: AttendanceIcon,
  },
  {
    title: "Online Tests",
    desc: "Create tests, auto-evaluation & analytics.",
    icon: OnlineTestIcon,
  },
  {
    title: "Admin Dashboard",
    desc: "Role-based access for admin, teachers & staff.",
    icon: AdminDsboardIcon,
  },
  {
    title: "Reports & Analytics",
    desc: "Visual insights on performance & revenue.",
    icon: ReportAnalticsIcon,
  },
];

export default function Home() {
  return (
    <div className="bg-zinc-50 text-zinc-900 dark:bg-black dark:text-white">

      {/* ================= HERO ================= */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              All-in-One Coaching
              <br className="hidden sm:block" />
              <span className="text-[rgb(var(--color-primary))]">
                Management Software
              </span>
            </h1>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl">
              Manage students, fees, attendance, tests & reports — all in one secure dashboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-[rgb(var(--color-primary))] text-white rounded-xl font-semibold text-sm sm:text-base hover:opacity-90 transition">
                Get Started Free
              </button>

              <button className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-xl font-semibold text-sm sm:text-base">
                Book Demo
              </button>
            </div>
          </div>

          {/* Hero Visual - simplified for mobile */}
          <div className="relative mt-10 lg:mt-0">
            <div className="aspect-[4/3] sm:aspect-[5/4] rounded-3xl bg-gradient-to-br from-[rgb(var(--color-primary)/0.15)] to-[rgb(var(--color-primary)/0.35)]" />

            <div className="absolute inset-4 sm:inset-6 flex items-center justify-center">
              <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-4 sm:p-6 w-full max-w-[90%]">
                <p className="text-xs sm:text-sm font-semibold mb-3">📊 Live Dashboard Preview</p>
                <div className="h-40 sm:h-56 rounded-xl bg-zinc-100 dark:bg-zinc-800" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="py-12 sm:py-16 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-wide text-zinc-500">
            Trusted by growing coaching institutes
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {["500+ Students", "50+ Institutes", "99.9% Uptime", "24/7 Support"].map(
              (item, i) => (
                <div
                  key={i}
                  className="p-4 sm:p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm text-sm sm:text-base font-semibold"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            Powerful Features for Growth
          </h2>

          <p className="mt-4 text-sm sm:text-base text-center text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Everything your institute needs to run smoothly and scale faster.
          </p>

          <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="group p-6 sm:p-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[rgb(var(--color-primary)/0.12)] flex items-center justify-center group-hover:scale-110 transition">
                  <Image
                    src={f.icon}
                    alt={f.title}
                    width={64}
                    height={64}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                </div>

                <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl font-semibold">
                  {f.title}
                </h3>

                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-16 sm:py-24 bg-zinc-100 dark:bg-zinc-950 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Why Institutes Choose Us
            </h2>

            <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-sm sm:text-lg text-zinc-700 dark:text-zinc-300">
              <li>✓ Easy & fast onboarding</li>
              <li>✓ Bank-grade data security</li>
              <li>✓ Perfect on mobile & desktop</li>
              <li>✓ Affordable for Indian institutes</li>
            </ul>
          </div>

          <div className="h-64 sm:h-96 rounded-3xl bg-gradient-to-br from-[rgb(var(--color-primary)/0.25)] to-[rgb(var(--color-primary)/0.55)] mt-8 lg:mt-0" />
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Simple & Transparent Pricing
          </h2>

          <div className="mt-12 sm:mt-16 grid md:grid-cols-3 gap-6 sm:gap-10">
            {[
              { plan: "Starter", price: "₹999 / mo" },
              { plan: "Professional", price: "₹2,499 / mo" },
              { plan: "Enterprise", price: "Custom" },
            ].map((p, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg sm:text-xl font-semibold">{p.plan}</h3>
                <p className="mt-4 text-2xl sm:text-3xl font-bold">{p.price}</p>

                <button className="mt-6 sm:mt-8 w-full py-2.5 sm:py-3 bg-[rgb(var(--color-primary))] text-white rounded-xl font-semibold text-sm sm:text-base">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 sm:py-24 bg-[rgb(var(--color-primary))] text-white text-center px-5 sm:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Ready to Digitize Your Institute?
        </h2>

        <p className="mt-4 text-base sm:text-lg opacity-90">
          Start your free trial today — no credit card needed.
        </p>

        <button className="mt-8 px-8 sm:px-10 py-3 sm:py-4 bg-white text-[rgb(var(--color-primary))] rounded-xl font-bold text-sm sm:text-base">
          Start Free Trial
        </button>
      </section>
    </div>
  );
}
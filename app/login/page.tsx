"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, BarChart3 } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="grid lg:grid-cols-2 min-h-screen">

        {/* ================= LEFT IMAGE SECTION (Desktop only) ================= */}
        <div className="relative hidden lg:flex items-center justify-center overflow-hidden">
          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-primary)/0.2)] to-[rgb(var(--color-primary)/0.45)]" />

          {/* Image */}
          <Image
            src="/loginIcon.png"
            alt="Login Visual"
            width={620}
            height={480}
            priority
            className="relative z-10 rounded-3xl shadow-2xl w-[85%] max-w-[620px]"
          />

          {/* Floating cards - desktop only */}
          <div className="absolute top-8 left-8 flex items-center gap-3 bg-white dark:bg-zinc-900 px-4 py-3 rounded-xl shadow-lg z-20">
            <ShieldCheck size={18} className="text-[rgb(var(--color-primary))]" />
            <span className="text-sm font-semibold">Secure Login</span>
          </div>

          <div className="absolute bottom-8 right-8 flex items-center gap-3 bg-white dark:bg-zinc-900 px-4 py-3 rounded-xl shadow-lg z-20">
            <BarChart3 size={18} className="text-[rgb(var(--color-primary))]" />
            <span className="text-sm font-semibold">Manage Everything</span>
          </div>
        </div>

        {/* Mobile image banner */}
        <div className="lg:hidden relative h-[260px] sm:h-[300px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-primary)/0.25)] to-[rgb(var(--color-primary)/0.5)]" />
          <Image
            src="/loginIcon.png"
            alt="Login Visual"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* ================= RIGHT FORM SECTION ================= */}
        <div className="flex items-center justify-center px-5 py-10 sm:px-8 sm:py-12 lg:p-12">
          <div className="w-full max-w-md dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 lg:p-10">

            {/* Brand */}
            <div className="text-center mb-7 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                <span className="text-[rgb(var(--color-primary))]">Ed</span>iyo
              </h1>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1.5">
                Sign in to your account
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5 sm:space-y-6">

              {/* Email */}
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base
                             rounded-xl border border-zinc-300 dark:border-zinc-700
                             bg-transparent outline-none
                             focus:ring-2 focus:ring-[rgb(var(--color-primary))]
                             focus:border-transparent"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base
                               rounded-xl border border-zinc-300 dark:border-zinc-700
                               bg-transparent outline-none
                               focus:ring-2 focus:ring-[rgb(var(--color-primary))]
                               focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 sm:right-4 top-2 sm:top-3 text-xs sm:text-sm
                               text-zinc-500 hover:text-[rgb(var(--color-primary))]"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 text-xs sm:text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-[rgb(var(--color-primary))] mt-0.5"
                  />
                  Remember me
                </label>

                <Link
                  href="/forgot-password"
                  className="text-[rgb(var(--color-primary))] font-medium hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white
                           bg-[rgb(var(--color-primary))] rounded-xl
                           hover:opacity-90 transition"
              >
                Sign In
              </button>
            </form>

            {/* Signup link */}
            <p className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              Don’t have an account?{" "}
              <Link
                href="/signup"
                className="text-[rgb(var(--color-primary))] font-semibold hover:underline"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
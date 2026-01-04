"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, BarChart3 } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      
      {/* ===== GRID LAYOUT ===== */}
      <div className="grid lg:grid-cols-2 min-h-screen">

        {/* ================= LEFT IMAGE SECTION ================= */}
        <div className="relative flex items-center justify-center overflow-hidden
                        h-[300px] lg:h-auto">

          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br
                          from-[rgb(var(--color-primary)/0.2)]
                          to-[rgb(var(--color-primary)/0.45)]" />

          {/* Image */}
          <Image
            src="/loginIcon.png"
            alt="Login Visual"
            width={620}
            height={480}
            priority
            className="relative z-10 rounded-3xl shadow-2xl
                       w-[85%] max-w-[420px]
                       lg:max-w-[620px]"
          />

          {/* ===== Floating ICON cards (MOBILE + DESKTOP) ===== */}

          {/* Secure Login */}
          <div className="absolute top-4 left-4 sm:top-8 sm:left-8
                          flex items-center gap-2 sm:gap-3
                          bg-white dark:bg-zinc-900
                          px-3 py-2 sm:px-4 sm:py-3
                          rounded-xl shadow-lg z-20">
            <ShieldCheck
              size={18}
              className="text-[rgb(var(--color-primary))]"
            />
            <span className="text-xs sm:text-sm font-semibold">
              Secure Login
            </span>
          </div>

          {/* Manage Everything */}
          <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8
                          flex items-center gap-2 sm:gap-3
                          bg-white dark:bg-zinc-900
                          px-3 py-2 sm:px-4 sm:py-3
                          rounded-xl shadow-lg z-20">
            <BarChart3
              size={18}
              className="text-[rgb(var(--color-primary))]"
            />
            <span className="text-xs sm:text-sm font-semibold">
              Manage Everything
            </span>
          </div>
        </div>

        {/* ================= RIGHT FORM SECTION ================= */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md dark:bg-zinc-900 rounded-3xl p-8 md:p-10">

            {/* Brand */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-extrabold tracking-tight">
                <span className="text-[rgb(var(--color-primary))]">Ed</span>iyo
              </h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                Sign in to your account
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6">

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border
                             border-zinc-300 dark:border-zinc-700
                             bg-transparent outline-none
                             focus:ring-2 focus:ring-[rgb(var(--color-primary))]
                             focus:border-transparent"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl border
                               border-zinc-300 dark:border-zinc-700
                               bg-transparent outline-none
                               focus:ring-2 focus:ring-[rgb(var(--color-primary))]
                               focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-3 text-sm
                               text-zinc-500 hover:text-[rgb(var(--color-primary))]"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-[rgb(var(--color-primary))]"
                  />
                  Remember me
                </label>

                <Link
                  href="/forgot-password"
                  className="text-[rgb(var(--color-primary))]
                             font-medium hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-white
                           bg-[rgb(var(--color-primary))]
                           hover:opacity-90 transition"
              >
                Sign In
              </button>
            </form>

            {/* Signup */}
            <p className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
              Don’t have an account?{" "}
              <Link
                href="/signup"
                className="text-[rgb(var(--color-primary))]
                           font-semibold hover:underline"
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

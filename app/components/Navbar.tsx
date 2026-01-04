"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-200 dark:bg-black/80 dark:border-zinc-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <span className="text-[rgb(var(--color-primary))]">Ed</span>iyo
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="features"
            className="hover:text-[rgb(var(--color-primary))] transition"
          >
            Features
          </Link>
          <Link
            href="modules"
            className="hover:text-[rgb(var(--color-primary))] transition"
          >
            Modules
          </Link>
          <Link
            href="pricing"
            className="hover:text-[rgb(var(--color-primary))] transition"
          >
            Pricing
          </Link>
          <Link
            href="contact"
            className="hover:text-[rgb(var(--color-primary))] transition"
          >
            Contact
          </Link>
        </div>

        {/* ACTION BUTTONS */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="px-5 py-2 text-sm font-medium bg-[rgb(var(--color-primary))] text-white rounded-lg hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800 px-6 py-6 space-y-4">
          <Link
            href="#features"
            onClick={() => setOpen(false)}
            className="block hover:text-[rgb(var(--color-primary))]"
          >
            Features
          </Link>

          <Link
            href="#modules"
            onClick={() => setOpen(false)}
            className="block hover:text-[rgb(var(--color-primary))]"
          >
            Modules
          </Link>

          <Link
            href="#pricing"
            onClick={() => setOpen(false)}
            className="block hover:text-[rgb(var(--color-primary))]"
          >
            Pricing
          </Link>

          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="block hover:text-[rgb(var(--color-primary))]"
          >
            Contact
          </Link>

          <div className="pt-4 flex flex-col gap-3">
            <Link
              href="/login"
              className="text-center px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="text-center px-4 py-2 rounded-lg bg-[rgb(var(--color-primary))] text-white hover:opacity-90 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

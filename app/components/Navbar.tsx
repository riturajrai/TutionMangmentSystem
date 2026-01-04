"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200 dark:bg-black/80 dark:border-zinc-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight"
        >
          <span className="text-[rgb(var(--color-primary))]">Ed</span>iyo
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {[
            { name: "Home", href: "/" },
            { name: "Features", href: "/features" },
            { name: "Modules", href: "/modules" },
            { name: "Pricing", href: "/pricing" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative hover:text-[rgb(var(--color-primary))] transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="px-5 py-2 text-sm font-semibold bg-[rgb(var(--color-primary))] text-white rounded-lg hover:opacity-90 transition shadow"
          >
            Get Started
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-zinc-300 dark:border-zinc-700"
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800 px-6 py-6 space-y-4">

          {[
            { name: "Home", href: "/" },
            { name: "Features", href: "/features" },
            { name: "Modules", href: "/modules" },
            { name: "Pricing", href: "/pricing" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-[rgb(var(--color-primary))] transition"
            >
              {item.name}
            </Link>
          ))}

          <div className="pt-4 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="text-center px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-sm font-medium"
            >
              Login
            </Link>

            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className="text-center px-4 py-2 rounded-lg bg-[rgb(var(--color-primary))] text-white font-semibold hover:opacity-90 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

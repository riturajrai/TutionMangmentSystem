import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold">
            <span className="text-[rgb(var(--color-primary))]">Ed</span>iyo
          </h2>

          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            All-in-one coaching institute management software to manage
            students, fees, attendance, tests, and growth — smarter & faster.
          </p>
        </div>

        {/* PRODUCT */}
        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
            <li>
              <Link href="#features" className="hover:text-[rgb(var(--color-primary))] transition">
                Features
              </Link>
            </li>
            <li>
              <Link href="#modules" className="hover:text-[rgb(var(--color-primary))] transition">
                Modules
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="hover:text-[rgb(var(--color-primary))] transition">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/demo" className="hover:text-[rgb(var(--color-primary))] transition">
                Request Demo
              </Link>
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
            <li>
              <Link href="/about" className="hover:text-[rgb(var(--color-primary))] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-[rgb(var(--color-primary))] transition">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-[rgb(var(--color-primary))] transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[rgb(var(--color-primary))] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT / CTA */}
        <div>
          <h3 className="font-semibold mb-4">Get in Touch</h3>

          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            support@ediyo.com
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            +91 9XXXXXXXXX
          </p>

          <Link
            href="/signup"
            className="inline-block mt-6 px-6 py-3 bg-[rgb(var(--color-primary))] text-white rounded-xl text-sm font-medium hover:opacity-90 transition"
          >
            Start Free Trial
          </Link>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-zinc-200 dark:border-zinc-800 py-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} Ediyo. All rights reserved.
      </div>
    </footer>
  );
}

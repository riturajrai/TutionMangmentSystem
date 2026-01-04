"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion"; // ← Make sure framer-motion is installed

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    // Replace with real form submission logic later
    setTimeout(() => {
      if (Math.random() > 0.15) {
        setFormStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setFormStatus("error");
      }
    }, 1800);
  };

  const ANIMATED_TEXTS = [
    "Most replies within 4-6 hours during business days",
    "Free personalized demo available on request",
    "Dedicated support for institutes of all sizes",
    "Get answers to pricing, features & integrations",
    "Call us directly for urgent help",
    "We're excited to help your institute grow!",
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* Hero */}
      <section className="pt-16 pb-20 px-5 sm:px-8 md:px-12 text-center bg-gradient-to-br from-[rgb(var(--color-primary)/0.08)] via-transparent to-transparent">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Let's Connect with
            <span className="block mt-2 text-[rgb(var(--color-primary))]">
              Ediyo Team
            </span>
          </h1>

          {/* Infinite animated scrolling text */}
          <div className="mt-6 overflow-hidden">
            <div className="relative h-10 sm:h-12">
              <motion.div
                className="absolute whitespace-nowrap flex items-center gap-8 text-base sm:text-lg md:text-xl font-medium text-[rgb(var(--color-primary))]"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }}
              >
                {/* Duplicate for seamless loop */}
                {[...ANIMATED_TEXTS, ...ANIMATED_TEXTS].map((text, i) => (
                  <span key={i} className="flex items-center gap-3">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-[rgb(var(--color-primary))] animate-pulse" />
                    {text}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          <p className="mt-8 text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Have questions about our software? Need a personalized demo?  
            We're here to help — fast & friendly support!
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT - Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Get in Touch</h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+91 98765 43210",
                    sub: "Mon-Sat, 10 AM - 7 PM IST",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "support@ediyo.in",
                    sub: "sales@ediyo.in (for business & demo)",
                  },
                  {
                    icon: Building2,
                    title: "Office",
                    content: "Ediyo Technologies Pvt Ltd",
                    sub: "304, Tech Hub Building, Sector 62, Noida, Uttar Pradesh 201309",
                  },
                  {
                    icon: Clock,
                    title: "Working Hours",
                    content: "Monday - Saturday",
                    sub: "10:00 AM - 7:00 PM IST (Sunday Closed)",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[rgb(var(--color-primary)/0.1)] flex items-center justify-center flex-shrink-0">
                      <item.icon size={24} className="text-[rgb(var(--color-primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg md:text-xl">{item.title}</h3>
                      <p className="text-zinc-600 dark:text-zinc-400 mt-1">{item.content}</p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Box */}
            <div className="bg-white dark:bg-zinc-900/60 p-6 md:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 size={24} className="text-emerald-500" />
                <h3 className="text-xl font-semibold">Fast Response Guarantee</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We usually respond to all messages within <strong>4-6 hours</strong> during business hours.  
                For urgent issues, please call us directly.
              </p>
            </div>
          </div>

          {/* RIGHT - Form */}
          <div className="bg-white dark:bg-zinc-900/70 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Send Message</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">
              Fill the form below and we'll get back to you quickly
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-[rgb(var(--color-primary))/0.5] focus:border-transparent outline-none transition"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-[rgb(var(--color-primary))/0.5] focus:border-transparent outline-none transition"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-[rgb(var(--color-primary))/0.5] focus:border-transparent outline-none transition"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-[rgb(var(--color-primary))/0.5] focus:border-transparent outline-none transition"
                  placeholder="Demo Request / Support / Partnership / Other"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Your Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-[rgb(var(--color-primary))/0.5] focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === "loading"}
                className={`w-full py-4 rounded-xl font-semibold text-base md:text-lg transition-all flex items-center justify-center gap-2 shadow-md ${
                  formStatus === "loading"
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-[rgb(var(--color-primary))] hover:bg-[rgb(var(--color-primary)/0.9)]"
                } text-white`}
              >
                {formStatus === "loading" ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>

              {formStatus === "success" && (
                <div className="mt-4 p-5 bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 rounded-xl text-center font-medium">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {formStatus === "error" && (
                <div className="mt-4 p-5 bg-red-100/80 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-xl text-center font-medium">
                  Oops! Something went wrong. Please try again or call us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-16 md:py-24 px-5 sm:px-8 md:px-12 bg-zinc-100 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit Our Office</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
            We're located in the heart of Noida's IT corridor — come say hello!
          </p>

          <div className="aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1234567890123!2d77.378!3d28.623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff!5e0!3m2!1sen!2sin!4v1698765432100"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ediyo Office Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
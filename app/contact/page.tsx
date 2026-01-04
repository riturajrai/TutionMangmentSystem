"use client";

import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2,
  Loader2
} from "lucide-react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    // Simulate API call (replace with your actual form submission logic)
    setTimeout(() => {
      // For demo - randomly success/error (replace with real backend)
      if (Math.random() > 0.2) {
        setFormStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setFormStatus("error");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white">

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 px-5 sm:px-8 bg-gradient-to-br from-[rgb(var(--color-primary)/0.08)] via-transparent to-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Get in Touch with Ediyo Team
          </h1>
          
          <p className="mt-5 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Have questions? Want a demo? Need help choosing the right plan?  
            We're here to help — usually reply within 24 hours!
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left - Contact Information */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[rgb(var(--color-primary)/0.1)] flex items-center justify-center flex-shrink-0">
                    <Phone size={22} className="text-[rgb(var(--color-primary))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">+91 98765 43210</p>
                    <p className="text-sm text-zinc-500">(Mon-Sat, 10 AM - 7 PM)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[rgb(var(--color-primary)/0.1)] flex items-center justify-center flex-shrink-0">
                    <Mail size={22} className="text-[rgb(var(--color-primary))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">support@ediyo.in</p>
                    <p className="text-zinc-600 dark:text-zinc-400">sales@ediyo.in (for business inquiries)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[rgb(var(--color-primary)/0.1)] flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} className="text-[rgb(var(--color-primary))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Office Address</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      Ediyo Technologies Pvt Ltd<br />
                      304, Tech Hub Building,<br />
                      Sector 62, Noida, Uttar Pradesh 201309
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[rgb(var(--color-primary)/0.1)] flex items-center justify-center flex-shrink-0">
                    <Clock size={22} className="text-[rgb(var(--color-primary))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Working Hours</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      Monday - Saturday: 10:00 AM - 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-white dark:bg-zinc-900/70 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 size={24} className="text-green-500" />
                <h3 className="text-xl font-semibold">Quick Response Promise</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">
                We aim to reply to all inquiries within <strong>4-6 hours</strong> during business hours.
                For urgent matters, please call us directly.
              </p>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white dark:bg-zinc-900/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Send us a Message</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">
              Fill the form below and we'll get back to you as soon as possible
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent outline-none transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent outline-none transition"
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
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent outline-none transition"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent outline-none transition"
                  placeholder="Demo request / Support / Other"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent outline-none transition resize-none"
                  placeholder="How can we help you today?"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === "loading"}
                className={`w-full py-3.5 rounded-xl font-semibold text-white transition flex items-center justify-center gap-2 ${
                  formStatus === "loading" 
                    ? "bg-gray-500 cursor-not-allowed" 
                    : "bg-[rgb(var(--color-primary))] hover:opacity-90"
                }`}
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
                <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-xl text-center">
                  Thank you! We've received your message and will get back to you soon.
                </div>
              )}

              {formStatus === "error" && (
                <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-xl text-center">
                  Something went wrong. Please try again or call us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Map / Location Section (optional) */}
      <section className="py-12 sm:py-20 px-5 sm:px-8 bg-zinc-100 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Visit Our Office
          </h2>
          
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            Come meet us! We're located in the heart of Noida's IT hub.
          </p>

          {/* You can embed Google Maps iframe here */}
          <div className="bg-zinc-200 dark:bg-zinc-800 h-64 sm:h-96 rounded-2xl flex items-center justify-center">
            <p className="text-zinc-500">Google Maps Embed (Add your iframe here)</p>
          </div>
        </div>
      </section>
    </div>
  );
}
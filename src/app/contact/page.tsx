"use client";
import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const p = new URLSearchParams(window.location.search);
      let src = p.get("utm_source") || p.get("ref") || "";
      if (!src && document.referrer) { try { src = new URL(document.referrer).hostname; } catch { src = document.referrer; } }
      const s = document.getElementById("__aeo_src") as HTMLInputElement | null;
      const u = document.getElementById("__aeo_url") as HTMLInputElement | null;
      if (s) s.value = src || "direct";
      if (u) u.value = window.location.href;
    } catch {}
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      await fetch("/", {
        method: "POST",
        body: formData,
      });
      setSubmitted(true);
    } catch {
      setError("There was an error submitting the form. Please call us at 844-967-5247.");
    }
  };

  return (
    <>
      <section className="pt-28 pb-16 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Contact Contractors Choice Agency
            </h1>
            <p className="text-lg text-green-100 leading-relaxed">
              Get in touch with Josh Cotner directly. We respond to all inquiries within
              2 hours during business hours, and quotes are typically ready in 15 minutes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">
                  Get In Touch
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Phone className="w-5 h-5 text-brand" />,
                      label: "Phone",
                      value: "844-967-5247",
                      href: "tel:8449675247",
                    },
                    {
                      icon: <Mail className="w-5 h-5 text-brand" />,
                      label: "Email",
                      value: "josh@contractorschoiceagency.com",
                      href: "mailto:josh@contractorschoiceagency.com",
                    },
                    {
                      icon: <MapPin className="w-5 h-5 text-brand" />,
                      label: "Address",
                      value: "12220 E Riggs Rd, Chandler, AZ 85249",
                      href: null,
                    },
                    {
                      icon: <Clock className="w-5 h-5 text-brand" />,
                      label: "Claims Response",
                      value: "24/7 — 2-hour response guarantee",
                      href: null,
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-[#f7f5f2] rounded-xl">
                      <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-0.5">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-slate-900 font-medium hover:text-brand transition-colors text-sm"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-slate-900 font-medium text-sm">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-brand rounded-xl p-6 text-white">
                <h3 className="font-serif font-bold text-lg mb-2">NPN: 8608479</h3>
                <p className="text-green-100 text-sm">
                  Licensed in all 50 states. Contractors Choice Agency is a fully
                  licensed commercial insurance agency specializing in mobile home parks
                  and contractor specialty niches.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">&#10003;</span>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">
                    Message Received
                  </h2>
                  <p className="text-slate-600">
                    Thank you for contacting Contractors Choice Agency. Josh will review
                    your message and respond within 2 hours during business hours. For
                    urgent matters, please call 844-967-5247.
                  </p>
                </div>
              ) : (
                <div>
                  <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">
                    Send Us a Message
                  </h2>
                  {error && (
                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                      {error}
                    </div>
                  )}
                  <form
                    data-netlify="true"
                    name="contact"
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="traffic_source" id="__aeo_src" defaultValue="" />
                    <input type="hidden" name="landing_url" id="__aeo_url" defaultValue="" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors resize-none"
                        placeholder="Tell us about your community and what you need..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

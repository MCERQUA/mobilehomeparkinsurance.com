"use client";
import { useState, useEffect } from "react";
import { Clock, Shield, Phone } from "lucide-react";

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming"
];

export default function QuotePage() {
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
      setError("There was an error submitting your request. Please call us at 844-967-5247.");
    }
  };

  return (
    <>
      <section className="pt-28 pb-16 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
                Get Your Free Mobile Home Park Insurance Quote
              </h1>
              <p className="text-lg text-green-100 leading-relaxed">
                Complete the form and Josh Cotner will personally review your community&apos;s
                coverage needs and provide a competitive quote — typically within 15 minutes
                during business hours.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { icon: <Clock className="w-5 h-5" />, text: "Quotes typically ready in 15 minutes" },
                { icon: <Shield className="w-5 h-5" />, text: "No obligation, no pressure" },
                { icon: <Phone className="w-5 h-5" />, text: "Licensed agent reviews every quote personally" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-green-100">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
              <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">&#10003;</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">
                Quote Request Received
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Thank you for reaching out to Contractors Choice Agency. Josh Cotner will
                personally review your community information and follow up with a competitive
                quote — typically within 15 minutes during business hours.
              </p>
              <p className="text-slate-500 text-sm">
                Need to reach us immediately?{" "}
                <a href="tel:8449675247" className="text-brand font-semibold hover:underline">
                  Call 844-967-5247
                </a>
              </p>
            </div>
          ) : (
            <div>
              <div className="text-center mb-10">
                <h2 className="font-serif text-3xl font-bold text-slate-900 mb-3">
                  Tell Us About Your Community
                </h2>
                <p className="text-slate-600">
                  All fields marked with * are required. The more detail you provide,
                  the more accurate your quote will be.
                </p>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {error}
                </div>
              )}

              <form
                data-netlify="true"
                name="quote"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="quote" />
                <input type="hidden" name="traffic_source" id="__aeo_src" defaultValue="" />
                <input type="hidden" name="landing_url" id="__aeo_url" defaultValue="" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Business / Community Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                      placeholder="Park or community name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    State *
                  </label>
                  <select
                    name="state"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors bg-white"
                  >
                    <option value="">Select state...</option>
                    {US_STATES.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Community Type *
                    </label>
                    <select
                      name="parkType"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors bg-white"
                    >
                      <option value="">Select type...</option>
                      <option value="Mobile Home Park/MHC">Mobile Home Park / MHC</option>
                      <option value="RV Park/Resort">RV Park / Resort</option>
                      <option value="Mixed-Use">Mixed-Use (MH + RV)</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Number of Lots *
                    </label>
                    <select
                      name="lots"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors bg-white"
                    >
                      <option value="">Select range...</option>
                      <option value="Under 50">Under 50 lots</option>
                      <option value="50-100">50 to 100 lots</option>
                      <option value="100-200">100 to 200 lots</option>
                      <option value="200+">200+ lots</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Years You Have Owned This Community
                  </label>
                  <input
                    type="number"
                    name="yearsOwned"
                    min="0"
                    max="100"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                    placeholder="e.g. 5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors resize-none"
                    placeholder="Tell us about your amenities (pool, playground, laundry), current insurance situation, or any specific coverage questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  Submit Quote Request
                </button>

                <p className="text-center text-slate-500 text-xs">
                  By submitting this form you agree to be contacted by a licensed insurance agent.
                  NPN: 8608479. Licensed in all 50 states.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

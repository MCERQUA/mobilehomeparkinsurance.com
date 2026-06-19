import Link from "next/link";
import {
  Building2,
  Shield,
  DollarSign,
  Droplets,
  Umbrella,
  HardHat,
  CheckCircle,
  Star,
  Home,
  Truck,
  Users,
  TreePine,
  MapPin,
  Phone,
  Award,
  Clock,
  FileText,
} from "lucide-react";
import { coverages } from "@/lib/coverages";

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
  DollarSign: <DollarSign className="w-8 h-8" />,
  Droplets: <Droplets className="w-8 h-8" />,
  Umbrella: <Umbrella className="w-8 h-8" />,
  HardHat: <HardHat className="w-8 h-8" />,
};

const communityTypes = [
  {
    icon: <Home className="w-7 h-7 text-brand" />,
    title: "Mobile Home Parks",
    desc: "Traditional MHP communities with tenant-owned homes on leased lots. Full property, liability, and infrastructure coverage.",
  },
  {
    icon: <Building2 className="w-7 h-7 text-brand" />,
    title: "Manufactured Home Communities",
    desc: "Modern MHCs with site-built-quality homes. Comprehensive programs for professional operators.",
  },
  {
    icon: <Truck className="w-7 h-7 text-brand" />,
    title: "RV Parks & Resorts",
    desc: "Transient and seasonal RV communities. Specialized GL, hookup liability, and guest coverage.",
  },
  {
    icon: <TreePine className="w-7 h-7 text-brand" />,
    title: "Mixed-Use Communities",
    desc: "Parks with both manufactured homes and RV sites. Blended coverage solutions for complex operations.",
  },
  {
    icon: <Users className="w-7 h-7 text-brand" />,
    title: "Senior Living MHCs",
    desc: "Age-restricted 55+ manufactured housing communities with ADA and accessibility compliance.",
  },
  {
    icon: <MapPin className="w-7 h-7 text-brand" />,
    title: "Retirement RV Resorts",
    desc: "Destination and long-term RV retirement communities requiring full-season liability and property programs.",
  },
];

const faqs = [
  {
    q: "What does mobile home park insurance cover?",
    a: "A comprehensive mobile home park insurance program covers commercial property (common area buildings, utility infrastructure, park-owned homes), general liability (bodily injury and property damage claims from tenants and guests), loss of rents (lot rent income during covered losses), and optional coverages like flood, umbrella liability, and workers compensation.",
  },
  {
    q: "Do I need insurance for the homes in my park?",
    a: "In most cases, tenant-owned homes are the tenants' responsibility to insure through their own manufactured home insurance policies. However, any park-owned homes (rental units or inventory) must be covered under your commercial property policy. Your insurance program should also cover all shared infrastructure and common area buildings regardless of home ownership.",
  },
  {
    q: "How much does mobile home park insurance cost?",
    a: "Premiums vary based on the total insurable value of your property, number of lots, amenities (particularly swimming pools), location, flood zone, and loss history. Small parks may pay $5,000-$15,000 per year; larger communities with pools and amenities may pay $30,000 or more. The best way to know your cost is to request a quote — we can typically provide one within 15 minutes.",
  },
  {
    q: "Is flood insurance included in my commercial property policy?",
    a: "No. Standard commercial property policies universally exclude flood damage. If your community is in a flood-prone area, you need separate flood insurance — either through the federal National Flood Insurance Program (NFIP) or through private flood carriers. We help you evaluate both options.",
  },
  {
    q: "What happens if a tenant is injured in a common area?",
    a: "Tenant injury claims in common areas (parking lots, walkways, pools, playgrounds, laundry rooms) are covered under your general liability policy, subject to your policy's terms, conditions, and limits. We structure your GL coverage to specifically address the common liability scenarios in mobile home park operations.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-50 text-brand border border-green-200 rounded-full px-4 py-1 text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                <span>Specialized MHP Insurance Since 2005</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
                Mobile Home Park Insurance That Protects Your Investment
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Contractors Choice Agency specializes in commercial insurance for
                mobile home parks, manufactured housing communities, and RV parks.
                20+ years of niche expertise, licensed in all 50 states, with
                15-minute quote turnaround.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
                >
                  Get Your Free Quote
                </Link>
                <a
                  href="tel:8449675247"
                  className="border-2 border-brand text-brand hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call 844-967-5247
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/hero.jpg"
                alt="Aerial view of well-maintained mobile home park community"
                className="w-full h-80 lg:h-[450px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">15-Minute Quotes</p>
                  <p className="text-slate-500 text-xs">Fast. No obligation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Trust Bar */}
      <section className="bg-brand py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <MapPin className="w-6 h-6" />, label: "Licensed in All 50 States" },
              { icon: <Award className="w-6 h-6" />, label: "20+ Years Experience" },
              { icon: <Clock className="w-6 h-6" />, label: "15-Minute Quotes" },
              { icon: <CheckCircle className="w-6 h-6" />, label: "Former Contractor Founder" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white">
                <div className="flex-shrink-0 opacity-90">{item.icon}</div>
                <span className="font-semibold text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Who We Cover */}
      <section className="py-20 bg-[#f7f5f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Who We Cover
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From small family-owned parks to large professionally managed communities,
              we have the carrier relationships and niche expertise to place your coverage correctly.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityTypes.map((type, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{type.icon}</div>
                <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">
                  {type.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Coverage Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Coverage Types We Offer
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A complete commercial insurance program for your mobile home park or
              manufactured housing community.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverages.map((coverage) => (
              <Link
                key={coverage.slug}
                href={`/coverages/${coverage.slug}`}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-brand hover:shadow-md transition-all"
              >
                <div className="text-brand mb-4 group-hover:scale-110 transition-transform inline-block">
                  {iconMap[coverage.icon]}
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">
                  {coverage.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{coverage.shortDesc}</p>
                <div className="mt-4 text-brand font-semibold text-sm flex items-center gap-1">
                  Learn more <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Why CCA */}
      <section className="py-20 bg-[#f7f5f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why Choose Contractors Choice Agency
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Most insurance agents treat mobile home parks like standard commercial
                property. We know better. Twenty years of specialization means we
                understand the specific risks, the right carriers, and the coverage
                structure that actually protects your investment.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: <Award className="w-6 h-6 text-brand" />,
                    title: "Specialty Niche Focus",
                    desc: "We focus exclusively on contractor and specialty property niches, including mobile home parks and manufactured housing communities. This is not a sideline for us.",
                  },
                  {
                    icon: <CheckCircle className="w-6 h-6 text-brand" />,
                    title: "Former Contractor Perspective",
                    desc: "Founder Josh Cotner is a former contractor who understands property operations from the inside. He knows what risks actually matter to property operators.",
                  },
                  {
                    icon: <Star className="w-6 h-6 text-brand" />,
                    title: "20+ Years of Expertise",
                    desc: "Two decades of placing specialty insurance means deep carrier relationships, favorable terms, and a track record of standing by clients at claims time.",
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-brand" />,
                    title: "15-Minute Quotes",
                    desc: "We don't waste your time. Provide basic information about your community and we can have a competitive quote in your hands within 15 minutes.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/images/insurance-review.jpg"
                alt="Insurance professional reviewing mobile home park coverage"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Getting Covered Is Simple
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Three steps to a comprehensive insurance program for your mobile home park or manufactured housing community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Tell Us About Your Community",
                desc: "Complete our short quote form or call 844-967-5247. We will ask about your community type, number of lots, amenities, and location. No long questionnaire — just the basics.",
              },
              {
                num: "02",
                title: "We Shop Your Coverage",
                desc: "We compare rates and terms across multiple carriers who specialize in mobile home parks and manufactured housing communities. You get the best combination of coverage and price.",
              },
              {
                num: "03",
                title: "Get Your Policy",
                desc: "Review your quote, ask questions, and bind coverage when you are ready. We handle the paperwork and provide ongoing service throughout the policy year.",
              },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-serif font-bold text-green-100 mb-4">
                  {step.num}
                </div>
                <h3 className="font-serif font-bold text-xl text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/quote"
              className="bg-brand hover:bg-brand-dark text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
            >
              Start Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7 — Stats */}
      <section className="bg-brand py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "20+", label: "Years Experience" },
              { value: "50", label: "States Licensed" },
              { value: "15 Min", label: "Quote Turnaround" },
              { value: "298", label: "Active Clients" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-serif text-4xl sm:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-green-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 — Testimonials */}
      <section className="py-20 bg-[#f7f5f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What Park Owners Say
            </h2>
            <p className="text-lg text-slate-600">
              Mobile home park operators from across the country trust Contractors Choice Agency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "After our water main burst and flooded three lots, I was glad we had the right coverage. The claims process was smooth and we were back to full rent roll within four months. Josh made sure our policy actually covered underground infrastructure — most agents miss that.",
                name: "Robert M.",
                business: "Pine Ridge Mobile Home Community",
                location: "Tennessee",
              },
              {
                quote:
                  "We were paying too much with our previous broker and had gaps in our coverage we didn't know about. Josh reviewed our program, restructured our GL limits, and added loss of rents coverage we were missing. We're better covered and paying less annually.",
                name: "Sandra K.",
                business: "Lakeside MHC",
                location: "Florida",
              },
              {
                quote:
                  "Running an RV park with a pool is a significant liability exposure. Josh understood that from the first conversation and recommended appropriate umbrella limits. When we had a minor pool incident last season, we were very glad we had the coverage structure he recommended.",
                name: "David T.",
                business: "Desert Sun RV Resort",
                location: "Arizona",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <blockquote className="text-slate-700 text-sm leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.business}</div>
                  <div className="text-xs text-slate-400 mt-1">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9 — FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Common questions from mobile home park and manufactured housing community owners.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <FileText className="w-5 h-5 text-brand mt-0.5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10 — Final CTA */}
      <section className="bg-brand py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
            Protect Your Mobile Home Park Community Today
          </h2>
          <p className="text-lg text-green-100 mb-10 leading-relaxed">
            Do not leave your community exposed with generic commercial property coverage.
            Get a specialist MHP insurance program built around your actual risks,
            with competitive rates and 20+ years of niche expertise behind every policy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-brand hover:bg-green-50 px-10 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Get Your Free Quote
            </Link>
            <a
              href="tel:8449675247"
              className="border-2 border-white text-white hover:bg-brand-dark px-10 py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call 844-967-5247
            </a>
          </div>
          <p className="text-green-200 text-sm mt-6">
            Licensed Agent Josh Cotner | NPN: 8608479 | All 50 States | 15-Minute Quotes
          </p>
        </div>
      </section>
    </>
  );
}

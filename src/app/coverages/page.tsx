import Link from "next/link";
import { Building2, Shield, DollarSign, Droplets, Umbrella, HardHat, ArrowRight } from "lucide-react";
import { coverages } from "@/lib/coverages";

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-10 h-10" />,
  Shield: <Shield className="w-10 h-10" />,
  DollarSign: <DollarSign className="w-10 h-10" />,
  Droplets: <Droplets className="w-10 h-10" />,
  Umbrella: <Umbrella className="w-10 h-10" />,
  HardHat: <HardHat className="w-10 h-10" />,
};

export const metadata = {
  title: "Coverage Types | Mobile Home Park Insurance",
  description:
    "Comprehensive insurance coverages for mobile home parks, manufactured housing communities, and RV parks — property, liability, flood, umbrella, and more.",
};

export default function CoveragesPage() {
  return (
    <>
      <section className="pt-28 pb-16 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Coverage Types We Offer
            </h1>
            <p className="text-lg text-green-100 leading-relaxed">
              A complete insurance program for mobile home parks, manufactured housing
              communities, and RV parks — structured around the risks that actually affect your business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coverages.map((coverage) => (
              <div
                key={coverage.slug}
                className="border border-gray-200 rounded-xl p-8 hover:border-brand hover:shadow-lg transition-all group"
              >
                <div className="text-brand mb-5 group-hover:scale-110 transition-transform inline-block">
                  {iconMap[coverage.icon]}
                </div>
                <h2 className="font-serif font-bold text-xl text-slate-900 mb-3">
                  {coverage.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {coverage.shortDesc}
                </p>
                <ul className="space-y-1 mb-6">
                  {coverage.features.slice(0, 4).map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-brand mt-0.5 flex-shrink-0">&#10003;</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/coverages/${coverage.slug}`}
                  className="inline-flex items-center gap-2 text-brand font-semibold text-sm hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f2] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Ready to Build Your Coverage Program?
          </h2>
          <p className="text-slate-600 mb-8">
            Get a competitive quote in 15 minutes. Call Josh Cotner at Contractors Choice Agency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:8449675247"
              className="border-2 border-brand text-brand hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call 844-967-5247
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

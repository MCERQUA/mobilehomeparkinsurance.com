import { notFound } from "next/navigation";
import Link from "next/link";
import { Building2, Shield, DollarSign, Droplets, Umbrella, HardHat, CheckCircle, Phone } from "lucide-react";
import { coverages } from "@/lib/coverages";

const iconComponents: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-12 h-12 text-white" />,
  Shield: <Shield className="w-12 h-12 text-white" />,
  DollarSign: <DollarSign className="w-12 h-12 text-white" />,
  Droplets: <Droplets className="w-12 h-12 text-white" />,
  Umbrella: <Umbrella className="w-12 h-12 text-white" />,
  HardHat: <HardHat className="w-12 h-12 text-white" />,
};

export async function generateStaticParams() {
  return coverages.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const coverage = coverages.find((c) => c.slug === slug);
  if (!coverage) return {};
  return {
    title: `${coverage.title} | Mobile Home Park Insurance`,
    description: coverage.shortDesc,
  };
}

export default async function CoveragePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const coverage = coverages.find((c) => c.slug === slug);
  if (!coverage) notFound();

  const descParagraphs = coverage.description.split("\n\n");

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
              {iconComponents[coverage.icon]}
            </div>
            <div>
              <div className="text-green-200 text-sm font-medium mb-2 uppercase tracking-wide">
                Mobile Home Park Insurance
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {coverage.title}
              </h1>
              <p className="text-lg text-green-100 leading-relaxed max-w-2xl">
                {coverage.shortDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">
                Coverage Overview
              </h2>
              <div className="space-y-4">
                {descParagraphs.map((para, i) => (
                  <p key={i} className="text-slate-700 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-12">
                <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">
                  What Is Covered
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {coverage.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-brand rounded-2xl p-6 text-white">
                <h3 className="font-serif font-bold text-xl mb-3">
                  Get a Quote Today
                </h3>
                <p className="text-green-100 text-sm mb-6">
                  15-minute quotes. No obligation. Licensed agent Josh Cotner will
                  personally review your coverage needs.
                </p>
                <Link
                  href="/quote"
                  className="block bg-white text-brand font-bold py-3 px-6 rounded-lg text-center hover:bg-green-50 transition-colors mb-3"
                >
                  Get Your Free Quote
                </Link>
                <a
                  href="tel:8449675247"
                  className="flex items-center justify-center gap-2 border border-white text-white py-3 px-6 rounded-lg hover:bg-brand-dark transition-colors text-sm font-medium"
                >
                  <Phone className="w-4 h-4" />
                  844-967-5247
                </a>
              </div>

              {/* Why You Need It */}
              <div className="border border-gray-200 rounded-2xl p-6">
                <h3 className="font-serif font-bold text-lg text-slate-900 mb-3">
                  Why You Need This Coverage
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {coverage.whyNeed}
                </p>
              </div>

              {/* Who Needs It */}
              <div className="border border-gray-200 rounded-2xl p-6">
                <h3 className="font-serif font-bold text-lg text-slate-900 mb-3">
                  Who Needs This Coverage
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {coverage.whoNeedsIt}
                </p>
              </div>

              {/* Other Coverages */}
              <div className="border border-gray-200 rounded-2xl p-6">
                <h3 className="font-serif font-bold text-lg text-slate-900 mb-3">
                  Other Coverages
                </h3>
                <ul className="space-y-2">
                  {coverages
                    .filter((c) => c.slug !== coverage.slug)
                    .slice(0, 4)
                    .map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/coverages/${c.slug}`}
                          className="text-brand text-sm hover:underline"
                        >
                          {c.title}
                        </Link>
                      </li>
                    ))}
                </ul>
                <Link
                  href="/coverages"
                  className="text-slate-500 text-sm hover:text-brand mt-2 inline-block"
                >
                  View all coverages &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#f7f5f2] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Ready to Get Covered?
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Contact Contractors Choice Agency for a competitive quote on{" "}
            {coverage.title.toLowerCase()} for your mobile home park or manufactured
            housing community.
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

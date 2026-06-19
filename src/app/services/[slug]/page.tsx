import { notFound } from "next/navigation";
import Link from "next/link";
import { Building2, Shield, DollarSign, Droplets, Umbrella, HardHat, CheckCircle, Phone } from "lucide-react";
import { services } from "@/lib/services";

const iconComponents: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-12 h-12 text-white" />,
  Shield: <Shield className="w-12 h-12 text-white" />,
  DollarSign: <DollarSign className="w-12 h-12 text-white" />,
  Droplets: <Droplets className="w-12 h-12 text-white" />,
  Umbrella: <Umbrella className="w-12 h-12 text-white" />,
  HardHat: <HardHat className="w-12 h-12 text-white" />,
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Mobile Home Park Insurance`,
    description: service.shortDesc,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const descParagraphs = service.description.split("\n\n");

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
              {iconComponents[service.icon]}
            </div>
            <div>
              <div className="text-green-200 text-sm font-medium mb-2 uppercase tracking-wide">
                Insurance Services
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {service.title}
              </h1>
              <p className="text-lg text-green-100 leading-relaxed max-w-2xl">
                {service.shortDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">
                Service Overview
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
                  What We Do For You
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 p-6 bg-[#f7f5f2] rounded-xl">
                <h3 className="font-serif font-bold text-lg text-slate-900 mb-3">
                  Who This Service Is For
                </h3>
                <p className="text-slate-600 leading-relaxed">{service.whoFor}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-brand rounded-2xl p-6 text-white">
                <h3 className="font-serif font-bold text-xl mb-3">
                  Get Started Today
                </h3>
                <p className="text-green-100 text-sm mb-6">
                  Ready to put this service to work for your community? Get a free consultation and quote.
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

              <div className="border border-gray-200 rounded-2xl p-6">
                <h3 className="font-serif font-bold text-lg text-slate-900 mb-3">
                  Other Services
                </h3>
                <ul className="space-y-2">
                  {services
                    .filter((s) => s.slug !== service.slug)
                    .slice(0, 4)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="text-brand text-sm hover:underline"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                </ul>
                <Link
                  href="/services"
                  className="text-slate-500 text-sm hover:text-brand mt-2 inline-block"
                >
                  View all services &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f2] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-slate-600 mb-8">
            Contact Contractors Choice Agency to put our {service.title.toLowerCase()} to work for your community.
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

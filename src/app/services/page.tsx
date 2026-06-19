import Link from "next/link";
import { Building2, Shield, DollarSign, Droplets, Umbrella, HardHat, ArrowRight } from "lucide-react";
import { services } from "@/lib/services";

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-10 h-10" />,
  Shield: <Shield className="w-10 h-10" />,
  DollarSign: <DollarSign className="w-10 h-10" />,
  Droplets: <Droplets className="w-10 h-10" />,
  Umbrella: <Umbrella className="w-10 h-10" />,
  HardHat: <HardHat className="w-10 h-10" />,
};

export const metadata = {
  title: "Insurance Services | Mobile Home Park Insurance",
  description:
    "Full-service insurance placement and risk management services for mobile home parks, manufactured housing communities, and RV parks.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-28 pb-16 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Insurance Services for MHP Operators
            </h1>
            <p className="text-lg text-green-100 leading-relaxed">
              From initial placement to annual renewal and claims advocacy, Contractors
              Choice Agency provides comprehensive insurance services built around the
              unique needs of mobile home park and manufactured housing community operators.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.slug}
                className="border border-gray-200 rounded-xl p-8 hover:border-brand hover:shadow-lg transition-all group"
              >
                <div className="text-brand mb-5 group-hover:scale-110 transition-transform inline-block">
                  {iconMap[service.icon]}
                </div>
                <h2 className="font-serif font-bold text-xl text-slate-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>
                <ul className="space-y-1 mb-6">
                  {service.features.slice(0, 4).map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-brand mt-0.5 flex-shrink-0">&#10003;</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
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
            Start With a Free Consultation
          </h2>
          <p className="text-slate-600 mb-8">
            Tell us about your community and we will identify the right coverage combination for your operation.
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

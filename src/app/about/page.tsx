import Link from "next/link";
import { Award, MapPin, Phone, Mail, Shield, CheckCircle } from "lucide-react";

export const metadata = {
  title: "About Us | Mobile Home Park Insurance",
  description:
    "Contractors Choice Agency has specialized in commercial insurance for mobile home parks and specialty contractor niches for 20+ years. Learn about Josh Cotner and our team.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-28 pb-16 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              About Contractors Choice Agency
            </h1>
            <p className="text-lg text-green-100 leading-relaxed">
              Twenty years of specialty insurance expertise. Former contractor perspective.
              Deep niche focus on mobile home parks, manufactured housing communities,
              and specialty contractor trades.
            </p>
          </div>
        </div>
      </section>

      {/* Josh Bio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
                Josh Cotner — Licensed Insurance Professional
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Josh Cotner founded Contractors Choice Agency in 2005 after spending years in
                  the contracting trades. As a former contractor himself, Josh saw firsthand the gap
                  between what generic insurance agents offered specialty property operators and what
                  those operators actually needed. He built Contractors Choice Agency to fill that gap.
                </p>
                <p>
                  Today, Contractors Choice Agency serves clients in all 50 states, with a particular
                  focus on mobile home parks, manufactured housing communities, RV parks, and
                  contractor specialty niches. The agency carries National Producer Number 8608479
                  and maintains active licenses in all U.S. states and territories.
                </p>
                <p>
                  Josh&apos;s approach to insurance is built on the belief that operators deserve
                  coverage that actually works when they need it — not policies full of exclusions
                  that eliminate coverage at the worst possible moment. Every client gets a coverage
                  review designed to identify gaps and structure a program that genuinely protects
                  their investment.
                </p>
                <p>
                  Contractors Choice Agency is headquartered in Chandler, Arizona, with additional
                  offices in downtown Phoenix and Miami. The agency is structured as a lean operation,
                  which means clients deal directly with Josh and his team — not with intermediaries
                  who don&apos;t understand their business.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Credentials Card */}
              <div className="bg-[#f7f5f2] rounded-2xl p-8">
                <h3 className="font-serif font-bold text-xl text-slate-900 mb-6">
                  Credentials & Licensing
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: <Shield className="w-5 h-5 text-brand" />, label: "National Producer Number", value: "8608479" },
                    { icon: <MapPin className="w-5 h-5 text-brand" />, label: "Licensed States", value: "All 50 U.S. States" },
                    { icon: <Award className="w-5 h-5 text-brand" />, label: "Years in Business", value: "20+ Years (Founded 2005)" },
                    { icon: <CheckCircle className="w-5 h-5 text-brand" />, label: "Specialty Niches", value: "50+ Contractor Trades" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                      <div>
                        <div className="text-sm text-slate-500">{item.label}</div>
                        <div className="font-semibold text-slate-900">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-brand rounded-2xl p-8 text-white">
                <h3 className="font-serif font-bold text-xl mb-6">Contact Josh Directly</h3>
                <div className="space-y-4">
                  <a
                    href="tel:8449675247"
                    className="flex items-center gap-3 text-green-100 hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>844-967-5247</span>
                  </a>
                  <a
                    href="mailto:josh@contractorschoiceagency.com"
                    className="flex items-center gap-3 text-green-100 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>josh@contractorschoiceagency.com</span>
                  </a>
                  <div className="flex items-start gap-3 text-green-100">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>12220 E Riggs Rd, Chandler, AZ 85249</span>
                  </div>
                </div>
                <Link
                  href="/quote"
                  className="mt-6 block bg-white text-brand font-bold py-3 px-6 rounded-lg text-center hover:bg-green-50 transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialization */}
      <section className="py-20 bg-[#f7f5f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">
              Our Specialty: Mobile Home Parks & Manufactured Housing
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We have built deep expertise in the specific coverage needs of manufactured
              housing community operators — expertise that most general agents simply do not have.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Infrastructure Coverage",
                desc: "We know that underground utilities — water mains, sewer laterals, electrical conduit — are the most valuable and most frequently uncovered asset at an MHC. We place coverage that explicitly includes this infrastructure.",
              },
              {
                title: "Carrier Relationships",
                desc: "Twenty years of specialty focus means direct relationships with the carriers who actually understand MHP operations. Better underwriting, better terms, and better claims handling than you get through a generalist broker.",
              },
              {
                title: "Claims Advocacy",
                desc: "When a loss occurs, we are in your corner. We help document claims, coordinate with adjusters, and advocate for fair settlement — especially for the complex multi-lot infrastructure losses that MHC operators face.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-serif font-bold text-lg text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

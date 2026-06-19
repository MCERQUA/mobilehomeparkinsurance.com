import Link from "next/link";
import { Phone, Mail, MapPin, Shield } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/coverages", label: "Coverages" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/quote", label: "Get a Quote" },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm font-serif">M</span>
              </div>
              <span className="font-serif font-bold text-xl text-white">
                MHP Insurance
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Specialized commercial insurance for mobile home parks, manufactured
              housing communities, and RV parks. Contractors Choice Agency has
              served the specialty insurance market for 20+ years.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Shield className="w-4 h-4 text-brand" />
              <span>NPN: 8608479 | Licensed All 50 States</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-serif font-bold text-lg text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:8449675247"
                  className="flex items-start gap-3 text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-brand flex-shrink-0" />
                  <span>844-967-5247</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:josh@contractorschoiceagency.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-brand flex-shrink-0" />
                  <span>josh@contractorschoiceagency.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-brand flex-shrink-0" />
                  <span>
                    12220 E Riggs Rd<br />
                    Chandler, AZ 85249
                  </span>
                </div>
              </li>
              <li className="text-gray-400 text-sm">
                <span className="font-medium text-gray-300">NPN:</span> 8608479
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Contractors Choice Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

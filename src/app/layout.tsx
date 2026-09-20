import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LenisProvider from "@/components/lenis-provider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Mobile Home Park Insurance | Contractors Choice Agency",
    template: "%s | Mobile Home Park Insurance",
  },
  description:
    "Specialized commercial insurance for mobile home parks, manufactured housing communities, and RV parks. 20+ years experience. Licensed in all 50 states. Get a quote in 15 minutes. Call 844-967-5247.",
  keywords: [
    "mobile home park insurance",
    "manufactured housing community insurance",
    "RV park insurance",
    "trailer park insurance",
    "mobile home park liability",
    "mobile home park property insurance",
    "MHC insurance",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mobilehomeparkinsurance.com",
    siteName: "Mobile Home Park Insurance",
    title: "Mobile Home Park Insurance | Contractors Choice Agency",
    description:
      "Specialized commercial insurance for mobile home parks, manufactured housing communities, and RV parks. 20+ years experience. Licensed all 50 states.",
    images: [
      {
        url: "https://mobilehomeparkinsurance.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile Home Park Insurance - Contractors Choice Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Home Park Insurance | Contractors Choice Agency",
    description:
      "Specialized commercial insurance for mobile home parks and RV parks. 20+ years experience. 15-minute quotes.",
    images: ["https://mobilehomeparkinsurance.com/images/og-image.jpg"],
  },
  metadataBase: new URL("https://mobilehomeparkinsurance.com"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "Contractors Choice Agency",
  alternateName: "Mobile Home Park Insurance",
  description:
    "Specialized commercial insurance for mobile home parks, manufactured housing communities, and RV parks.",
  url: "https://mobilehomeparkinsurance.com",
  telephone: "+18449675247",
  email: "josh@contractorschoiceagency.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12220 E Riggs Rd",
    addressLocality: "Chandler",
    addressRegion: "AZ",
    postalCode: "85249",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.2454,
    longitude: -111.7891,
  },
  founder: {
    "@type": "Person",
    name: "Josh Cotner",
  },
  foundingDate: "2005",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "National Producer Number",
    name: "NPN 8608479",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [
    "https://contractorschoiceagency.com",
    "https://linkedin.com/in/joshcotner",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}

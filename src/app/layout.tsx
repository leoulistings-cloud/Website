import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PaleBlueEgg from "@/components/PaleBlueEgg";

export const metadata: Metadata = {
  title: {
    default: "Johnny Leou Real Estate Agent Los Angeles | Buy, Sell, Invest",
    template: "%s | Johnny Leou Real Estate",
  },
  description:
    "Find your Los Angeles home with Johnny Leou (DRE#02064780). Expert real estate agent specializing in luxury homes, first-time buyer strategies, and investment properties across LA and Orange County.",
  keywords: ["Los Angeles real estate agent", "Los Angeles homes for sale", "Orange County real estate", "luxury homes LA", "first-time home buyer", "investment properties", "real estate advisor"],
  openGraph: {
    type: "website",
    siteName: "Johnny Leou Real Estate",
    description: "Expert LA real estate agent specializing in luxury homes, first-time buyers, and investments. Get personalized guidance for buying or selling in Los Angeles.",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://johnnyleou.com/#person",
      "name": "Johnny Leou",
      "jobTitle": "Real Estate Agent",
      "description": "Johnny Leou is a Los Angeles real estate agent (DRE#02064780) specializing in residential homes, luxury properties, and investment real estate.",
      "url": "https://johnnyleou.com",
      "image": "https://i.imgur.com/hxM6WgE.jpg",
      "sameAs": [
        "https://www.instagram.com/leoulistings",
        "https://www.linkedin.com/in/johnnyleou"
      ],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Real Estate License",
        "recognizedBy": { "@type": "Organization", "name": "California Department of Real Estate" },
        "identifier": "DRE #02064780"
      }
    },
    {
      "@type": ["RealEstateAgent", "LocalBusiness"],
      "@id": "https://johnnyleou.com/#agent",
      "name": "Johnny Leou Real Estate",
      "description": "Johnny Leou (DRE#02064780) is a Los Angeles and Orange County real estate agent specializing in residential homes, luxury properties, and investment real estate.",
      "url": "https://johnnyleou.com",
      "telephone": "+19493004485",
      "email": "johnny@leoulistings.com",
      "image": "https://i.imgur.com/hxM6WgE.jpg",
      "priceRange": "$$$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Los Angeles",
        "addressRegion": "CA",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 34.0522,
        "longitude": -118.2437
      },
      "areaServed": [
        { "@type": "City", "name": "Los Angeles", "sameAs": "https://en.wikipedia.org/wiki/Los_Angeles" },
        { "@type": "City", "name": "Irvine", "sameAs": "https://en.wikipedia.org/wiki/Irvine,_California" },
        { "@type": "City", "name": "Tustin", "sameAs": "https://en.wikipedia.org/wiki/Tustin,_California" },
        { "@type": "Neighborhood", "name": "Silver Lake" },
        { "@type": "Neighborhood", "name": "Echo Park" },
        { "@type": "Neighborhood", "name": "Los Feliz" },
        { "@type": "Neighborhood", "name": "Koreatown" },
        { "@type": "Neighborhood", "name": "West Hollywood" },
        { "@type": "Neighborhood", "name": "Boyle Heights" },
        { "@type": "Neighborhood", "name": "Downtown Los Angeles" }
      ],
      "knowsAbout": ["Residential Real Estate", "Luxury Homes", "Investment Properties", "First-Time Home Buyers", "LGBTQ+ Friendly Real Estate", "1031 Exchange", "FHA Loans", "VA Loans"],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Real Estate License",
        "recognizedBy": { "@type": "Organization", "name": "California Department of Real Estate" },
        "identifier": "DRE #02064780"
      },
      "memberOf": {
        "@type": "Organization",
        "name": "eXp Realty of Greater Los Angeles",
        "identifier": "Broker License #02188471"
      },
      "sameAs": [
        "https://www.instagram.com/leoulistings",
        "https://www.linkedin.com/in/johnnyleou"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://johnnyleou.com/#website",
      "url": "https://johnnyleou.com",
      "name": "Johnny Leou Real Estate",
      "publisher": { "@id": "https://johnnyleou.com/#agent" }
    }
  ]
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <PaleBlueEgg />
      </body>
    </html>
  );
}


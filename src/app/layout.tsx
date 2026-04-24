import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Johnny Leou Real Estate | Los Angeles & Orange County Homes",
    template: "%s | Johnny Leou Real Estate",
  },
  description:
    "Johnny Leou (DRE#02064780) specializes in buying, selling, and investing in residential real estate, luxury homes, and income properties across Los Angeles and Orange County.",
  keywords: ["Los Angeles real estate", "Orange County homes", "luxury real estate", "investment properties", "first-time buyers"],
  openGraph: {
    type: "website",
    siteName: "Johnny Leou Real Estate",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

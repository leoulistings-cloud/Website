import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "GrandLuxe Estates & Residences | Ultra-Luxury Real Estate",
    template: "%s | GrandLuxe Estates",
  },
  description:
    "Representing the world's most extraordinary properties. Ultra-luxury real estate in Miami, Los Angeles, New York, Aspen, and beyond.",
  keywords: ["luxury real estate", "ultra-luxury homes", "estates", "penthouses", "villas"],
  openGraph: {
    type: "website",
    siteName: "GrandLuxe Estates & Residences",
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

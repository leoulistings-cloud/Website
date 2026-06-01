import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Johnny Leou | Los Angeles Real Estate Agent",
  description: "Get in touch with Johnny Leou for real estate advice, home buying/selling, or investment property questions in Los Angeles and Orange County.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

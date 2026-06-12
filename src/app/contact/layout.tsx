import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Johnny Leou | LA Real Estate Agent",
  description: "Get in touch with Johnny Leou, Los Angeles real estate agent. Schedule a free consultation, ask questions, or get a market analysis for your LA property.",
  openGraph: {
    title: "Contact Johnny Leou | LA Real Estate Agent",
    description: "Get in touch with Johnny Leou for real estate services in Los Angeles and Orange County.",
    url: "https://johnnyleou.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

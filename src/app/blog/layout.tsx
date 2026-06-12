import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Blog | Los Angeles & Orange County Insights",
  description: "Expert LA real estate blog covering buyer guides, seller tips, market updates, neighborhood guides, and investment strategies for Los Angeles & Orange County.",
  openGraph: {
    title: "Real Estate Blog | Los Angeles & Orange County Insights",
    description: "Expert LA real estate blog covering buyer guides, seller tips, market updates, and neighborhood guides.",
    url: "https://johnnyleou.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

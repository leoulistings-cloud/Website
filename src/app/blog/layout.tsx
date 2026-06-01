import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Blog | Market Insights, Buying Guides & Neighborhood Tips",
  description: "Read expert real estate tips, neighborhood guides, and home buying advice from Johnny Leou. Learn about LA market trends, first-time buyer strategies, and investment opportunities.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

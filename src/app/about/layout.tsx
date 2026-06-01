import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Johnny Leou | Real Estate Agent Los Angeles DRE#02064780",
  description: "Meet Johnny Leou, an experienced Los Angeles real estate agent specializing in luxury homes, first-time buyers, and investment properties. Learn about his approach to buying and selling in LA.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

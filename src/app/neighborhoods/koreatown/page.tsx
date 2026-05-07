import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Koreatown Real Estate | Homes & Condos for Sale | Johnny Leou",
  description: "Koreatown real estate in 2026. Johnny Leou (DRE#02064780) specializes in Koreatown condos, apartments, and investment properties — market data and expert buyer representation.",
};

const faq = [
  {
    q: "What is the average home price in Koreatown?",
    a: "Koreatown is primarily a condo and multi-unit market. Condo prices range from approximately $450K–$850K depending on building quality and location. Single-family homes are rare and trade significantly higher. The neighborhood's density means most buyers are looking at condos, co-ops, or small multi-unit investment properties. For investors, small apartment buildings are the primary asset class.",
  },
  {
    q: "Is Koreatown a good investment in 2026?",
    a: "Koreatown is one of the most compelling investment markets in central LA right now. It has the highest population density in LA, exceptional Metro access (two Purple Line stations), proximity to DTLA and Mid-City, and entry pricing that still reflects historical perception rather than current fundamentals. Investors who bought in Koreatown 5-7 years ago have seen strong appreciation. The underlying demand thesis — density, transit, cultural anchors, employer proximity — remains intact.",
  },
  {
    q: "What is Koreatown like to live in?",
    a: "Koreatown is one of the most 24-hour neighborhoods in Los Angeles. Restaurants, karaoke bars, Korean BBQ, coffee shops, and nightlife operate late into the night. The neighborhood is culturally rich and genuinely diverse — Korean-American community anchors coexist with significant Latino and other populations. It's extremely walkable, exceptionally transit-connected (two Metro stations), and very centrally located between DTLA and the Westside.",
  },
  {
    q: "Does Koreatown have good public transportation?",
    a: "Yes — Koreatown has two Metro Purple Line stations (Wilshire/Vermont and Wilshire/Normandie) that connect directly to DTLA and eventually to the Westside extension. It's one of the most transit-connected neighborhoods in LA outside of DTLA itself. For buyers who prioritize transit access or want to reduce car dependency, Koreatown is the strongest option in central LA.",
  },
];

const stats = [
  { label: "Condo Range", value: "$450K–$850K" },
  { label: "Metro Stations", value: "2" },
  { label: "Price Trend", value: "Stable" },
  { label: "Investor Grade", value: "Strong" },
];

export default function KoreatownPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative pt-32 pb-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={12} className="text-gold-500" />
            <Link href="/neighborhoods" className="text-white/40 text-xs tracking-widest uppercase hover:text-gold-500 transition-colors">Neighborhoods</Link>
            <span className="text-white/20 text-xs">/</span>
            <span className="text-white/40 text-xs tracking-widest uppercase">Koreatown</span>
          </div>
          <p className="section-label mb-3">Los Angeles, CA</p>
          <h1 className="section-title mb-4">Koreatown<br /><span className="text-gold-500 italic">Real Estate</span></h1>
          <div className="gold-divider" />
          <p className="text-white/50 text-sm mt-6 max-w-2xl leading-relaxed">
            Koreatown is LA's most transit-connected, highest-density central neighborhood — and one of the most undervalued relative to its fundamentals. Johnny Leou (DRE#02064780) specializes in Koreatown condos and investment property representation.
          </p>
        </div>
      </section>

      <section className="py-6 bg-gold-500">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-navy-950 text-3xl font-light">{s.value}</p>
                <p className="text-navy-900/70 text-xs tracking-widest uppercase mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-3">Neighborhood Guide</p>
              <h2 className="font-serif text-white text-3xl mb-4">Why Koreatown Is LA's Most Underrated Market</h2>
              <div className="gold-divider mb-6" />
              <div className="space-y-4 text-white/60 text-sm leading-relaxed">
                <p>Koreatown is the highest-density neighborhood in Los Angeles — more people per square mile than anywhere else in the city. That density, combined with two Metro Purple Line stations, central location, and an extraordinary food and nightlife scene, creates fundamentals that few LA neighborhoods can match at the pricing Koreatown still trades at.</p>
                <p>The neighborhood stretches roughly from Vermont Avenue to Western Avenue, and from Beverly Boulevard to Olympic Boulevard. Within that footprint, you have an almost entirely condo and apartment-driven residential market, with single-family homes extremely rare and typically trading at significant premiums when they do appear.</p>
                <p>For investors, Koreatown's rent-to-price ratios are among the strongest in central LA. High population density generates consistent rental demand, and the Metro connectivity has only improved with the Purple Line extension progress. Jamison Services — the most prolific adaptive reuse developer in LA — built much of their track record here, and the neighborhood's trajectory reflects their early conviction.</p>
                <p>For owner-occupants, Koreatown offers a genuinely urban lifestyle at price points that are still accessible relative to the Eastside. The food scene alone — Korean BBQ, late-night ramen, traditional Korean bakeries — is worth the premium. The walkability is exceptional. The trade-off is density and noise; this is not a quiet suburban lifestyle.</p>
              </div>
              <div className="mt-8 space-y-3">
                <h3 className="font-serif text-white text-xl">Who Lives Here</h3>
                <ul className="space-y-2 text-white/60 text-sm">
                  {["Korean-American community residents and business owners", "Young professionals who prioritize transit access and urban lifestyle", "Investors holding condo units and small apartment buildings", "Healthcare workers — proximity to multiple major hospitals", "DTLA workers who want shorter commutes at lower price points"].map((item) => (
                    <li key={item} className="flex items-start gap-2"><span className="text-gold-500 shrink-0">-</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="https://i.imgur.com/MvyMYPi.jpg" alt="Koreatown Los Angeles" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="glass-card p-6 space-y-4">
                <h3 className="font-serif text-white text-lg">At a Glance</h3>
                {[
                  ["Borders", "Westlake, Mid-City, East Hollywood, Hancock Park"],
                  ["Best for", "Transit access, density, investment returns, food scene"],
                  ["Schools", "LAUSD; several charter options in the area"],
                  ["Transit", "Two Metro Purple Line stations — among LA's best transit access"],
                  ["Price range", "$450K–$850K condos; investment properties vary widely"],
                ].map(([label, value]) => (
                  <div key={label} className="flex gap-4 text-sm border-t border-white/5 pt-3">
                    <span className="text-white/40 w-24 shrink-0">{label}</span>
                    <span className="text-white/70">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-white text-3xl mb-8 text-center">Koreatown Real Estate — FAQ</h2>
          <div className="space-y-4">
            {faq.map(({ q, a }, i) => (
              <details key={i} className="group glass-card overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
                  <span className="font-serif text-white text-lg leading-snug">{q}</span>
                  <span className="text-gold-500 shrink-0 text-xl font-light transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-white/60 text-sm leading-relaxed border-t border-white/10 pt-4">{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-950">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="section-label mb-3">Buying or Investing?</p>
          <h2 className="font-serif text-white text-4xl mb-4">Let's Talk Koreatown</h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/50 text-sm leading-relaxed mb-8">Johnny Leou (DRE#02064780) specializes in Koreatown condo and investment property representation. Get a straight read on the market and what the numbers actually look like.</p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase">Contact Johnny <ArrowRight size={14} /></Link>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Echo Park Real Estate | Homes for Sale | Johnny Leou",
  description: "Echo Park homes for sale in 2026. Johnny Leou (DRE#02064780) covers Echo Park real estate — current market data, neighborhood guide, and buyer representation.",
};

const faq = [
  {
    q: "What is the average home price in Echo Park?",
    a: "As of April 2026, the median home price in Echo Park is approximately $985K. The range is wide — smaller bungalows and condos start around $700K–$800K, while larger single-family homes and multi-units in premium locations trade at $1.2M–$1.8M. Echo Park offers more attainable entry points than adjacent Silver Lake and Los Feliz while sharing significant cultural overlap.",
  },
  {
    q: "Is Echo Park a buyer's market right now?",
    a: "Yes — Echo Park is showing buyer-favorable conditions in April 2026. Days on market average around 28 days, and motivated sellers are present throughout the neighborhood. Price reductions on stale listings are becoming more common. For well-prepared buyers, Echo Park represents one of the better entry points on the LA Eastside right now.",
  },
  {
    q: "Is Echo Park safe to live in?",
    a: "Echo Park has seen significant changes over the past several years. The neighborhood went through a high-profile period of public safety challenges around the park encampment that was cleared in 2021. In 2026, the neighborhood is in an active period of stabilization. Street conditions vary significantly by block — buyers should walk specific blocks and talk to residents before committing. Working with an agent who knows the neighborhood granularly is essential.",
  },
  {
    q: "What types of homes are available in Echo Park?",
    a: "Echo Park has diverse housing stock — 1910s–1940s craftsmen and California bungalows, Spanish colonials, mid-century apartment buildings, and a growing number of contemporary additions and renovations. The hillside areas above Echo Park Lake offer older homes with views, while the flatlands offer more inventory at accessible price points. Multi-unit investment properties (duplexes, triplexes) are also common.",
  },
];

const stats = [
  { label: "Median Price", value: "$985K" },
  { label: "Avg. Days on Market", value: "28" },
  { label: "Price Trend", value: "Softening" },
  { label: "Buyer Leverage", value: "Strong" },
];

export default function EchoParkPage() {
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
            <span className="text-white/40 text-xs tracking-widest uppercase">Echo Park</span>
          </div>
          <p className="section-label mb-3">Los Angeles, CA</p>
          <h1 className="section-title mb-4">Echo Park<br /><span className="text-gold-500 italic">Real Estate</span></h1>
          <div className="gold-divider" />
          <p className="text-white/50 text-sm mt-6 max-w-2xl leading-relaxed">
            Echo Park offers Eastside culture and location at a meaningful discount to Silver Lake and Los Feliz. In 2026, buyer conditions are favorable. Johnny Leou (DRE#02064780) specializes in Echo Park buyer and investor representation.
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
              <h2 className="font-serif text-white text-3xl mb-4">Echo Park — The Honest Picture</h2>
              <div className="gold-divider mb-6" />
              <div className="space-y-4 text-white/60 text-sm leading-relaxed">
                <p>Echo Park is a neighborhood that requires an honest assessment rather than a marketing pitch. It has genuine assets — the lake itself, extraordinary cultural density, walkability, proximity to DTLA and Silver Lake, and some of the most charming residential architecture on the Eastside. It also has real challenges that vary significantly by block and have affected its relative pricing.</p>
                <p>The lake, restored and reopened after the 2021 clearing, has become an active neighborhood anchor again. Restaurants, bars, and independent businesses have remained despite the turbulence of recent years. Sunset Boulevard through Echo Park continues to be one of the more interesting commercial corridors in LA.</p>
                <p>For buyers, the current conditions are genuinely favorable. Days on market around 28 days, motivated sellers, and entry-level pricing significantly below Silver Lake for comparable architecture. The question every Echo Park buyer needs to answer honestly: which blocks specifically, and what is my tolerance for a neighborhood in active stabilization versus one that's already stabilized?</p>
                <p>For investors: Echo Park's rent-to-price ratios are strong. Multi-unit properties — duplexes and triplexes — are more available here than in pricier Eastside neighborhoods. The long-term appreciation thesis is real if you can hold through the neighborhood's current transitional phase.</p>
              </div>
              <div className="mt-8 space-y-3">
                <h3 className="font-serif text-white text-xl">Who Lives Here</h3>
                <ul className="space-y-2 text-white/60 text-sm">
                  {["Artists, musicians, and working creatives", "Long-term community residents with deep neighborhood roots", "First-time buyers entering the Eastside market at a lower price point", "Investors holding small multi-units", "Buyers who prioritize location and cultural character over neighborhood polish"].map((item) => (
                    <li key={item} className="flex items-start gap-2"><span className="text-gold-500 shrink-0">-</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=800&q=80" alt="Echo Park Los Angeles" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="glass-card p-6 space-y-4">
                <h3 className="font-serif text-white text-lg">At a Glance</h3>
                {[
                  ["Borders", "Silver Lake, Westlake, Angelino Heights, DTLA"],
                  ["Best for", "Price point, location, cultural character, investment upside"],
                  ["Schools", "LAUSD; several magnet programs accessible"],
                  ["Transit", "Metro bus; close to DTLA Metro connections"],
                  ["Price range", "$700K–$1.8M depending on type and location"],
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
          <h2 className="font-serif text-white text-3xl mb-8 text-center">Echo Park Real Estate — FAQ</h2>
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
          <p className="section-label mb-3">Ready to Explore?</p>
          <h2 className="font-serif text-white text-4xl mb-4">Let's Talk Echo Park</h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/50 text-sm leading-relaxed mb-8">Johnny Leou (DRE#02064780) knows Echo Park block by block. Get an honest read on the current market and a strategy that matches your goals.</p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase">Contact Johnny <ArrowRight size={14} /></Link>
        </div>
      </section>
    </>
  );
}

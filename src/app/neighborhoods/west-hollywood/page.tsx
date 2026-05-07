import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "West Hollywood Real Estate | Homes & Condos for Sale | Johnny Leou",
  description: "West Hollywood real estate in 2026. Johnny Leou (DRE#02064780) covers WeHo homes, condos, and investment properties — market data, neighborhood guide, and LGBTQ+ friendly representation.",
};

const faq = [
  {
    q: "What is the average home price in West Hollywood?",
    a: "As of 2026, West Hollywood condo prices range from approximately $650K–$1.4M for one- and two-bedroom units. Single-family homes in WeHo are rare and typically trade at $1.8M–$3.5M+. The Sunset Strip corridor and hillside homes above it command the highest premiums. West Hollywood is primarily a condo market with a significant luxury segment.",
  },
  {
    q: "Is West Hollywood LGBTQ+ friendly?",
    a: "West Hollywood is the heart of LA's LGBTQ+ community — one of the most established and welcoming LGBTQ+ cities in the United States. WeHo has an openly LGBTQ+ City Council majority, a long history of LGBTQ+ civil rights leadership, and a robust community infrastructure. For LGBTQ+ buyers and sellers, West Hollywood represents both a cultural home and a strong real estate market.",
  },
  {
    q: "What is it like to live in West Hollywood?",
    a: "West Hollywood is one of LA's most walkable and vibrant neighborhoods. The Sunset Strip, Santa Monica Boulevard, and Melrose Avenue provide exceptional dining, nightlife, and retail within walking distance. WeHo is a small city (1.9 square miles) with its own city government separate from LA proper, which gives it a distinct urban village character. The tradeoff is density and noise — this is an active urban environment, not a quiet residential one.",
  },
  {
    q: "How is the West Hollywood real estate market in 2026?",
    a: "West Hollywood's condo market is active but measured in 2026. Inventory has increased slightly and days on market are running 25-35 days on average. The premium lifestyle positioning of WeHo gives it a floor that less established condo markets don't have. For buyers who want Westside access, walkability, and LGBTQ+ community, West Hollywood offers limited inventory at a price point that reflects genuine demand.",
  },
];

const stats = [
  { label: "Condo Range", value: "$650K–$1.4M" },
  { label: "City Size", value: "1.9 sq mi" },
  { label: "Walk Score", value: "92" },
  { label: "Community", value: "LGBTQ+" },
];

export default function WestHollywoodPage() {
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
            <span className="text-white/40 text-xs tracking-widest uppercase">West Hollywood</span>
          </div>
          <p className="section-label mb-3">Los Angeles, CA</p>
          <h1 className="section-title mb-4">West Hollywood<br /><span className="text-gold-500 italic">Real Estate</span></h1>
          <div className="gold-divider" />
          <p className="text-white/50 text-sm mt-6 max-w-2xl leading-relaxed">
            West Hollywood is LA's most walkable urban village — LGBTQ+ community anchor, Sunset Strip nightlife, and strong condo market. Johnny Leou (DRE#02064780) provides LGBTQ+ affirming buyer and seller representation throughout WeHo.
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
              <h2 className="font-serif text-white text-3xl mb-4">West Hollywood — More Than a Party Neighborhood</h2>
              <div className="gold-divider mb-6" />
              <div className="space-y-4 text-white/60 text-sm leading-relaxed">
                <p>West Hollywood is often reduced to the Sunset Strip and Santa Monica Boulevard nightlife scene. That characterization undersells what WeHo actually is as a place to live. It's a 1.9-square-mile city with its own government, its own police contract, its own parks department, and some of the most progressive tenant and resident protections in California.</p>
                <p>The city is extraordinarily walkable for Los Angeles — a Walk Score of 92, which is exceptional in a car-dependent metro. Most daily errands can be done on foot. The proximity to Beverly Hills, Hollywood, and the Westside makes WeHo a genuinely central address despite its small footprint.</p>
                <p>For LGBTQ+ buyers, West Hollywood represents something beyond just real estate. It's a community with deep historical roots in LGBTQ+ civil rights, an openly LGBTQ+ city leadership, and an infrastructure of community organizations, venues, and businesses that has been built over decades. That's not replicated anywhere else in LA.</p>
                <p>The real estate market is primarily condos and apartment buildings. Single-family homes exist but are rare and expensive. The strongest demand is in well-maintained condo buildings in the Santa Monica Boulevard corridor and the streets south of Sunset. The hills above Sunset have a different character — quieter, more private, higher price points.</p>
              </div>
              <div className="mt-8 space-y-3">
                <h3 className="font-serif text-white text-xl">Who Lives Here</h3>
                <ul className="space-y-2 text-white/60 text-sm">
                  {["LGBTQ+ community members and couples", "Entertainment industry professionals — proximity to studios and agencies", "Young professionals who prioritize walkability and nightlife access", "Long-term WeHo residents who have built community roots", "Out-of-state buyers relocating to LA who want the most walkable option"].map((item) => (
                    <li key={item} className="flex items-start gap-2"><span className="text-gold-500 shrink-0">-</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=800&q=80" alt="West Hollywood Los Angeles" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="glass-card p-6 space-y-4">
                <h3 className="font-serif text-white text-lg">At a Glance</h3>
                {[
                  ["Borders", "Beverly Hills, Hollywood, Fairfax District"],
                  ["Best for", "Walkability, LGBTQ+ community, nightlife, central location"],
                  ["Schools", "LAUSD; several private options within proximity"],
                  ["Transit", "Multiple bus lines; Westside Metro extension in progress"],
                  ["Price range", "$650K–$1.4M condos; $1.8M–$3.5M+ single-family"],
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
          <h2 className="font-serif text-white text-3xl mb-8 text-center">West Hollywood Real Estate — FAQ</h2>
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
          <p className="section-label mb-3">LGBTQ+ Affirming Representation</p>
          <h2 className="font-serif text-white text-4xl mb-4">Let's Talk West Hollywood</h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/50 text-sm leading-relaxed mb-8">Johnny Leou (DRE#02064780) provides LGBTQ+ affirming buyer and seller representation throughout West Hollywood and greater LA. Get a current market read and a strategy built around your needs.</p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase">Contact Johnny <ArrowRight size={14} /></Link>
        </div>
      </section>
    </>
  );
}

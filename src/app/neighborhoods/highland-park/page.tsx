import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Highland Park Real Estate | Homes for Sale | Johnny Leou",
  description: "Highland Park real estate in 2026. Johnny Leou (DRE#02064780) covers Highland Park homes, investment properties, thriving food & arts scene, and long-term appreciation fundamentals.",
};

const faq = [
  {
    q: "What is the median home price in Highland Park?",
    a: "As of 2026, Highland Park median home prices range from approximately $850K–$1.2M depending on location and condition. Single-family homes dominate the market. Highland Park has appreciated meaningfully over the past decade but remains more affordable than neighboring Silver Lake ($1.29M median) while offering comparable cultural energy and walkability.",
  },
  {
    q: "What makes Highland Park different from Silver Lake?",
    a: "Highland Park and Silver Lake share the same cultural DNA—walkable streets, independent businesses, galleries, and a genuine local food scene. The key difference is price: Highland Park trades at a 20-30% discount to Silver Lake while offering the same long-term appreciation fundamentals. For buyers seeking Eastside authenticity without peak pricing, Highland Park is the play.",
  },
  {
    q: "Is Highland Park a good investment neighborhood?",
    a: "Yes. Highland Park has strong fundamentals: a mature restaurant and bar scene (no longer scrappy, now genuinely excellent), thriving arts infrastructure, walkable commercial corridors, and pricing that reflects value rather than peak gentrification. For small multi-unit investors, entry prices are significantly more favorable than they've been in years. Long-term demand remains strong.",
  },
  {
    q: "What is the food and arts scene like?",
    a: "Highland Park's restaurant and bar scene has matured substantially. Chef Debbie Lee's modern Korean gastropub added Sunday brunch service, signaling the neighborhood has hit stable, sustainable quality of life—not a flash of gentrification. The neighborhood has a thriving independent gallery scene, strong street art, and cultural events that bring people outside and into community.",
  },
];

const stats = [
  { label: "Median Price", value: "$850K–$1.2M" },
  { label: "Days on Market", value: "25–35 days" },
  { label: "Market Trend", value: "Strong Appreciation" },
  { label: "Community", value: "Arts & Food" },
];

export default function HighlandParkPage() {
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
            <span className="text-white/40 text-xs tracking-widest uppercase">Highland Park</span>
          </div>
          <p className="section-label mb-3">Los Angeles, CA</p>
          <h1 className="section-title mb-4">Highland Park<br /><span className="text-gold-500 italic">Real Estate</span></h1>
          <div className="gold-divider" />
          <p className="text-white/50 text-sm mt-6 max-w-2xl leading-relaxed">
            Highland Park is LA's thriving Eastside neighborhood with a mature food and arts scene, walkable commercial corridors, and strong appreciation fundamentals. Johnny Leou (DRE#02064780) provides expert buyer and seller representation throughout Highland Park and greater LA.
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
              <h2 className="font-serif text-white text-3xl mb-4">Highland Park — Eastside Value With Established Culture</h2>
              <div className="gold-divider mb-6" />
              <div className="space-y-4 text-white/60 text-sm leading-relaxed">
                <p>Highland Park is the Eastside neighborhood that delivers Silver Lake's cultural energy at a more accessible price point. The neighborhood has matured from scrappy to genuinely established—independent galleries, a thriving restaurant scene, and street-level culture that's authentic rather than manufactured.</p>
                <p>The food and bar scene is what signals Highland Park has hit critical mass. Chef Debbie Lee's modern Korean gastropub adding Sunday brunch service, the proliferation of independent restaurants and cocktail bars, and the density of cultural institutions all point to a neighborhood that's sustainable long-term, not just a flash of speculative gentrification.</p>
                <p>For real estate purposes, Highland Park represents value. Median prices at $850K–$1.2M are 20-30% below Silver Lake while the neighborhood shares the same walkability, cultural density, and long-term appreciation fundamentals. The investment thesis is straightforward: the neighborhoods that hold value long-term in LA are almost always the ones where people want to spend their time—not just where they sleep.</p>
                <p>Single-family homes dominate the market. Smaller multi-unit buildings (duplexes, triplexes) are available. The strongest demand comes from owner-occupants seeking Eastside lifestyle without peak pricing, and from small investors looking for entry-level multi-units at favorable prices.</p>
              </div>
              <div className="mt-8 space-y-3">
                <h3 className="font-serif text-white text-xl">Who Lives Here</h3>
                <ul className="space-y-2 text-white/60 text-sm">
                  {["Buyers seeking Silver Lake energy at more accessible prices", "Artists, creatives, and gallery workers", "Small investors buying multi-unit buildings", "Restaurateurs and hospitality professionals", "Long-term Eastside residents building intergenerational wealth"].map((item) => (
                    <li key={item} className="flex items-start gap-2"><span className="text-gold-500 shrink-0">-</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="https://static.wixstatic.com/media/07cd1e_28e7e71ab26e4a2a98c0b208cacc8df2~mv2.jpg/v1/fill/w_1200,h_800,al_c/07cd1e_28e7e71ab26e4a2a98c0b208cacc8df2~mv2.jpg" alt="Highland Park Los Angeles" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="glass-card p-6 space-y-4">
                <h3 className="font-serif text-white text-lg">At a Glance</h3>
                {[
                  ["Borders", "Eagle Rock, Pasadena, South Pasadena, Glendale"],
                  ["Best for", "Food scene, arts culture, walkability, investment value"],
                  ["Schools", "LAUSD schools throughout; several strong options"],
                  ["Transit", "Bus lines, 110 Freeway access, future transit expansion"],
                  ["Price range", "$850K–$1.2M single-family homes; small multi-units $950K–$1.5M"],
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
          <h2 className="font-serif text-white text-3xl mb-8 text-center">Highland Park Real Estate — FAQ</h2>
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
          <p className="section-label mb-3">Eastside Value & Culture</p>
          <h2 className="font-serif text-white text-4xl mb-4">Let's Talk Highland Park</h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/50 text-sm leading-relaxed mb-8">Johnny Leou (DRE#02064780) provides expert buyer and seller representation throughout Highland Park and greater LA. Get a current market read, understand the investment fundamentals, and develop a strategy built around your goals.</p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase">Contact Johnny <ArrowRight size={14} /></Link>
        </div>
      </section>
    </>
  );
}

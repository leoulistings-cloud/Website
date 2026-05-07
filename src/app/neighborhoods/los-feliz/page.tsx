import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Los Feliz Real Estate | Homes for Sale | Johnny Leou",
  description: "Los Feliz homes for sale in 2026. Johnny Leou (DRE#02064780) covers Los Feliz real estate - market data, neighborhood guide, and expert representation.",
};

const faq = [
  {
    q: "What is the average home price in Los Feliz?",
    a: "As of April 2026, the median home price in Los Feliz is approximately $1.85M. The neighborhood commands a premium due to its architectural heritage, Griffith Park proximity, and extremely limited inventory. Entry-level condos can be found closer to $850K-$1.1M, while hillside single-family homes regularly trade at $2M-$4M+.",
  },
  {
    q: "Is Los Feliz a good place to buy in 2026?",
    a: "Los Feliz is one of LA's most stable premium neighborhoods. Demand is holding and inventory is tight at around 18 days on market. It's not a market where buyers have significant leverage, but it is a market with proven long-term appreciation and extremely low turnover. For buyers with a long horizon and the budget to enter, Los Feliz is one of the most defensible LA neighborhoods to own in.",
  },
  {
    q: "What is Los Feliz like as a neighborhood?",
    a: "Los Feliz sits at the base of Griffith Park - the largest urban park in the US - giving residents immediate access to hiking, the Observatory, the Greek Theatre, and the LA Zoo. The commercial corridors along Hillhurst and Vermont are walkable, independent, and well-curated. Housing stock is dominated by 1920s-1940s Spanish colonials, Tudors, and craftsmen, with mid-century modern homes in the hills. It's one of LA's most architecturally rich neighborhoods.",
  },
  {
    q: "How competitive is the Los Feliz real estate market?",
    a: "Los Feliz is consistently competitive. Well-priced homes move in under 3 weeks with multiple offers a regular occurrence. Buyer leverage is limited - the premium demand the neighborhood commands is structural, not cyclical. Working with an agent who knows the specific blocks, can identify value, and can present an offer competitively is essential in this market.",
  },
];

const stats = [
  { label: "Median Price", value: "$1.85M" },
  { label: "Avg. Days on Market", value: "18" },
  { label: "Price Trend", value: "Stable" },
  { label: "Buyer Leverage", value: "Low" },
];

export default function LosFelizPage() {
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
            <span className="text-white/40 text-xs tracking-widest uppercase">Los Feliz</span>
          </div>
          <p className="section-label mb-3">Los Angeles, CA</p>
          <h1 className="section-title mb-4">Los Feliz<br /><span className="text-gold-500 italic">Real Estate</span></h1>
          <div className="gold-divider" />
          <p className="text-white/50 text-sm mt-6 max-w-2xl leading-relaxed">
            Los Feliz is one of LA's most architecturally significant and consistently premium neighborhoods - at the base of Griffith Park, walkable, and with some of the city's strongest long-term ownership fundamentals. Johnny Leou (DRE#02064780) represents buyers and sellers across Los Feliz.
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
              <h2 className="font-serif text-white text-3xl mb-4">Why Los Feliz Commands a Premium</h2>
              <div className="gold-divider mb-6" />
              <div className="space-y-4 text-white/60 text-sm leading-relaxed">
                <p>Los Feliz is one of those rare LA neighborhoods where the fundamentals justify the price. The immediate adjacency to Griffith Park - 4,310 acres of trails, the Griffith Observatory, the Greek Theatre, and the LA Zoo - is irreplaceable. No developer can build more of it. That scarcity is structural.</p>
                <p>The housing stock reflects the neighborhood's age and its historical significance. 1920s-1940s Spanish colonials and English Tudor revivals define the flatlands. The hills above Franklin Avenue hold mid-century modern homes with views. The architecture is part of what people pay for - restoration-quality original details, mature landscaping, and a sense of permanence that newer construction can't replicate.</p>
                <p>Vermont Avenue and Hillhurst Avenue form the commercial core - an unusually strong stretch of independent restaurants, bookstores, vintage shops, and neighborhood fixtures. Los Feliz has resisted the chain-ification that has changed other corridors. The community is active and protective of that character.</p>
                <p>For buyers: Los Feliz is not a negotiating market. Homes priced correctly move quickly. The play here is identifying value before it's visible to everyone - a home that needs updating but sits on a premium block, or an off-market opportunity through agent relationships. That's where working with someone who knows the neighborhood block-by-block pays off.</p>
              </div>
              <div className="mt-8 space-y-3">
                <h3 className="font-serif text-white text-xl">Who Lives Here</h3>
                <ul className="space-y-2 text-white/60 text-sm">
                  {["Entertainment industry executives and established creatives", "Long-term homeowners - turnover is low", "Families drawn by Griffith Park access and nearby private schools", "Move-up buyers from Silver Lake and Echo Park", "Out-of-state transplants seeking LA's most architecturally significant neighborhood"].map((item) => (
                    <li key={item} className="flex items-start gap-2"><span className="text-gold-500 shrink-0">-</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="https://i.imgur.com/HsYXpBE.jpg" alt="Los Feliz Los Angeles" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="glass-card p-6 space-y-4">
                <h3 className="font-serif text-white text-lg">At a Glance</h3>
                {[
                  ["Borders", "Silver Lake, Griffith Park, East Hollywood, Atwater Village"],
                  ["Best for", "Architecture, outdoor access, walkability, permanence"],
                  ["Schools", "LAUSD magnet schools; proximity to several private options"],
                  ["Transit", "Vermont/Sunset and Vermont/Beverly Metro stations nearby"],
                  ["Price range", "$850K (condos) to $4M+ (hillside single-family)"],
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
          <h2 className="font-serif text-white text-3xl mb-8 text-center">Los Feliz Real Estate - FAQ</h2>
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
          <p className="section-label mb-3">Ready to Buy or Sell?</p>
          <h2 className="font-serif text-white text-4xl mb-4">Let's Talk Los Feliz</h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/50 text-sm leading-relaxed mb-8">Johnny Leou (DRE#02064780) specializes in Los Feliz buyer and seller representation. Get a current market read and a strategy tailored to your situation.</p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase">Contact Johnny <ArrowRight size={14} /></Link>
        </div>
      </section>
    </>
  );
}

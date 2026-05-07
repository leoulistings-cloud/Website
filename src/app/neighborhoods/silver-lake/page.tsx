import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Silver Lake Real Estate | Homes for Sale | Johnny Leou",
  description: "Silver Lake homes for sale in 2026. Johnny Leou (DRE#02064780) specializes in Silver Lake real estate — median prices, neighborhood guide, and expert buyer representation.",
};

const faq = [
  {
    q: "What is the average home price in Silver Lake?",
    a: "As of April 2026, the median home price in Silver Lake is approximately $1.29M. Single-family homes in the hills run higher — often $1.5M–$2.5M — while entry-level condos and smaller bungalows can be found in the $900K–$1.1M range.",
  },
  {
    q: "Is Silver Lake a good investment in 2026?",
    a: "Silver Lake has strong long-term appreciation fundamentals driven by walkability, cultural density, and limited housing supply. In 2026, days on market have increased slightly to around 22 days, giving buyers more negotiating room than in prior years. For buyers with a 5+ year horizon, Silver Lake remains one of LA's most reliable appreciation markets.",
  },
  {
    q: "What is Silver Lake like to live in?",
    a: "Silver Lake is one of LA's most walkable and culturally active neighborhoods — dense with independent restaurants, coffee shops, boutiques, and live music venues. The reservoir and surrounding hills provide outdoor access. It attracts a mix of young professionals, families, and creative industry residents. It borders Echo Park, Los Feliz, and Atwater Village.",
  },
  {
    q: "How do I buy a home in Silver Lake?",
    a: "Start with pre-approval — Silver Lake is competitive and sellers expect pre-approved buyers. Work with an agent who knows the specific micro-markets within Silver Lake (hillside vs. flatlands, reservoir-adjacent vs. Sunset corridor). Properties in the hills move quickly when priced right. Contact Johnny Leou (DRE#02064780) for a current market read and buyer strategy.",
  },
];

const stats = [
  { label: "Median Price", value: "$1.29M" },
  { label: "Avg. Days on Market", value: "22" },
  { label: "Price Trend", value: "Stable" },
  { label: "Buyer Leverage", value: "Moderate" },
];

export default function SilverLakePage() {
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
            <span className="text-white/40 text-xs tracking-widest uppercase">Silver Lake</span>
          </div>
          <p className="section-label mb-3">Los Angeles, CA</p>
          <h1 className="section-title mb-4">Silver Lake<br /><span className="text-gold-500 italic">Real Estate</span></h1>
          <div className="gold-divider" />
          <p className="text-white/50 text-sm mt-6 max-w-2xl leading-relaxed">
            Silver Lake is one of LA's most sought-after Eastside neighborhoods — walkable, culturally rich, and consistently one of the city's strongest long-term appreciation markets. Johnny Leou (DRE#02064780) specializes in Silver Lake buyer and seller representation.
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
              <h2 className="font-serif text-white text-3xl mb-4">What Makes Silver Lake Different</h2>
              <div className="gold-divider mb-6" />
              <div className="space-y-4 text-white/60 text-sm leading-relaxed">
                <p>Silver Lake occupies a uniquely positioned part of the LA Eastside — close enough to Hollywood and DTLA for easy access, far enough removed to maintain its own distinct identity. The neighborhood is organized around the Silver Lake Reservoir, which serves as its geographic and social anchor, surrounded by hiking paths, dogs, weekend crowds, and some of the best restaurant real estate in the city.</p>
                <p>Housing stock runs from 1920s-era craftsmen and Spanish colonials in the flatlands to mid-century modern and contemporary builds on the hillsides. The hills command a premium — both for the architecture and the views — and homes in the reservoir-adjacent blocks sell quickly and at tight pricing. The flatlands along Sunset, Rowena, and Hyperion offer more diverse options at slightly lower price points.</p>
                <p>Silver Lake's commercial corridors — Sunset Junction, Rowena, Micheltorena — are among the most walkable stretches of retail and dining in LA. The neighborhood has a strong independent business culture that has held up against the chain-and-development pressure that has changed other LA corridors.</p>
                <p>For buyers, the competition is real but currently more measured than the frenzied 2021-2022 era. Days on market have increased to around 22 days, and stale listings are showing some negotiating room. For well-prepared buyers working with an agent who knows specific block-level values, there is opportunity in the current market.</p>
              </div>
              <div className="mt-8 space-y-3">
                <h3 className="font-serif text-white text-xl">Who Lives Here</h3>
                <ul className="space-y-2 text-white/60 text-sm">
                  {["Creative industry professionals — film, music, design", "Young families priced out of Los Feliz who want the same energy at a slight discount", "LGBTQ+ residents — Silver Lake has a strong historic LGBTQ+ community", "Move-up buyers from Echo Park and Highland Park", "Investors holding long-term rental properties"].map((item) => (
                    <li key={item} className="flex items-start gap-2"><span className="text-gold-500 shrink-0">-</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=800&q=80" alt="Silver Lake Los Angeles" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="glass-card p-6 space-y-4">
                <h3 className="font-serif text-white text-lg">At a Glance</h3>
                {[
                  ["Borders", "Echo Park, Los Feliz, Atwater Village, Hollywood"],
                  ["Best for", "Walkability, dining, independent culture, outdoor access"],
                  ["Schools", "LAUSD — several magnet options, private schools nearby"],
                  ["Transit", "Metro bus lines; not Metro Rail but close to DTLA corridors"],
                  ["Price range", "$900K–$2.5M+ depending on location and type"],
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
          <h2 className="font-serif text-white text-3xl mb-8 text-center">Silver Lake Real Estate — FAQ</h2>
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
          <h2 className="font-serif text-white text-4xl mb-4">Let's Talk Silver Lake</h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/50 text-sm leading-relaxed mb-8">Johnny Leou (DRE#02064780) specializes in Silver Lake buyer and seller representation. Get a current market read and a strategy that fits your situation.</p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase">Contact Johnny <ArrowRight size={14} /></Link>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Boyle Heights Real Estate | Homes & Condos for Sale | Johnny Leou",
  description: "Boyle Heights real estate in 2026. Johnny Leou (DRE#02064780) covers Boyle Heights homes, investment properties, cultural neighborhood guide, and emerging market trends for LA's historic Eastside.",
};

const faq = [
  {
    q: "What is the average home price in Boyle Heights?",
    a: "As of 2026, Boyle Heights median home prices range from approximately $650K–$950K depending on proximity to Cesar Chavez Avenue and condition. Single-family homes and smaller multi-units dominate the market. The neighborhood is significantly more affordable than nearby Silver Lake, which median at $1.29M, making Boyle Heights attractive to buyers seeking Eastside location at a lower price point.",
  },
  {
    q: "What is Boyle Heights known for?",
    a: "Boyle Heights is LA's historic Chicano neighborhood with deep cultural roots dating back over a century. It's known for vibrant street art, murals, independent businesses, authentic Mexican food, and a strong sense of community. The neighborhood sits directly east of downtown LA and has been a cultural and political center for LA's Latino community. Recent years have brought renewed interest and emerging investment fundamentals.",
  },
  {
    q: "Is Boyle Heights a good investment neighborhood?",
    a: "Boyle Heights presents emerging investment opportunity in 2026. The neighborhood has several tailwinds: central location between DTLA and Echo Park, improving transit access, cultural momentum, and pricing that hasn't kept pace with adjacent neighborhoods like Silver Lake. For buyers seeking long-term appreciation and cultural authenticity, Boyle Heights offers defensible fundamentals. The challenge is that neighborhood change is gradual and gentrification is contentious—community roots matter here.",
  },
  {
    q: "What is the market like in Boyle Heights right now?",
    a: "The Boyle Heights market in 2026 is buyer-favorable with 30–40 days on market and motivated sellers. Inventory has increased slightly, providing buyers with more optionality. The neighborhood attracts first-time homebuyers, investors, and longtime residents. Prices remain anchored below nearby Eastside neighborhoods, making it a strategic entry point for buyers who believe in the long-term trajectory of central LA.",
  },
];

const stats = [
  { label: "Median Price", value: "$650K–$950K" },
  { label: "Days on Market", value: "30–40 days" },
  { label: "Market Trend", value: "Buyer-Favorable" },
  { label: "Community", value: "Historic Chicano" },
];

export default function BoylesHeightsPage() {
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
            <span className="text-white/40 text-xs tracking-widest uppercase">Boyle Heights</span>
          </div>
          <p className="section-label mb-3">Los Angeles, CA</p>
          <h1 className="section-title mb-4">Boyle Heights<br /><span className="text-gold-500 italic">Real Estate</span></h1>
          <div className="gold-divider" />
          <p className="text-white/50 text-sm mt-6 max-w-2xl leading-relaxed">
            Boyle Heights is LA's historic Eastside neighborhood with cultural depth, emerging investment fundamentals, and pricing that reflects opportunity. Johnny Leou (DRE#02064780) provides expert buyer and seller representation throughout Boyle Heights and greater LA.
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
              <h2 className="font-serif text-white text-3xl mb-4">Boyle Heights — Historic Heart of Eastside LA</h2>
              <div className="gold-divider mb-6" />
              <div className="space-y-4 text-white/60 text-sm leading-relaxed">
                <p>Boyle Heights is the historic center of LA's Chicano community—a neighborhood with over a century of cultural depth, political significance, and community organizing. The streets are marked by world-class muralism, independent businesses, authentic food, and a strong sense of place that's authentic to Los Angeles.</p>
                <p>The neighborhood sits directly east of downtown LA, making it geographically central despite its eastside identity. Cesar Chavez Avenue runs through the heart of Boyle Heights and serves as the commercial and cultural spine. East LA Street, Brooklyn Avenue, and the side streets contain single-family homes, small multi-units, and corner stores that have served the community for decades.</p>
                <p>For real estate purposes, Boyle Heights represents emerging opportunity. Prices have not appreciated at the pace of neighboring Silver Lake and Los Feliz, making it attractive to buyers seeking Eastside location at a meaningful discount. The neighborhood offers walkability, cultural authenticity, improving transit connections, and positioning between downtown LA and the higher-priced Eastside neighborhoods.</p>
                <p>The real estate market is primarily single-family homes and small multi-unit buildings. New construction is limited. Renovation and adaptive reuse are common. The strongest demand comes from first-time buyers, investors, and longtime residents seeking to stay in their community. Boyle Heights attracts buyers who value cultural roots and long-term appreciation over immediate gentrification.</p>
              </div>
              <div className="mt-8 space-y-3">
                <h3 className="font-serif text-white text-xl">Who Lives Here</h3>
                <ul className="space-y-2 text-white/60 text-sm">
                  {["Multigenerational Latino families with deep community roots", "First-time homebuyers and young professionals seeking Eastside location", "Investors interested in emerging neighborhood fundamentals", "Artists and creatives drawn to the street art and cultural scene", "Longtime residents building intergenerational wealth through homeownership"].map((item) => (
                    <li key={item} className="flex items-start gap-2"><span className="text-gold-500 shrink-0">-</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80" alt="Boyle Heights Los Angeles street art" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="glass-card p-6 space-y-4">
                <h3 className="font-serif text-white text-lg">At a Glance</h3>
                {[
                  ["Borders", "East LA, DTLA, Lincoln Heights, City Terrace"],
                  ["Best for", "Cultural authenticity, walkability, emerging investment, first-time buyers"],
                  ["Schools", "LAUSD schools throughout; several good public options"],
                  ["Transit", "Metro Gold Line (future extension), bus lines, car-friendly street grid"],
                  ["Price range", "$650K–$950K single-family homes; small multi-units $800K–$1.2M"],
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
          <h2 className="font-serif text-white text-3xl mb-8 text-center">Boyle Heights Real Estate — FAQ</h2>
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
          <p className="section-label mb-3">Emerging Eastside Opportunity</p>
          <h2 className="font-serif text-white text-4xl mb-4">Let's Talk Boyle Heights</h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/50 text-sm leading-relaxed mb-8">Johnny Leou (DRE#02064780) provides expert buyer and seller representation throughout Boyle Heights and greater LA. Get a current market read, understand emerging fundamentals, and develop a strategy built around your goals.</p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase">Contact Johnny <ArrowRight size={14} /></Link>
        </div>
      </section>
    </>
  );
}

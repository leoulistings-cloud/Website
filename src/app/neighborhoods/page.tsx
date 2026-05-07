import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "LA Neighborhood Guides | Real Estate by Area | Johnny Leou",
  description: "Hyperlocal real estate guides for Los Angeles neighborhoods. Johnny Leou (DRE#02064780) covers Silver Lake, Los Feliz, Echo Park, Koreatown, Highland Park, and Boyle Heights with current market data.",
};

const neighborhoods = [
  {
    name: "Silver Lake",
    slug: "silver-lake",
    tagline: "LA's premier Eastside neighborhood",
    price: "$1.29M median",
    dom: "22 days on market",
    trend: "Stable",
    description: "Walkable, culturally rich, and consistently one of LA's strongest long-term appreciation markets. Centered on the reservoir.",
  },
  {
    name: "Los Feliz",
    slug: "los-feliz",
    tagline: "Architecture and Griffith Park at your door",
    price: "$1.85M median",
    dom: "18 days on market",
    trend: "Stable",
    description: "Premium architectural housing at the base of Griffith Park. Limited inventory, strong demand, and one of LA's most defensible ownership markets.",
  },
  {
    name: "Echo Park",
    slug: "echo-park",
    tagline: "Eastside culture at an accessible price point",
    price: "$985K median",
    dom: "28 days on market",
    trend: "Buyer-Favorable",
    description: "Strong buyer conditions in 2026. Motivated sellers, cultural density, and LA Eastside location at a meaningful discount to Silver Lake.",
  },
  {
    name: "Koreatown",
    slug: "koreatown",
    tagline: "LA's most transit-connected central neighborhood",
    price: "$450K-$850K condos",
    dom: "Stable",
    trend: "Strong for Investors",
    description: "Highest density in LA, two Metro stations, exceptional food scene, and investment fundamentals that remain underpriced relative to the infrastructure.",
  },
  {
    name: "Highland Park",
    slug: "highland-park",
    tagline: "Thriving arts, food, and investment scene",
    price: "$850K-$1.2M median",
    dom: "25-35 days on market",
    trend: "Strong Appreciation",
    description: "Mature restaurant and bar scene, independent galleries, and cultural energy at prices below Silver Lake. Strong long-term value and investment fundamentals for Eastside buyers.",
  },
  {
    name: "Boyle Heights",
    slug: "boyle-heights",
    tagline: "Historic Eastside neighborhood with emerging market",
    price: "$650K-$950K median",
    dom: "30-40 days on market",
    trend: "Buyer-Favorable",
    description: "Rich cultural heritage, street art scene, and emerging investment fundamentals. More affordable than neighboring Silver Lake with strong community roots and walkability.",
  },
];

export default function NeighborhoodsPage() {
  return (
    <>
      <section className="relative pt-32 pb-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={12} className="text-gold-500" />
            <span className="text-white/40 text-xs tracking-widest uppercase">Neighborhood Guides</span>
          </div>
          <p className="section-label mb-3">Los Angeles, CA</p>
          <h1 className="section-title mb-4">
            Neighborhood<br />
            <span className="text-gold-500 italic">Guides</span>
          </h1>
          <div className="gold-divider" />
          <p className="text-white/50 text-sm mt-6 max-w-2xl leading-relaxed">
            Hyperlocal real estate guides for LA's most sought-after neighborhoods - current market data, honest assessments, and buyer strategy from Johnny Leou (DRE#02064780).
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {neighborhoods.map((n) => (
              <Link key={n.slug} href={`/neighborhoods/${n.slug}`} className="group glass-card p-8 flex flex-col hover:border-gold-500/30 border border-white/5 transition-all duration-500">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-serif text-white text-2xl group-hover:text-gold-400 transition-colors">{n.name}</h2>
                    <p className="text-gold-500/70 text-xs tracking-widest uppercase mt-1">{n.tagline}</p>
                  </div>
                  <ArrowRight size={16} className="text-white/20 group-hover:text-gold-500 transition-colors shrink-0 mt-1" />
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">{n.description}</p>
                <div className="border-t border-white/5 pt-4 grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-white/30 text-[10px] tracking-widest uppercase">Price</p>
                    <p className="text-white text-sm mt-0.5">{n.price}</p>
                  </div>
                  <div>
                    <p className="text-white/30 text-[10px] tracking-widest uppercase">Market</p>
                    <p className="text-gold-500 text-sm mt-0.5">{n.trend}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-900">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="section-label mb-3">Don't See Your Neighborhood?</p>
          <h2 className="font-serif text-white text-4xl mb-4">I Cover All of LA and OC</h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/50 text-sm leading-relaxed mb-8">These guides cover my most-requested neighborhoods. I work across all of Los Angeles and Orange County - Boyle Heights, Highland Park, DTLA, Long Beach, Irvine, Tustin, and beyond. Get a market read on any neighborhood you're considering.</p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase">
            Ask About Any Neighborhood <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}

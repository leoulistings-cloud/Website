import Link from "next/link";
import { ArrowRight, TrendingUp, Home, Key, Award } from "lucide-react";

const caseStudies = [
  {
    icon: TrendingUp,
    outcome: "$120K Over Asking",
    detail: "10 Offers Generated",
    neighborhood: "Los Angeles",
    type: "Seller",
    description:
      "Engineered maximum demand through strategic pricing, professional staging, and a tightly managed offer process. Ten competing buyers drove the final sale price $120,000 above asking - a result built on preparation, not luck.",
    stats: [
      { label: "Offers Received", value: "10" },
      { label: "Over Asking", value: "$120K" },
      { label: "Days to Offer", value: "7" },
    ],
  },
  {
    icon: TrendingUp,
    outcome: "$30K Over Asking",
    detail: "Multiple Offers",
    neighborhood: "Boyle Heights",
    type: "Seller",
    description:
      "In one of LA's most price-sensitive and competitive markets, a targeted launch strategy and deep neighborhood knowledge produced multiple offers and a final price $30,000 above asking - with clean terms.",
    stats: [
      { label: "Result", value: "+$30K" },
      { label: "Market", value: "Boyle Heights" },
      { label: "Offers", value: "Multiple" },
    ],
  },
  {
    icon: Key,
    outcome: "$115K Down Payment Assistance",
    detail: "MIPA Program",
    neighborhood: "North Hollywood",
    type: "Buyer",
    description:
      "Successfully navigated the MIPA program - one of California's most complex down payment assistance programs - securing $115,000 in assistance for a first-time buyer. Closed $14,000 below asking with a $5,000 credit to the buyer within a strict 60-day escrow.",
    stats: [
      { label: "Assistance Secured", value: "$115K" },
      { label: "Below Asking", value: "$14K" },
      { label: "Buyer Credit", value: "$5K" },
    ],
  },
  {
    icon: Home,
    outcome: "Sold in Weeks",
    detail: "After 1+ Year on Market",
    neighborhood: "Downtown Los Angeles",
    type: "Seller",
    description:
      "Took on a Downtown LA condo that had been sitting unsold for over a year under previous representation. Repositioned the listing with fresh eyes, a revised pricing strategy, and a new marketing approach. Sold in weeks.",
    stats: [
      { label: "Prior Days on Market", value: "365+" },
      { label: "Days After Relisting", value: "Weeks" },
      { label: "Market", value: "DTLA" },
    ],
  },
];

export default function ResultsPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="section-label mb-3">Verified Outcomes</p>
          <h1 className="section-title mb-4">
            Client Results<br />
            <span className="text-gold-500 italic">Not Just Claims</span>
          </h1>
          <div className="gold-divider" />
          <p className="text-white/50 text-sm mt-6 max-w-2xl leading-relaxed">
            Every result below is real. Real clients, real neighborhoods, real numbers. This is what it looks like when preparation, strategy, and genuine commitment to outcomes come together.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-gold-500">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "12+", label: "Homes Sold" },
              { value: "$8.4M", label: "Total Volume" },
              { value: "$120K", label: "Best Over Asking" },
              { value: "$115K", label: "Assistance Secured" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-navy-950 text-4xl mb-1">{stat.value}</p>
                <p className="text-navy-950/60 text-xs tracking-widest uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((c, i) => (
              <div key={i} className="glass-card p-8 flex flex-col gap-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className={`inline-block text-[10px] tracking-widest uppercase px-2.5 py-1 mb-3 font-semibold ${
                      c.type === "Seller"
                        ? "bg-gold-500/20 text-gold-400"
                        : "bg-white/10 text-white/60"
                    }`}>
                      {c.type}
                    </span>
                    <h3 className="font-serif text-white text-2xl leading-tight">{c.outcome}</h3>
                    <p className="text-gold-500 text-sm mt-1">{c.detail}</p>
                  </div>
                  <div className="bg-gold-500/10 p-3 shrink-0">
                    <c.icon size={22} className="text-gold-500" />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span className="text-white/40 text-xs tracking-widest uppercase">{c.neighborhood}</span>
                </div>

                <p className="text-white/60 text-sm leading-relaxed">{c.description}</p>

                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/5">
                  {c.stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="font-serif text-white text-lg">{s.value}</p>
                      <p className="text-white/30 text-[10px] tracking-wider uppercase mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="section-label mb-3">The Standard</p>
          <h2 className="font-serif text-white text-4xl mb-4">Proof Over Promise</h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/50 text-sm leading-relaxed mb-8">
            Anyone can claim to be the best agent in Los Angeles. Very few can back it up with specific results, specific neighborhoods, and specific numbers. Johnny Leou (DRE#02064780) builds every client relationship on one principle: your outcome is the only thing that matters.
          </p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase">
            Work With Johnny <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { ArrowRight, TrendingUp, TrendingDown, MapPin, Calendar } from "lucide-react";

const laNeighborhoods = [
  { name: "Silver Lake", medianPrice: "$1.29M", dom: "22 days", trend: "stable", note: "Buyer negotiating room emerging on stale listings" },
  { name: "Echo Park", medianPrice: "$985K", dom: "28 days", trend: "down", note: "Motivated sellers, strong entry point for buyers" },
  { name: "Los Feliz", medianPrice: "$1.85M", dom: "18 days", trend: "stable", note: "Premium demand holding, limited inventory" },
  { name: "Boyle Heights", medianPrice: "$750K", dom: "31 days", trend: "down", note: "Best value relative to location in central LA" },
  { name: "Larchmont Village", medianPrice: "$1.17M", dom: "24 days", trend: "stable", note: "Quality inventory up, walkability premium holds" },
  { name: "Downtown LA", medianPrice: "$699K", dom: "45 days", trend: "down", note: "Condo buyers have strong leverage right now" },
  { name: "Beverly Hills", medianPrice: "$4.75M", dom: "35 days", trend: "stable", note: "Luxury demand resilient despite broader softening" },
  { name: "Hollywood", medianPrice: "$950K", dom: "29 days", trend: "stable", note: "Steady activity, mixed inventory quality" },
];

const ocNeighborhoods = [
  { name: "Irvine", medianPrice: "$1.45M", dom: "20 days", trend: "stable", note: "New construction creating pressure on resale pricing" },
  { name: "Tustin", medianPrice: "$879K", dom: "26 days", trend: "stable", note: "Strong schools, no HOA options driving demand" },
];

const marketStats = [
  { label: "LA Median Home Price", value: "$825K", change: "Down ~1.3% YOY", positive: false },
  { label: "OC Median Home Price", value: "$920K", change: "+5.1% YOY", positive: true },
  { label: "New Listings (MoM)", value: "+17%", change: "Most spring inventory in years", positive: true },
  { label: "Closed Sales (MoM)", value: "+31%", change: "Buyers are moving", positive: true },
];

export default function MarketPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="section-label mb-3">April 2026</p>
          <h1 className="section-title mb-4">
            LA & OC Market<br />
            <span className="text-gold-500 italic">Reports</span>
          </h1>
          <div className="gold-divider" />
          <p className="text-white/50 text-sm mt-6 max-w-2xl leading-relaxed">
            Real data on what's happening in Los Angeles and Orange County real estate right now. Updated monthly by Johnny Leou (DRE#02064780).
          </p>
          <div className="flex items-center gap-2 mt-4">
            <Calendar size={12} className="text-gold-500" />
            <span className="text-white/30 text-xs tracking-wider">Last updated: April 2026</span>
          </div>
        </div>
      </section>

      {/* Top-line Stats */}
      <section className="py-16 bg-navy-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((stat) => (
              <div key={stat.label} className="glass-card p-6">
                <p className="text-white/40 text-xs tracking-widest uppercase mb-3">{stat.label}</p>
                <p className="font-serif text-white text-3xl mb-2">{stat.value}</p>
                <div className="flex items-center gap-2">
                  {stat.positive
                    ? <TrendingUp size={12} className="text-gold-500" />
                    : <TrendingDown size={12} className="text-red-400" />
                  }
                  <span className={`text-xs ${stat.positive ? "text-gold-500" : "text-red-400"}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Summary */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="section-label mb-3">The Big Picture</p>
              <h2 className="font-serif text-white text-3xl mb-4">What the Data Is Saying</h2>
              <div className="gold-divider mb-6" />
              <div className="space-y-4 text-white/60 text-sm leading-relaxed">
                <p>
                  April 2026 marks the fourth consecutive month of year-over-year home price declines across Los Angeles. Combined with a 17% surge in new listings and a 31% jump in closed sales month-over-month, the market is telling a nuanced story: inventory is loosening, buyers are gaining leverage, and the spring window is real - but brief.
                </p>
                <p>
                  Several perimeter LA neighborhoods have shifted into full buyer's market conditions, with longer days on market and price reductions becoming more common. Core neighborhoods like Los Feliz, Beverly Hills, and Silver Lake remain competitive but are showing cracks that informed buyers can exploit.
                </p>
                <p>
                  Orange County is more resilient overall, with Irvine and Tustin seeing consistent demand driven by schools, safety, and employer proximity. New construction in Irvine is, however, putting downward pressure on resale pricing - a dynamic worth tracking.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { title: "For Buyers", color: "text-gold-500", points: ["4 months of YOY price softening create real negotiating room", "Inventory up 17% means more options, less panic buying", "Credits and price reductions becoming standard in softer pockets", "Best entry window for LA buyers since 2020"] },
                { title: "For Sellers", color: "text-white", points: ["Pricing strategy is more critical than ever - overpricing stalls fast", "Homes priced right still move quickly with strong representation", "Professional staging and targeted marketing separate top listings", "Spring activity is accelerating - now is still a viable time to list"] },
              ].map((box) => (
                <div key={box.title} className="glass-card p-6">
                  <p className={`font-serif text-xl mb-4 ${box.color}`}>{box.title}</p>
                  <ul className="space-y-2">
                    {box.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-white/60 text-sm">
                        <span className="text-gold-500 mt-1 shrink-0">-</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LA Neighborhood Breakdown */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <MapPin size={16} className="text-gold-500" />
              <p className="section-label">Los Angeles</p>
            </div>
            <h2 className="font-serif text-white text-3xl">Neighborhood Breakdown</h2>
            <div className="gold-divider mt-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {laNeighborhoods.map((n) => (
              <div key={n.name} className="glass-card p-5 flex gap-5 items-start">
                <div className="shrink-0 mt-1">
                  {n.trend === "down"
                    ? <TrendingDown size={16} className="text-red-400" />
                    : <TrendingUp size={16} className="text-gold-500" />
                  }
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <p className="text-white font-medium text-sm">{n.name}</p>
                    <p className="font-serif text-gold-500 text-sm shrink-0">{n.medianPrice}</p>
                  </div>
                  <p className="text-white/30 text-xs mb-2">Avg. {n.dom} on market</p>
                  <p className="text-white/50 text-xs leading-relaxed">{n.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OC Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <MapPin size={16} className="text-gold-500" />
              <p className="section-label">Orange County</p>
            </div>
            <h2 className="font-serif text-white text-3xl">Neighborhood Breakdown</h2>
            <div className="gold-divider mt-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ocNeighborhoods.map((n) => (
              <div key={n.name} className="glass-card p-5 flex gap-5 items-start">
                <div className="shrink-0 mt-1">
                  <TrendingUp size={16} className="text-gold-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <p className="text-white font-medium text-sm">{n.name}</p>
                    <p className="font-serif text-gold-500 text-sm shrink-0">{n.medianPrice}</p>
                  </div>
                  <p className="text-white/30 text-xs mb-2">Avg. {n.dom} on market</p>
                  <p className="text-white/50 text-xs leading-relaxed">{n.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="section-label mb-3">Let's Talk Strategy</p>
          <h2 className="font-serif text-white text-4xl mb-4">Know What the Market Means for You</h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/50 text-sm leading-relaxed mb-8">
            Market data tells you what's happening. Johnny Leou (DRE#02064780) tells you what to do about it. Whether you're buying, selling, or timing a move - get a straight answer.
          </p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase">
            Get My Market Read <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}

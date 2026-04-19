import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Globe, ArrowRight, Star } from "lucide-react";
import { agents, testimonials } from "@/data/agents";

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy-950/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <p className="section-label mb-3">Who We Are</p>
          <h1 className="section-title mb-4 max-w-2xl">
            A Different Kind of<br />
            <span className="text-gold-500 italic">Real Estate Firm</span>
          </h1>
          <div className="gold-divider" />
          <p className="text-white/60 text-base leading-relaxed mt-6 max-w-2xl">
            GrandLuxe was built on a conviction that the most significant real estate transactions deserve advisors who combine profound market expertise with the discretion and personal dedication typically associated with private banking.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">Our Story</p>
              <h2 className="section-title mb-4">Founded on Principle</h2>
              <div className="gold-divider" />
              <div className="space-y-5 mt-6 text-white/60 text-sm leading-relaxed">
                <p>
                  In 2003, Victoria Harrington closed her first $10M transaction — and realized that the brokerage world had no firm truly dedicated to serving buyers and sellers at the highest tier. Most luxury brokers were general practitioners who handled the occasional significant listing. She wanted to build something different.
                </p>
                <p>
                  GrandLuxe was founded with three advisors, two markets, and an unwavering conviction: that clients at the pinnacle of the market deserve representation that matches the magnitude of their decisions. Two decades and $14.2 billion in transactions later, that conviction has never changed.
                </p>
                <p>
                  Today we operate in twelve markets across the United States, with affiliated partners in London, Monaco, Tuscany, and the Caribbean. Our roster of clients includes heads of state, Fortune 100 CEOs, cultural luminaries, and families managing multigenerational wealth. What unites them is an expectation of absolute excellence — and our commitment to delivering it.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&q=80"
                  alt="GrandLuxe Office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold-500 p-6">
                <p className="font-serif text-navy-950 text-4xl">22</p>
                <p className="text-navy-950/70 text-xs tracking-widest uppercase">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="section-label mb-3">What We Stand For</p>
            <h2 className="section-title">Our Guiding Principles</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Absolute Discretion",
                body: "Every engagement is handled with the confidentiality of a private banking relationship. Our clients trust us with their most significant financial decisions — and their privacy.",
              },
              {
                number: "02",
                title: "Market Intelligence",
                body: "We maintain deep expertise in every market we serve, with access to off-market inventory, transaction data, and local knowledge that gives our clients a decisive advantage.",
              },
              {
                number: "03",
                title: "Personal Dedication",
                body: "We work with a limited number of clients at any time. This ensures that every person who trusts us with their transaction receives our full attention and energy.",
              },
            ].map((v) => (
              <div key={v.number} className="glass-card p-8">
                <p className="font-serif text-gold-500/40 text-6xl mb-4">{v.number}</p>
                <h3 className="font-serif text-white text-xl mb-3">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="section-label mb-3">The Team</p>
            <h2 className="section-title">Your Advisors</h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="space-y-20">
            {agents.map((agent, i) => (
              <div
                key={agent.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={agent.image}
                      alt={agent.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass-card p-4 flex items-center justify-between">
                      <div>
                        <p className="text-white/50 text-xs tracking-wider uppercase">Total Volume</p>
                        <p className="font-serif text-gold-500 text-2xl">{agent.volume}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white/50 text-xs tracking-wider uppercase">Properties Sold</p>
                        <p className="font-serif text-gold-500 text-2xl">{agent.sold}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="section-label mb-2">{agent.title}</p>
                  <h3 className="font-serif text-white text-4xl mb-2">{agent.name}</h3>
                  <div className="gold-divider mb-6" />
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{agent.bio}</p>

                  <div className="mb-6">
                    <p className="text-white/40 text-xs tracking-widest uppercase mb-3">Specialties</p>
                    <div className="flex flex-wrap gap-2">
                      {agent.specialties.map((s) => (
                        <span key={s} className="border border-gold-500/30 text-gold-500/70 text-xs px-3 py-1">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-white/40 text-xs tracking-widest uppercase mb-3">Languages</p>
                    <p className="text-white/60 text-sm">{agent.languages.join(" · ")}</p>
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <a
                      href={`tel:${agent.phone}`}
                      className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
                    >
                      <Phone size={14} className="text-gold-500" /> {agent.phone}
                    </a>
                    <a
                      href={`mailto:${agent.email}`}
                      className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
                    >
                      <Mail size={14} className="text-gold-500" /> {agent.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Client Voices</p>
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="glass-card p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <Image src={t.image} alt={t.name} fill className="object-cover" sizes="48px" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{t.name}</p>
                    <p className="text-gold-500/70 text-xs mt-0.5">{t.propertyType} · {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="section-label mb-3">Begin</p>
          <h2 className="font-serif text-white text-4xl mb-4">Ready to Work Together?</h2>
          <div className="gold-divider mx-auto" />
          <p className="text-white/50 text-sm mt-4 mb-8 leading-relaxed">
            Every exceptional real estate journey begins with a conversation. We'd be honored to hear about yours.
          </p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase">
            Get In Touch <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, ArrowRight, Star, MapPin, Check } from "lucide-react";
import { agents, testimonials } from "@/data/agents";

export const metadata: Metadata = {
  title: "About Johnny Leou | Los Angeles Real Estate Agent",
  description: "Meet Johnny Leou, a Los Angeles real estate agent with 20+ years of experience. Specializes in residential, luxury homes, and investment properties across LA & Orange County.",
  openGraph: {
    title: "About Johnny Leou | Los Angeles Real Estate Agent",
    description: "Meet Johnny Leou, a Los Angeles real estate agent with 20+ years of experience.",
    url: "https://johnnyleou.com/about",
  },
};

const agent = agents[0];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://i.imgur.com/4hUclTJ.jpg"
            alt="Los Angeles"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy-950/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <p className="section-label mb-3">Your Agent</p>
          <h1 className="section-title mb-4 max-w-2xl">
            Johnny Leou<br />
            <span className="text-gold-500 italic">Real Estate Agent</span>
          </h1>
          <div className="gold-divider" />
          <p className="text-white/60 text-base leading-relaxed mt-6 max-w-2xl">
            DRE #02064780 · Los Angeles & Orange County
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://i.imgur.com/hxM6WgE.jpg"
                  alt="Johnny Leou"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold-500 p-6">
                <p className="font-serif text-navy-950 text-4xl">20+</p>
                <p className="text-navy-950/70 text-xs tracking-widest uppercase">Years Experience</p>
              </div>
            </div>

            <div>
              <p className="section-label mb-3">About Johnny</p>
              <h2 className="section-title mb-4">People-First.<br /><span className="text-gold-500 italic">Results-Driven.</span></h2>
              <div className="gold-divider mb-6" />
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                {agent.bio}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-8">
                <a href="https://calendly.com/leoulistings" target="_blank" rel="noopener noreferrer" className="btn-gold px-6 py-3 text-xs tracking-widest uppercase">
                  Schedule Now
                </a>
                <a href={`tel:${agent.phone}`} className="btn-outline-gold px-6 py-3 text-xs tracking-widest uppercase flex items-center gap-2">
                  <Phone size={13} /> Call
                </a>
                <Link href="/contact" className="btn-outline-gold px-6 py-3 text-xs tracking-widest uppercase flex items-center gap-2">
                  Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">What I Do Best</p>
              <h2 className="section-title mb-4">Specialties &<br /><span className="text-gold-500 italic">Who I Serve</span></h2>
              <div className="gold-divider mb-8" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "First-Time Home Buyers",
                  "Home Sellers",
                  "Real Estate Investors",
                  "LGBTQ+ Clients",
                  "Immigrant Families",
                  "Luxury Homes",
                  "Income Properties",
                  "Residential Sales",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check size={14} className="text-gold-500 shrink-0" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  title: "Los Angeles",
                  areas: "Silver Lake, Los Feliz, Echo Park, Larchmont, Beverly Hills, Hollywood, Boyle Heights, DTLA",
                },
                {
                  title: "Orange County",
                  areas: "Irvine, Tustin, and surrounding communities",
                },
              ].map((region) => (
                <div key={region.title} className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin size={16} className="text-gold-500" />
                    <p className="font-serif text-white text-lg">{region.title}</p>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{region.areas}</p>
                </div>
              ))}
              <div className="glass-card p-6">
                <p className="text-gold-500 text-xs tracking-widest uppercase mb-3">Background</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  With 20+ years in hospitality before real estate, Johnny brings a service mindset that most agents simply don't have - clear communication, genuine care for every client, and a commitment to results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gold-500">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "12+", label: "Homes Sold" },
              { value: "$8.4M", label: "Total Volume" },
              { value: "20+", label: "Years in Service" },
              { value: "5★", label: "Client Reviews" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-navy-950 text-4xl mb-1">{stat.value}</p>
                <p className="text-navy-950/60 text-xs tracking-widest uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Client Reviews</p>
            <h2 className="section-title">What Clients Say</h2>
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
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white font-medium text-sm">{t.name}</p>
                  <p className="text-gold-500/70 text-xs mt-0.5">{t.propertyType} · {t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="section-label mb-3">Let's Talk</p>
          <h2 className="font-serif text-white text-4xl mb-4">Ready to Get Started?</h2>
          <div className="gold-divider mx-auto" />
          <p className="text-white/50 text-sm mt-4 mb-8 leading-relaxed">
            Whether you're buying, selling, or just exploring your options - Johnny is here to help. No pressure, just honest advice.
          </p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase">
            Get In Touch <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, TrendingUp, TrendingDown, MapPin, Award, Users, Star } from "lucide-react";
import PropertySearch from "@/components/PropertySearch";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blog-posts";
import { agents, testimonials, marketStats } from "@/data/agents";

const heroImages = [
  "https://i.imgur.com/BmBZafG.jpg",
  "https://i.imgur.com/D56aUuf.jpg",
  "https://i.imgur.com/GmMgVt8.jpg",
];

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function HomePage() {
  const [heroIdx, setHeroIdx] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const recentPosts = blogPosts.slice(0, 3);

  useScrollAnimation();

  useEffect(() => {
    const t = setInterval(() => setHeroIdx((i) => (i + 1) % heroImages.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background images */}
        {heroImages.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1500"
            style={{ opacity: i === heroIdx ? 1 : 0 }}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/30" />

        {/* Image dots */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIdx(i)}
              className={`rounded-full transition-all duration-300 ${
                i === heroIdx ? "w-2 h-6 bg-gold-500" : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-24 pt-40">
          <div className="max-w-3xl">
            <p className="section-label mb-5 animate-fade-in">
              Los Angeles & Orange County Real Estate
            </p>
            <h1 className="font-serif text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] mb-8 animate-fade-up">
              Your Perfect Home
              <br />
              <span className="text-gold-500 italic">Awaits</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Specializing in residential real estate, luxury homes, and investment properties across LA and Orange County. With 20+ years of experience, Johnny Leou delivers expert guidance and personalized service for every client.
            </p>
            <div className="flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link href="/properties" className="btn-gold px-8 py-4 text-sm tracking-widest uppercase">
                Explore Properties
              </Link>
              <a href="https://calendly.com/leoulistings" target="_blank" rel="noopener noreferrer" className="btn-outline-gold px-8 py-4 text-sm tracking-widest uppercase">
                Schedule a Showing
              </a>
            </div>
          </div>

          {/* Search bar */}
          <div className="mt-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <PropertySearch />
          </div>
        </div>
      </section>

      {/* ─── MARKET STATS ─────────────────────────────────────────── */}
      <section className="bg-gold-500">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {marketStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-navy-950 text-3xl font-light">{stat.value}</p>
                <p className="text-navy-900/70 text-xs tracking-widest uppercase mt-1">{stat.label}</p>
                <p
                  className={`text-xs font-semibold mt-1 flex items-center justify-center gap-1 ${
                    stat.positive ? "text-navy-800" : "text-red-700"
                  }`}
                >
                  {stat.positive ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                  {stat.change} YoY
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── BRAND STORY ──────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy-950/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <p className="section-label mb-4">Why Choose Johnny</p>
              <h2 className="section-title mb-6">
                Real Estate Expertise<br />
                <span className="text-gold-500 italic">With Heart</span>
              </h2>
              <div className="gold-divider" />
              <p className="text-white/60 leading-relaxed mb-6 mt-4">
                After 20+ years in hospitality, Johnny brings exceptional service, strong negotiation, and clear communication to every transaction. He specializes in helping first-time buyers, home sellers, real estate investors, LGBTQ+ clients, and immigrant families find their perfect property.
              </p>
              <p className="text-white/60 leading-relaxed mb-10">
                Based in Los Angeles and Orange County, Johnny combines deep local market knowledge with a people-first approach. Your goals are his goals, and he's committed to helping you succeed.
              </p>
              <Link href="/about" className="btn-gold px-8 py-4 text-xs tracking-widest uppercase">
                Learn More
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 animate-on-scroll">
              {[
                { icon: Award, value: "$8.4M", label: "Total Volume Sold" },
                { icon: Users, value: "12+", label: "Clients Served" },
                { icon: MapPin, value: "6", label: "Markets Served" },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="glass-card p-6 text-center">
                  <Icon size={24} className="text-gold-500 mx-auto mb-4" />
                  <p className="font-serif text-white text-3xl mb-2">{value}</p>
                  <p className="text-white/40 text-xs tracking-wider uppercase">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── OUR TEAM ─────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="section-label mb-3">Meet Your Agent</p>
            <h2 className="section-title">Johnny Leou</h2>
            <div className="gold-divider mx-auto" />
            <p className="text-white/40 text-xs tracking-widest uppercase mt-4">DRE #02064780 | eXp Realty | Broker License #02188471</p>
          </div>

          <div className="flex justify-center">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="group text-center animate-on-scroll max-w-sm w-full"
              >
                <div className="relative w-56 h-56 mx-auto mb-6 overflow-hidden rounded-full">
                  <Image
                    src="https://i.imgur.com/hxM6WgE.jpg"
                    alt={agent.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    sizes="224px"
                  />
                  <div className="absolute inset-0 border-2 border-gold-500/0 group-hover:border-gold-500/60 transition-all duration-500 rounded-full" />
                </div>
                <h3 className="font-serif text-white text-2xl mb-1">{agent.name}</h3>
                <p className="text-gold-500 text-xs tracking-widest uppercase mb-4">{agent.title}</p>
                <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-3">{agent.bio}</p>
                <div className="flex justify-center gap-10 text-center text-xs">
                  <div>
                    <p className="font-serif text-gold-500 text-xl">{agent.volume}</p>
                    <p className="text-white/40 tracking-wider uppercase">Volume</p>
                  </div>
                  <div>
                    <p className="font-serif text-gold-500 text-xl">{agent.sold}</p>
                    <p className="text-white/40 tracking-wider uppercase">Sold</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="section-label mb-3">Client Voices</p>
            <h2 className="section-title">Stories of Exceptional Service</h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className="glass-card p-8 animate-on-scroll"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white font-medium text-sm">{t.name}</p>
                  <p className="text-gold-500/70 text-xs tracking-wider mt-0.5">{t.propertyType} · {t.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <a
              href="https://www.google.com/maps/place/Keller+Williams+DTLA-+Johnny+Leou/@34.0478003,-118.2586649,17z/data=!4m8!3m7!1s0x80c2c79b2aaf9687:0xab3e141027356ef3!8m2!3d34.0478003!4d-118.2586649!9m1!1b1!16s%2Fg%2F11krqdct4_?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold inline-flex items-center gap-3 px-8 py-3.5 text-xs tracking-widest uppercase"
            >
              <Star size={13} className="fill-gold-500 text-gold-500" />
              Read More Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* ─── BLOG PREVIEW ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 animate-on-scroll">
            <div>
              <p className="section-label mb-3">Guides & Insights</p>
              <h2 className="section-title">Real Estate Blog</h2>
              <div className="gold-divider" />
            </div>
            <Link
              href="/blog"
              className="btn-outline-gold px-6 py-3 text-xs tracking-widest uppercase shrink-0 flex items-center gap-2"
            >
              All Articles <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 animate-on-scroll">
              <BlogCard post={recentPosts[0]} featured />
            </div>
            <div className="flex flex-col gap-8 justify-center animate-on-scroll" style={{ transitionDelay: "150ms" }}>
              {recentPosts.slice(1).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
              <div className="border-t border-white/10 pt-6">
                <p className="text-white/50 text-xs leading-relaxed">
                  Market reports, design insights, and buying guides from our team of experts — delivered weekly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy-950/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-950/60" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center animate-on-scroll">
          <p className="section-label mb-4">Begin Your Journey</p>
          <h2 className="section-title mb-6">
            Your Ideal Property<br />
            <span className="text-gold-500 italic">is Waiting</span>
          </h2>
          <div className="gold-divider mx-auto" />
          <p className="text-white/60 leading-relaxed mt-6 mb-10">
            Whether you're searching for your next residence or seeking a discreet buyer for a significant property, our team is ready to deliver an experience unlike any other.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold px-10 py-4 text-sm tracking-widest uppercase">
              Connect With Us
            </Link>
            <Link href="/properties" className="btn-outline-gold px-10 py-4 text-sm tracking-widest uppercase">
              Browse Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Video modal */}
      {videoPlaying && (
        <div
          className="fixed inset-0 z-50 bg-navy-950/95 flex items-center justify-center p-6"
          onClick={() => setVideoPlaying(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video bg-navy-900 flex items-center justify-center">
            <p className="text-white/40 text-sm">Video player would be embedded here.</p>
            <button
              onClick={() => setVideoPlaying(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white text-sm tracking-widest uppercase"
            >
              Close ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

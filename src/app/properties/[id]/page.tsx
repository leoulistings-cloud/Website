"use client";
import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Bed, Bath, Square, Car, Calendar, MapPin, Phone, Mail,
  ArrowLeft, Check, Share2, Heart, ChevronLeft, ChevronRight
} from "lucide-react";
import { getPropertyById, properties } from "@/data/properties";
import { agents } from "@/data/agents";
import PropertyCard from "@/components/PropertyCard";

function formatPrice(price: number): string {
  if (price >= 1000000) return `$${(price / 1000000).toFixed(1)}M`;
  return `$${price.toLocaleString()}`;
}

export default function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const property = getPropertyById(id);
  if (!property) notFound();

  const [imgIndex, setImgIndex] = useState(0);
  const [saved, setSaved] = useState(false);
  const agent = agents[0];

  const related = properties
    .filter((p) => p.id !== property.id && p.city === property.city)
    .slice(0, 3);

  return (
    <>
      {/* Back */}
      <div className="pt-24 pb-4 bg-navy-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-white/50 hover:text-gold-500 text-xs tracking-widest uppercase transition-colors"
          >
            <ArrowLeft size={12} /> Back to Properties
          </Link>
        </div>
      </div>

      {/* Gallery */}
      <section className="relative bg-navy-950">
        <div className="max-w-7xl mx-auto">
          {/* Main image */}
          <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden">
            <Image
              src={property.images[imgIndex]}
              alt={property.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />

            {/* Nav */}
            {property.images.length > 1 && (
              <>
                <button
                  onClick={() => setImgIndex(i => i === 0 ? property.images.length - 1 : i - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-navy-950/70 flex items-center justify-center hover:bg-navy-950 transition-colors"
                >
                  <ChevronLeft size={18} className="text-white" />
                </button>
                <button
                  onClick={() => setImgIndex(i => i === property.images.length - 1 ? 0 : i + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-navy-950/70 flex items-center justify-center hover:bg-navy-950 transition-colors"
                >
                  <ChevronRight size={18} className="text-white" />
                </button>
              </>
            )}

            {/* Counter */}
            <div className="absolute bottom-4 right-4 bg-navy-950/80 px-3 py-1 text-xs text-white/70">
              {imgIndex + 1} / {property.images.length}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 p-3 bg-navy-900 overflow-x-auto">
            {property.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setImgIndex(i)}
                className={`relative w-24 h-16 shrink-0 overflow-hidden border-2 transition-all ${
                  i === imgIndex ? "border-gold-500" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" sizes="96px" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-gold-500 text-xs tracking-widest uppercase">{property.type}</span>
                    {property.new && (
                      <span className="ml-3 bg-gold-500 text-navy-950 text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5">
                        New
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSaved(!saved)}
                      className="p-2 border border-white/10 hover:border-gold-500 transition-colors"
                    >
                      <Heart size={14} className={saved ? "fill-gold-500 text-gold-500" : "text-white/50"} />
                    </button>
                    <button className="p-2 border border-white/10 hover:border-gold-500 transition-colors">
                      <Share2 size={14} className="text-white/50" />
                    </button>
                  </div>
                </div>
                <h1 className="font-serif text-white text-4xl mb-3">{property.title}</h1>
                <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
                  <MapPin size={12} className="text-gold-500" />
                  {property.address}, {property.city}, {property.state}
                </div>
                <p className="font-serif text-gold-500 text-4xl">{formatPrice(property.price)}</p>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 p-6 bg-navy-900 border border-white/5">
                {[
                  { icon: Bed, value: `${property.beds}`, label: "Bedrooms" },
                  { icon: Bath, value: `${property.baths}`, label: "Bathrooms" },
                  { icon: Square, value: `${property.sqft.toLocaleString()}`, label: "Sq. Ft." },
                  { icon: Car, value: `${property.garage}`, label: "Garage" },
                ].map(({ icon: Icon, value, label }) => (
                  <div key={label} className="text-center">
                    <Icon size={20} className="text-gold-500 mx-auto mb-2" />
                    <p className="font-serif text-white text-2xl">{value}</p>
                    <p className="text-white/40 text-xs tracking-wider uppercase mt-0.5">{label}</p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mb-10">
                <h2 className="font-serif text-white text-2xl mb-4">About This Property</h2>
                <div className="gold-divider mb-4" />
                <p className="text-white/60 leading-relaxed">{property.description}</p>
              </div>

              {/* Features */}
              <div className="mb-10">
                <h2 className="font-serif text-white text-2xl mb-4">Property Highlights</h2>
                <div className="gold-divider mb-6" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-3">
                      <Check size={14} className="text-gold-500 shrink-0 mt-0.5" />
                      <span className="text-white/70 text-sm">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div>
                <h2 className="font-serif text-white text-2xl mb-4">Property Details</h2>
                <div className="gold-divider mb-6" />
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { label: "Property Type", value: property.type },
                    { label: "Status", value: property.status },
                    { label: "Year Built", value: property.yearBuilt },
                    { label: "Lot Size", value: property.lotSize },
                    { label: "Days on Market", value: property.daysOnMarket },
                    { label: "Listing Agent", value: property.agent },
                  ].map(({ label, value }) => (
                    <div key={label} className="border border-white/5 p-4">
                      <p className="text-white/40 text-xs tracking-wider uppercase mb-1">{label}</p>
                      <p className="text-white text-sm">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Agent card */}
                <div className="bg-navy-900 border border-white/5 p-6">
                  <p className="text-gold-500 text-xs tracking-widest uppercase mb-4">Listing Agent</p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-14 h-14 overflow-hidden">
                      <Image src={agent.image} alt={agent.name} fill className="object-cover" sizes="56px" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{agent.name}</p>
                      <p className="text-white/50 text-xs">{agent.title}</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <a
                      href={`tel:${agent.phone}`}
                      className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors"
                    >
                      <Phone size={13} className="text-gold-500" /> {agent.phone}
                    </a>
                    <a
                      href={`mailto:${agent.email}`}
                      className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors"
                    >
                      <Mail size={13} className="text-gold-500" /> {agent.email}
                    </a>
                  </div>
                </div>

                {/* Inquiry form */}
                <div className="bg-navy-900 border border-gold-500/20 p-6">
                  <p className="font-serif text-white text-xl mb-1">Inquire About This Property</p>
                  <p className="text-white/40 text-xs mb-5">All inquiries are handled with complete discretion.</p>
                  <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-navy-950 border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-gold-500 transition-colors placeholder:text-white/30"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-navy-950 border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-gold-500 transition-colors placeholder:text-white/30"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full bg-navy-950 border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-gold-500 transition-colors placeholder:text-white/30"
                    />
                    <textarea
                      placeholder="I'm interested in scheduling a private showing..."
                      rows={4}
                      className="w-full bg-navy-950 border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-gold-500 transition-colors placeholder:text-white/30 resize-none"
                      defaultValue={`I am interested in ${property.title} listed at ${formatPrice(property.price)}. Please contact me to arrange a private showing.`}
                    />
                    <button type="submit" className="btn-gold w-full py-3 text-xs tracking-widest uppercase">
                      Request Showing
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 bg-navy-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="font-serif text-white text-2xl mb-8">
              More in {property.city}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

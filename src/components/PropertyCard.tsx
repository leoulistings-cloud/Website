"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bed, Bath, Square, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Property } from "@/types";

function formatPrice(price: number): string {
  if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(1)}M`;
  }
  return `$${price.toLocaleString()}`;
}

export default function PropertyCard({ property }: { property: Property }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [saved, setSaved] = useState(false);

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    setImgIndex((i) => (i === 0 ? property.images.length - 1 : i - 1));
  };
  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    setImgIndex((i) => (i === property.images.length - 1 ? 0 : i + 1));
  };

  return (
    <Link href={`/properties/${property.id}`} className="group block">
      <div className="bg-navy-900 border border-white/5 hover:border-gold-500/30 transition-all duration-500 overflow-hidden">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <Image
            src={property.images[imgIndex]}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {property.new && (
              <span className="bg-gold-500 text-navy-950 text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1">
                New
              </span>
            )}
            <span
              className={`text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 ${
                property.status === "Pending"
                  ? "bg-amber-500/90 text-white"
                  : property.status === "Sold"
                  ? "bg-red-600/90 text-white"
                  : "bg-navy-800/90 text-white/80"
              }`}
            >
              {property.status}
            </span>
          </div>

          {/* Save */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setSaved(!saved);
            }}
            className="absolute top-4 right-4 w-8 h-8 bg-navy-950/70 backdrop-blur-sm flex items-center justify-center hover:bg-navy-950 transition-colors"
            aria-label="Save property"
          >
            <Heart
              size={14}
              className={saved ? "fill-gold-500 text-gold-500" : "text-white/70"}
            />
          </button>

          {/* Image nav */}
          {property.images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7 bg-navy-950/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft size={14} className="text-white" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 bg-navy-950/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight size={14} className="text-white" />
              </button>
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {property.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.preventDefault();
                      setImgIndex(i);
                    }}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      i === imgIndex ? "bg-gold-500 w-4" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gold-500 text-xs tracking-widest uppercase mb-2">
            {property.type} · {property.city}, {property.state}
          </p>
          <h3 className="text-white font-serif text-lg leading-snug mb-3 group-hover:text-gold-400 transition-colors">
            {property.title}
          </h3>
          <p className="text-white/40 text-xs mb-4 line-clamp-1">{property.address}</p>

          <div className="flex items-center gap-5 text-white/60 text-xs mb-5">
            <span className="flex items-center gap-1.5">
              <Bed size={12} className="text-gold-500/70" />
              {property.beds} BD
            </span>
            <span className="flex items-center gap-1.5">
              <Bath size={12} className="text-gold-500/70" />
              {property.baths} BA
            </span>
            <span className="flex items-center gap-1.5">
              <Square size={12} className="text-gold-500/70" />
              {property.sqft.toLocaleString()} SF
            </span>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <span className="text-white font-serif text-xl tracking-wide">
              {formatPrice(property.price)}
            </span>
            <span className="text-white/30 text-xs">
              {property.daysOnMarket}d on market
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

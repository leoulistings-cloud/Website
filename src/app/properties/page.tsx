"use client";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { SlidersHorizontal, Grid3X3, List, Map } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import PropertySearch from "@/components/PropertySearch";
import { properties } from "@/data/properties";
import type { Property } from "@/types";

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Most Space", value: "sqft-desc" },
];

function PropertiesContent() {
  const searchParams = useSearchParams();
  const [sort, setSort] = useState("newest");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = useMemo(() => {
    let result = [...properties];

    const q = searchParams.get("q");
    if (q) {
      const lower = q.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(lower) ||
          p.city.toLowerCase().includes(lower) ||
          p.address.toLowerCase().includes(lower)
      );
    }

    const location = searchParams.get("location");
    if (location) {
      const [city] = location.split(",");
      result = result.filter((p) => p.city.toLowerCase() === city.trim().toLowerCase());
    }

    const type = searchParams.get("type");
    if (type) result = result.filter((p) => p.type === type);

    if (statusFilter !== "All") {
      result = result.filter((p) => p.status === statusFilter);
    }

    switch (sort) {
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "sqft-desc":
        result.sort((a, b) => b.sqft - a.sqft);
        break;
      default:
        result.sort((a, b) => a.daysOnMarket - b.daysOnMarket);
    }

    return result;
  }, [searchParams, sort, statusFilter]);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="section-label mb-3">Our Portfolio</p>
          <h1 className="section-title mb-4">Extraordinary Properties</h1>
          <div className="gold-divider" />
          <p className="text-white/50 text-sm mt-4 max-w-xl">
            Discover an unparalleled collection of luxury residences, estates, and investment properties across the world's most coveted destinations.
          </p>
          <div className="mt-8">
            <PropertySearch compact />
          </div>
        </div>
      </section>

      {/* Filters & Results */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              {["All", "For Sale", "Pending", "Sold"].map((s) => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`text-xs tracking-widest uppercase px-4 py-2 border transition-colors ${
                    statusFilter === s
                      ? "bg-gold-500 text-navy-950 border-gold-500"
                      : "border-white/20 text-white/60 hover:border-gold-500/50 hover:text-white"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-white/40 text-sm">{filtered.length} properties</span>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-navy-900 border border-white/10 text-white/70 text-xs tracking-wider px-3 py-2 outline-none"
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value} className="bg-navy-900">
                    {o.label}
                  </option>
                ))}
              </select>

              <div className="flex gap-1">
                <button
                  onClick={() => setView("grid")}
                  className={`p-2 border transition-colors ${
                    view === "grid"
                      ? "border-gold-500 text-gold-500"
                      : "border-white/10 text-white/40 hover:text-white"
                  }`}
                >
                  <Grid3X3 size={14} />
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`p-2 border transition-colors ${
                    view === "list"
                      ? "border-gold-500 text-gold-500"
                      : "border-white/10 text-white/40 hover:text-white"
                  }`}
                >
                  <List size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-white/40 text-lg font-serif mb-3">No properties found</p>
              <p className="text-white/30 text-sm">Try adjusting your search criteria.</p>
            </div>
          ) : (
            <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}>
              {filtered.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-white/40">Loading...</div>}>
      <PropertiesContent />
    </Suspense>
  );
}

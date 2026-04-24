"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ChevronDown } from "lucide-react";

const locations = [
  "All Locations",
  "Silver Lake, CA",
  "Echo Park, CA",
  "Los Feliz, CA",
  "Larchmont, CA",
  "Beverly Hills, CA",
  "Downtown Los Angeles, CA",
  "Boyle Heights, CA",
  "Hollywood, CA",
  "Irvine, CA",
  "Tustin, CA",
];

const propertyTypes = [
  "All Types",
  "Estate",
  "Penthouse",
  "Villa",
  "Condo",
  "Townhouse",
  "Single Family",
];

const priceRanges = [
  { label: "Any Price", min: 0, max: Infinity },
  { label: "$1M – $5M", min: 1000000, max: 5000000 },
  { label: "$5M – $10M", min: 5000000, max: 10000000 },
  { label: "$10M – $20M", min: 10000000, max: 20000000 },
  { label: "$20M – $50M", min: 20000000, max: 50000000 },
  { label: "$50M+", min: 50000000, max: Infinity },
];

function Select({
  options,
  value,
  onChange,
  label,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  label: string;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent text-white/80 text-sm border-0 outline-none appearance-none pr-8 py-2 cursor-pointer"
        aria-label={label}
      >
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-navy-900 text-white">
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-gold-500 pointer-events-none" />
    </div>
  );
}

export default function PropertySearch({ compact = false }: { compact?: boolean }) {
  const [location, setLocation] = useState("All Locations");
  const [type, setType] = useState("All Types");
  const [price, setPrice] = useState("Any Price");
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location !== "All Locations") params.set("location", location);
    if (type !== "All Types") params.set("type", type);
    if (price !== "Any Price") params.set("price", price);
    if (query) params.set("q", query);
    router.push(`/properties?${params.toString()}`);
  };

  if (compact) {
    return (
      <div className="flex items-center gap-3 bg-navy-900 border border-white/10 p-3">
        <Search size={16} className="text-gold-500 shrink-0" />
        <input
          type="text"
          placeholder="Search by location, property name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-white/30"
        />
        <button
          onClick={handleSearch}
          className="bg-gold-500 hover:bg-gold-600 text-navy-950 text-xs font-semibold tracking-widest uppercase px-4 py-2 transition-colors"
        >
          Search
        </button>
      </div>
    );
  }

  return (
    <div className="bg-navy-950/95 backdrop-blur-md border border-gold-500/20 p-6 shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {/* Keyword */}
        <div className="md:pr-6 pb-4 md:pb-0">
          <p className="text-gold-500 text-[10px] tracking-[0.2em] uppercase mb-2">
            Search
          </p>
          <div className="flex items-center gap-2">
            <Search size={14} className="text-white/40 shrink-0" />
            <input
              type="text"
              placeholder="City, neighborhood..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-white/80 text-sm outline-none placeholder:text-white/30"
            />
          </div>
        </div>

        {/* Location */}
        <div className="md:px-6 py-4 md:py-0">
          <p className="text-gold-500 text-[10px] tracking-[0.2em] uppercase mb-2">Location</p>
          <Select options={locations} value={location} onChange={setLocation} label="Location" />
        </div>

        {/* Type */}
        <div className="md:px-6 py-4 md:py-0">
          <p className="text-gold-500 text-[10px] tracking-[0.2em] uppercase mb-2">Property Type</p>
          <Select options={propertyTypes} value={type} onChange={setType} label="Property Type" />
        </div>

        {/* Price */}
        <div className="md:pl-6 pt-4 md:pt-0 flex items-end gap-4">
          <div className="flex-1">
            <p className="text-gold-500 text-[10px] tracking-[0.2em] uppercase mb-2">Price Range</p>
            <Select
              options={priceRanges.map((r) => r.label)}
              value={price}
              onChange={setPrice}
              label="Price Range"
            />
          </div>
          <button
            onClick={handleSearch}
            className="btn-gold px-6 py-2.5 text-xs tracking-widest uppercase whitespace-nowrap shrink-0"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

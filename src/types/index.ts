export interface Property {
  id: string;
  title: string;
  address: string;
  city: string;
  state: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  lotSize: string;
  type: "Single Family" | "Condo" | "Penthouse" | "Estate" | "Villa" | "Townhouse";
  status: "For Sale" | "Sold" | "Pending" | "For Lease";
  featured: boolean;
  new: boolean;
  images: string[];
  description: string;
  features: string[];
  yearBuilt: number;
  garage: number;
  virtualTour?: string;
  agent: string;
  daysOnMarket: number;
  lat: number;
  lng: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  authorImage: string;
  coverImage: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  image: string;
  bio: string;
  specialties: string[];
  listings: number;
  sold: string;
  volume: string;
  languages: string[];
  social: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
  propertyType: string;
}

export interface MarketStat {
  label: string;
  value: string;
  change: string;
  positive: boolean;
}

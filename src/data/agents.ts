import { Agent, Testimonial, MarketStat } from "@/types";

export const agents: Agent[] = [
  {
    id: "1",
    name: "Johnny Leou",
    title: "Real Estate Agent (DRE #02064780)",
    phone: "(949) 300-4485",
    email: "leoulistings@gmail.com",
    image: "https://i.imgur.com/xA4a1Zr.jpg",
    bio: "Johnny Leou (DRE#02064780) is a Los Angeles and Orange County real estate agent specializing in buying, selling, and investing in residential real estate, luxury homes, and income properties across Silver Lake, Los Feliz, Echo Park, Downtown Los Angeles, Beverly Hills, Hollywood, Larchmont, Boyle Heights, Irvine, and Tustin. With 17+ years in hospitality, he delivers exceptional service, strong negotiation, and clear communication. Johnny serves first-time buyers, home sellers, real estate investors, LGBTQ+ clients, and immigrant families with a people-first approach, local market expertise, and personalized, results-driven strategies.",
    specialties: ["Residential Sales", "Luxury Homes", "Income Properties", "First-Time Buyers", "Investment Properties"],
    listings: 12,
    sold: 12,
    volume: "$8.4M",
    languages: ["English", "Mandarin"],
    social: {
      instagram: "https://www.instagram.com/johnnyeeeatsworld/",
      linkedin: "https://www.linkedin.com/in/johnny-leou-124423248",
    },
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Jon S.",
    location: "First-Time Homebuyer",
    text: "Working with Johnny didn't feel like I hired a realtor — it felt like I called on a friend who does realty. He made the entire process painless, never talked over my head, and was always pleasant and attentive.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=200&q=80",
    propertyType: "First Home Purchase",
  },
  {
    id: "2",
    name: "Charles D.",
    location: "Buyer & Seller",
    text: "Johnny was a great guide through the complexities of California real estate. He handled the anxiety of both seller and buyer with patience and balance. Made me happy.",
    rating: 5,
    image: "",
    propertyType: "Sale & Purchase",
  },
  {
    id: "3",
    name: "Bridgette J.",
    location: "Los Angeles",
    text: "Johnny has been the best for us. Very attentive, compassionate, respectful, and professional. We look forward to celebrating our first home with him!",
    rating: 5,
    image: "",
    propertyType: "First Home Together",
  },
  {
    id: "4",
    name: "Rob E.",
    location: "Downtown Los Angeles",
    text: "Johnny took care of my clients' purchase of a condo in downtown LA. He stuck with them through a very long process of shopping. Thorough, responsive, knowledgeable. Highly recommend!",
    rating: 5,
    image: "",
    propertyType: "Condo Purchase",
  },
];

export const marketStats: MarketStat[] = [
  {
    label: "Los Angeles Median Home Price",
    value: "$825K",
    change: "+8.2%",
    positive: true,
  },
  {
    label: "Orange County Median Price",
    value: "$920K",
    change: "+5.1%",
    positive: true,
  },
  {
    label: "Avg. Days on Market",
    value: "32",
    change: "-18%",
    positive: true,
  },
  {
    label: "Properties Sold (YTD)",
    value: "85+",
    change: "+12.3%",
    positive: true,
  },
];

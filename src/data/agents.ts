import { Agent, Testimonial, MarketStat } from "@/types";

export const agents: Agent[] = [
  {
    id: "1",
    name: "Johnny Leou",
    title: "Real Estate Agent (DRE #02064780)",
    phone: "(949) 300-4485",
    email: "leoulistings@gmail.com",
    image: "https://drive.google.com/uc?export=view&id=1z1dmbsslynWn-0px7XqijBnC2ftLVcsw",
    bio: "Johnny Leou (DRE#02064780) is a Los Angeles and Orange County real estate agent specializing in buying, selling, and investing in residential real estate, luxury homes, and income properties across Silver Lake, Los Feliz, Echo Park, Downtown Los Angeles, Beverly Hills, Hollywood, Larchmont, Boyle Heights, Irvine, and Tustin. With 17+ years in hospitality, he delivers exceptional service, strong negotiation, and clear communication. Johnny serves first-time buyers, home sellers, real estate investors, LGBTQ+ clients, and immigrant families with a people-first approach, local market expertise, and personalized, results-driven strategies.",
    specialties: ["Residential Sales", "Luxury Homes", "Income Properties", "First-Time Buyers", "Investment Properties"],
    listings: 12,
    sold: 85,
    volume: "$47.2M",
    languages: ["English", "Mandarin"],
    social: {
      instagram: "#",
      linkedin: "#",
    },
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah & Michael Chen",
    location: "Silver Lake, Los Angeles",
    text: "Johnny made our first home purchase stress-free. He understood our budget, found amazing properties, and negotiated a great deal. His communication was clear every step of the way. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=200&q=80",
    propertyType: "Residential Home",
  },
  {
    id: "2",
    name: "David Kim",
    location: "Echo Park, Los Angeles",
    text: "As a real estate investor, I needed someone who understood the market deeply. Johnny sold my property in 10 days above asking. He's knowledgeable, responsive, and truly cares about his clients.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    propertyType: "Investment Property",
  },
  {
    id: "3",
    name: "Lisa Rodriguez",
    location: "Irvine, Orange County",
    text: "Johnny helped me sell my home and find an even better one. His market knowledge in OC is incredible. He's honest, hardworking, and genuinely wants his clients to succeed.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    propertyType: "Single Family Home",
  },
  {
    id: "4",
    name: "James Park",
    location: "Downtown Los Angeles",
    text: "Johnny navigated a complex multi-unit purchase for my investment portfolio. His negotiation skills and attention to detail saved me thousands. He's a true professional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    propertyType: "Multi-Unit Investment",
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

import Link from "next/link";
import { Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-gold-500/10">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <p className="text-white font-serif text-2xl tracking-[0.15em] uppercase leading-none">
                Johnny <span className="text-gold-500">Leou</span>
              </p>
              <p className="text-gold-500/60 text-[10px] tracking-[0.3em] uppercase mt-1">
                Real Estate | DRE #02064780
              </p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Specializing in Los Angeles and Orange County residential real estate, luxury homes, and investment properties with personalized service and market expertise.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/johnnyeeeatsworld/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-gold-500/30 flex items-center justify-center text-gold-500/60 hover:border-gold-500 hover:text-gold-500 transition-colors"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/johnny-leou-124423248"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-gold-500/30 flex items-center justify-center text-gold-500/60 hover:border-gold-500 hover:text-gold-500 transition-colors"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          {/* Properties */}
          <div>
            <h4 className="text-gold-500 text-xs tracking-[0.2em] uppercase mb-6">Properties</h4>
            <ul className="space-y-3">
              {["Featured Listings", "New to Market", "Sold Properties", "For Lease", "Off-Market", "New Development"].map((item) => (
                <li key={item}>
                  <Link
                    href="/properties"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-gold-500 text-xs tracking-[0.2em] uppercase mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Team", href: "/about" },
                { label: "Market Reports", href: "/blog" },
                { label: "Blog & Insights", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold-500 text-xs tracking-[0.2em] uppercase mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold-500 mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm leading-relaxed">
                  eXp Realty of Greater<br />
                  Los Angeles, Inc.<br />
                  PO Box 847277<br />
                  Los Angeles, CA 90084-7277
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold-500 shrink-0" />
                <a href="tel:+19493004485" className="text-white/50 hover:text-white text-sm transition-colors">
                  (949) 300-4485
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-gold-500 shrink-0" />
                <a href="mailto:leoulistings@gmail.com" className="text-white/50 hover:text-white text-sm transition-colors">
                  leoulistings@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-6 lg:px-12 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2025 Johnny Leou Real Estate. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Licensed Real Estate Broker. Equal Housing Opportunity.
          </p>
        </div>
      </div>
    </footer>
  );
}

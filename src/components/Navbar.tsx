"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Results", href: "/results" },
  { label: "Market", href: "/market" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solidBg = !isHome || scrolled || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solidBg
          ? "bg-navy-950/98 backdrop-blur-md shadow-2xl border-b border-gold-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col group">
            <span className="text-white font-serif text-xl tracking-[0.15em] uppercase leading-none">
              Johnny <span className="text-gold-500">Leou</span>
            </span>
            <span className="text-gold-500/60 text-[10px] tracking-[0.3em] uppercase">
              Real Estate | DRE #02064780
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors duration-200 relative group ${
                  pathname === link.href
                    ? "text-gold-500"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold-500 transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+19493004485"
              className="flex items-center gap-2 text-white/70 hover:text-gold-500 transition-colors text-sm"
            >
              <Phone size={14} />
              <span className="tracking-wider">(949) 300-4485</span>
            </a>
            <Link
              href="/contact"
              className="btn-gold px-5 py-2.5 text-xs tracking-widest uppercase"
            >
              Inquire Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-950 border-t border-gold-500/10 px-6 pb-8 pt-4">
          <nav className="flex flex-col gap-6 mb-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm tracking-widest uppercase transition-colors ${
                  pathname === link.href ? "text-gold-500" : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-gold block text-center px-5 py-3 text-xs tracking-widest uppercase"
          >
            Inquire Now
          </Link>
        </div>
      )}
    </header>
  );
}

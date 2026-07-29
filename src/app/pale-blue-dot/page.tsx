import Link from "next/link";
import { ArrowLeft, Music, Video } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pale Blue Dot",
  description: "A pale blue dot in a vast universe of real estate.",
  robots: "noindex, nofollow",
};

export default function PaleBlueDot() {
  return (
    <div className="min-h-screen bg-navy-950 flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        {/* Easter Egg Header */}
        <div className="mb-12">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mx-auto mb-8 shadow-2xl shadow-blue-400/50" />
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Pale Blue Dot
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            A small token of curiosity. You found the Easter egg.
          </p>
        </div>

        {/* Coming Soon Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Audio */}
          <div className="bg-white/5 border border-gold-500/20 rounded-lg p-8 backdrop-blur-sm hover:border-gold-500/40 transition-all duration-300">
            <Music className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-white font-serif text-xl mb-2">Audio Content</h2>
            <p className="text-white/50 text-sm mb-4">
              Stories, insights, and conversations about Los Angeles real estate.
            </p>
            <div className="inline-block bg-gold-500/10 text-gold-400 text-xs font-semibold tracking-widest px-3 py-1 rounded">
              Coming Soon
            </div>
          </div>

          {/* Video */}
          <div className="bg-white/5 border border-gold-500/20 rounded-lg p-8 backdrop-blur-sm hover:border-gold-500/40 transition-all duration-300">
            <Video className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-white font-serif text-xl mb-2">Video Content</h2>
            <p className="text-white/50 text-sm mb-4">
              Neighborhood tours, market analysis, and buyer education.
            </p>
            <div className="inline-block bg-gold-500/10 text-gold-400 text-xs font-semibold tracking-widest px-3 py-1 rounded">
              Coming Soon
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mb-16 py-8 border-t border-white/10">
          <p className="text-white/70 italic text-sm leading-relaxed max-w-xl mx-auto">
            "Look again at that dot. That is here, that is home, that is us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives."
          </p>
          <p className="text-white/40 text-xs mt-4">- Carl Sagan, Pale Blue Dot</p>
        </div>

        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors"
        >
          <ArrowLeft size={16} />
          <span className="text-sm tracking-widest uppercase">Return Home</span>
        </Link>
      </div>
    </div>
  );
}

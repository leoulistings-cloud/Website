"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import VisitorCounter from "@/components/VisitorCounter";

export default function PaleBlueDotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black">
      {/* Return button */}
      <div className="fixed top-8 left-8 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 text-blue-300 hover:text-blue-100 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </Link>
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        {/* Background accent - cosmic glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/3 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-blue-400/2 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl text-center">

          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
            A Pale Blue Dot
          </h1>

          <p className="text-lg text-blue-100 mb-12 leading-relaxed max-w-xl mx-auto">
            Fair warning - you're about to learn things about me that don't belong in a listing presentation.
          </p>

          {/* Content sections */}
          <div className="space-y-8 mb-12 w-full max-w-3xl">
            {/* Audio section */}
            <div className="bg-slate-900/30 backdrop-blur border border-blue-400/30 rounded-lg p-8 hover:border-blue-400/60 transition-colors">
              <div className="mb-6 w-full bg-black rounded flex items-center justify-center py-6">
                <img
                  src="https://i.imgur.com/pjNkTH5.png"
                  alt="Audio"
                  style={{ height: '144px', width: 'auto' }}
                />
              </div>
              <div className="space-y-4">
                {/* Mando Podcast */}
                <div className="space-y-2">
                  <h3 className="text-blue-200 font-serif text-lg">Mando Podcast</h3>
                  <div className="w-full border border-blue-400/40 rounded px-3 py-2 flex items-center">
                    <audio
                      controls
                      className="w-full accent-blue-400"
                    >
                      <source src="https://crazy4comiccon.wordpress.com/wp-content/uploads/2026/05/mando-podcast.m4a" type="audio/mp4" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
                {/* Supergirl Teaser */}
                <div className="space-y-2">
                  <h3 className="text-blue-200 font-serif text-lg">Supergirl Teaser</h3>
                  <div className="w-full border border-blue-400/40 rounded px-3 py-2 flex items-center">
                    <audio
                      controls
                      className="w-full accent-blue-400"
                    >
                      <source src="https://crazy4comiccon.wordpress.com/wp-content/uploads/2025/12/supergirl-teaser-1.m4a" type="audio/mp4" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
                {/* Superman Review */}
                <div className="space-y-2">
                  <h3 className="text-blue-200 font-serif text-lg">Superman Review</h3>
                  <div className="w-full border border-blue-400/40 rounded px-3 py-2 flex items-center">
                    <audio
                      controls
                      className="w-full accent-blue-400"
                    >
                      <source src="https://crazy4comiccon.wordpress.com/wp-content/uploads/2025/07/superman-review.m4a" type="audio/mp4" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              </div>
            </div>

            {/* Video section */}
            <div className="bg-slate-900/30 backdrop-blur border border-blue-400/30 rounded-lg p-8 hover:border-blue-400/60 transition-colors">
              <div className="text-4xl mb-4">🎬</div>
              <h2 className="text-2xl font-serif text-white mb-3">Video</h2>
              <p className="text-blue-200 mb-6">Visual journeys and behind-the-scenes.</p>
              <div className="px-6 py-3 bg-blue-500/20 border border-blue-400/50 rounded text-blue-300 inline-block cursor-not-allowed opacity-75">
                Coming Soon
              </div>
            </div>
          </div>

          {/* Sagan quote */}
          <div className="mt-16 pt-8 border-t border-blue-400/30">
            <p className="text-blue-300 italic text-sm leading-relaxed max-w-xl mx-auto">
              "Look again at that dot. That's here. That's home. That's us."
            </p>
            <p className="text-blue-400/60 text-xs mt-3">— Carl Sagan, Pale Blue Dot</p>
            <VisitorCounter />
          </div>
        </div>

      </div>
    </div>
  );
}

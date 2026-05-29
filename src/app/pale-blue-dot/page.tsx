"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import VisitorCounter from "@/components/VisitorCounter";

export default function PaleBlueDotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
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
        {/* Background accent */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl text-center">
          {/* Pale blue dot */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 shadow-2xl shadow-blue-400/50 animate-pulse" />
          </div>

          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
            A Pale Blue Dot
          </h1>

          <p className="text-lg text-blue-100 mb-12 leading-relaxed max-w-xl mx-auto">
            You've discovered a hidden corner of the internet. Welcome to a space dedicated to stories, perspectives, and experiences beyond the typical real estate narrative.
          </p>

          {/* Content sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Audio section */}
            <div className="bg-slate-800/50 backdrop-blur border border-blue-400/30 rounded-lg p-8 hover:border-blue-400/60 transition-colors">
              <div className="text-4xl mb-4">🎙️</div>
              <h2 className="text-2xl font-serif text-white mb-3">Audio</h2>
              <p className="text-blue-200 mb-6">Stories, conversations, and insights.</p>
              <div className="px-6 py-3 bg-blue-500/20 border border-blue-400/50 rounded text-blue-300 inline-block cursor-not-allowed opacity-75">
                Coming Soon
              </div>
            </div>

            {/* Video section */}
            <div className="bg-slate-800/50 backdrop-blur border border-cyan-400/30 rounded-lg p-8 hover:border-cyan-400/60 transition-colors">
              <div className="text-4xl mb-4">🎬</div>
              <h2 className="text-2xl font-serif text-white mb-3">Video</h2>
              <p className="text-cyan-200 mb-6">Visual journeys and behind-the-scenes.</p>
              <div className="px-6 py-3 bg-cyan-500/20 border border-cyan-400/50 rounded text-cyan-300 inline-block cursor-not-allowed opacity-75">
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

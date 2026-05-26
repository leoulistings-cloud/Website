"use client";
import Link from "next/link";
import { useState } from "react";

export default function PaleBlueEgg() {
  const [clicked, setClicked] = useState(false);

  return (
    <Link href="/pale-blue-dot" onClick={() => setClicked(true)}>
      <button
        className="fixed top-8 right-8 w-16 h-16 rounded-full bg-cyan-400 cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-xl hover:shadow-cyan-400 z-50 group shadow-lg shadow-cyan-400/80 animate-bounce flex items-center justify-center"
        title="🔵 Easter Egg"
        aria-label="Secret content"
      >
        <span className="text-xl">🔵</span>
      </button>
    </Link>
  );
}

"use client";
import Link from "next/link";
import { useState } from "react";

export default function PaleBlueEgg() {
  const [clicked, setClicked] = useState(false);

  return (
    <Link href="/pale-blue-dot" onClick={() => setClicked(true)}>
      <button
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-300 cursor-pointer transition-all duration-300 hover:scale-150 hover:shadow-lg hover:shadow-blue-300/70 z-40 group shadow-md shadow-blue-300/60 animate-pulse"
        title="🔵"
        aria-label="Secret content"
      >
        <div className="absolute inset-0 rounded-full bg-blue-300 opacity-50 group-hover:opacity-60 transition-opacity duration-300 animate-pulse" />
      </button>
    </Link>
  );
}

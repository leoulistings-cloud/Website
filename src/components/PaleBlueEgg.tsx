"use client";
import Link from "next/link";
import { useState } from "react";

export default function PaleBlueEgg() {
  const [clicked, setClicked] = useState(false);

  return (
    <Link href="/pale-blue-dot" onClick={() => setClicked(true)}>
      <button
        className="fixed bottom-8 right-8 w-3 h-3 rounded-full bg-blue-400 cursor-pointer transition-all duration-300 hover:scale-150 hover:shadow-lg hover:shadow-blue-400/50 z-40 group"
        title="🔵"
        aria-label="Secret content"
      >
        <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
      </button>
    </Link>
  );
}

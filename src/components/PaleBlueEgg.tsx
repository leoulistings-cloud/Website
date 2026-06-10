"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PaleBlueEgg() {
  const pathname = usePathname();

  // Don't show on the hidden page itself
  if (pathname === "/pale-blue-dot") {
    return null;
  }

  return (
    <Link href="/pale-blue-dot">
      <div
        className="fixed bottom-8 right-8 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 cursor-pointer transition-all duration-300 hover:scale-150 hover:shadow-lg hover:shadow-blue-400 z-40 shadow-md shadow-blue-400/60 animate-pulse"
        title="🔵 Easter Egg"
        role="button"
        tabIndex={0}
      />
    </Link>
  );
}

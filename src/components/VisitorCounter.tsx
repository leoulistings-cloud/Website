"use client";
import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [hasTracked, setHasTracked] = useState(false);

  useEffect(() => {
    const trackVisit = async () => {
      // Check if already tracked this session
      const sessionKey = "pale-blue-dot-visited";
      const hasVisited = sessionStorage.getItem(sessionKey);

      if (!hasVisited) {
        try {
          const response = await fetch("/api/visitors/pale-blue-dot", {
            method: "POST",
          });
          if (response.ok) {
            const data = await response.json();
            setCount(data.count);
            sessionStorage.setItem(sessionKey, "true");
            setHasTracked(true);
          }
        } catch (error) {
          console.error("Failed to track visit:", error);
        }
      } else {
        // Already tracked this session, just fetch current count
        try {
          const response = await fetch("/api/visitors/pale-blue-dot");
          if (response.ok) {
            const data = await response.json();
            setCount(data.count);
          }
        } catch (error) {
          console.error("Failed to fetch count:", error);
        }
      }
    };

    trackVisit();
  }, []);

  if (count === null) return null;

  return (
    <div className="text-center text-blue-400/60 text-xs mt-8 pt-6 border-t border-blue-400/20">
      found by {count.toLocaleString()} wanderers
    </div>
  );
}

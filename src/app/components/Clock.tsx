"use client";
import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Prevent hydration mismatch

    const updateClock = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(formatted);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null; // Avoid SSR rendering

  return (
    <div className="flex items-center gap-2 bg-gray-800/40 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-700/50">
      <span className="text-blue-400">🕒</span>
      <span className="text-white text-sm font-semibold tabular-nums">
        {time}
      </span>
    </div>
  );
};

export default Clock;

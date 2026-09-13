"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";
import type { FeedMode } from "@/types";

const MODES: { id: FeedMode; label: string }[] = [
  { id: "chronological", label: "Chronological" },
  { id: "interest", label: "Interest" },
  { id: "curated", label: "Curated" },
];

export function FeedModeSwitcher() {
  const [mode, setMode] = useState<FeedMode>("chronological");

  return (
    <GlassCard className="mb-4 flex items-center justify-between gap-3 py-2.5 px-3" interactive={false}>
      <div className="flex gap-0.5 overflow-x-auto">
        {MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            className={cn(
              "px-3 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap transition-all",
              mode === m.id
                ? "bg-white/12 text-[var(--nexa-gold)]"
                : "text-[var(--nexa-text-secondary)] hover:text-[var(--nexa-text)] hover:bg-white/5"
            )}
          >
            {m.label}
          </button>
        ))}
      </div>
      <span className="text-[11px] text-[var(--nexa-text-muted)] hidden sm:inline shrink-0">
        You own your feed
      </span>
    </GlassCard>
  );
}

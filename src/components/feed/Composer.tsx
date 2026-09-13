"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Image as ImageIcon, Smile } from "lucide-react";

export function Composer() {
  const [value, setValue] = useState("");
  const canPost = value.trim().length > 0;

  return (
    <GlassCard className="mb-5" interactive={false}>
      <div className="flex gap-3">
        <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-[var(--nexa-gold)] to-[#e6b800] flex items-center justify-center text-sm font-bold text-black">
          U
        </div>
        <div className="flex-1 min-w-0">
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="What’s happening in your world?"
            rows={2}
            className="w-full resize-none bg-transparent outline-none text-[15px] text-[var(--nexa-text)] placeholder:text-[var(--nexa-text-muted)] leading-relaxed"
          />
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <button className="p-2 rounded-full text-[var(--nexa-text-secondary)] hover:text-[var(--nexa-cyan)] hover:bg-white/5 transition-colors" aria-label="Add media">
                <ImageIcon size={18} strokeWidth={1.7} />
              </button>
              <button className="p-2 rounded-full text-[var(--nexa-text-secondary)] hover:text-[var(--nexa-gold)] hover:bg-white/5 transition-colors" aria-label="Add emoji">
                <Smile size={18} strokeWidth={1.7} />
              </button>
            </div>
            <button
              disabled={!canPost}
              className="btn-primary text-[13px]"
              onClick={() => setValue("")}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

import { GlassCard } from "@/components/ui/GlassCard";
import { Search } from "lucide-react";

const TRENDS = [
  { rank: 1, tag: "#LiquidGlass", posts: "12.4k" },
  { rank: 2, tag: "#OwnYourFeed", posts: "8.1k" },
  { rank: 3, tag: "#NEXA", posts: "5.6k" },
  { rank: 4, tag: "#Chronological", posts: "3.2k" },
  { rank: 5, tag: "#Glassmorphism", posts: "2.9k" },
  { rank: 6, tag: "#TransparentAds", posts: "1.8k" },
];

export default function ExplorePage() {
  return (
    <div className="mx-auto max-w-[600px] px-3 sm:px-4 py-6">
      <h1 className="text-xl font-semibold tracking-tight mb-1">Explore</h1>
      <p className="text-[13px] text-[var(--nexa-text-muted)] mb-5">
        Platform-controlled trends · Transparent ranking
      </p>

      <GlassCard className="mb-6 flex items-center gap-3 py-2.5 px-3.5" interactive={false}>
        <Search size={16} className="text-[var(--nexa-text-muted)] shrink-0" />
        <input
          type="search"
          placeholder="Search people, posts, topics…"
          className="w-full bg-transparent outline-none text-[14px] text-[var(--nexa-text)] placeholder:text-[var(--nexa-text-muted)]"
        />
      </GlassCard>

      <h2 className="text-[11px] font-semibold uppercase tracking-widest text-[var(--nexa-gold)] mb-3">
        Trending Now
      </h2>

      <div className="space-y-2">
        {TRENDS.map((t) => (
          <GlassCard key={t.tag} interactive className="flex items-center justify-between py-3.5 px-4">
            <div>
              <span className="text-[11px] text-[var(--nexa-text-muted)]">#{t.rank} · Trending</span>
              <p className="font-medium text-[15px] text-[var(--nexa-text)] mt-0.5">{t.tag}</p>
            </div>
            <span className="text-[13px] text-[var(--nexa-text-secondary)]">{t.posts} posts</span>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

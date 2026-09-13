"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";
import { useState } from "react";

interface PostCardProps {
  id: string;
  author: string;
  handle: string;
  avatarInitial?: string;
  time: string;
  content: string;
  likes: number;
  comments: number;
  media?: boolean;
}

export function PostCard({
  author,
  handle,
  avatarInitial,
  time,
  content,
  likes: initialLikes,
  comments,
  media,
}: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [bookmarked, setBookmarked] = useState(false);

  const toggleLike = () => {
    setLiked((v) => !v);
    setLikes((c) => (liked ? c - 1 : c + 1));
  };

  return (
    <GlassCard interactive className="mb-3.5">
      <div className="flex items-start gap-3 mb-3">
        <div className="story-ring h-11 w-11 shrink-0">
          <div className="story-ring-inner h-full w-full flex items-center justify-center">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[var(--nexa-cyan)] to-[var(--nexa-blue)] flex items-center justify-center text-sm font-semibold text-white">
              {avatarInitial || author.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>
        <div className="flex-1 min-w-0 pt-0.5">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-[15px] text-[var(--nexa-text)] truncate">{author}</span>
            <span className="text-[13px] text-[var(--nexa-text-muted)] truncate">@{handle}</span>
            <span className="text-[13px] text-[var(--nexa-text-muted)]">·</span>
            <span className="text-[13px] text-[var(--nexa-text-muted)] shrink-0">{time}</span>
          </div>
        </div>
        <button className="text-[var(--nexa-text-muted)] hover:text-[var(--nexa-text)] p-1 -mr-1" aria-label="More options">
          <span className="text-lg leading-none">···</span>
        </button>
      </div>

      <p className="text-[15px] leading-[1.55] text-[var(--nexa-text)] mb-3 whitespace-pre-wrap">{content}</p>

      {media && (
        <div className="mb-3 rounded-[var(--nexa-radius-sm)] overflow-hidden border border-[var(--nexa-border)] bg-[var(--nexa-bg-elevated)] aspect-[16/10] flex items-center justify-center">
          <span className="text-[13px] text-[var(--nexa-text-muted)]">Media</span>
        </div>
      )}

      <div className="flex items-center gap-1 -ml-1.5">
        <button
          onClick={toggleLike}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[13px] transition-colors ${
            liked ? "text-[var(--nexa-danger)]" : "text-[var(--nexa-text-secondary)] hover:text-[var(--nexa-danger)] hover:bg-white/5"
          }`}
          aria-label={liked ? "Unlike" : "Like"}
        >
          <Heart size={16} fill={liked ? "currentColor" : "none"} strokeWidth={1.8} />
          <span>{likes}</span>
        </button>
        <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[13px] text-[var(--nexa-text-secondary)] hover:text-[var(--nexa-cyan)] hover:bg-white/5 transition-colors" aria-label="Comment">
          <MessageCircle size={16} strokeWidth={1.8} />
          <span>{comments}</span>
        </button>
        <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[13px] text-[var(--nexa-text-secondary)] hover:text-[var(--nexa-text)] hover:bg-white/5 transition-colors" aria-label="Share">
          <Share2 size={16} strokeWidth={1.8} />
        </button>
        <button
          onClick={() => setBookmarked((v) => !v)}
          className={`ml-auto flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[13px] transition-colors ${
            bookmarked ? "text-[var(--nexa-gold)]" : "text-[var(--nexa-text-secondary)] hover:text-[var(--nexa-gold)] hover:bg-white/5"
          }`}
          aria-label={bookmarked ? "Remove bookmark" : "Bookmark"}
        >
          <Bookmark size={16} fill={bookmarked ? "currentColor" : "none"} strokeWidth={1.8} />
        </button>
      </div>
    </GlassCard>
  );
}

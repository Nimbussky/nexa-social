import { GlassCard } from "@/components/ui/GlassCard";
import { MessageCircle } from "lucide-react";

export default function ChatPage() {
  return (
    <div className="mx-auto max-w-[600px] px-3 sm:px-4 py-8">
      <h1 className="text-xl font-semibold tracking-tight mb-6">Messages</h1>
      <GlassCard className="flex flex-col items-center justify-center py-16 text-center min-h-[320px]" interactive={false}>
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/5">
          <MessageCircle size={24} className="text-[var(--nexa-text-muted)]" />
        </div>
        <p className="text-[15px] font-medium text-[var(--nexa-text)] mb-1">Direct messages</p>
        <p className="text-[13px] text-[var(--nexa-text-muted)] max-w-xs leading-relaxed">
          Private conversations and media sharing. Real-time powered by Supabase Realtime.
        </p>
      </GlassCard>
    </div>
  );
}

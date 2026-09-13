import { GlassCard } from "@/components/ui/GlassCard";
import { Users } from "lucide-react";

export default function ConnectionsPage() {
  return (
    <div className="mx-auto max-w-[600px] px-3 sm:px-4 py-8">
      <h1 className="text-xl font-semibold tracking-tight mb-6">Connections</h1>
      <GlassCard className="flex flex-col items-center justify-center py-16 text-center" interactive={false}>
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/5">
          <Users size={24} className="text-[var(--nexa-text-muted)]" />
        </div>
        <p className="text-[15px] font-medium text-[var(--nexa-text)] mb-1">Build your network</p>
        <p className="text-[13px] text-[var(--nexa-text-muted)] max-w-xs leading-relaxed">
          Friend requests, suggested people, and your connection graph will live here.
        </p>
        <button className="btn-primary mt-6 text-[13px]">Find people</button>
      </GlassCard>
    </div>
  );
}

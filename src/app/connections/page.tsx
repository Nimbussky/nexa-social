"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { UserPlus, UserCheck, Search } from "lucide-react";

const SUGGESTED = [
  { id: "1", name: "Aarav Sharma", handle: "aarav", mutual: 12 },
  { id: "2", name: "Priya Patel", handle: "priya", mutual: 8 },
  { id: "3", name: "Rohan Mehta", handle: "rohan", mutual: 5 },
  { id: "4", name: "Ananya Gupta", handle: "ananya", mutual: 15 },
  { id: "5", name: "Vikram Singh", handle: "vikram", mutual: 3 },
];

export default function ConnectionsPage() {
  const [connected, setConnected] = useState<Set<string>>(new Set());

  const toggleConnect = (id: string) => {
    setConnected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="mx-auto max-w-[600px] px-3 sm:px-4 py-6">
      <h1 className="text-xl font-semibold tracking-tight mb-1">Connections</h1>
      <p className="text-[13px] text-[var(--nexa-text-muted)] mb-5">
        Find people · Make friends · Build your network
      </p>

      <GlassCard className="mb-6 flex items-center gap-3 py-2.5 px-3.5" interactive={false}>
        <Search size={16} className="text-[var(--nexa-text-muted)] shrink-0" />
        <input
          type="search"
          placeholder="Search people by name or username..."
          className="w-full bg-transparent outline-none text-[14px] text-[var(--nexa-text)] placeholder:text-[var(--nexa-text-muted)]"
        />
      </GlassCard>

      <h2 className="text-[11px] font-semibold uppercase tracking-widest text-[var(--nexa-gold)] mb-3">
        People you may know
      </h2>

      <div className="space-y-2">
        {SUGGESTED.map((person) => {
          const isConnected = connected.has(person.id);
          return (
            <GlassCard key={person.id} className="flex items-center justify-between py-3.5 px-4" interactive={false}>
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[var(--nexa-cyan)] to-[var(--nexa-blue)] flex items-center justify-center text-sm font-semibold text-white">
                  {person.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-[15px] text-[var(--nexa-text)]">{person.name}</p>
                  <p className="text-[12px] text-[var(--nexa-text-muted)]">
                    @{person.handle} · {person.mutual} mutual
                  </p>
                </div>
              </div>
              <button
                onClick={() => toggleConnect(person.id)}
                className={
                  isConnected
                    ? "btn-ghost text-[12px] flex items-center gap-1.5"
                    : "btn-primary text-[12px] flex items-center gap-1.5"
                }
              >
                {isConnected ? (
                  <><UserCheck size={14} /> Connected</>
                ) : (
                  <><UserPlus size={14} /> Connect</>
                )}
              </button>
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
}

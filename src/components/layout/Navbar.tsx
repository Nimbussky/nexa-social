"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import {
  Home,
  Compass,
  Users,
  MessageCircle,
  User,
  Plus,
} from "lucide-react";

const NAV = [
  { href: "/", label: "Feed", icon: Home },
  { href: "/explore", label: "Explore", icon: Compass },
  { href: "/connections", label: "Connections", icon: Users },
  { href: "/chat", label: "Chat", icon: MessageCircle },
  { href: "/profile", label: "Profile", icon: User },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--nexa-border)] bg-[var(--nexa-bg)]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--nexa-gold)] to-[#e6b800] shadow-[0_0_16px_rgba(255,214,10,0.35)]">
            <span className="text-[13px] font-bold text-black tracking-tight">N</span>
          </div>
          <span className="text-[17px] font-semibold tracking-tight text-[var(--nexa-text)] group-hover:text-[var(--nexa-gold)] transition-colors">
            NEXA
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-0.5">
          {NAV.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all",
                  active
                    ? "bg-white/10 text-[var(--nexa-gold)]"
                    : "text-[var(--nexa-text-secondary)] hover:text-[var(--nexa-text)] hover:bg-white/5"
                )}
              >
                <Icon size={15} strokeWidth={active ? 2.2 : 1.8} />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <SignedIn>
            <Link href="/" className="btn-ghost hidden sm:inline-flex text-[13px]">
              <Plus size={15} strokeWidth={2.2} />
              Create
            </Link>
            <UserButton afterSignOutUrl="/" appearance={{ elements: { avatarBox: "h-8 w-8" } }} />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="btn-ghost text-[13px]">Log in</button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="btn-primary text-[13px]">Sign up</button>
            </SignUpButton>
          </SignedOut>
        </div>
      </div>

      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-[var(--nexa-border)] bg-[var(--nexa-bg)]/90 backdrop-blur-xl">
        <div className="flex items-center justify-around h-14 px-2">
          {NAV.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg transition-colors",
                  active ? "text-[var(--nexa-gold)]" : "text-[var(--nexa-text-muted)]"
                )}
              >
                <Icon size={20} strokeWidth={active ? 2.2 : 1.7} />
                <span className="text-[10px] font-medium">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

import { GlassCard } from "@/components/ui/GlassCard";

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-[600px] px-3 sm:px-4 py-8">
      <GlassCard className="text-center mb-6" interactive={false}>
        <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-[var(--nexa-gold)] to-[#e6b800] flex items-center justify-center text-3xl font-bold text-black shadow-[0_0_28px_rgba(255,214,10,0.3)]">
          U
        </div>
        <h1 className="text-xl font-semibold">Your Name</h1>
        <p className="text-[14px] text-[var(--nexa-text-muted)] mt-0.5">@username</p>
        <p className="mt-3 text-[14px] text-[var(--nexa-text-secondary)] max-w-sm mx-auto leading-relaxed">
          Building the future of social with liquid glass and real control.
        </p>
        <div className="mt-5 flex justify-center gap-8 text-[13px]">
          <div>
            <span className="font-semibold text-[var(--nexa-text)]">128</span>
            <span className="text-[var(--nexa-text-muted)] ml-1">Following</span>
          </div>
          <div>
            <span className="font-semibold text-[var(--nexa-text)]">1.2k</span>
            <span className="text-[var(--nexa-text-muted)] ml-1">Followers</span>
          </div>
          <div>
            <span className="font-semibold text-[var(--nexa-text)]">42</span>
            <span className="text-[var(--nexa-text-muted)] ml-1">Posts</span>
          </div>
        </div>
        <button className="btn-primary mt-6 text-[13px]">Edit Profile</button>
      </GlassCard>
      <div className="gold-line mb-6" />
      <h2 className="text-[13px] font-medium text-[var(--nexa-text-secondary)] mb-3">My Journey</h2>
      <GlassCard interactive={false}>
        <p className="text-[13px] text-[var(--nexa-text-muted)] leading-relaxed">
          Activity history, milestones, and your personal journey timeline will appear here once connected to live data.
        </p>
      </GlassCard>
    </div>
  );
}

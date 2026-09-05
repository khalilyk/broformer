import type { LucideIcon } from "lucide-react";

export default function StatCard({
  label,
  value,
  icon: Icon,
  hint,
}: {
  label: string;
  value: string | number;
  icon: LucideIcon;
  hint?: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink/5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
          {label}
        </span>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-cream text-red">
          <Icon size={16} strokeWidth={1.75} />
        </span>
      </div>
      <p className="mt-3 font-display text-3xl text-ink">{value}</p>
      {hint && <p className="mt-1 text-xs text-ink/40">{hint}</p>}
    </div>
  );
}

import { Dumbbell, type LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";

/**
 * Stylised placeholder for brand photography. Swap for real images
 * (e.g. via next/image pointed at /public/images/*) when available,
 * the aspect ratio + rounded treatment is what the layout depends on.
 */
export default function PhotoBlock({
  label,
  className = "",
  glow = "bottom",
  style,
  icon: Icon = Dumbbell,
}: {
  label: string;
  className?: string;
  glow?: "bottom" | "top" | "center";
  style?: CSSProperties;
  icon?: LucideIcon;
}) {
  const glowPos =
    glow === "top"
      ? "at 30% 0%"
      : glow === "center"
      ? "at 50% 50%"
      : "at 80% 100%";

  return (
    <div
      role="img"
      aria-label={label}
      style={style}
      className={`relative overflow-hidden bg-ink ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle ${glowPos}, rgba(227,30,36,0.35), transparent 60%), linear-gradient(160deg, #1a1a1a 0%, #0a0a0a 60%)`,
        }}
      />
      <div className="absolute inset-0 noise-texture mix-blend-overlay opacity-60" />
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.12]">
        <Icon strokeWidth={0.75} className="h-2/3 w-2/3 text-white" />
      </div>
    </div>
  );
}

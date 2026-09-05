import { Globe } from "lucide-react";

export default function GlobeAnimation({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute ${className}`}
      style={{ perspective: "500px" }}
    >
      <Globe strokeWidth={0.6} className="globe-spin h-full w-full text-red/25" />
    </div>
  );
}
